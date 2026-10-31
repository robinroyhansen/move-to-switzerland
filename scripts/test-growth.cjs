const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const ts = require('typescript');
const { NextRequest } = require('next/server');

function moduleFrom(path, globals = {}, customRequire = require) {
  const source = ts.transpileModule(fs.readFileSync(path, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020, esModuleInterop: true } }).outputText;
  const exports = {};
  vm.runInNewContext(source, { exports, require: customRequire, process: { env: {} }, console, URL, Event, setTimeout, clearTimeout, ...globals }, { filename: path });
  return exports;
}
function storage() {
  const data = new Map();
  return { getItem: key => data.get(key) ?? null, setItem: (key, value) => data.set(key, String(value)), removeItem: key => data.delete(key) };
}
function analyticsHarness() {
  let config;
  let imports = 0;
  let optedOut = false;
  const captured = [];
  const window = Object.assign(new EventTarget(), { location: { hostname: 'move-to-switzerland.com', origin: 'https://move-to-switzerland.com', pathname: '/en/contact', search: '?email=secret@example.com' }, localStorage: storage(), sessionStorage: storage() });
  const document = { referrer: 'https://www.google.com/search?q=private+information', documentElement: { lang: 'en' } };
  const sdk = {
    init: (_key, value) => { config = value; },
    capture: (event, properties) => { const result = config.before_send({ event, properties: { ...properties, distinct_id: 'anonymous', $current_url: 'https://move-to-switzerland.com/en/contact?email=secret@example.com', $referrer: document.referrer, email: 'secret@example.com', $set: { name: 'Secret' } } }); if (result && !optedOut) captured.push(result); },
    opt_out_capturing: () => { optedOut = true; },
    opt_in_capturing: () => { optedOut = false; },
    has_opted_out_capturing: () => optedOut,
  };
  const api = moduleFrom('src/lib/analytics.ts', { window, document, process: { env: { NEXT_PUBLIC_POSTHOG_KEY: 'test-key', NEXT_PUBLIC_POSTHOG_HOST: 'https://eu.i.posthog.com' } } }, name => { assert.equal(name, 'posthog-js'); imports++; return sdk; });
  return { api, window, captured, config: () => config, imports: () => imports };
}
const tick = () => new Promise(resolve => setImmediate(resolve));

test('analytics loads only after explicit consent; no personal data or query strings; consent can be revoked', async () => {
  const h = analyticsHarness();
  await h.api.syncAnalytics('/en/contact');
  h.api.trackConversion('contact_form_submit_success', { email: 'secret@example.com' });
  await tick();
  assert.equal(h.imports(), 0);
  h.api.setConsent('essential');
  await h.api.syncAnalytics('/en/contact');
  assert.equal(h.imports(), 0);
  h.api.setConsent('all');
  await h.api.syncAnalytics('/en/contact');
  await h.api.syncAnalytics('/en/contact');
  assert.equal(h.imports(), 1);
  assert.equal(h.captured.length, 1, 'duplicate pageview suppressed');
  assert.equal(h.config().autocapture, false);
  assert.equal(h.config().disable_session_recording, true);
  assert.equal(h.config().advanced_disable_flags, true);
  assert.equal(h.config().person_profiles, 'never');
  assert.equal(h.captured[0].properties.site, 'move-to-switzerland');
  assert.equal(h.captured[0].properties.referring_domain, 'www.google.com');
  assert.equal(h.captured[0].properties.$current_url, 'https://move-to-switzerland.com/en/contact');
  assert.doesNotMatch(JSON.stringify(h.captured), /secret|private|\$set|\$referrer/);
  h.api.trackConversion('contact_form_submit_success', { name: 'Secret', message: 'Private', status: 200 });
  h.api.trackConversion('quiz_answer', { value: 'Private' });
  await tick();
  assert.equal(h.captured.length, 2);
  assert.equal(h.captured[1].properties.status, 200);
  assert.doesNotMatch(JSON.stringify(h.captured), /Secret|Private|secret|private/);
  h.api.setConsent('essential');
  h.api.trackConversion('contact_form_submit_success');
  await h.api.syncAnalytics('/en/contact');
  assert.equal(h.captured.length, 2);
  assert.equal(h.window.sessionStorage.getItem('mts-attribution'), null);
  assert.equal(h.config().before_send({event:'$pageview',properties:{}}), null);
  h.api.setConsent('all');
  await h.api.syncAnalytics('/en/contact');
  assert.equal(h.captured.length, 3, 'analytics works when consent is restored');
});

test('revocation during SDK loading, storage failures and previews remain opted out', async () => {
  const h = analyticsHarness();
  h.api.setConsent('all');
  const pending = h.api.syncAnalytics('/en/contact');
  h.api.setConsent('essential');
  await pending;
  assert.equal(h.captured.length, 0);
  h.api.setConsent('all');
  await h.api.syncAnalytics('/en/contact');
  const count = h.captured.length;
  h.window.localStorage.setItem = () => { throw new Error('blocked'); };
  h.api.setConsent('essential');
  assert.equal(h.api.readConsent(), 'essential');
  h.api.setConsent('all');
  await h.api.syncAnalytics('/en/contact');
  assert.equal(h.captured.length, count);
  const preview = analyticsHarness();
  preview.window.location.hostname = 'preview.vercel.app';
  preview.api.setConsent('all');
  await preview.api.syncAnalytics('/en/contact');
  assert.equal(preview.imports(), 0);
});

test('route changes preserve safe attribution and discard stale page effects', async () => {
  const h = analyticsHarness();
  h.api.setConsent('all');
  await h.api.syncAnalytics('/en/contact');
  h.window.location.pathname = '/de/services/residency-immigration';
  await h.api.syncAnalytics('/en/contact');
  assert.equal(h.captured.length, 1);
  await h.api.syncAnalytics(h.window.location.pathname);
  assert.equal(h.captured.length, 2);
  assert.equal(h.captured[1].properties.landing_path, '/en/contact');
  assert.equal(h.api.safePath('/en/contact?email=private#secret'), '/en/contact');
  assert.equal(h.api.safePath('/en/user@example.com'), '/other');
});

function contactHarness(status = 200) {
  const sent = [];
  const logs = [];
  const env = { RESEND_API_KEY: 'test-not-real', CONTACT_FROM_EMAIL: 'test@example.com', CONTACT_TO_EMAIL: 'test@example.com' };
  const api = moduleFrom('src/app/api/contact/route.ts', { process: { env }, console: { info: (...args) => logs.push(args), error: () => {} }, fetch: async (_url, init) => { sent.push(JSON.parse(init.body)); return new Response('{}', { status }); } });
  let ip = 0;
  return { sent, env, logs, post: (body, sameIp = false, raw = false) => api.POST(new NextRequest('http://localhost/api/contact', { method: 'POST', headers: { 'content-type': 'application/json', 'x-forwarded-for': sameIp ? '192.0.2.240' : `192.0.2.${++ip}` }, body: raw ? body : JSON.stringify(body) })) };
}
const valid = { name: 'Test Enquiry', email: 'test@example.com', primaryGoal: 'family-relocation', privacyConsent: 'yes' };

test('short contact form delivers with just name, email, goal and consent, including instant autofill', async () => {
  const h = contactHarness();
  const response = await h.post({ ...valid, formStartedAt: String(Date.now()) });
  assert.equal(response.status, 200);
  assert.equal((await response.json()).success, true);
  assert.equal(h.sent.length, 1, 'quick legitimate enquiry was not silently dropped');
  assert.match(h.sent[0].text, /Test Enquiry/);
  assert.equal(h.sent[0].reply_to, 'test@example.com');
});

test('missing or invalid required fields and malformed JSON are rejected without delivery', async () => {
  const h = contactHarness();
  for (const change of [{name:''},{email:'invalid'},{primaryGoal:''},{primaryGoal:'made-up'},{privacyConsent:''},{timeline:'invented'},{servicesNeeded:['made-up']},{preferredContact:'phone',phone:''}]) {
    assert.equal((await h.post({...valid,...change})).status, 400, JSON.stringify(change));
  }
  for (const body of ['{', 'null', '[]']) assert.equal((await h.post(body,false,true)).status,400);
  assert.equal(h.sent.length, 0);
});

test('delivery failure is not reported as success; honeypot, rate limits and dry-run still work', async () => {
  const failed = contactHarness(503);
  assert.equal((await failed.post(valid)).status,503);
  const h = contactHarness();
  assert.equal((await h.post({...valid,companyWebsite:'bot'})).status,200);
  assert.equal(h.sent.length,0);
  h.env.CONTACT_FORM_DRY_RUN='true';
  for(let i=0;i<5;i++) assert.equal((await h.post(valid,true)).status,200);
  assert.equal((await h.post(valid,true)).status,429);
  assert.equal(h.sent.length,0);
  assert.equal(h.logs.length,5);
});

test('existing detailed quiz payload remains compatible', async () => {
  const h = contactHarness();
  const response = await h.post({...valid,country:'Denmark',enquiryType:'private-individual',timeline:'3-6-months',servicesNeeded:['residence-permits'],preferredContact:'email',message:'Planning a family move',locale:'da'});
  assert.equal(response.status,200);
  assert.equal(h.sent.length,1);
});

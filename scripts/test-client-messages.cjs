const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const vm = require('node:vm');
const ts = require('typescript');

const root = path.resolve(__dirname, '..');
const code = ts.transpileModule(fs.readFileSync(path.join(root, 'src/lib/client-messages.ts'), 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText;
const exportsObject = {};
vm.runInNewContext(code, { exports: exportsObject });
const { getClientMessages } = exportsObject;

test('all 18 languages retain shared UI and breadcrumb labels without shipping page bodies', () => {
  const files = fs.readdirSync(path.join(root, 'src/messages')).filter(file => file.endsWith('.json'));
  assert.equal(files.length, 18);
  for (const file of files) {
    const full = JSON.parse(fs.readFileSync(path.join(root, 'src/messages', file), 'utf8'));
    full.growth = JSON.parse(fs.readFileSync(path.join(root, 'src/content/growth', file), 'utf8'));
    const snapshot = JSON.stringify(full);
    const selected = getClientMessages(full);
    for (const namespace of ['nav', 'footer', 'swissArrivalNav', 'swissArrivalFooter', 'cookieConsent']) {
      assert.equal(JSON.stringify(selected[namespace]), JSON.stringify(full[namespace]), `${file}: ${namespace}`);
    }
    assert.equal(selected.cta.consultation, full.cta.consultation);
    assert.equal(selected.about.offices.zurich, full.about.offices.zurich);
    assert.equal(selected.growth.cookieSettings, full.growth.cookieSettings);
    assert.equal(selected.growth.checklist, full.growth.checklist);
    for (const [source, target] of [
      [full.services.items, selected.services.items],
      [full.insights.articles, selected.insights.articles],
      [full.conversionCopy.relocationPaths, selected.conversionCopy.relocationPaths],
    ]) {
      for (const [key, value] of Object.entries(source)) {
        assert.equal(target[key].title, value.title, `${file}: ${key}`);
        assert.equal(JSON.stringify(Object.keys(target[key])), '["title"]');
      }
    }
    assert.equal(selected.cantonsPage, undefined, 'interactive canton copy belongs only on that route');
    assert.equal(selected.swissArrivalPage, undefined);
    assert.ok(Buffer.byteLength(JSON.stringify(selected)) < Buffer.byteLength(snapshot) * 0.15, `${file}: message budget`);
    assert.equal(JSON.stringify(full), snapshot, 'must not remove server translations');
  }
});

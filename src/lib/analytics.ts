import type { PostHog } from 'posthog-js';

type EventParams = Record<string, string | number | boolean | null | undefined>;
export const CONSENT_KEY = 'mts-analytics-consent-v2';
export const CONSENT_EVENT = 'mts:consent-change';
export const SETTINGS_EVENT = 'mts:open-cookie-settings';
const site = 'move-to-switzerland';
const hosts = new Set(['move-to-switzerland.com', 'www.move-to-switzerland.com']);
const events = new Set([
  '$pageview', 'contact_form_start', 'contact_form_submit_attempt', 'contact_form_submit_success',
  'contact_form_validation_error', 'contact_form_submit_error', 'checklist_print', 'checklist_download',
  'checklist_started', 'cta_consultation_click', 'cta_guide_click', 'sticky_cta_click',
  'hero_consultation_click', 'hero_guide_click', 'header_cta_click', 'mobile_header_cta_click',
  'paths_hub_click', 'paths_consultation_click', 'relocation_path_click', 'quiz_full_intake_click',
  'quiz_swiss_arrival_click', 'quiz_result_submit', 'quiz_result_success', 'quiz_result_error',
]);
let client: PostHog | undefined;
let loading: Promise<PostHog | undefined> | undefined;
let lastPage = '';
let consentOverride: 'all' | 'essential' | undefined;

export function readConsent(): 'all' | 'essential' | null {
  if (typeof window === 'undefined') return null;
  if (consentOverride) return consentOverride;
  try {
    const value = window.localStorage.getItem(CONSENT_KEY);
    return value === 'all' || value === 'essential' ? value : null;
  } catch { return null; }
}

export function setConsent(value: 'all' | 'essential') {
  try {
    window.localStorage.setItem(CONSENT_KEY, value);
    consentOverride = value;
  } catch { consentOverride = 'essential'; }
  if (consentOverride !== 'all') {
    client?.opt_out_capturing();
    lastPage = '';
    try { window.sessionStorage.removeItem('mts-attribution'); } catch { /* Storage may be disabled. */ }
  }
  window.dispatchEvent(new Event(CONSENT_EVENT));
}

export function safePath(value: string): string {
  const path = value.split(/[?#]/)[0];
  return /^\/(?:[a-z]{2}(?:\/[a-z-]+){0,2})?\/?$/.test(path) ? path : '/other';
}

export function getAttribution(): Record<string, string> {
  if (readConsent() !== 'all') return {};
  try {
    const saved = JSON.parse(window.sessionStorage.getItem('mts-attribution') || 'null');
    if (saved && typeof saved.landing_path === 'string' && typeof saved.referring_domain === 'string') {
      return { landing_path: safePath(saved.landing_path), referring_domain: /^[a-z0-9.-]{1,253}$/i.test(saved.referring_domain) ? saved.referring_domain : 'direct' };
    }
    let referrer = 'direct';
    try { if (document.referrer) referrer = new URL(document.referrer).hostname; } catch { /* No valid referral. */ }
    const result = { landing_path: safePath(window.location.pathname), referring_domain: referrer };
    window.sessionStorage.setItem('mts-attribution', JSON.stringify(result));
    return result;
  } catch { return {}; }
}

// Allow only deliberately chosen metadata. Form/quiz answers and arbitrary URL parameters never pass through.
export function safeProperties(params: EventParams): EventParams {
  const result: EventParams = {};
  if (typeof params.field === 'string' && ['name', 'email', 'primaryGoal', 'privacyConsent'].includes(params.field)) result.field = params.field;
  if (typeof params.status === 'number') result.status = params.status;
  return result;
}

async function initialize(): Promise<PostHog | undefined> {
  if (typeof window === 'undefined' || readConsent() !== 'all' || !hosts.has(window.location.hostname)) return;
  if (client) {
    if (client.has_opted_out_capturing()) client.opt_in_capturing();
    return client;
  }
  if (!process.env.NEXT_PUBLIC_POSTHOG_KEY || !process.env.NEXT_PUBLIC_POSTHOG_HOST) return;
  if (!loading) loading = import('posthog-js').then(({ default: posthog }) => {
    if (readConsent() !== 'all') return;
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
      ui_host: 'https://eu.posthog.com',
      autocapture: false,
      capture_pageview: false,
      capture_pageleave: false,
      disable_session_recording: true,
      disable_surveys: true,
      disable_external_dependency_loading: true,
      advanced_disable_flags: true,
      capture_exceptions: false,
      capture_heatmaps: false,
      capture_dead_clicks: false,
      capture_performance: false,
      person_profiles: 'never',
      persistence: 'localStorage',
      ip: false,
      before_send: (event) => {
        if (!event || readConsent() !== 'all' || !events.has(event.event)) return null;
        const allowed = new Set(['distinct_id', '$device_id', '$session_id', '$window_id', '$is_identified', '$process_person_profile', '$lib', '$lib_version', '$browser', '$browser_version', '$os', '$os_version', '$device_type', '$screen_height', '$screen_width', '$viewport_height', '$viewport_width', '$insert_id', '$time', '$sent_at', '$current_url', '$pathname', '$host', 'site', 'locale', 'landing_path', 'referring_domain', 'field', 'status']);
        event.properties = Object.fromEntries(Object.entries(event.properties || {}).filter(([key]) => allowed.has(key)));
        event.properties.$current_url = `${window.location.origin}${safePath(window.location.pathname)}`;
        event.properties.$pathname = safePath(window.location.pathname);
        event.properties.site = site;
        return event;
      },
    });
    client = posthog;
    return client;
  }).catch(() => undefined).finally(() => { loading = undefined; });
  return loading;
}

export async function syncAnalytics(pathname: string) {
  const analytics = await initialize();
  if (!analytics || readConsent() !== 'all') return;
  const path = safePath(pathname);
  if (path !== safePath(window.location.pathname)) return;
  if (lastPage === path) return;
  lastPage = path;
  analytics.capture('$pageview', { site, locale: document.documentElement.lang, ...getAttribution() });
}

export function trackConversion(eventName: string, params: EventParams = {}) {
  if (typeof window === 'undefined' || readConsent() !== 'all' || !events.has(eventName)) return;
  void initialize().then(analytics => {
    if (readConsent() !== 'all') return;
    analytics?.capture(eventName, { ...safeProperties(params), ...getAttribution(), site, locale: document.documentElement.lang });
  });
}

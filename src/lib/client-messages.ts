import type { AbstractIntlMessages } from 'next-intl';

// Only shared interactive UI needs these translations in the browser. Page
// bodies use server translations; the canton filter has its own provider.
export function getClientMessages(messages: AbstractIntlMessages): AbstractIntlMessages {
  const selected: AbstractIntlMessages = {};
  const paths = [
    'nav', 'footer', 'swissArrivalNav', 'swissArrivalFooter', 'cookieConsent',
    'cta.consultation', 'about.offices', 'growth.checklist', 'growth.cookieSettings',
  ];

  function read(path: string): string | AbstractIntlMessages | undefined {
    let value: string | AbstractIntlMessages | undefined = messages;
    for (const key of path.split('.')) {
      if (!value || typeof value === 'string') return undefined;
      value = value[key];
    }
    return value;
  }

  // Breadcrumbs only need titles, never the full article or relocation copy.
  for (const root of ['services.items', 'insights.articles', 'conversionCopy.relocationPaths']) {
    const entries = read(root);
    if (entries && typeof entries !== 'string') {
      for (const key of Object.keys(entries)) paths.push(`${root}.${key}.title`);
    }
  }

  for (const path of paths) {
    const value = read(path);
    if (value === undefined) continue;
    const keys = path.split('.');
    let target = selected;
    for (const key of keys.slice(0, -1)) {
      if (!target[key] || typeof target[key] === 'string') target[key] = {};
      target = target[key] as AbstractIntlMessages;
    }
    target[keys[keys.length - 1]] = value;
  }
  return selected;
}

export const locales = ['en', 'de', 'fr', 'es', 'nl', 'ar', 'fa', 'tr', 'ru', 'hi', 'da', 'it', 'zh', 'pt', 'he', 'ko', 'no', 'ro'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const swissArrivalLocales = ['en', 'da', 'de', 'fr', 'es', 'nl'] as const satisfies readonly Locale[];

export const rtlLocales: Locale[] = ['ar', 'fa', 'he'];

export const localeNames: Record<Locale, string> = {
  en: 'English',
  de: 'Deutsch',
  fr: 'Français',
  es: 'Español',
  nl: 'Nederlands',
  ar: 'العربية',
  fa: 'فارسی',
  tr: 'Türkçe',
  ru: 'Русский',
  hi: 'हिन्दी',
  da: 'Dansk',
  it: 'Italiano',
  zh: '中文',
  pt: 'Português',
  he: 'עברית',
  ko: '한국어',
  no: 'Norsk',
  ro: 'Română',
};

export function isRtl(locale: Locale): boolean {
  return rtlLocales.includes(locale);
}

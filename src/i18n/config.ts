export const locales = ['en', 'de', 'fr', 'ar', 'fa', 'tr', 'ru', 'hi', 'da', 'it'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const rtlLocales: Locale[] = ['ar', 'fa'];

export const localeNames: Record<Locale, string> = {
  en: 'English',
  de: 'Deutsch',
  fr: 'Français',
  ar: 'العربية',
  fa: 'فارسی',
  tr: 'Türkçe',
  ru: 'Русский',
  hi: 'हिन्दी',
  da: 'Dansk',
  it: 'Italiano',
};

export function isRtl(locale: Locale): boolean {
  return rtlLocales.includes(locale);
}

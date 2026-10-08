import type english from '@/content/growth/en.json';
import { locales, type Locale } from '@/i18n/config';

export type GrowthCopy = typeof english;
export async function getGrowthCopy(locale: string): Promise<GrowthCopy> {
  const code = locales.includes(locale as Locale) ? locale : 'en';
  return (await import(`@/content/growth/${code}.json`)).default;
}

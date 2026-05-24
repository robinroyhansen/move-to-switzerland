import type { MetadataRoute } from 'next';
import { headers } from 'next/headers';
import { locales } from '@/i18n/config';
import { serviceSlugs } from '@/lib/services';
import { relocationPathSlugs } from '@/lib/relocation-paths';
import { insightSlugs } from '@/content/insights';

const baseUrl = 'https://move-to-switzerland.com';
const swissArrivalBaseUrl = 'https://swissarrival.com';
const staticPages = ['', '/services', '/why-switzerland', '/cantons', '/case-studies', '/insights', '/about', '/contact', '/privacy', '/imprint'];
const swissArrivalLocales = ['en', 'da', 'de', 'fr'] as const;
const swissArrivalHosts = new Set(['swissarrival.com', 'www.swissarrival.com']);
const servicePages = Object.values(serviceSlugs).map((slug) => `/services/${slug}`);
const relocationPages = relocationPathSlugs.map((slug) => `/relocation/${slug}`);
const insightPages = insightSlugs.map((slug) => `/insights/${slug}`);
const allPages = [...staticPages, ...servicePages, ...relocationPages, ...insightPages];

export const dynamic = 'force-dynamic';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const host = (await headers()).get('host')?.split(':')[0].toLowerCase();

  if (host && swissArrivalHosts.has(host)) {
    const languages = Object.fromEntries(
      swissArrivalLocales.map((locale) => [locale, swissArrivalBaseUrl + '/' + locale])
    );

    return swissArrivalLocales.map((locale) => ({
      url: swissArrivalBaseUrl + '/' + locale,
      lastModified: new Date(),
      alternates: { languages },
    }));
  }

  const entries: MetadataRoute.Sitemap = [];

  for (const page of allPages) {
    const languages: Record<string, string> = {};
    for (const locale of locales) {
      languages[locale] = `${baseUrl}/${locale}${page}`;
    }

    entries.push({
      url: `${baseUrl}/en${page}`,
      lastModified: new Date(),
      alternates: { languages },
    });
  }

  return entries;
}

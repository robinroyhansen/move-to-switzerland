import editorialRevision from '@/content/editorial-revision.json';
import guideIndex from '@/content/guides/index.json';
import { englishResources } from '@/lib/english-resources';
import type { MetadataRoute } from 'next';
import { headers } from 'next/headers';
import { locales, swissArrivalLocales } from '@/i18n/config';
import { serviceSlugs } from '@/lib/services';
import { relocationPathSlugs, getRelocationPath } from '@/lib/conversion-copy';
import { insightSlugs } from '@/content/insights';

const baseUrl = 'https://move-to-switzerland.com';
const swissArrivalBaseUrl = 'https://swissarrival.com';
const staticPages = ['', '/services', '/why-switzerland', '/cantons', '/case-studies', '/insights', '/relocation', '/about', '/contact', '/privacy', '/imprint'];
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
      alternates: { languages },
    }));
  }

  const entries: MetadataRoute.Sitemap = [];

  for (const page of allPages) {
    const pageLocales = page.startsWith('/relocation/')
      ? locales.filter((locale) => getRelocationPath(locale, page.slice('/relocation/'.length)))
      : locales;
    const languages: Record<string, string> = {};
    for (const locale of pageLocales) {
      languages[locale] = `${baseUrl}/${locale}${page}`;
    }
    languages['x-default'] = `${baseUrl}/en${page}`;

    for (const locale of pageLocales) {
      entries.push({
        url: `${baseUrl}/${locale}${page}`,
        alternates: { languages },
        ...(editorialRevision.paths.includes(page) ? { lastModified: (editorialRevision.pathDates as Record<string, string>)[page] ?? editorialRevision.localeDates[locale] } : {}),
      });
    }
  }

  for (const resource of englishResources) {
    const url = `${baseUrl}/en${resource.path}`;
    entries.push({ url, alternates: { languages: { en: url } } });
  }
  for (const guide of guideIndex) {
    const url = `${baseUrl}/en/guides/${guide.slug}`;
    entries.push({ url, alternates: { languages: { en: url } } });
  }
  return entries;
}

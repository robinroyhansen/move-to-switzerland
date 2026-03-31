import type { MetadataRoute } from 'next';
import { locales } from '@/i18n/config';
import { serviceSlugs } from '@/lib/services';
import { insightSlugs } from '@/content/insights';

const baseUrl = 'https://move-to-switzerland.vercel.app';
const staticPages = ['', '/services', '/why-switzerland', '/cantons', '/case-studies', '/insights', '/about', '/contact', '/privacy', '/imprint'];
const servicePages = Object.values(serviceSlugs).map((slug) => `/services/${slug}`);
const insightPages = insightSlugs.map((slug) => `/insights/${slug}`);
const allPages = [...staticPages, ...servicePages, ...insightPages];

export default function sitemap(): MetadataRoute.Sitemap {
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

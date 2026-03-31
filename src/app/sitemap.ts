import type { MetadataRoute } from 'next';
import { locales } from '@/i18n/config';

const baseUrl = 'https://movetoswitzerland.vercel.app';
const pages = ['', '/services', '/about', '/contact', '/privacy', '/imprint'];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const page of pages) {
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

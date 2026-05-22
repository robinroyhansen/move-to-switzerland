import type { MetadataRoute } from 'next';
import { headers } from 'next/headers';

const swissArrivalHosts = new Set(['swissarrival.com', 'www.swissarrival.com']);

export const dynamic = 'force-dynamic';

export default async function robots(): Promise<MetadataRoute.Robots> {
  const host = (await headers()).get('host')?.split(':')[0].toLowerCase();
  const baseUrl = host && swissArrivalHosts.has(host)
    ? 'https://swissarrival.com'
    : 'https://move-to-switzerland.com';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: baseUrl + '/sitemap.xml',
  };
}

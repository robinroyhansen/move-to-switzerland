import type { Metadata } from 'next';

export const siteUrl = 'https://move-to-switzerland.com';

/** Keep each translated page canonical to itself, including on alternate hosts. */
export function withPageSeo(metadata: Metadata, locale: string, path = ''): Metadata {
  const url = `${siteUrl}/${locale}${path}`;
  const rawTitle = typeof metadata.title === 'string' ? metadata.title : undefined;
  const title = rawTitle && !rawTitle.includes('Move to Switzerland')
    ? `${rawTitle} | Move to Switzerland`
    : metadata.title;

  return {
    ...metadata,
    title,
    alternates: { ...metadata.alternates, canonical: url },
    openGraph: {
      type: 'website',
      locale,
      ...(metadata.description ? { description: metadata.description } : {}),
      ...metadata.openGraph,
      url,
      ...(typeof title === 'string' ? { title } : {}),
    },
  };
}

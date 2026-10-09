import type { Metadata } from 'next';

export const siteUrl = 'https://move-to-switzerland.com';

const maxTitleLength = 60;

/** Shared social preview for pages without their own image. */
export const defaultOgImage = { url: '/images/hero-swiss-alps.jpg', width: 1568, height: 672 };

/** Shorten long copy to a search-result length without cutting a word. */
export function clipDescription(text: string, max = 160): string {
  if (text.length <= max) return text;
  const cut = text.slice(0, max - 1);
  return `${cut.slice(0, Math.max(cut.lastIndexOf(' '), max / 2)).replace(/[\s,;:–-]+$/, '')}…`;
}

/** Keep each translated page canonical to itself, including on alternate hosts. */
export function withPageSeo(metadata: Metadata, locale: string, path = ''): Metadata {
  const url = `${siteUrl}/${locale}${path}`;
  const rawTitle = typeof metadata.title === 'string' ? metadata.title : undefined;
  // Add the brand only where the full title still fits a search result line.
  const branded = `${rawTitle} | Move to Switzerland`;
  const title = rawTitle && !rawTitle.includes('Move to Switzerland') && branded.length <= maxTitleLength
    ? branded
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
      images: metadata.openGraph?.images ?? [defaultOgImage],
      url,
      ...(typeof title === 'string' ? { title } : {}),
    },
  };
}

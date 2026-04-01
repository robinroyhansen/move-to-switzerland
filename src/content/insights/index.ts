export interface InsightMeta {
  slug: string;
  date: string;
  readTime: number;
  image: string;
  relatedServices: string[];
  category: string;
}

export const insightSlugs = [
  'swiss-lump-sum-taxation-guide',
  'lex-koller-swiss-real-estate',
  'best-international-schools-zurich-zug-schwyz',
  'relocating-to-switzerland-timeline',
  'opening-swiss-private-bank-account',
  'swiss-residency-permits-guide',
  'why-wealthy-families-leaving-uae-for-switzerland',
  'setting-up-family-office-switzerland',
] as const;

export type InsightSlug = (typeof insightSlugs)[number];

export const insights: Record<InsightSlug, InsightMeta> = {
  'swiss-lump-sum-taxation-guide': {
    slug: 'swiss-lump-sum-taxation-guide',
    date: '2026-04-01',
    readTime: 12,
    image: '/images/insights/lump-sum-taxation.jpg',
    relatedServices: ['lump-sum-taxation', 'pre-immigration-asset-structuring'],
    category: 'taxation',
  },
  'lex-koller-swiss-real-estate': {
    slug: 'lex-koller-swiss-real-estate',
    date: '2026-04-01',
    readTime: 10,
    image: '/images/insights/lex-koller-real-estate.jpg',
    relatedServices: ['real-estate-advisory', 'residency-immigration'],
    category: 'real-estate',
  },
  'best-international-schools-zurich-zug-schwyz': {
    slug: 'best-international-schools-zurich-zug-schwyz',
    date: '2026-04-01',
    readTime: 11,
    image: '/images/insights/international-schools.jpg',
    relatedServices: ['lifestyle-coordination'],
    category: 'lifestyle',
  },
  'relocating-to-switzerland-timeline': {
    slug: 'relocating-to-switzerland-timeline',
    date: '2026-04-01',
    readTime: 9,
    image: '/images/insights/relocation-timeline.jpg',
    relatedServices: ['residency-immigration', 'lifestyle-coordination'],
    category: 'relocation',
  },
  'opening-swiss-private-bank-account': {
    slug: 'opening-swiss-private-bank-account',
    date: '2026-04-01',
    readTime: 10,
    image: '/images/insights/private-banking.jpg',
    relatedServices: ['family-office'],
    category: 'banking',
  },
  'swiss-residency-permits-guide': {
    slug: 'swiss-residency-permits-guide',
    date: '2026-04-01',
    readTime: 11,
    image: '/images/insights/residency-permits.jpg',
    relatedServices: ['residency-immigration'],
    category: 'immigration',
  },
  'why-wealthy-families-leaving-uae-for-switzerland': {
    slug: 'why-wealthy-families-leaving-uae-for-switzerland',
    date: '2026-04-01',
    readTime: 9,
    image: '/images/insights/leaving-uae.jpg',
    relatedServices: ['residency-immigration', 'pre-immigration-asset-structuring'],
    category: 'relocation',
  },
  'setting-up-family-office-switzerland': {
    slug: 'setting-up-family-office-switzerland',
    date: '2026-04-01',
    readTime: 12,
    image: '/images/insights/family-office.jpg',
    relatedServices: ['family-office', 'company-formation', 'directorship-board-services'],
    category: 'wealth-management',
  },
};

export function getInsightMeta(slug: string): InsightMeta | undefined {
  return insights[slug as InsightSlug];
}

export function getAllInsightsMeta(): InsightMeta[] {
  return insightSlugs.map((slug) => insights[slug]);
}

export const serviceKeys = [
  'assetStructuring',
  'lumpSum',
  'residency',
  'companyFormation',
  'familyOffice',
  'directorship',
  'realEstate',
  'health',
  'lifestyle',
] as const;

export type ServiceKey = (typeof serviceKeys)[number];

export const serviceSlugs: Record<ServiceKey, string> = {
  assetStructuring: 'pre-immigration-asset-structuring',
  lumpSum: 'lump-sum-taxation',
  residency: 'residency-immigration',
  companyFormation: 'company-formation',
  familyOffice: 'family-office',
  directorship: 'directorship-board-services',
  realEstate: 'real-estate-advisory',
  health: 'health-wellness-concierge',
  lifestyle: 'lifestyle-coordination',
};

export const serviceSlugToKey: Record<string, ServiceKey> = Object.fromEntries(
  Object.entries(serviceSlugs).map(([key, slug]) => [slug, key as ServiceKey])
) as Record<string, ServiceKey>;

export function getServiceSlug(key: ServiceKey): string {
  return serviceSlugs[key];
}

export function getServiceKeyFromSlug(slug: string): ServiceKey | undefined {
  return serviceSlugToKey[slug];
}

export const profileKeys = ['entrepreneur', 'family', 'youngWealth', 'familyOffice'] as const;
export type ProfileKey = (typeof profileKeys)[number];

export const statsKeys = [
  'millionaires',
  'inflow',
  'neutrality',
  'banking',
  'wealthTax',
  'safety',
] as const;

/** SVG icon path data for each service (used instead of emojis) */
export const serviceIconPaths: Record<ServiceKey, string> = {
  assetStructuring:
    'M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3',
  lumpSum:
    'M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z',
  residency:
    'M3 21V7l9-4 9 4v14M9 21V11h6v10',
  companyFormation:
    'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
  familyOffice:
    'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
  directorship:
    'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01',
  realEstate:
    'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
  health:
    'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
  lifestyle:
    'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
};

/** Background images for client profiles */
export const profileImages: Record<ProfileKey, string> = {
  entrepreneur: '/images/entrepreneur.jpg',
  family: '/images/family-alps.jpg',
  youngWealth: '/images/digital-entrepreneur.jpg',
  familyOffice: '/images/family-office.jpg',
};

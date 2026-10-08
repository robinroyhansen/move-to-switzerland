export const englishResources = [
  { path: '/relocation-checklist', title: 'Swiss relocation checklist', description: 'Track 18 practical tasks, or download the free PDF.' },
  { path: '/renting-in-switzerland', title: 'Renting your first home in Switzerland', description: 'Prepare an application, check the lease and plan the handover.' },
  { path: '/relocation-budget', title: 'Swiss relocation budget planner', description: 'Compare monthly costs and moving cash needs using your own figures.' },
  { path: '/guides', title: 'Canton and family relocation guides', description: 'Explore local comparisons, school choices, arrival tasks and service costs.' },
] as const;

export function isEnglishResource(pathname: string): boolean {
  if (pathname === '/guides' || pathname.startsWith('/guides/')) return true;
  return englishResources.some(resource => resource.path === pathname.replace(/\/$/, ''));
}

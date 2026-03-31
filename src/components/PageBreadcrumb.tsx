'use client';

import { usePathname } from '@/i18n/routing';
import { useLocale } from 'next-intl';
import { BreadcrumbSchema } from './StructuredData';

const siteUrl = 'https://move-to-switzerland.vercel.app';

const pageNames: Record<string, string> = {
  '': 'Home',
  '/services': 'Services',
  '/why-switzerland': 'Why Switzerland',
  '/cantons': 'Cantons',
  '/case-studies': 'Case Studies',
  '/insights': 'Insights',
  '/about': 'About',
  '/contact': 'Contact',
  '/privacy': 'Privacy Policy',
  '/imprint': 'Imprint',
};

export function PageBreadcrumb() {
  const pathname = usePathname();
  const locale = useLocale();

  // Don't show breadcrumbs on the homepage
  if (pathname === '/') return null;

  const segments = pathname.split('/').filter(Boolean);
  const items: Array<{ name: string; url?: string }> = [
    { name: 'Home', url: `${siteUrl}/${locale}` },
  ];

  let currentPath = '';
  for (let i = 0; i < segments.length; i++) {
    currentPath += `/${segments[i]}`;
    const isLast = i === segments.length - 1;
    const name = pageNames[currentPath] || segments[i].split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    
    items.push({
      name,
      ...(isLast ? {} : { url: `${siteUrl}/${locale}${currentPath}` }),
    });
  }

  return <BreadcrumbSchema items={items} />;
}

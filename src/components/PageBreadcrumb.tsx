'use client';

import { usePathname } from '@/i18n/routing';
import { useLocale, useTranslations } from 'next-intl';
import { BreadcrumbSchema } from './StructuredData';
import { serviceSlugToKey } from '@/lib/services';
import { getRelocationPath } from '@/lib/conversion-copy';
import { insightSlugs, type InsightSlug } from '@/content/insights';

const siteUrl = 'https://move-to-switzerland.com';

export function PageBreadcrumb() {
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations();

  // Don't show breadcrumbs on the homepage
  if (pathname === '/') return null;

  const pageNames: Record<string, string> = {
    '': t('nav.home'),
    '/services': t('nav.services'),
    '/why-switzerland': t('nav.whySwitzerland'),
    '/cantons': t('nav.cantons'),
    '/case-studies': t('nav.caseStudies'),
    '/insights': t('nav.insights'),
    '/swiss-arrival': 'Swiss Arrival',
    '/about': t('nav.about'),
    '/contact': t('nav.contact'),
    '/privacy': t('nav.privacy'),
    '/imprint': t('nav.imprint'),
  };

  const segments = pathname.split('/').filter(Boolean);
  const items: Array<{ name: string; url?: string }> = [
    { name: t('nav.home'), url: `${siteUrl}/${locale}` },
  ];

  let currentPath = '';
  for (let i = 0; i < segments.length; i++) {
    currentPath += `/${segments[i]}`;
    const isLast = i === segments.length - 1;
    let name: string | undefined = pageNames[currentPath];

    if (!name && segments[0] === 'services' && segments[1]) {
      const serviceKey = serviceSlugToKey[segments[1]];
      if (serviceKey) {
        name = t(`services.items.${serviceKey}.title`);
      }
    }

    if (!name && segments[0] === 'insights' && insightSlugs.includes(segments[1] as InsightSlug)) {
      name = t(`insights.articles.${segments[1]}.title`);
    }

    if (!name && segments[0] === 'relocation') {
      const relocationPath = getRelocationPath(locale, segments[1]);
      name = relocationPath?.title;
    }

    if (!name) {
      name = segments[i].split('-').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    }
    
    items.push({
      name,
      ...(isLast ? {} : { url: `${siteUrl}/${locale}${currentPath}` }),
    });
  }

  return <BreadcrumbSchema items={items} />;
}

import { englishResources } from '@/lib/english-resources';
import NextLink from 'next/link';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { getAdvisoryCopy } from '@/lib/advisory';
import { serviceSlugs, type ServiceKey } from '@/lib/services';
import type { InsightSlug } from '@/content/insights';
import { getGrowthCopy } from '@/lib/growth-copy';

export async function PlanningLinks({ locale, guides = [], services = [], destinations = false }: {
  locale: string;
  guides?: readonly InsightSlug[];
  services?: readonly ServiceKey[];
  destinations?: boolean;
}) {
  const [t, copy] = await Promise.all([getTranslations({ locale }), getAdvisoryCopy(locale)]);
  const growth = await getGrowthCopy(locale);
  const links = [
    ...guides.map((slug) => ({ href: `/insights/${slug}`, name: t(`insights.articles.${slug}.title`) })),
    ...services.map((key) => ({ href: `/services/${serviceSlugs[key]}`, name: t(`services.items.${key}.title`) })),
    ...(destinations ? [
      { href: '/cantons', name: t('cantonsPage.meta.title') },
      { href: '/relocation', name: t('conversionCopy.home.pathsTitle') },
    ] : []),
  ];

  return (
    <nav aria-label={copy.labels[2]} className="mt-12 border-t border-navy/10 pt-8">
      <h2 className="font-serif text-2xl font-semibold text-navy">{copy.labels[2]}</h2>
      <ul className="mt-5 space-y-3 text-base leading-relaxed">
        <li><NextLink href="/en/relocation-checklist" className="text-navy underline decoration-gold/60 underline-offset-4 hover:decoration-navy">{growth.checklist}</NextLink></li>
        {locale === 'en' && englishResources.filter(resource => resource.path !== '/relocation-checklist').map(resource => <li key={resource.path}><NextLink href={`/en${resource.path}`} className="text-navy underline decoration-gold/60 underline-offset-4 hover:decoration-navy">{resource.title}</NextLink></li>)}
        {links.map(({ href, name }) => (
          <li key={href}>
            <Link href={href} className="text-navy underline decoration-gold/60 underline-offset-4 hover:decoration-navy">{name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

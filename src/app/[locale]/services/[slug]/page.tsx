import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Link } from '@/i18n/routing';
import {
  serviceKeys,
  serviceSlugs,
  serviceSlugToKey,
  serviceIconPaths,
  type ServiceKey,
} from '@/lib/services';
import { locales } from '@/i18n/config';

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

const allSlugs = Object.values(serviceSlugs);

export async function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of locales) {
    for (const slug of allSlugs) {
      params.push({ locale, slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const key = serviceSlugToKey[slug];
  if (!key) return {};

  const t = await getTranslations({ locale, namespace: 'servicePage' });
  const svc = await getTranslations({ locale, namespace: 'services' });

  const title = t(`${key}.metaTitle`, { fallback: svc(`items.${key}.title`) });
  const description = t(`${key}.metaDescription`, { fallback: svc(`items.${key}.description`) });

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      locale,
    },
  };
}

export default function ServiceDetailPage({
  params: paramsPromise,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  // We need to use the synchronous hook pattern with useTranslations
  // but validate the slug. Since this is a server component using params as a promise,
  // we handle it with a wrapper.
  return <ServiceDetailContent paramsPromise={paramsPromise} />;
}

async function ServiceDetailContent({
  paramsPromise,
}: {
  paramsPromise: Promise<{ locale: string; slug: string }>;
}) {
  const { slug } = await paramsPromise;
  const key = serviceSlugToKey[slug];
  if (!key) notFound();

  return <ServicePageInner serviceKey={key} />;
}

function ServicePageInner({ serviceKey }: { serviceKey: ServiceKey }) {
  const t = useTranslations();
  const currentIndex = serviceKeys.indexOf(serviceKey);

  // Get adjacent services for navigation
  const prevKey = currentIndex > 0 ? serviceKeys[currentIndex - 1] : null;
  const nextKey = currentIndex < serviceKeys.length - 1 ? serviceKeys[currentIndex + 1] : null;

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-navy">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-xs text-gold/60 font-medium tracking-wider uppercase">
              {String(currentIndex + 1).padStart(2, '0')} / {String(serviceKeys.length).padStart(2, '0')}
            </span>
          </div>
          <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-8 h-8 text-gold"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d={serviceIconPaths[serviceKey]} />
            </svg>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-semibold mb-4">
            {t(`services.items.${serviceKey}.title`)}
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            {t(`services.items.${serviceKey}.description`)}
          </p>
        </div>
      </section>

      {/* Service Detail */}
      <section className="py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-white rounded-xl p-8 sm:p-12 shadow-sm border border-navy/5">
            {/* Key areas */}
            <div className="mb-10">
              <h2 className="font-serif text-xl text-navy font-semibold mb-4">
                {t('servicePage.overview')}
              </h2>
              <p className="text-charcoal/70 leading-relaxed text-base">
                {t(`services.items.${serviceKey}.detail`)}
              </p>
            </div>

            {/* Extended content if available */}
            {t.has(`servicePage.${serviceKey}.sections`) && (
              <div className="space-y-8 border-t border-navy/5 pt-8">
                {(t.raw(`servicePage.${serviceKey}.sections`) as Array<{ title: string; content: string }>).map(
                  (section, i) => (
                    <div key={i}>
                      <h3 className="font-serif text-lg text-navy font-semibold mb-3">
                        {section.title}
                      </h3>
                      <p className="text-sm text-charcoal/60 leading-relaxed">{section.content}</p>
                    </div>
                  )
                )}
              </div>
            )}
          </div>

          {/* Service Navigation */}
          <div className="mt-8 flex items-center justify-between">
            {prevKey ? (
              <Link
                href={`/services/${serviceSlugs[prevKey]}`}
                className="flex items-center gap-2 text-sm text-charcoal/60 hover:text-gold transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                {t(`services.items.${prevKey}.title`)}
              </Link>
            ) : (
              <div />
            )}
            {nextKey ? (
              <Link
                href={`/services/${serviceSlugs[nextKey]}`}
                className="flex items-center gap-2 text-sm text-charcoal/60 hover:text-gold transition-colors"
              >
                {t(`services.items.${nextKey}.title`)}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl text-white font-semibold mb-4">
            {t('hero.headline')}
          </h2>
          <p className="text-white/60 mb-8 text-lg">
            {t('hero.subheadline')}
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gold text-navy px-8 py-4 text-sm font-semibold rounded tracking-[0.15em] uppercase hover:bg-gold-light transition-all duration-300 shadow-lg shadow-gold/20"
          >
            {t('hero.cta')}
          </Link>
        </div>
      </section>
    </>
  );
}

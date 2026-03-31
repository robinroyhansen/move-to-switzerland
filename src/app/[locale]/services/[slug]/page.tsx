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

  const t = await getTranslations({ locale, namespace: 'services' });

  const title = t(`items.${key}.title`);
  const description = t(`items.${key}.description`);

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

  const prevKey = currentIndex > 0 ? serviceKeys[currentIndex - 1] : null;
  const nextKey = currentIndex < serviceKeys.length - 1 ? serviceKeys[currentIndex + 1] : null;

  return (
    <>
      {/* Header */}
      <section className="pt-36 pb-20 bg-navy">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="text-xs text-gold/40 font-medium tracking-[0.2em] uppercase">
              {String(currentIndex + 1).padStart(2, '0')} / {String(serviceKeys.length).padStart(2, '0')}
            </span>
          </div>
          <div className="w-16 h-16 bg-gold/10 rounded-xl flex items-center justify-center mx-auto mb-8">
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
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-semibold mb-5 luxury-heading">
            {t(`services.items.${serviceKey}.title`)}
          </h1>
          <p className="text-text-light/50 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            {t(`services.items.${serviceKey}.description`)}
          </p>
        </div>
      </section>

      {/* Service Detail */}
      <section className="py-24 bg-cream">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-white rounded-lg p-8 sm:p-12 shadow-sm border border-navy/[0.04]">
            <div className="mb-10">
              <div className="gold-line" />
              <h2 className="font-serif text-xl sm:text-2xl text-navy font-semibold mb-5">
                {t('services.overview')}
              </h2>
              <p className="text-charcoal/60 leading-relaxed text-base">
                {t(`services.items.${serviceKey}.detail`)}
              </p>
            </div>
          </div>

          {/* Service Navigation */}
          <div className="mt-10 flex items-center justify-between">
            {prevKey ? (
              <Link
                href={`/services/${serviceSlugs[prevKey]}`}
                className="flex items-center gap-2 text-sm text-charcoal/40 hover:text-gold transition-colors duration-300 max-w-[45%]"
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                </svg>
                <span className="truncate">{t(`services.items.${prevKey}.title`)}</span>
              </Link>
            ) : (
              <div />
            )}
            {nextKey ? (
              <Link
                href={`/services/${serviceSlugs[nextKey]}`}
                className="flex items-center gap-2 text-sm text-charcoal/40 hover:text-gold transition-colors duration-300 max-w-[45%] text-end"
              >
                <span className="truncate">{t(`services.items.${nextKey}.title`)}</span>
                <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-navy">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="gold-line-center" />
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white font-semibold mb-5 luxury-heading">
            {t('hero.headline')}
          </h2>
          <p className="text-text-light/50 mb-10 text-lg font-light">
            {t('hero.subheadline')}
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gold text-navy px-10 py-4 text-sm font-semibold rounded-sm tracking-[0.15em] uppercase hover:bg-gold-light transition-all duration-300 shadow-lg shadow-gold/15"
          >
            {t('hero.cta')}
          </Link>
        </div>
      </section>
    </>
  );
}

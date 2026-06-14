import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Link } from '@/i18n/routing';
import { ConsultationCta } from '@/components/ConsultationCta';
import { ServiceSchema, getAreaCountries } from '@/components/StructuredData';
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
  const { locale, slug } = await paramsPromise;
  const key = serviceSlugToKey[slug];
  if (!key) notFound();

  return <ServicePageInner serviceKey={key} locale={locale} />;
}

function ServicePageInner({ serviceKey, locale }: { serviceKey: ServiceKey; locale: string }) {
  const t = useTranslations();
  const currentIndex = serviceKeys.indexOf(serviceKey);
  const areaCountries = getAreaCountries(locale);

  const prevKey = currentIndex > 0 ? serviceKeys[currentIndex - 1] : null;
  const nextKey = currentIndex < serviceKeys.length - 1 ? serviceKeys[currentIndex + 1] : null;

  return (
    <>
      <ServiceSchema
        name={t(`services.items.${serviceKey}.title`)}
        description={t(`services.items.${serviceKey}.description`)}
        url={'https://move-to-switzerland.com/' + locale + '/services/' + serviceSlugs[serviceKey]}
        serviceType={t(`services.items.${serviceKey}.title`)}
        areaServed={[{ name: areaCountries.switzerland, type: 'Country' }]}
        audienceType={t('clients.subtitle')}
      />

      {/* Header */}
      <section className="bg-navy pb-16 pt-32 sm:pb-20 sm:pt-36">
        <div className="mx-auto grid max-w-5xl gap-8 px-4 text-start sm:px-6 lg:grid-cols-[0.2fr_0.8fr] lg:items-start lg:px-8">
          <div className="flex items-center gap-3 lg:block">
            <span className="text-xs font-medium leading-snug text-gold/75 sm:tracking-[0.12em] sm:uppercase">
              {String(currentIndex + 1).padStart(2, '0')} / {String(serviceKeys.length).padStart(2, '0')}
            </span>
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gold/10 lg:mt-8 lg:h-16 lg:w-16">
              <svg
                className="h-7 w-7 text-gold lg:h-8 lg:w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d={serviceIconPaths[serviceKey]} />
              </svg>
            </div>
          </div>
          <div>
            <h1 className="mb-5 font-serif text-3xl font-semibold text-white luxury-heading sm:text-4xl md:text-5xl">
              {t(`services.items.${serviceKey}.title`)}
            </h1>
            <p className="max-w-2xl text-lg font-light leading-relaxed text-text-light/70">
              {t(`services.items.${serviceKey}.description`)}
            </p>
          </div>
        </div>
      </section>

      {/* Service Detail */}
      <section className="bg-cream py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg border border-navy/[0.04] bg-white p-6 shadow-sm sm:p-10 lg:p-12">
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
      <ConsultationCta />
    </>
  );
}

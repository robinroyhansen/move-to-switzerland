'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { serviceKeys, serviceIconPaths, serviceSlugs } from '@/lib/services';
import { ScrollReveal } from '@/components/ScrollReveal';

type ServiceKey = (typeof serviceKeys)[number];

const serviceGroups: Array<{ id: 'before' | 'move' | 'settled'; keys: ServiceKey[] }> = [
  { id: 'before', keys: ['assetStructuring', 'lumpSum', 'companyFormation'] },
  { id: 'move', keys: ['residency', 'realEstate', 'health', 'lifestyle'] },
  { id: 'settled', keys: ['familyOffice', 'directorship'] },
];

export function ServicesContent() {
  const t = useTranslations();

  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden bg-navy pb-16 pt-32 sm:pb-20 sm:pt-36">
        <div className="absolute inset-0 opacity-8">
          <Image
            src="/images/services-corporate.jpg"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 to-navy" />
        <div className="relative mx-auto grid max-w-6xl gap-8 px-4 text-start sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:px-8">
          <div>
            <div className="gold-line" />
            <h1 className="mb-5 font-serif text-4xl font-semibold text-white luxury-heading sm:text-5xl lg:text-6xl">
              {t('services.pageTitle')}
            </h1>
            <p className="max-w-xl text-lg font-light leading-relaxed text-text-light/70">
              {t('services.pageSubtitle')}
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {serviceGroups.map((group, index) => (
              <div key={group.id} className="rounded-md border border-text-light/10 bg-text-light/[0.04] p-4">
                <span className="font-serif text-2xl text-gold/75">{String(index + 1).padStart(2, '0')}</span>
                <p className="mt-2 text-sm font-medium leading-snug text-text-light/78">{t(`services.groups.${group.id}`)}</p>
                <p className="mt-1 text-xs leading-relaxed text-text-light/60">{group.keys.length} {t('services.groups.workstreams')}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Decision flow */}
      <section className="bg-cream py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {serviceGroups.map((group, groupIndex) => (
              <ScrollReveal key={group.id} delay={groupIndex * 80}>
                <section className="grid gap-5 lg:grid-cols-[240px_1fr] lg:gap-8">
                  <div className="lg:pt-3">
                    <span className="font-serif text-3xl text-gold/75">{String(groupIndex + 1).padStart(2, '0')}</span>
                    <h2 className="mt-3 font-serif text-2xl font-semibold leading-tight text-navy sm:text-3xl">
                      {t(`services.groups.${group.id}`)}
                    </h2>
                  </div>

                  <div className="divide-y divide-navy/8 overflow-hidden rounded-lg border border-navy/[0.06] bg-white shadow-sm">
                    {group.keys.map((key, index) => (
                      <Link
                        key={key}
                        href={`/services/${serviceSlugs[key]}`}
                        className="group grid gap-4 p-5 transition-colors hover:bg-cream/55 sm:p-6 md:grid-cols-[48px_1fr_auto] md:items-center"
                      >
                        <div className="flex h-12 w-12 items-center justify-center rounded-md bg-cream">
                          <svg
                            className="h-6 w-6 text-gold transition-colors duration-300 group-hover:text-gold-dark"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={1.5}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d={serviceIconPaths[key]} />
                          </svg>
                        </div>
                        <div className="min-w-0">
                          <div className="mb-2 flex flex-wrap items-center gap-2">
                            <span className="rounded-full border border-gold/20 px-2.5 py-1 text-[0.7rem] font-medium leading-snug text-gold">
                              {String(index + 1).padStart(2, '0')}
                            </span>
                            <span className="text-xs font-medium leading-snug text-charcoal/55">
                              {t('services.overview')}
                            </span>
                          </div>
                          <h3 className="font-serif text-xl font-semibold leading-snug text-navy transition-colors group-hover:text-gold">
                            {t(`services.items.${key}.title`)}
                          </h3>
                          <p className="mt-2 text-sm font-light leading-relaxed text-charcoal/65">
                            {t(`services.items.${key}.description`)}
                          </p>
                        </div>
                        <span className="inline-flex min-h-11 items-center text-sm font-medium text-gold">
                          {t('services.learnMore')}
                          <svg className="ms-1.5 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </Link>
                    ))}
                  </div>
                </section>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

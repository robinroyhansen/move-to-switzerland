'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useState } from 'react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { ConsultationCta } from '@/components/ConsultationCta';

const cantonKeys = ['zurich', 'zug', 'schwyz'] as const;
type CantonKey = (typeof cantonKeys)[number];

const cantonAccentColors: Record<CantonKey, string> = {
  zurich: 'border-gold',
  zug: 'border-gold',
  schwyz: 'border-gold',
};

function SectionHeader({ title, icon }: { title: string; icon: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <svg className="w-5 h-5 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
      </svg>
      <h3 className="text-xs text-gold uppercase tracking-[0.2em] font-medium">{title}</h3>
      <div className="h-px flex-1 bg-gold/10" />
    </div>
  );
}

export function CantonsContent() {
  const t = useTranslations();
  const [activeFilter, setActiveFilter] = useState<'all' | CantonKey>('all');

  const visibleCantons = activeFilter === 'all' ? cantonKeys : [activeFilter];

  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 bg-navy overflow-hidden">
        <div className="absolute inset-0 opacity-8">
          <Image
            src="/images/hero-swiss-alps.jpg"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 to-navy" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <div className="gold-line-center" />
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-semibold mb-5 luxury-heading">
            {t('cantonsPage.hero.title')}
          </h1>
          <p className="text-text-light/50 text-lg font-light max-w-xl mx-auto">
            {t('cantonsPage.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Filter pills */}
      <section className="bg-cream py-8 border-b border-navy/5 sticky top-[72px] sm:top-[88px] z-20">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-3">
          {(['all', ...cantonKeys] as const).map((key) => (
            <button
              key={key}
              onClick={() => setActiveFilter(key)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium tracking-wider transition-all duration-300 min-h-[44px] ${
                activeFilter === key
                  ? 'bg-gold text-navy shadow-md shadow-gold/20'
                  : 'bg-white text-charcoal/60 border border-navy/8 hover:border-gold/40 hover:text-gold'
              }`}
            >
              {key === 'all' ? t('cantonsPage.filter.all') : t(`cantonsPage.filter.${key}`)}
            </button>
          ))}
        </div>
      </section>

      {/* Canton cards */}
      <section className="py-16 sm:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid gap-8 ${
            visibleCantons.length === 1
              ? 'grid-cols-1 max-w-2xl mx-auto'
              : 'grid-cols-1 lg:grid-cols-3'
          }`}>
            {visibleCantons.map((canton, i) => (
              <ScrollReveal key={canton} delay={i * 100}>
                <div className={`bg-white rounded-lg border-t-[3px] ${cantonAccentColors[canton]} shadow-sm overflow-hidden`}>
                  {/* Canton header */}
                  <div className="p-8 bg-navy text-center">
                    <h2 className="font-serif text-2xl sm:text-3xl text-gold font-semibold mb-1.5 luxury-heading">
                      {t(`cantonsPage.${canton}.name`)}
                    </h2>
                    <p className="text-text-light/40 text-sm font-light">
                      {t(`cantonsPage.${canton}.tagline`)}
                    </p>
                  </div>

                  <div className="p-6 sm:p-8 space-y-8">
                    {/* Tax Rates */}
                    <div>
                      <SectionHeader
                        title={t('cantonsPage.sections.taxRates')}
                        icon="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                      />
                      <div className="space-y-3">
                        <div className="bg-cream/60 rounded-md p-3">
                          <p className="text-xs text-charcoal/40 uppercase tracking-wider mb-1">Corporate</p>
                          <p className="text-sm text-navy font-medium">{t(`cantonsPage.${canton}.tax.corporate`)}</p>
                        </div>
                        <div className="bg-cream/60 rounded-md p-3">
                          <p className="text-xs text-charcoal/40 uppercase tracking-wider mb-1">Personal Income</p>
                          <p className="text-sm text-navy font-medium">{t(`cantonsPage.${canton}.tax.personal`)}</p>
                        </div>
                        <div className="bg-cream/60 rounded-md p-3">
                          <p className="text-xs text-charcoal/40 uppercase tracking-wider mb-1">Lump-Sum</p>
                          <p className="text-sm text-navy font-medium">{t(`cantonsPage.${canton}.tax.lumpSum`)}</p>
                        </div>
                      </div>
                    </div>

                    {/* Lifestyle */}
                    <div>
                      <SectionHeader
                        title={t('cantonsPage.sections.lifestyle')}
                        icon="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                      />
                      <div className="space-y-2.5">
                        {(['character', 'international', 'culture', 'transport'] as const).map((key) => (
                          <p key={key} className="text-sm text-charcoal/60 leading-relaxed flex items-start gap-2">
                            <span className="w-1 h-1 rounded-full bg-gold mt-2 flex-shrink-0" />
                            {t(`cantonsPage.${canton}.lifestyle.${key}`)}
                          </p>
                        ))}
                      </div>
                    </div>

                    {/* Schools */}
                    <div>
                      <SectionHeader
                        title={t('cantonsPage.sections.schools')}
                        icon="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                      />
                      <ul className="space-y-2">
                        {(t.raw(`cantonsPage.${canton}.schools.list`) as string[]).map((school: string) => (
                          <li key={school} className="text-sm text-charcoal/60 flex items-start gap-2">
                            <span className="w-1 h-1 rounded-full bg-gold mt-2 flex-shrink-0" />
                            {school}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Banking */}
                    <div>
                      <SectionHeader
                        title={t('cantonsPage.sections.banking')}
                        icon="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                      <p className="text-sm text-charcoal/60 leading-relaxed">
                        {t(`cantonsPage.${canton}.bankingInfo`)}
                      </p>
                    </div>

                    {/* Real Estate */}
                    <div>
                      <SectionHeader
                        title={t('cantonsPage.sections.realEstate')}
                        icon="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                      <div className="space-y-3">
                        <div className="bg-cream/60 rounded-md p-3">
                          <p className="text-xs text-charcoal/40 uppercase tracking-wider mb-1">Price Range</p>
                          <p className="text-sm text-navy font-medium">{t(`cantonsPage.${canton}.realEstate.range`)}</p>
                        </div>
                        <div className="bg-cream/60 rounded-md p-3">
                          <p className="text-xs text-charcoal/40 uppercase tracking-wider mb-1">Lex Koller</p>
                          <p className="text-sm text-charcoal/60">{t(`cantonsPage.${canton}.realEstate.lexKoller`)}</p>
                        </div>
                      </div>
                    </div>

                    {/* Best For */}
                    <div className="bg-gold/5 rounded-lg p-5 border border-gold/15">
                      <SectionHeader
                        title={t('cantonsPage.sections.bestFor')}
                        icon="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                      <p className="text-sm text-navy font-medium mb-2 leading-relaxed">
                        {t(`cantonsPage.${canton}.bestFor.profile`)}
                      </p>
                      <p className="text-xs text-gold font-medium tracking-wider uppercase">
                        {t(`cantonsPage.${canton}.bestFor.ideal`)}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="gold-divider" />
      <ConsultationCta />
    </>
  );
}

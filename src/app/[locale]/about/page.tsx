'use client';

import { useTranslations } from 'next-intl';
import { ScrollReveal } from '@/components/ScrollReveal';

export default function AboutPage() {
  const t = useTranslations();

  return (
    <>
      {/* Header */}
      <section className="pt-36 pb-20 bg-navy">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="gold-line-center" />
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-semibold mb-5 luxury-heading">
            {t('about.pageTitle')}
          </h1>
          <p className="text-text-light/50 text-lg font-light">
            {t('about.pageSubtitle')}
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 sm:py-28 bg-cream">
        <div className="max-w-3xl mx-auto px-4">
          <ScrollReveal>
            <div className="gold-line" />
            <h2 className="font-serif text-2xl sm:text-3xl text-navy font-semibold mb-10">
              {t('about.story.title')}
            </h2>
          </ScrollReveal>
          <div className="space-y-7 text-charcoal/60 leading-relaxed font-light text-[15px]">
            <ScrollReveal delay={100}>
              <p>{t('about.story.p1')}</p>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p>{t('about.story.p2')}</p>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <p>{t('about.story.p3')}</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Gold divider */}
      <div className="gold-divider" />

      {/* Values */}
      <section className="py-24 sm:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="gold-line-center" />
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-navy font-semibold luxury-heading">
                {t('about.values.title')}
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(['independence', 'confidentiality', 'depth'] as const).map((value, i) => (
              <ScrollReveal key={value} delay={i * 120}>
                <div className="text-center p-8 sm:p-10">
                  <div className="w-16 h-16 rounded-full bg-navy/[0.04] flex items-center justify-center mx-auto mb-7">
                    {value === 'independence' && (
                      <svg className="w-7 h-7 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                      </svg>
                    )}
                    {value === 'confidentiality' && (
                      <svg className="w-7 h-7 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    )}
                    {value === 'depth' && (
                      <svg className="w-7 h-7 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    )}
                  </div>
                  <h3 className="font-serif text-lg text-navy font-semibold mb-3">
                    {t(`about.values.${value}.title`)}
                  </h3>
                  <p className="text-sm text-charcoal/45 leading-relaxed">
                    {t(`about.values.${value}.description`)}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-24 sm:py-28 bg-cream">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="gold-line-center" />
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-navy font-semibold luxury-heading">
                {t('founders.title')}
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {(['adrian', 'robin'] as const).map((founder, i) => (
              <ScrollReveal key={founder} delay={i * 150}>
                <div className="bg-white rounded-lg p-8 sm:p-10 shadow-sm border border-navy/[0.04] card-lift">
                  <div className="w-20 h-20 rounded-full bg-navy/[0.06] flex items-center justify-center mb-7">
                    <span className="text-2xl font-serif text-navy font-bold">
                      {t(`founders.${founder}.name`).charAt(0)}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl text-navy font-semibold mb-1">
                    {t(`founders.${founder}.name`)}
                  </h3>
                  <p className="text-xs text-gold uppercase tracking-[0.2em] mb-5">
                    {t(`founders.${founder}.role`)}
                  </p>
                  <p className="text-sm text-charcoal/50 leading-relaxed">
                    {t(`founders.${founder}.bio`)}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="py-24 sm:py-28 bg-navy">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <ScrollReveal>
            <div className="gold-line-center" />
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white font-semibold mb-16 luxury-heading">
              {t('about.offices.title')}
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {(['zurich', 'zug', 'schwyz'] as const).map((office, i) => (
              <ScrollReveal key={office} delay={i * 120}>
                <div className="border border-gold/15 rounded-lg p-8 sm:p-10 card-lift">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-5">
                    <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-lg text-gold font-semibold">
                    {t(`about.offices.${office}`)}
                  </h3>
                  <p className="text-xs text-text-light/30 mt-1.5 tracking-wider uppercase">Switzerland</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

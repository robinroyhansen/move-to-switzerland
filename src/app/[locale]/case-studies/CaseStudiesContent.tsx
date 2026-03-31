'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { ScrollReveal } from '@/components/ScrollReveal';
import { ConsultationCta } from '@/components/ConsultationCta';

const caseKeys = ['techFounder', 'bankingFamily', 'digitalNomad', 'gulfFamilyOffice'] as const;
type CaseKey = (typeof caseKeys)[number];

const caseIcons: Record<CaseKey, string> = {
  techFounder: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
  bankingFamily: 'M3 21V7l9-4 9 4v14M9 21V11h6v10',
  digitalNomad: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
  gulfFamilyOffice: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
};

export function CaseStudiesContent() {
  const t = useTranslations();

  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 bg-navy overflow-hidden">
        <div className="absolute inset-0 opacity-8">
          <Image
            src="/images/cta-swiss-landscape.jpg"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 to-navy" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <div className="gold-line-center" />
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-semibold mb-5 luxury-heading">
            {t('caseStudiesPage.hero.title')}
          </h1>
          <p className="text-text-light/50 text-lg font-light max-w-xl mx-auto">
            {t('caseStudiesPage.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-navy-dark py-5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2">
            <svg className="w-4 h-4 text-gold/40 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <p className="text-xs text-text-light/25 tracking-wide italic">
              {t('caseStudiesPage.disclaimer')}
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 sm:py-24 bg-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {caseKeys.map((caseKey, idx) => (
            <ScrollReveal key={caseKey}>
              <article className="relative" id={caseKey}>
                {/* Case number badge */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xs text-gold/60 font-medium tracking-[0.2em] uppercase">
                    Case {String(idx + 1).padStart(2, '0')}
                  </span>
                  <div className="h-px flex-1 bg-gold/15" />
                </div>

                {/* Card */}
                <div className="bg-white rounded-lg shadow-sm border border-navy/[0.04] overflow-hidden">
                  {/* Header */}
                  <div className="bg-navy p-8 sm:p-10">
                    <div className="flex items-start gap-5">
                      <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-7 h-7 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d={caseIcons[caseKey]} />
                        </svg>
                      </div>
                      <div>
                        <h2 className="font-serif text-2xl sm:text-3xl text-gold font-semibold mb-1.5 luxury-heading">
                          {t(`caseStudiesPage.cases.${caseKey}.title`)}
                        </h2>
                        <p className="text-text-light/40 text-sm font-light">
                          {t(`caseStudiesPage.cases.${caseKey}.subtitle`)}
                        </p>
                      </div>
                    </div>

                    {/* Quote */}
                    <div className="mt-8 border-s-2 border-gold/40 ps-5">
                      <p className="font-serif text-lg sm:text-xl italic text-gold/80 font-light leading-relaxed">
                        &ldquo;{t(`caseStudiesPage.cases.${caseKey}.quote`)}&rdquo;
                      </p>
                    </div>
                  </div>

                  <div className="p-8 sm:p-10 space-y-10">
                    {/* Profile */}
                    <div>
                      <p className="text-charcoal/60 leading-relaxed">
                        {t(`caseStudiesPage.cases.${caseKey}.profile`)}
                      </p>
                    </div>

                    {/* Timeline */}
                    <div>
                      <h3 className="flex items-center gap-3 mb-6">
                        <span className="text-xs text-gold uppercase tracking-[0.2em] font-medium">Timeline</span>
                        <div className="h-px flex-1 bg-gold/10" />
                      </h3>
                      <div className="relative ps-8">
                        {/* Gold timeline line */}
                        <div className="absolute start-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-gold via-gold/40 to-gold/10" />

                        <div className="space-y-5">
                          {Object.entries(t.raw(`caseStudiesPage.cases.${caseKey}.timeline`) as Record<string, string>).map(([step, description]) => (
                            <div key={step} className="relative">
                              <div className="absolute -start-8 top-1.5 w-[15px] h-[15px] rounded-full border-2 border-gold bg-white" />
                              <div>
                                <p className="text-xs text-gold font-medium uppercase tracking-wider mb-1">
                                  {step.replace(/month(\d+)/, 'Month $1').replace(/week(\d+)/, 'Week $1').replace(/ongoing/, 'Ongoing').replace(/month15/, 'Month 1.5')}
                                </p>
                                <p className="text-sm text-charcoal/60 leading-relaxed">{description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Challenges */}
                    <div>
                      <h3 className="flex items-center gap-3 mb-5">
                        <span className="text-xs text-gold uppercase tracking-[0.2em] font-medium">Key Challenges</span>
                        <div className="h-px flex-1 bg-gold/10" />
                      </h3>
                      <div className="space-y-3">
                        {(t.raw(`caseStudiesPage.cases.${caseKey}.challenges`) as string[]).map((challenge: string) => (
                          <div key={challenge} className="flex items-start gap-3 bg-cream/60 rounded-md p-3.5">
                            <svg className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                            </svg>
                            <p className="text-sm text-charcoal/60 leading-relaxed">{challenge}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Services Used */}
                    <div>
                      <h3 className="flex items-center gap-3 mb-5">
                        <span className="text-xs text-gold uppercase tracking-[0.2em] font-medium">Services Engaged</span>
                        <div className="h-px flex-1 bg-gold/10" />
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {(t.raw(`caseStudiesPage.cases.${caseKey}.services`) as string[]).map((service: string) => (
                          <span
                            key={service}
                            className="text-xs px-4 py-2 rounded-full border border-gold/20 text-gold/80 bg-gold/5"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Outcome */}
                    <div className="bg-navy rounded-lg p-6 sm:p-8">
                      <h3 className="text-xs text-gold uppercase tracking-[0.2em] font-medium mb-4">Outcome</h3>
                      <p className="text-text-light/60 leading-relaxed text-sm">
                        {t(`caseStudiesPage.cases.${caseKey}.outcome`)}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="gold-divider" />
      <ConsultationCta />
    </>
  );
}

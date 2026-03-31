'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { ScrollReveal } from '@/components/ScrollReveal';
import { AnimatedStat } from '@/components/AnimatedStat';
import { ConsultationCta } from '@/components/ConsultationCta';

interface SectionProps {
  sectionKey: string;
  bg: 'navy' | 'cream';
  t: ReturnType<typeof useTranslations>;
}

function EditorialSection({ sectionKey, bg, t }: SectionProps) {
  const isNavy = bg === 'navy';

  return (
    <section className={`py-24 sm:py-32 ${isNavy ? 'bg-navy' : 'bg-cream'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title block */}
        <ScrollReveal>
          <div className="text-center mb-16 sm:mb-20">
            <div className="gold-line-center" />
            <h2 className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4 luxury-heading ${isNavy ? 'text-white' : 'text-navy'}`}>
              {t(`whySwitzerlandPage.${sectionKey}.title`)}
            </h2>
            <p className={`max-w-xl mx-auto text-lg font-light ${isNavy ? 'text-text-light/50' : 'text-charcoal/50'}`}>
              {t(`whySwitzerlandPage.${sectionKey}.subtitle`)}
            </p>
          </div>
        </ScrollReveal>

        {/* Stats row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-16 mb-16 sm:mb-20">
          {[1, 2, 3].map((n) => (
            <ScrollReveal key={n} delay={n * 120}>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-serif text-gold font-bold mb-1 tracking-wide luxury-heading">
                  {t(`whySwitzerlandPage.${sectionKey}.stat${n}`)}
                </div>
                <div className="stat-underline visible" />
                <p className={`text-sm leading-relaxed mt-3 max-w-[220px] mx-auto ${isNavy ? 'text-text-light/40' : 'text-charcoal/50'}`}>
                  {t(`whySwitzerlandPage.${sectionKey}.stat${n}Label`)}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Editorial paragraphs */}
        <ScrollReveal>
          <div className="max-w-3xl mx-auto space-y-6">
            <p className={`text-base sm:text-lg leading-relaxed font-light ${isNavy ? 'text-text-light/60' : 'text-charcoal/60'}`}>
              {t(`whySwitzerlandPage.${sectionKey}.p1`)}
            </p>
            <p className={`text-base sm:text-lg leading-relaxed font-light ${isNavy ? 'text-text-light/60' : 'text-charcoal/60'}`}>
              {t(`whySwitzerlandPage.${sectionKey}.p2`)}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export function WhySwitzerlandContent() {
  const t = useTranslations();

  const sections: { key: string; bg: 'navy' | 'cream' }[] = [
    { key: 'neutrality', bg: 'cream' },
    { key: 'banking', bg: 'navy' },
    { key: 'education', bg: 'cream' },
    { key: 'healthcare', bg: 'navy' },
    { key: 'tax', bg: 'cream' },
    { key: 'qualityOfLife', bg: 'navy' },
    { key: 'business', bg: 'cream' },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-navy overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-swiss-alps.jpg"
            alt="Swiss Alps"
            fill
            className="object-cover opacity-20"
            priority
            quality={85}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/40 to-navy" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center pt-20">
          <ScrollReveal>
            <div className="inline-block mb-8 px-5 py-2 border border-gold/20 rounded-full">
              <span className="text-gold text-xs tracking-[0.35em] uppercase font-medium">
                The Definitive Guide
              </span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-semibold leading-[1.1] mb-8 luxury-heading">
              {t('whySwitzerlandPage.hero.title')}
            </h1>
            <p className="text-lg sm:text-xl text-text-light/60 max-w-2xl mx-auto leading-relaxed font-light">
              {t('whySwitzerlandPage.hero.subtitle')}
            </p>
          </ScrollReveal>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-5 h-5 text-gold/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-navy-dark py-5">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-xs text-text-light/25 tracking-[0.25em] uppercase">
            500+ years of neutrality
            <span className="inline-block mx-4 w-1 h-1 rounded-full bg-gold/30 align-middle" />
            #1 private banking
            <span className="inline-block mx-4 w-1 h-1 rounded-full bg-gold/30 align-middle" />
            78% voted against wealth tax
          </p>
        </div>
      </section>

      {/* Content sections — alternating navy/cream */}
      {sections.map((section) => (
        <div key={section.key}>
          <div className="gold-divider" />
          <EditorialSection sectionKey={section.key} bg={section.bg} t={t} />
        </div>
      ))}

      {/* CTA */}
      <div className="gold-divider" />
      <ConsultationCta />
    </>
  );
}

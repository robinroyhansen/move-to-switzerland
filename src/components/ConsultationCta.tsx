'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { ScrollReveal } from './ScrollReveal';
import Image from 'next/image';

interface ConsultationCtaProps {
  variant?: 'navy' | 'cream';
}

export function ConsultationCta({ variant = 'navy' }: ConsultationCtaProps) {
  const t = useTranslations();

  if (variant === 'cream') {
    return (
      <section className="py-24 sm:py-32 bg-cream">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto px-4 text-center">
            <div className="gold-line-center" />
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-navy font-semibold mb-8 luxury-heading">
              {t('hero.headline')}
            </h2>
            <p className="text-charcoal/50 mb-12 text-lg font-light leading-relaxed">
              {t('hero.subheadline')}
            </p>
            <Link
              href="/contact"
              className="inline-block bg-gold text-navy px-10 py-4 text-sm font-semibold rounded-sm tracking-[0.15em] uppercase hover:bg-gold-dark transition-all duration-300 shadow-lg shadow-gold/15"
            >
              {t('cta.consultation')}
            </Link>
          </div>
        </ScrollReveal>
      </section>
    );
  }

  return (
    <section className="py-24 sm:py-32 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-8">
        <Image
          src="/images/cta-swiss-landscape.jpg"
          alt=""
          fill
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/95 to-navy" />
      <ScrollReveal>
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <div className="gold-line-center" />
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-semibold mb-8 luxury-heading">
            {t('hero.headline')}
          </h2>
          <p className="text-text-light/50 mb-12 text-lg font-light leading-relaxed">
            {t('hero.subheadline')}
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gold text-navy px-10 py-4 text-sm font-semibold rounded-sm tracking-[0.15em] uppercase hover:bg-gold-dark transition-all duration-300 shadow-lg shadow-gold/15"
          >
            {t('cta.consultation')}
          </Link>
        </div>
      </ScrollReveal>
    </section>
  );
}

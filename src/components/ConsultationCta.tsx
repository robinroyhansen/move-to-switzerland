import { getLocale } from 'next-intl/server';
import { ScrollReveal } from './ScrollReveal';
import Image from 'next/image';
import { ConversionLink } from '@/components/ConversionLink';
import { getConversionCopy } from '@/lib/conversion-copy';

interface ConsultationCtaProps {
  variant?: 'navy' | 'cream';
}

export async function ConsultationCta({ variant = 'navy' }: ConsultationCtaProps) {
  const locale = await getLocale();
  const copy = getConversionCopy(locale);

  if (variant === 'cream') {
    return (
      <section className="py-24 sm:py-32 bg-cream">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto px-4 text-center">
            <div className="gold-line-center" />
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-navy font-semibold mb-8 luxury-heading">
              {copy.cta.creamTitle}
            </h2>
            <p className="text-charcoal/50 mb-12 text-lg font-light leading-relaxed">
              {copy.cta.creamText}
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ConversionLink
                href="/contact"
                eventName="cta_consultation_click"
                eventParams={{ variant }}
                className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-navy shadow-lg shadow-gold/15 transition-all duration-300 hover:bg-gold-dark"
              >
                {copy.cta.privateAssessment}
              </ConversionLink>
              <ConversionLink
                href="/swiss-arrival"
                eventName="cta_guide_click"
                eventParams={{ variant }}
                className="inline-flex items-center justify-center rounded-full border border-navy/10 px-8 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-navy/60 transition-all duration-300 hover:border-gold/50 hover:text-gold"
              >
                {copy.cta.guide}
              </ConversionLink>
            </div>
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
            {copy.cta.navyTitle}
          </h2>
          <p className="text-text-light/50 mb-12 text-lg font-light leading-relaxed">
            {copy.cta.navyText}
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ConversionLink
              href="/contact"
              eventName="cta_consultation_click"
              eventParams={{ variant }}
              className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-navy shadow-lg shadow-gold/15 transition-all duration-300 hover:bg-gold-dark"
            >
              {copy.cta.privateAssessment}
            </ConversionLink>
            <ConversionLink
              href="/swiss-arrival"
              eventName="cta_guide_click"
              eventParams={{ variant }}
              className="inline-flex items-center justify-center rounded-full border border-text-light/15 px-8 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-text-light/70 transition-all duration-300 hover:border-gold/60 hover:text-gold"
            >
              {copy.cta.guide}
            </ConversionLink>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

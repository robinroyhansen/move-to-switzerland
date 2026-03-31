'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import {
  serviceKeys,
  statsKeys,
  profileKeys,
  serviceIconPaths,
  profileImages,
  serviceSlugs,
} from '@/lib/services';
import { ScrollReveal } from '@/components/ScrollReveal';
import { AnimatedStat } from '@/components/AnimatedStat';
import { ConsultationCta } from '@/components/ConsultationCta';

export default function HomePage() {
  const t = useTranslations();
  const heroRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);

  // Parallax effect on hero background
  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollY = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrollY * 0.3}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hero text stagger animation
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const children = el.children;
    Array.from(children).forEach((child, i) => {
      (child as HTMLElement).style.opacity = '0';
      (child as HTMLElement).style.transform = 'translateY(20px)';
      setTimeout(() => {
        (child as HTMLElement).style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        (child as HTMLElement).style.opacity = '1';
        (child as HTMLElement).style.transform = 'translateY(0)';
      }, 300 + i * 200);
    });
  }, []);

  return (
    <>
      {/* Hero - Full viewport, parallax */}
      <section className="relative min-h-screen flex items-center justify-center bg-navy overflow-hidden">
        <div ref={parallaxRef} className="absolute inset-0 parallax-bg">
          <Image
            src="/images/hero-swiss-alps.jpg"
            alt="Swiss Alps and lake landscape"
            fill
            className="object-cover opacity-25"
            priority
            quality={85}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-navy/50 via-navy/30 to-navy" />

        <div ref={heroRef} className="relative z-10 max-w-4xl mx-auto px-4 text-center pt-20">
          <div className="inline-block mb-8 px-5 py-2 border border-gold/20 rounded-full">
            <span className="text-gold text-xs tracking-[0.35em] uppercase font-medium">
              Switzerland
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-semibold leading-[1.1] mb-8 luxury-heading">
            {t('hero.headline')}
          </h1>
          <p className="text-lg sm:text-xl text-text-light/60 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            {t('hero.subheadline')}
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gold text-navy px-10 py-4 text-sm font-semibold rounded-sm tracking-[0.15em] uppercase hover:bg-gold-dark transition-all duration-300 shadow-lg shadow-gold/15"
          >
            {t('cta.consultation')}
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-5 h-5 text-gold/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-navy-dark py-5">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-xs text-text-light/25 tracking-[0.25em] uppercase">
            Swiss-registered entity
            <span className="inline-block mx-4 w-1 h-1 rounded-full bg-gold/30 align-middle" />
            Zurich
            <span className="inline-block mx-4 w-1 h-1 rounded-full bg-gold/30 align-middle" />
            Zug
            <span className="inline-block mx-4 w-1 h-1 rounded-full bg-gold/30 align-middle" />
            Schwyz
          </p>
        </div>
      </section>

      {/* Why Switzerland - Stats */}
      <section className="py-24 sm:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-20">
              <div className="gold-line-center" />
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-navy font-semibold mb-5 luxury-heading">
                {t('whySwitzerland.title')}
              </h2>
              <p className="text-charcoal/50 max-w-xl mx-auto text-lg font-light">
                {t('whySwitzerland.subtitle')}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 sm:gap-16">
            {statsKeys.map((key, i) => (
              <ScrollReveal key={key} delay={i * 100}>
                <AnimatedStat
                  value={t(`whySwitzerland.stats.${key}.value`)}
                  label={t(`whySwitzerland.stats.${key}.label`)}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gold divider */}
      <div className="gold-divider" />

      {/* Services */}
      <section className="py-24 sm:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-20">
              <div className="gold-line-center" />
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-navy font-semibold mb-5 luxury-heading">
                {t('services.title')}
              </h2>
              <p className="text-charcoal/50 max-w-xl mx-auto text-lg font-light">
                {t('services.subtitle')}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {serviceKeys.map((key, i) => (
              <ScrollReveal key={key} delay={i * 60}>
                <Link
                  href={`/services/${serviceSlugs[key]}`}
                  className="block group bg-white border-t-[3px] border-t-gold rounded-lg p-6 card-lift h-full"
                >
                  <div className="w-10 h-10 mb-4 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-gold group-hover:text-gold-light transition-colors duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d={serviceIconPaths[key]} />
                    </svg>
                  </div>
                  <h3 className="font-serif text-base font-semibold text-navy group-hover:text-gold transition-colors duration-300 mb-2 leading-snug">
                    {t(`services.items.${key}.title`)}
                  </h3>
                  <p className="text-xs text-charcoal/40 leading-relaxed line-clamp-3">
                    {t(`services.items.${key}.description`)}
                  </p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Client Profiles */}
      <section className="py-24 sm:py-32 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-20">
              <div className="gold-line-center" />
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-semibold mb-5 luxury-heading">
                {t('clients.title')}
              </h2>
              <p className="text-text-light/40 max-w-xl mx-auto text-lg font-light">
                {t('clients.subtitle')}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {profileKeys.map((key, i) => (
              <ScrollReveal key={key} delay={i * 120}>
                <div className="relative border border-gold/15 rounded-lg overflow-hidden bg-white/[0.03] card-lift">
                  <div className="absolute inset-0">
                    <Image
                      src={profileImages[key]}
                      alt={t(`clients.profiles.${key}.title`)}
                      fill
                      className="object-cover opacity-10"
                    />
                  </div>
                  <div className="relative p-8 sm:p-10">
                    <div className="flex items-start justify-between mb-5">
                      <div>
                        <h3 className="font-serif text-xl sm:text-2xl text-gold font-semibold">
                          {t(`clients.profiles.${key}.title`)}
                        </h3>
                        <p className="text-xs text-text-light/30 mt-1.5 tracking-wider uppercase">
                          {t(`clients.profiles.${key}.age`)}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-text-light/50 leading-relaxed mb-5">
                      {t(`clients.profiles.${key}.description`)}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {(t.raw(`clients.profiles.${key}.tags`) as string[]).map((tag: string) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1.5 rounded-full border border-gold/20 text-gold/70"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-24 sm:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-20">
              <div className="gold-line-center" />
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-navy font-semibold mb-5 luxury-heading">
                {t('founders.title')}
              </h2>
              <p className="text-charcoal/50 max-w-xl mx-auto text-lg font-light">
                {t('founders.subtitle')}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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

      {/* CTA */}
      <ConsultationCta />
    </>
  );
}

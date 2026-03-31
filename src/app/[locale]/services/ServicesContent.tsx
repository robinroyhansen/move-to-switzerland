'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { serviceKeys, serviceIconPaths, serviceSlugs } from '@/lib/services';
import { ScrollReveal } from '@/components/ScrollReveal';

export function ServicesContent() {
  const t = useTranslations();

  return (
    <>
      {/* Header */}
      <section className="relative pt-36 pb-20 bg-navy overflow-hidden">
        <div className="absolute inset-0 opacity-8">
          <Image
            src="/images/services-corporate.jpg"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 to-navy" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <div className="gold-line-center" />
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-semibold mb-5 luxury-heading">
            {t('services.pageTitle')}
          </h1>
          <p className="text-text-light/50 text-lg font-light max-w-xl mx-auto">
            {t('services.pageSubtitle')}
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {serviceKeys.map((key, i) => (
              <ScrollReveal key={key} delay={i * 60}>
                <Link
                  href={`/services/${serviceSlugs[key]}`}
                  className="block group"
                >
                  <div className="bg-white rounded-lg border-t-[3px] border-t-gold shadow-sm overflow-hidden card-lift">
                    <div className="p-8 sm:p-10 md:flex md:gap-8 items-start">
                      <div className="flex-shrink-0 mb-4 md:mb-0">
                        <div className="w-14 h-14 bg-cream rounded-lg flex items-center justify-center group-hover:bg-navy/5 transition-colors duration-300">
                          <svg
                            className="w-6 h-6 text-gold"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={1.5}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d={serviceIconPaths[key]} />
                          </svg>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-xs text-gold/60 font-medium tracking-[0.2em] uppercase">
                            {String(i + 1).padStart(2, '0')}
                          </span>
                          <div className="h-px flex-1 bg-gold/10" />
                        </div>
                        <h2 className="font-serif text-xl sm:text-2xl text-navy font-semibold mb-3 group-hover:text-gold transition-colors duration-300">
                          {t(`services.items.${key}.title`)}
                        </h2>
                        <p className="text-charcoal/50 leading-relaxed mb-4 font-light">
                          {t(`services.items.${key}.description`)}
                        </p>
                        <span className="inline-flex items-center gap-1.5 text-sm text-gold font-medium tracking-wider">
                          {t('services.learnMore')}
                          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

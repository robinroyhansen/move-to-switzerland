'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { insightSlugs } from '@/content/insights';
import { ScrollReveal } from '@/components/ScrollReveal';
import { ConsultationCta } from '@/components/ConsultationCta';

const categoryColors: Record<string, string> = {
  taxation: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  'real-estate': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  lifestyle: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  relocation: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  banking: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  immigration: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
  'wealth-management': 'bg-gold/10 text-gold border-gold/20',
};

export function InsightsContent() {
  const t = useTranslations('insights');

  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 bg-navy">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="gold-line-center" />
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-semibold mb-5 luxury-heading">
            {t('hero.title')}
          </h1>
          <p className="text-text-light/50 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            {t('hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {insightSlugs.map((slug, i) => (
              <ScrollReveal key={slug} delay={i * 80}>
                <Link
                  href={`/insights/${slug}` as `/insights/${string}`}
                  className="block group bg-white rounded-lg overflow-hidden border border-navy/[0.06] card-lift h-full"
                >
                  {/* Article Card Header */}
                  <div className="bg-navy/[0.03] px-8 pt-8 pb-6 border-b border-navy/[0.06]">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`text-[10px] px-2.5 py-1 rounded-full border font-medium uppercase tracking-wider ${categoryColors[t(`articles.${slug}.category`)] || 'bg-gold/10 text-gold border-gold/20'}`}>
                        {t(`articles.${slug}.categoryLabel`)}
                      </span>
                      <span className="text-xs text-charcoal/30">
                        {t(`articles.${slug}.readTime`)}
                      </span>
                    </div>
                    <h2 className="font-serif text-xl sm:text-2xl text-navy font-semibold group-hover:text-gold transition-colors duration-300 leading-snug">
                      {t(`articles.${slug}.title`)}
                    </h2>
                  </div>

                  {/* Article Card Body */}
                  <div className="px-8 py-6">
                    <p className="text-sm text-charcoal/50 leading-relaxed mb-4">
                      {t(`articles.${slug}.excerpt`)}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-charcoal/30">
                        {t(`articles.${slug}.date`)}
                      </span>
                      <span className="text-xs text-gold font-medium tracking-wider uppercase group-hover:translate-x-1 transition-transform duration-300 flex items-center gap-1">
                        {t('readMore')}
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
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

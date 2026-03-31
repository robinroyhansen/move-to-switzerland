'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';
import { localeNames, type Locale } from '@/i18n/config';

export function Footer() {
  const t = useTranslations();
  const locale = useLocale() as Locale;
  const pathname = usePathname();

  return (
    <footer className="bg-navy-dark text-text-light/60">
      {/* Gold divider */}
      <div className="gold-divider" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-7 h-7 rounded-full border border-gold/30 flex items-center justify-center">
                <span className="text-gold font-serif text-xs font-bold">M</span>
              </div>
              <h3 className="text-gold font-serif text-xl font-semibold tracking-wide">
                Move to Switzerland
              </h3>
            </div>
            <p className="text-sm leading-relaxed text-text-light/35">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-text-light/80 text-xs uppercase tracking-[0.25em] font-medium mb-6">
              {t('footer.navigation')}
            </h4>
            <ul className="space-y-3.5">
              {[
                { href: '/' as const, label: t('nav.home') },
                { href: '/services' as const, label: t('nav.services') },
                { href: '/why-switzerland' as const, label: t('nav.whySwitzerland') },
                { href: '/cantons' as const, label: t('nav.cantons') },
                { href: '/case-studies' as const, label: t('nav.caseStudies') },
                { href: '/insights' as const, label: t('nav.insights') },
                { href: '/about' as const, label: t('nav.about') },
                { href: '/contact' as const, label: t('nav.contact') },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-text-light/40 hover:text-gold transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-text-light/80 text-xs uppercase tracking-[0.25em] font-medium mb-6">
              {t('footer.legal')}
            </h4>
            <ul className="space-y-3.5">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-text-light/40 hover:text-gold transition-colors duration-300"
                >
                  {t('nav.privacy')}
                </Link>
              </li>
              <li>
                <Link
                  href="/imprint"
                  className="text-sm text-text-light/40 hover:text-gold transition-colors duration-300"
                >
                  {t('nav.imprint')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Languages */}
          <div>
            <h4 className="text-text-light/80 text-xs uppercase tracking-[0.25em] font-medium mb-6">
              {t('footer.languages')}
            </h4>
            <div className="flex flex-wrap gap-2">
              {(Object.entries(localeNames) as [Locale, string][]).map(([code, name]) => (
                <Link
                  key={code}
                  href={pathname}
                  locale={code}
                  className={`text-xs px-3 py-1.5 rounded-full border transition-all duration-300 ${
                    locale === code
                      ? 'border-gold text-gold bg-gold/5'
                      : 'border-text-light/10 text-text-light/30 hover:border-gold/40 hover:text-gold/60'
                  }`}
                >
                  {name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Trust strip */}
        <div className="mt-16 mb-12 text-center">
          <p className="text-xs text-text-light/25 tracking-[0.2em] uppercase">
            Swiss-registered entity
            <span className="inline-block mx-3 w-1 h-1 rounded-full bg-gold/40 align-middle" />
            Zurich
            <span className="inline-block mx-3 w-1 h-1 rounded-full bg-gold/40 align-middle" />
            Zug
            <span className="inline-block mx-3 w-1 h-1 rounded-full bg-gold/40 align-middle" />
            Schwyz
          </p>
        </div>

        {/* Regulatory disclaimer */}
        <div className="border-t border-text-light/5 pt-8 mb-8">
          <p className="text-[11px] leading-relaxed text-text-light/20 max-w-4xl mx-auto text-center">
            {t('footer.disclaimer')}
          </p>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-text-light/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-text-light/20">
            &copy; {new Date().getFullYear()} Move to Switzerland. {t('footer.rights')}
          </p>
          <p className="text-xs text-text-light/20">{t('footer.company')}</p>
        </div>
      </div>
    </footer>
  );
}

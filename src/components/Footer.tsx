'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';
import { locales, localeNames, swissArrivalLocales, type Locale } from '@/i18n/config';

type FooterProps = {
  site?: 'move' | 'swissarrival';
};

export function Footer({ site = 'move' }: FooterProps) {
  const t = useTranslations();
  const swissNavT = useTranslations('swissArrivalNav');
  const swissFooterT = useTranslations('swissArrivalFooter');
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const isSwissArrival = site === 'swissarrival' || pathname === '/swiss-arrival';
  const brandName = isSwissArrival ? 'Swiss Arrival' : 'Move to Switzerland';
  const brandInitial = isSwissArrival ? 'S' : 'M';
  const languageOptions = isSwissArrival ? swissArrivalLocales : locales;
  const languageSet = new Set<Locale>(languageOptions as readonly Locale[]);
  const languageGroups = [
    { key: 'core', codes: ['en', 'de', 'fr'] as Locale[] },
    { key: 'europe', codes: ['da', 'it', 'pt', 'no', 'ro', 'es', 'nl'] as Locale[] },
    { key: 'global', codes: ['ar', 'fa', 'tr', 'ru', 'hi', 'zh', 'he', 'ko'] as Locale[] },
  ]
    .map((group) => ({
      ...group,
      codes: group.codes.filter((code) => languageSet.has(code)),
    }))
    .filter((group) => group.codes.length > 0);
  const navigationItems = isSwissArrival
    ? [
        { href: '/swiss-arrival' as const, label: swissNavT('guide') },
        { href: '/contact' as const, label: swissNavT('contact') },
      ]
    : [
        { href: '/' as const, label: t('nav.home') },
        { href: '/services' as const, label: t('nav.services') },
        { href: '/why-switzerland' as const, label: t('nav.whySwitzerland') },
        { href: '/cantons' as const, label: t('nav.cantons') },
        { href: '/case-studies' as const, label: t('nav.caseStudies') },
        { href: '/insights' as const, label: t('nav.insights') },
        { href: '/about' as const, label: t('nav.about') },
        { href: '/contact' as const, label: t('nav.contact') },
      ];

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
                <span className="text-gold font-serif text-xs font-bold">{brandInitial}</span>
              </div>
              <h3 className="text-gold font-serif text-xl font-semibold tracking-wide">
                {brandName}
              </h3>
            </div>
            <p className="text-sm leading-relaxed text-text-light/72">
              {isSwissArrival ? swissFooterT('tagline') : t('footer.tagline')}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-text-light/80 text-xs uppercase tracking-[0.25em] font-medium mb-6">
              {t('footer.navigation')}
            </h4>
            <ul className="space-y-3.5">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-11 items-center text-sm text-text-light/68 hover:text-gold transition-colors duration-300"
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
                  className="inline-flex min-h-11 items-center text-sm text-text-light/68 hover:text-gold transition-colors duration-300"
                >
                  {t('nav.privacy')}
                </Link>
              </li>
              <li>
                <Link
                  href="/imprint"
                  className="inline-flex min-h-11 items-center text-sm text-text-light/68 hover:text-gold transition-colors duration-300"
                >
                  {t('nav.imprint')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Languages */}
          <div>
            <h4 className="text-text-light/80 text-xs font-medium mb-6">
              {t('footer.languages')}
            </h4>
            <div className="space-y-4">
              {languageGroups.map((group) => (
                <div key={group.key}>
                  <p className="mb-2 text-[0.72rem] font-medium leading-snug text-text-light/45">
                    {t(`footer.languageGroups.${group.key}`)}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.codes.map((code) => (
                      <Link
                        key={code}
                        href={pathname}
                        locale={code}
                        className={`inline-flex min-h-11 max-w-full items-center rounded-full border px-3 py-1.5 text-xs leading-snug transition-all duration-300 ${
                          locale === code
                            ? 'border-gold text-gold bg-gold/5'
                            : 'border-text-light/20 text-text-light/68 hover:border-gold/40 hover:text-gold'
                        }`}
                      >
                        <span className="min-w-0 truncate">{localeNames[code]}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {!isSwissArrival && (
          <>
            {/* Trust strip */}
            <div className="mt-16 mb-12 text-center">
              <p className="text-xs text-text-light/68 tracking-[0.2em] uppercase">
                {t('footer.trustSwissEntity')}
                <span className="inline-block mx-3 w-1 h-1 rounded-full bg-gold/40 align-middle" />
                {t('about.offices.zurich')}
                <span className="inline-block mx-3 w-1 h-1 rounded-full bg-gold/40 align-middle" />
                {t('about.offices.zug')}
                <span className="inline-block mx-3 w-1 h-1 rounded-full bg-gold/40 align-middle" />
                {t('about.offices.schwyz')}
              </p>
            </div>

            {/* Regulatory disclaimer */}
            <div className="border-t border-text-light/5 pt-8 mb-8">
              <p className="text-[11px] leading-relaxed text-text-light/65 max-w-4xl mx-auto text-center">
                {t('footer.disclaimer')}
              </p>
            </div>
          </>
        )}

        {/* Bottom bar */}
        <div className="border-t border-text-light/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-text-light/65">
            &copy; {new Date().getFullYear()} {brandName}. {isSwissArrival ? swissFooterT('rights') : t('footer.rights')}
          </p>
          <p className="text-xs text-text-light/65">{isSwissArrival ? swissFooterT('company') : t('footer.company')}</p>
        </div>
      </div>
    </footer>
  );
}

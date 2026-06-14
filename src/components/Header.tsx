'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';
import { locales, localeNames, swissArrivalLocales, type Locale } from '@/i18n/config';
import { useState, useEffect } from 'react';
import { ConversionLink } from '@/components/ConversionLink';

type HeaderProps = {
  site?: 'move' | 'swissarrival';
};

export function Header({ site = 'move' }: HeaderProps) {
  const t = useTranslations('nav');
  const footerT = useTranslations('footer');
  const swissT = useTranslations('swissArrivalNav');
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isSwissArrival = site === 'swissarrival' || pathname === '/swiss-arrival';
  const brandName = isSwissArrival ? 'Swiss Arrival' : 'Move to Switzerland';
  const brandInitial = isSwissArrival ? 'S' : 'M';
  const brandHref = isSwissArrival ? '/swiss-arrival' : '/';
  const languageOptions = isSwissArrival ? swissArrivalLocales : locales;
  const languageSet = new Set<Locale>(languageOptions as readonly Locale[]);
  const languageLabel = footerT('languages');
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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setLangOpen(false);
  }, [pathname]);

  const navItems = isSwissArrival
    ? [
        { href: '/swiss-arrival' as const, label: swissT('guide') },
        { href: '/contact' as const, label: swissT('contact') },
      ]
    : [
        { href: '/' as const, label: t('home') },
        { href: '/services' as const, label: t('services') },
        { href: '/why-switzerland' as const, label: t('whySwitzerland') },
        { href: '/cantons' as const, label: t('cantons') },
        { href: '/case-studies' as const, label: t('caseStudies') },
        { href: '/insights' as const, label: t('insights') },
        { href: '/about' as const, label: t('about') },
        { href: '/contact' as const, label: t('contact') },
      ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 border-b border-gold/10 bg-navy/94 header-glass transition-all duration-500 ${
          scrolled ? 'shadow-lg shadow-navy/20' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 sm:h-22">
            {/* Logo */}
            <Link href={brandHref} className="group flex min-h-11 min-w-0 items-center gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold/40 transition-colors group-hover:border-gold">
                <span className="text-gold font-serif text-sm font-bold">{brandInitial}</span>
              </div>
              <span className="max-w-[calc(100vw-7rem)] truncate font-serif text-base font-semibold text-gold sm:max-w-none sm:text-xl">
                {brandName}
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden xl:flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex min-h-11 items-center text-[12px] tracking-[0.12em] uppercase transition-colors duration-300 ${
                    pathname === item.href
                      ? 'text-gold'
                      : 'text-text-light/70 hover:text-gold'
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              {/* Language Switcher */}
              <div className="relative">
                <button
                  onClick={() => setLangOpen(!langOpen)}
                  className="flex min-h-11 items-center gap-1.5 text-[12px] text-text-light/60 hover:text-gold transition-colors duration-300 tracking-wider uppercase"
                  aria-label={languageLabel}
                  aria-expanded={langOpen}
                >
                  {localeNames[locale]}
                  <svg
                    className={`w-3 h-3 transition-transform duration-200 ${langOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {langOpen && (
                  <>
                    <div className="fixed inset-0 z-10" onClick={() => setLangOpen(false)} />
                    <div className="absolute end-0 top-full mt-3 bg-navy-light/95 header-glass border border-gold/15 rounded-xl shadow-2xl shadow-navy/40 py-2 min-w-[180px] z-20">
                      {languageOptions.map((code) => (
                        <Link
                          key={code}
                          href={pathname}
                          locale={code}
                          onClick={() => setLangOpen(false)}
                          className={`block px-5 py-2.5 text-sm transition-all duration-200 ${
                            locale === code
                              ? 'text-gold bg-gold/10'
                              : 'text-text-light/60 hover:text-gold hover:bg-gold/5'
                          }`}
                        >
                          {localeNames[code]}
                        </Link>
                      ))}
                    </div>
                  </>
                )}
              </div>

              <ConversionLink
                href="/contact"
                eventName="header_cta_click"
                eventParams={{ site: isSwissArrival ? 'swissarrival' : 'move' }}
                className="flex min-h-11 items-center bg-gold text-navy px-5 py-2.5 text-[12px] font-semibold rounded-sm tracking-[0.1em] uppercase hover:bg-gold-light transition-all duration-300 whitespace-nowrap"
              >
                {isSwissArrival ? swissT('cta') : t('beginJourney')}
              </ConversionLink>
            </nav>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex min-h-11 min-w-11 items-center justify-center text-text-light xl:hidden"
              aria-label={t('menu')}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu - Slide-in panel */}
      <div
        className={`fixed inset-0 z-50 xl:hidden transition-opacity duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-navy-dark/80"
          onClick={() => setMobileOpen(false)}
        />

        {/* Panel */}
        <div
          className={`absolute top-0 end-0 h-full w-80 max-w-[85vw] bg-navy border-s border-gold/10 transition-transform duration-300 ease-out ${
            mobileOpen ? 'translate-x-0' : 'ltr:translate-x-full rtl:-translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full overflow-y-auto">
            {/* Close */}
            <div className="flex justify-end p-6">
              <button
                onClick={() => setMobileOpen(false)}
                className="flex min-h-11 min-w-11 items-center justify-center text-text-light/60 transition-colors hover:text-gold"
                aria-label={t('closeMenu')}
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Nav items */}
            <nav className="flex-1 px-8 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block py-4 text-lg font-serif tracking-wide border-b border-gold/5 transition-colors ${
                    pathname === item.href ? 'text-gold' : 'text-text-light/70 hover:text-gold'
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              <div className="pt-8">
                <ConversionLink
                  href="/contact"
                  eventName="mobile_header_cta_click"
                  eventParams={{ site: isSwissArrival ? 'swissarrival' : 'move' }}
                  onClick={() => setMobileOpen(false)}
                  className="block min-h-12 rounded-sm bg-gold px-4 py-3.5 text-center text-sm font-semibold leading-snug text-navy"
                >
                  {isSwissArrival ? swissT('cta') : t('beginJourney')}
                </ConversionLink>
              </div>
            </nav>

            {/* Languages */}
            <div className="px-8 pb-8 pt-4">
              <p className="mb-4 text-xs font-medium leading-snug text-text-light/68">{languageLabel}</p>
              <div className="space-y-4">
                {languageGroups.map((group) => (
                  <div key={group.key} className="border-t border-text-light/8 pt-4 first:border-t-0 first:pt-0">
                    <p className="mb-2 text-[0.72rem] font-medium leading-snug text-text-light/45">
                      {footerT(`languageGroups.${group.key}`)}
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {group.codes.map((code) => (
                        <Link
                          key={code}
                          href={pathname}
                          locale={code}
                          onClick={() => setMobileOpen(false)}
                          className={`inline-flex min-h-11 max-w-full items-center justify-center rounded-full border px-3 py-2 text-center text-xs font-medium leading-snug transition-colors ${
                            locale === code
                              ? 'border-gold bg-gold/10 text-gold'
                              : 'border-text-light/15 text-text-light/68 hover:border-gold/40 hover:text-gold'
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
        </div>
      </div>
    </>
  );
}

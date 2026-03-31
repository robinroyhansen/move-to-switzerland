'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';
import { localeNames, type Locale } from '@/i18n/config';
import { useState, useEffect } from 'react';

export function Header() {
  const t = useTranslations('nav');
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  const navItems = [
    { href: '/' as const, label: t('home') },
    { href: '/services' as const, label: t('services') },
    { href: '/about' as const, label: t('about') },
    { href: '/contact' as const, label: t('contact') },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-navy/90 header-glass border-b border-gold/10 shadow-lg shadow-navy/20'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 sm:h-22">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-8 h-8 rounded-full border border-gold/40 flex items-center justify-center group-hover:border-gold transition-colors">
                <span className="text-gold font-serif text-sm font-bold">M</span>
              </div>
              <span className="text-gold font-serif text-lg sm:text-xl font-semibold tracking-wide">
                Move to Switzerland
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-[13px] tracking-[0.15em] uppercase transition-colors duration-300 ${
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
                  className="flex items-center gap-1.5 text-[13px] text-text-light/60 hover:text-gold transition-colors duration-300 tracking-wider uppercase"
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
                      {(Object.entries(localeNames) as [Locale, string][]).map(([code, name]) => (
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
                          {name}
                        </Link>
                      ))}
                    </div>
                  </>
                )}
              </div>

              <Link
                href="/contact"
                className="bg-gold text-navy px-6 py-2.5 text-[13px] font-semibold rounded-sm tracking-[0.12em] uppercase hover:bg-gold-light transition-all duration-300"
              >
                {t('beginJourney')}
              </Link>
            </nav>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-text-light p-2"
              aria-label="Toggle menu"
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
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
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
          <div className="flex flex-col h-full">
            {/* Close */}
            <div className="flex justify-end p-6">
              <button
                onClick={() => setMobileOpen(false)}
                className="text-text-light/60 hover:text-gold transition-colors"
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
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="block bg-gold text-navy text-center py-3.5 text-sm font-semibold tracking-wider uppercase rounded-sm"
                >
                  {t('beginJourney')}
                </Link>
              </div>
            </nav>

            {/* Languages */}
            <div className="px-8 pb-8 pt-4">
              <p className="text-xs text-text-light/30 uppercase tracking-[0.2em] mb-4">Languages</p>
              <div className="flex flex-wrap gap-2">
                {(Object.entries(localeNames) as [Locale, string][]).map(([code, name]) => (
                  <Link
                    key={code}
                    href={pathname}
                    locale={code}
                    onClick={() => setMobileOpen(false)}
                    className={`text-xs px-3 py-2 rounded-full border transition-colors min-h-[44px] flex items-center ${
                      locale === code
                        ? 'border-gold text-gold bg-gold/5'
                        : 'border-text-light/15 text-text-light/40 hover:border-gold/40 hover:text-gold/70'
                    }`}
                  >
                    {name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

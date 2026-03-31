'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';
import { localeNames, type Locale } from '@/i18n/config';
import { useState } from 'react';

export function Header() {
  const t = useTranslations('nav');
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const navItems = [
    { href: '/' as const, label: t('home') },
    { href: '/services' as const, label: t('services') },
    { href: '/about' as const, label: t('about') },
    { href: '/contact' as const, label: t('contact') },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-sm border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center">
              <span className="text-gold font-serif text-xl sm:text-2xl font-semibold tracking-wide">
                Move to Switzerland
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm tracking-wider uppercase transition-colors ${
                  pathname === item.href
                    ? 'text-gold'
                    : 'text-white/80 hover:text-gold'
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 text-sm text-white/80 hover:text-gold transition-colors uppercase tracking-wider"
              >
                {localeNames[locale]}
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {langOpen && (
                <div className="absolute end-0 top-full mt-2 bg-navy border border-gold/20 rounded-lg shadow-xl py-2 min-w-[160px]">
                  {(Object.entries(localeNames) as [Locale, string][]).map(([code, name]) => (
                    <Link
                      key={code}
                      href={pathname}
                      locale={code}
                      onClick={() => setLangOpen(false)}
                      className={`block px-4 py-2 text-sm transition-colors ${
                        locale === code
                          ? 'text-gold bg-gold/10'
                          : 'text-white/70 hover:text-gold hover:bg-gold/5'
                      }`}
                    >
                      {name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className="bg-gold text-navy px-5 py-2 text-sm font-medium rounded tracking-wider uppercase hover:bg-gold-light transition-colors"
            >
              {t('beginJourney')}
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-gold/20 py-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-4 py-3 text-sm tracking-wider uppercase ${
                  pathname === item.href ? 'text-gold' : 'text-white/80'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="px-4 py-3 border-t border-gold/10 mt-2 pt-4">
              <p className="text-xs text-white/50 uppercase tracking-wider mb-2">Language</p>
              <div className="flex flex-wrap gap-2">
                {(Object.entries(localeNames) as [Locale, string][]).map(([code, name]) => (
                  <Link
                    key={code}
                    href={pathname}
                    locale={code}
                    onClick={() => setMobileOpen(false)}
                    className={`text-xs px-3 py-1.5 rounded border ${
                      locale === code
                        ? 'border-gold text-gold'
                        : 'border-white/20 text-white/60 hover:border-gold/50'
                    }`}
                  >
                    {name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

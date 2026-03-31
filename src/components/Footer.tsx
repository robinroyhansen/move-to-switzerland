'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';
import { localeNames, type Locale } from '@/i18n/config';

export function Footer() {
  const t = useTranslations();
  const locale = useLocale() as Locale;
  const pathname = usePathname();

  return (
    <footer className="bg-navy text-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-gold font-serif text-2xl font-semibold mb-4">
              Move to Switzerland
            </h3>
            <p className="text-sm leading-relaxed text-white/50">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white text-xs uppercase tracking-[0.2em] font-medium mb-4">
              {t('footer.navigation')}
            </h4>
            <ul className="space-y-3">
              {[
                { href: '/' as const, label: t('nav.home') },
                { href: '/services' as const, label: t('nav.services') },
                { href: '/about' as const, label: t('nav.about') },
                { href: '/contact' as const, label: t('nav.contact') },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/50 hover:text-gold transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white text-xs uppercase tracking-[0.2em] font-medium mb-4">
              {t('footer.legal')}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-white/50 hover:text-gold transition-colors"
                >
                  {t('nav.privacy')}
                </Link>
              </li>
              <li>
                <Link
                  href="/imprint"
                  className="text-sm text-white/50 hover:text-gold transition-colors"
                >
                  {t('nav.imprint')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Languages */}
          <div>
            <h4 className="text-white text-xs uppercase tracking-[0.2em] font-medium mb-4">
              {t('footer.languages')}
            </h4>
            <div className="flex flex-wrap gap-2">
              {(Object.entries(localeNames) as [Locale, string][]).map(([code, name]) => (
                <Link
                  key={code}
                  href={pathname}
                  locale={code}
                  className={`text-xs px-3 py-1.5 rounded border transition-colors ${
                    locale === code
                      ? 'border-gold text-gold'
                      : 'border-white/20 text-white/40 hover:border-gold/50 hover:text-gold/70'
                  }`}
                >
                  {name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Move to Switzerland. {t('footer.rights')}
          </p>
          <p className="text-xs text-white/30">{t('footer.company')}</p>
        </div>
      </div>
    </footer>
  );
}

'use client';

import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { usePathname } from '@/i18n/routing';
import { useState, useEffect } from 'react';
import { ConversionLink } from '@/components/ConversionLink';

const swissArrivalCta: Record<string, string> = {
  en: 'Join the launch list',
  da: 'Skriv dig på listen',
  de: 'Zur Launch-Liste',
  fr: 'Rejoindre la liste',
};

type StickyCtaBarProps = {
  site?: 'move' | 'swissarrival';
};

export function StickyCtaBar({ site = 'move' }: StickyCtaBarProps) {
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const isSwissArrival = site === 'swissarrival' || pathname === '/swiss-arrival';
  const label = isSwissArrival ? swissArrivalCta[locale] ?? swissArrivalCta.en : t('cta.consultation');

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-30 lg:hidden transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="bg-navy/95 backdrop-blur-lg border-t border-gold/20 px-4 py-3 safe-area-bottom">
        <ConversionLink
          href="/contact"
          eventName="sticky_cta_click"
          eventParams={{ site: isSwissArrival ? 'swissarrival' : 'move' }}
          className="block w-full bg-gold text-navy text-center py-3.5 rounded-sm text-sm font-semibold tracking-[0.12em] uppercase hover:bg-gold-light transition-all duration-300 shadow-lg shadow-gold/20"
        >
          {label}
        </ConversionLink>
      </div>
    </div>
  );
}

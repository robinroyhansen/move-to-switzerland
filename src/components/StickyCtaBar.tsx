'use client';

import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { usePathname } from '@/i18n/routing';
import { useState, useEffect } from 'react';
import { ConversionLink } from '@/components/ConversionLink';

type StickyCtaBarProps = {
  site?: 'move' | 'swissarrival';
};

export function StickyCtaBar({ site = 'move' }: StickyCtaBarProps) {
  const t = useTranslations();
  const swissT = useTranslations('swissArrivalNav');
  const locale = useLocale();
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const isSwissArrival = site === 'swissarrival' || pathname === '/swiss-arrival';
  const isContactPage = pathname === '/contact';
  const label = isSwissArrival ? swissT('cta') : t('cta.consultation');

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isContactPage) {
    return null;
  }

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
          className="block w-full rounded-sm bg-gold px-4 py-3.5 text-center text-sm font-semibold leading-snug text-navy shadow-lg shadow-gold/20 transition-all duration-300 hover:bg-gold-light"
        >
          {label}
        </ConversionLink>
      </div>
    </div>
  );
}

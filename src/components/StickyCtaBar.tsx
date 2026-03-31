'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { useState, useEffect } from 'react';

export function StickyCtaBar() {
  const t = useTranslations();
  const [visible, setVisible] = useState(false);

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
        <Link
          href="/contact"
          className="block w-full bg-gold text-navy text-center py-3.5 rounded-sm text-sm font-semibold tracking-[0.12em] uppercase hover:bg-gold-light transition-all duration-300 shadow-lg shadow-gold/20"
        >
          {t('cta.consultation')}
        </Link>
      </div>
    </div>
  );
}

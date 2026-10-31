'use client';

import { useTranslations } from 'next-intl';
import { usePathname } from '@/i18n/routing';
import { useState, useEffect, useRef } from 'react';
import { ConversionLink } from '@/components/ConversionLink';
import { CONSENT_EVENT, CONSENT_KEY, readConsent } from '@/lib/analytics';
import { useIsSwissArrival } from '@/lib/site';

export function StickyCtaBar() {
  const t = useTranslations();
  const swissT = useTranslations('swissArrivalNav');
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);
  const isSwissArrival = useIsSwissArrival();
  const isContactPage = pathname === '/contact';
  const label = isSwissArrival ? swissT('cta') : t('cta.consultation');

  useEffect(() => {
    let hasConsent = readConsent() !== null;
    const syncVisibility = () => {
      const root = document.documentElement;
      setVisible(
        window.scrollY > 400 &&
        hasConsent &&
        root.dataset.consentNotice !== 'open' &&
        root.dataset.navigationOverlay !== 'open'
      );
    };
    const syncConsent = () => {
      hasConsent = readConsent() !== null;
      syncVisibility();
    };
    const handleStorage = (event: StorageEvent) => {
      if (event.key === CONSENT_KEY || event.key === null) syncConsent();
    };
    const observer = new MutationObserver(syncVisibility);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-consent-notice', 'data-navigation-overlay'],
    });
    syncVisibility();
    window.addEventListener('scroll', syncVisibility, { passive: true });
    window.addEventListener(CONSENT_EVENT, syncConsent);
    window.addEventListener('storage', handleStorage);
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', syncVisibility);
      window.removeEventListener(CONSENT_EVENT, syncConsent);
      window.removeEventListener('storage', handleStorage);
    };
  }, []);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;
    const root = document.documentElement;
    const syncHeight = () => {
      root.style.setProperty('--sticky-cta-height', `${bar.getBoundingClientRect().height}px`);
    };
    const observer = new ResizeObserver(syncHeight);
    observer.observe(bar);
    syncHeight();
    return () => {
      observer.disconnect();
      root.style.removeProperty('--sticky-cta-height');
    };
  }, [visible, isContactPage]);

  if (isContactPage || !visible) {
    return null;
  }

  return (
    <div
      ref={barRef}
      id="sticky-consultation"
      className="fixed inset-x-0 bottom-0 z-30 lg:hidden"
    >
      <div className="border-t border-gold/20 bg-navy px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom,0px))]">
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

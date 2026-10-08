'use client';

import { useState, useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { readConsent, setConsent, SETTINGS_EVENT } from '@/lib/analytics';

export function CookieConsent() {
  const t = useTranslations('cookieConsent');
  const growth = useTranslations('growth');
  const [visible, setVisible] = useState(false);
  const noticeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!visible || !noticeRef.current) return;
    const root = document.documentElement;
    const notice = noticeRef.current;
    root.dataset.consentNotice = 'open';
    const syncHeight = () => {
      root.style.setProperty('--consent-notice-height', `${notice.getBoundingClientRect().height}px`);
    };
    const observer = new ResizeObserver(syncHeight);
    observer.observe(notice);
    syncHeight();
    return () => {
      observer.disconnect();
      delete root.dataset.consentNotice;
      root.style.removeProperty('--consent-notice-height');
    };
  }, [visible]);

  useEffect(() => {
    const consent = readConsent();
    const open = () => setVisible(true);
    window.addEventListener(SETTINGS_EVENT, open);
    let timer: ReturnType<typeof setTimeout> | undefined;
    if (!consent) {
      // Delay avoids making the consent notice the largest first-paint element.
      timer = setTimeout(() => setVisible(true), 1500);
    }
    return () => { if (timer) clearTimeout(timer); window.removeEventListener(SETTINGS_EVENT, open); };
  }, []);

  const handleAcceptAll = () => {
    setConsent('all');
    setVisible(false);
  };

  const handleEssentialOnly = () => {
    setConsent('essential');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <aside
      ref={noticeRef}
      id="cookie-consent"
      aria-label={growth('cookieSettings')}
      aria-describedby="cookie-consent-message"
      className="fixed inset-x-0 bottom-0 z-[100] border-t border-gold/20 bg-navy shadow-xl"
    >
        <div className="mx-auto max-w-6xl px-4 pt-4 pb-[calc(1rem+env(safe-area-inset-bottom,0px))] sm:px-6 lg:px-8">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            {/* Text */}
            <div className="flex-1 min-w-0">
              <p id="cookie-consent-message" className="max-w-[72ch] text-sm leading-relaxed text-text-light/85">
                {t('message')}
              </p>
            </div>

            {/* Buttons */}
            <div className="flex w-full flex-wrap items-center gap-3 sm:w-auto sm:flex-shrink-0">
              <button
                onClick={handleEssentialOnly}
                className="min-h-11 flex-1 rounded-sm border border-text-light/20 px-4 py-2.5 text-center text-xs font-semibold leading-snug text-text-light/65 transition-all duration-300 hover:border-text-light/40 hover:text-text-light sm:flex-none"
              >
                {t('essentialOnly')}
              </button>
              <button
                onClick={handleAcceptAll}
                className="min-h-11 flex-1 rounded-sm bg-gold px-5 py-2.5 text-center text-xs font-semibold leading-snug text-navy transition-all duration-300 hover:bg-gold-light sm:flex-none"
              >
                {t('acceptAll')}
              </button>
            </div>
          </div>
        </div>
    </aside>
  );
}

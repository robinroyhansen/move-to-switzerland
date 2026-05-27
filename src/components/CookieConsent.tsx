'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';

export function CookieConsent() {
  const t = useTranslations('cookieConsent');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Delay avoids making the consent notice the largest first-paint element.
      const timer = setTimeout(() => setVisible(true), 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookie-consent', 'all');
    setVisible(false);
  };

  const handleEssentialOnly = () => {
    localStorage.setItem('cookie-consent', 'essential');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-[100] transition-all duration-500 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
    >
      <div className="bg-navy/95 backdrop-blur-md border-t border-gold/10 shadow-2xl shadow-navy/50">
        <div className="safe-area-bottom mx-auto max-w-6xl px-4 py-4 sm:px-6 sm:py-5 lg:px-8">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            {/* Text */}
            <div className="flex-1 min-w-0">
              <p className="text-sm text-text-light/70 leading-relaxed">
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
      </div>
    </div>
  );
}

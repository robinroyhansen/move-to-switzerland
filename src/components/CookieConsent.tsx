'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';

export function CookieConsent() {
  const t = useTranslations('cookieConsent');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Small delay for smoother UX
      const timer = setTimeout(() => setVisible(true), 1500);
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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            {/* Text */}
            <div className="flex-1 min-w-0">
              <p className="text-sm text-text-light/70 leading-relaxed">
                {t('message')}
              </p>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <button
                onClick={handleEssentialOnly}
                className="text-xs px-4 py-2.5 rounded-sm border border-text-light/20 text-text-light/60 hover:text-text-light hover:border-text-light/40 transition-all duration-300 tracking-wider uppercase whitespace-nowrap"
              >
                {t('essentialOnly')}
              </button>
              <button
                onClick={handleAcceptAll}
                className="text-xs px-5 py-2.5 rounded-sm bg-gold text-navy font-semibold hover:bg-gold-light transition-all duration-300 tracking-wider uppercase whitespace-nowrap"
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

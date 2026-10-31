'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { CONSENT_KEY, CONSENT_EVENT, syncAnalytics, setConsent } from '@/lib/analytics';

export function Analytics() {
  const pathname = usePathname();
  useEffect(() => {
    const sync = () => { void syncAnalytics(pathname); };
    const storage = (event: StorageEvent) => {
      if (event.key === CONSENT_KEY || event.key === null) {
        setConsent(event.newValue === 'all' ? 'all' : 'essential');
      }
    };
    sync();
    window.addEventListener(CONSENT_EVENT, sync);
    window.addEventListener('storage', storage);
    return () => { window.removeEventListener(CONSENT_EVENT, sync); window.removeEventListener('storage', storage); };
  }, [pathname]);
  return null;
}

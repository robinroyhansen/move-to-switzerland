type EventParams = Record<string, string | number | boolean | null | undefined>;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (command: 'event', eventName: string, params?: EventParams) => void;
  }
}

export function trackConversion(eventName: string, params: EventParams = {}) {
  if (typeof window === 'undefined') return;

  const payload = {
    event: eventName,
    ...params,
  };

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);

  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }

  window.dispatchEvent(
    new CustomEvent('mts:conversion', {
      detail: payload,
    })
  );
}

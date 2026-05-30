import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);
const swissArrivalHosts = new Set(['swissarrival.com', 'www.swissarrival.com']);
const swissArrivalLocales = new Set(['en', 'da', 'de', 'fr', 'es', 'nl']);
const swissArrivalHeader = 'x-openclaw-site';

function rewriteToSwissArrival(request: NextRequest, locale: string) {
  const url = request.nextUrl.clone();
  const requestHeaders = new Headers(request.headers);

  url.pathname = '/' + locale + '/swiss-arrival';
  requestHeaders.set(swissArrivalHeader, 'swissarrival');

  return NextResponse.rewrite(url, {
    request: {
      headers: requestHeaders,
    },
  });
}

export default function middleware(request: NextRequest) {
  const host = request.headers.get('host')?.split(':')[0].toLowerCase();

  if (host && swissArrivalHosts.has(host)) {
    const pathname = request.nextUrl.pathname;
    const segments = pathname.split('/').filter(Boolean);
    const requestedLocale = segments[0];

    if (pathname === '/' || (swissArrivalLocales.has(requestedLocale) && segments.length === 1)) {
      const locale = swissArrivalLocales.has(requestedLocale) ? requestedLocale : 'en';
      return rewriteToSwissArrival(request, locale);
    }
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ['/', '/(de|en|fr|es|nl|ar|fa|tr|ru|hi|da|it|zh|pt|he|ko|no|ro)/:path*'],
};

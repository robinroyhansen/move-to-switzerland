import { isEnglishResource } from '@/lib/english-resources';
import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { routing } from './i18n/routing';
import { swissArrivalLocales } from './i18n/config';
import { siteUrl } from './lib/seo';

const intlMiddleware = createMiddleware(routing);
const swissArrivalHosts = new Set(['swissarrival.com', 'www.swissarrival.com']);
const swissArrivalLocaleSet = new Set<string>(swissArrivalLocales);
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

/** Only advertise language versions that exist; x-default must resolve without a redirect. */
function setAlternateLinks(response: NextResponse, pathname: string) {
  const path = pathname.replace(/^\/[a-z]{2}(?=\/|$)/, '').replace(/\/$/, '');
  // This resource is currently published in English only.
  if (isEnglishResource(path)) return;

  const available = path === '/swiss-arrival' ? swissArrivalLocales : routing.locales;
  const links = available.map((locale) => `<${siteUrl}/${locale}${path}>; rel="alternate"; hreflang="${locale}"`);
  links.push(`<${siteUrl}/${routing.defaultLocale}${path}>; rel="alternate"; hreflang="x-default"`);
  response.headers.set('link', links.join(', '));
}

export default function middleware(request: NextRequest) {
  const host = request.headers.get('host')?.split(':')[0].toLowerCase();

  if (host && swissArrivalHosts.has(host)) {
    const pathname = request.nextUrl.pathname;
    const segments = pathname.split('/').filter(Boolean);
    const requestedLocale = segments[0];

    if (pathname === '/' || (swissArrivalLocaleSet.has(requestedLocale) && segments.length === 1)) {
      const locale = swissArrivalLocaleSet.has(requestedLocale) ? requestedLocale : 'en';
      return rewriteToSwissArrival(request, locale);
    }
  }

  const response = intlMiddleware(request);
  setAlternateLinks(response, request.nextUrl.pathname);
  return response;
}

export const config = {
  matcher: ['/', '/(de|en|fr|es|nl|ar|fa|tr|ru|hi|da|it|zh|pt|he|ko|no|ro)/:path*'],
};

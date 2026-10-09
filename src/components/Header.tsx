'use client';

import { isEnglishResource } from '@/lib/english-resources';
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';
import { locales, localeNames, swissArrivalLocales, type Locale } from '@/i18n/config';
import { useState, useEffect, useRef } from 'react';
import { ConversionLink } from '@/components/ConversionLink';
import { useIsSwissArrival } from '@/lib/site';

export function Header() {
  const t = useTranslations('nav');
  const footerT = useTranslations('footer');
  const swissT = useTranslations('swissArrivalNav');
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mobileTriggerRef = useRef<HTMLButtonElement>(null);
  const mobileDialogRef = useRef<HTMLDialogElement>(null);
  const mobileCloseRef = useRef<HTMLButtonElement>(null);
  const languageTriggerRef = useRef<HTMLButtonElement>(null);
  const languageOptionsRef = useRef<HTMLDivElement>(null);
  const isSwissArrival = useIsSwissArrival();
  const brandName = isSwissArrival ? 'Swiss Arrival' : 'Move to Switzerland';
  const brandInitial = isSwissArrival ? 'S' : 'M';
  const brandHref = isSwissArrival ? '/swiss-arrival' : '/';
  const guideLocale = swissArrivalLocales.some((code) => code === locale) ? locale : 'en';
  const languageOptions = isSwissArrival ? swissArrivalLocales : locales;
  const languageSet = new Set<Locale>(languageOptions as readonly Locale[]);
  const languageLabel = footerT('languages');
  const languageGroups = [
    { key: 'core', codes: ['en', 'de', 'fr'] as Locale[] },
    { key: 'europe', codes: ['da', 'it', 'pt', 'no', 'ro', 'es', 'nl'] as Locale[] },
    { key: 'global', codes: ['ar', 'fa', 'tr', 'ru', 'hi', 'zh', 'he', 'ko'] as Locale[] },
  ]
    .map((group) => ({ ...group, codes: group.codes.filter((code) => languageSet.has(code)) }))
    .filter((group) => group.codes.length > 0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setLangOpen(false);
  }, [pathname, locale]);

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 1280px)');
    const closeOverlays = () => {
      setMobileOpen(false);
      setLangOpen(false);
    };
    desktop.addEventListener('change', closeOverlays);
    return () => desktop.removeEventListener('change', closeOverlays);
  }, []);

  useEffect(() => {
    if (mobileOpen || langOpen) document.documentElement.dataset.navigationOverlay = 'open';
    else delete document.documentElement.dataset.navigationOverlay;
    return () => { delete document.documentElement.dataset.navigationOverlay; };
  }, [mobileOpen, langOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    const dialog = mobileDialogRef.current;
    if (!dialog) return;
    const trigger = mobileTriggerRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    // Native modal dialogs make the rest of the page inert and contain keyboard focus.
    dialog.showModal();
    mobileCloseRef.current?.focus();
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      trigger?.focus({ preventScroll: true });
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!langOpen) return;
    const options = languageOptionsRef.current;
    const selected = options?.querySelector<HTMLAnchorElement>('a[aria-current="true"]');
    (selected ?? options?.querySelector<HTMLAnchorElement>('a'))?.focus();
  }, [langOpen]);

  const closeLanguages = (returnFocus = false) => {
    setLangOpen(false);
    if (returnFocus) languageTriggerRef.current?.focus();
  };
  const isActive = (href: string) => pathname === href || (href !== '/' && pathname.startsWith(`${href}/`));
  const navItems = isSwissArrival
    ? [{ href: '/swiss-arrival', label: swissT('guide') }]
    : [
        { href: '/services', label: t('services') },
        { href: '/cantons', label: t('cantons') },
        { href: '/insights', label: t('insights') },
        { href: '/about', label: t('about') },
      ];

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 border-b border-gold/10 bg-navy/94 header-glass transition-shadow duration-300 ${scrolled ? 'shadow-lg shadow-navy/20' : ''}`}>
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <div className="flex h-18 items-center justify-between gap-5 sm:h-22">
            <Link href={brandHref} locale={isSwissArrival ? guideLocale : locale} className="group flex min-h-11 shrink-0 items-center gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold/40 transition-colors group-hover:border-gold" aria-hidden="true">
                <span className="font-serif text-sm font-bold text-gold">{brandInitial}</span>
              </span>
              <span className="whitespace-nowrap font-serif text-base font-semibold text-gold sm:text-xl">{brandName}</span>
            </Link>

            <nav className="hidden items-center gap-4 xl:flex 2xl:gap-6" aria-label={t('menu')}>
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} locale={item.href === '/swiss-arrival' ? guideLocale : locale} aria-current={isActive(item.href) ? 'page' : undefined} className={`flex min-h-11 items-center whitespace-nowrap text-[13px] transition-colors duration-200 ${isActive(item.href) ? 'text-gold' : 'text-text-light/75 hover:text-gold'}`}>
                  {item.label}
                </Link>
              ))}

              <div
                className="relative"
                onBlur={(event) => {
                  if (event.relatedTarget && !event.currentTarget.contains(event.relatedTarget)) closeLanguages();
                }}
                onKeyDown={(event) => {
                  if (event.key === 'Escape' && langOpen) {
                    event.preventDefault();
                    closeLanguages(true);
                  }
                }}
              >
                <button ref={languageTriggerRef} onClick={() => setLangOpen(!langOpen)} className="flex min-h-11 items-center gap-1.5 whitespace-nowrap text-[13px] text-text-light/75 transition-colors hover:text-gold" aria-label={`${languageLabel}: ${localeNames[locale]}`} aria-expanded={langOpen} aria-controls="header-language-options">
                  {localeNames[locale]}
                  <svg className={`h-3 w-3 transition-transform duration-200 ${langOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {langOpen && (
                  <>
                    <div className="fixed inset-0 z-10" onClick={() => closeLanguages(true)} aria-hidden="true" />
                    <div ref={languageOptionsRef} id="header-language-options" className="absolute end-0 top-full z-20 mt-3 max-h-[calc(100dvh-7rem)] min-w-[180px] overflow-y-auto rounded-xl border border-gold/15 bg-navy-light py-2 shadow-2xl shadow-navy/40">
                      {languageOptions.map((code) => (
                        <Link key={code} href={isEnglishResource(pathname) && code !== 'en' ? '/' : pathname} locale={code} lang={code} aria-current={locale === code ? 'true' : undefined} onClick={() => closeLanguages()} className={`flex min-h-11 items-center px-5 py-2.5 text-sm transition-colors ${locale === code ? 'bg-gold/10 text-gold' : 'text-text-light/75 hover:bg-gold/5 hover:text-gold'}`}>
                          {localeNames[code]}
                        </Link>
                      ))}
                    </div>
                  </>
                )}
              </div>

              <ConversionLink href="/contact" eventName="header_cta_click" eventParams={{ site: isSwissArrival ? 'swissarrival' : 'move' }} className="flex min-h-11 items-center whitespace-nowrap rounded-sm bg-gold px-4 py-2.5 text-[12px] font-semibold text-navy transition-colors hover:bg-gold-light">
                {isSwissArrival ? swissT('cta') : t('beginJourney')}
              </ConversionLink>
            </nav>

            <button ref={mobileTriggerRef} onClick={() => { setLangOpen(false); setMobileOpen(true); }} className="flex min-h-11 min-w-11 shrink-0 items-center justify-center text-text-light xl:hidden" aria-label={t('menu')} aria-expanded={mobileOpen} aria-controls="mobile-navigation" aria-haspopup="dialog">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <dialog
          ref={mobileDialogRef}
          id="mobile-navigation"
          aria-label={t('menu')}
          aria-modal="true"
          className="fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none border-0 bg-transparent p-0 text-text-light backdrop:bg-navy-dark/80"
          onCancel={(event) => { event.preventDefault(); setMobileOpen(false); }}
          onClick={(event) => { if (event.target === event.currentTarget) setMobileOpen(false); }}
        >
          <div className="absolute end-0 top-0 flex h-full w-96 max-w-[90vw] flex-col overflow-y-auto border-s border-gold/10 bg-navy overscroll-contain">
            <div className="flex shrink-0 items-center justify-between gap-3 px-6 py-4">
              <Link href={brandHref} locale={isSwissArrival ? guideLocale : locale} onClick={() => setMobileOpen(false)} className="flex min-h-11 items-center font-serif text-lg text-gold">{brandName}</Link>
              <button ref={mobileCloseRef} onClick={() => setMobileOpen(false)} className="flex min-h-11 min-w-11 items-center justify-center text-text-light/75 transition-colors hover:text-gold" aria-label={t('closeMenu')}>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <nav className="px-6" aria-label={t('menu')}>
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} locale={item.href === '/swiss-arrival' ? guideLocale : locale} aria-current={isActive(item.href) ? 'page' : undefined} onClick={() => setMobileOpen(false)} className={`block border-b border-gold/5 py-3.5 font-serif text-lg transition-colors ${isActive(item.href) ? 'text-gold' : 'text-text-light/75 hover:text-gold'}`}>{item.label}</Link>
              ))}
              <ConversionLink href="/contact" eventName="mobile_header_cta_click" eventParams={{ site: isSwissArrival ? 'swissarrival' : 'move' }} onClick={() => setMobileOpen(false)} className="mt-5 block min-h-12 rounded-sm bg-gold px-4 py-3.5 text-center text-sm font-semibold leading-snug text-navy">
                {isSwissArrival ? swissT('cta') : t('beginJourney')}
              </ConversionLink>
            </nav>

            <div className="px-6 pb-8 pt-7">
              <p className="mb-4 text-xs font-medium leading-snug text-text-light/75">{languageLabel}</p>
              <div className="space-y-4">
                {languageGroups.map((group) => (
                  <div key={group.key} className="border-t border-text-light/8 pt-4 first:border-t-0 first:pt-0">
                    <p className="mb-2 text-[0.72rem] font-medium leading-snug text-text-light/60">{footerT(`languageGroups.${group.key}`)}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {group.codes.map((code) => (
                        <Link key={code} href={isEnglishResource(pathname) && code !== 'en' ? '/' : pathname} locale={code} lang={code} aria-current={locale === code ? 'true' : undefined} onClick={() => setMobileOpen(false)} className={`inline-flex min-h-11 items-center justify-center rounded-full border px-3 py-2 text-center text-xs font-medium leading-snug transition-colors ${locale === code ? 'border-gold bg-gold/10 text-gold' : 'border-text-light/15 text-text-light/75 hover:border-gold/40 hover:text-gold'}`}>{localeNames[code]}</Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
}

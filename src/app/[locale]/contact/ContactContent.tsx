'use client';

import NextLink from 'next/link';
import { useRef, useState, type FormEvent } from 'react';
import { Link } from '@/i18n/routing';
import { trackConversion, getAttribution } from '@/lib/analytics';
import type { ContactCopy } from '@/lib/contact-copy';
import type { ContactEnhancementCopy } from '@/lib/contact-enhancement-copy';
import type { GrowthCopy } from '@/lib/growth-copy';

type Props = { locale: string; copy: ContactCopy; enhanced: ContactEnhancementCopy; growth: GrowthCopy };
const inputClass = 'mt-2 min-h-12 w-full rounded-sm border border-navy/20 bg-cream/40 px-4 py-3 text-base text-charcoal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold';

export default function ContactContent({ locale, copy, enhanced, growth }: Props) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const formRef = useRef<HTMLFormElement>(null);
  const startedAt = useRef(0);
  const started = useRef(false);
  const [errorMessage, setErrorMessage] = useState('');

  function start() {
    if (!startedAt.current) startedAt.current = Date.now();
    if (!started.current) {
      started.current = true;
      trackConversion('contact_form_start');
    }
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === 'sending') return;
    const data = new FormData(event.currentTarget);
    const next: Record<string, string> = {};
    for (const name of ['name', 'email', 'primaryGoal']) {
      if (!String(data.get(name) || '').trim()) next[name] = enhanced.validation.required;
    }
    if (data.get('email') && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(data.get('email')).trim())) next.email = enhanced.validation.email;
    if (data.get('privacyConsent') !== 'yes') next.privacyConsent = enhanced.validation.consent;
    setErrors(next);
    trackConversion('contact_form_submit_attempt');
    if (Object.keys(next).length) {
      setStatus('error');
      setErrorMessage(Object.values(next)[0]);
      formRef.current?.querySelector<HTMLElement>(`[name="${Object.keys(next)[0]}"]`)?.focus();
      trackConversion('contact_form_validation_error', { field: Object.keys(next)[0] });
      return;
    }
    setStatus('sending');
    setErrorMessage('');
    const payload = {
      ...Object.fromEntries(data),
      preferredContact: 'email',
      servicesNeeded: [],
      formStartedAt: String(startedAt.current),
      locale,
      pageUrl: `${window.location.origin}${window.location.pathname}`,
      attribution: JSON.stringify(getAttribution()),
    };
    try {
      const response = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
      const result = await response.json().catch(() => null);
      if (!response.ok || result?.success !== true) throw new Error(String(response.status));
      setStatus('success');
      formRef.current?.reset();
      trackConversion('contact_form_submit_success');
    } catch {
      setStatus('error');
      setErrorMessage(enhanced.validation.submitError);
      trackConversion('contact_form_submit_error');
    }
  }

  function field(name: string, label: string, type = 'text', required = false, autoComplete?: string) {
    return <div>
      <label htmlFor={`contact-${name}`} className="text-sm font-medium text-navy">{label}{required && ' *'}</label>
      <input id={`contact-${name}`} name={name} type={type} required={required} autoComplete={autoComplete} maxLength={type === 'email' ? 240 : 160} className={inputClass} aria-invalid={!!errors[name]} aria-describedby={errors[name] ? `error-${name}` : undefined} />
      {errors[name] && <p id={`error-${name}`} className="mt-2 text-sm text-red-700">{errors[name]}</p>}
    </div>;
  }

  return <>
    <section className="bg-navy pb-12 pt-32 sm:pb-16 sm:pt-36">
      <div className="mx-auto max-w-5xl px-5 sm:px-6">
        <h1 className="max-w-3xl font-serif text-4xl font-semibold leading-tight text-text-light sm:text-5xl">{copy.pageTitle}</h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-text-light/80 sm:text-lg">{growth.contactIntro}</p>
      </div>
    </section>
    <section className="bg-cream py-12 sm:py-20">
      <div className="mx-auto grid max-w-5xl gap-12 px-5 sm:px-6 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
        <div>
          {status === 'success' ? <div role="status" aria-live="polite" className="border border-gold/40 bg-gold/5 p-8">
            <h2 className="font-serif text-3xl text-navy">{enhanced.status.successTitle}</h2>
            <p className="mt-4 leading-relaxed text-charcoal/80">{enhanced.status.successText}</p>
            <NextLink href="/en/relocation-checklist" className="mt-6 inline-flex min-h-11 items-center text-navy underline underline-offset-4">{growth.checklist}</NextLink>
          </div> : <form ref={formRef} onSubmit={submit} onFocus={start} className="space-y-6" noValidate aria-busy={status === 'sending'}>
            <div className="sr-only" aria-hidden="true"><label>{enhanced.honeypotLabel}<input name="companyWebsite" tabIndex={-1} autoComplete="off" /></label></div>
            <div className="grid gap-6 sm:grid-cols-2">
              {field('name', copy.labels.name, 'text', true, 'name')}
              {field('email', copy.labels.email, 'email', true, 'email')}
            </div>
            <div>
              <label htmlFor="contact-primaryGoal" className="text-sm font-medium text-navy">{copy.labels.primaryGoal} *</label>
              <select id="contact-primaryGoal" name="primaryGoal" defaultValue="" required className={inputClass} aria-invalid={!!errors.primaryGoal} aria-describedby={errors.primaryGoal ? 'error-primaryGoal' : undefined}>
                <option value="" disabled>{copy.labels.primaryGoal}</option>
                {copy.options.primaryGoals.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
              </select>
              {errors.primaryGoal && <p id="error-primaryGoal" className="mt-2 text-sm text-red-700">{errors.primaryGoal}</p>}
            </div>
            <details className="border-y border-navy/15 py-4">
              <summary className="min-h-11 cursor-pointer py-2 text-sm font-medium text-navy">{growth.optional}</summary>
              <div className="mt-5 space-y-6 pb-3">
                {field('country', copy.labels.country, 'text', false, 'country-name')}
                <div><label htmlFor="contact-timeline" className="text-sm font-medium text-navy">{copy.labels.timeline}</label>
                  <select id="contact-timeline" name="timeline" defaultValue="" className={inputClass}>
                    <option value="">{copy.labels.timeline}</option>
                    {copy.options.timelines.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
                  </select>
                </div>
                <div><label htmlFor="contact-message" className="text-sm font-medium text-navy">{copy.labels.message}</label>
                  <textarea id="contact-message" name="message" rows={4} maxLength={5000} className={inputClass} placeholder={copy.placeholders.message} />
                </div>
              </div>
            </details>
            <p className="text-sm leading-relaxed text-charcoal/75">{copy.noSensitive}</p>
            <div>
              <label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-charcoal/85">
                <input name="privacyConsent" type="checkbox" value="yes" required className="mt-1 h-5 w-5 shrink-0 accent-navy" aria-invalid={!!errors.privacyConsent} aria-describedby={errors.privacyConsent ? 'error-privacyConsent' : undefined} />
                <span>{enhanced.privacy.beforeLink}<Link href="/privacy" className="text-navy underline underline-offset-4">{enhanced.privacy.linkText}</Link>{enhanced.privacy.afterLink}</span>
              </label>
              {errors.privacyConsent && <p id="error-privacyConsent" className="mt-2 text-sm text-red-700">{errors.privacyConsent}</p>}
            </div>
            {errorMessage && <p role="alert" className="text-sm text-red-700">{errorMessage}</p>}
            <button type="submit" disabled={status === 'sending'} className="min-h-12 w-full rounded-full bg-navy px-6 py-4 text-sm font-semibold text-text-light transition-colors hover:bg-navy-light disabled:opacity-60">{status === 'sending' ? enhanced.status.sending : copy.submit}</button>
          </form>}
        </div>
        <aside className="space-y-8 text-charcoal/80">
          <div><h2 className="font-serif text-2xl text-navy">{enhanced.process.title}</h2>
            <p className="mt-4 text-sm leading-7">{enhanced.process.intro}</p>
            <ol className="mt-5 list-decimal space-y-3 ps-5 text-sm leading-relaxed">{enhanced.process.steps.map(step => <li key={step}>{step}</li>)}</ol>
          </div>
          <div className="border-t border-navy/15 pt-6">
            <p className="font-serif text-xl leading-relaxed text-navy">{growth.experience}</p>
            <p className="mt-3 text-sm leading-relaxed">{growth.consultations}</p>
          </div>
          <div><h2 className="text-sm font-semibold text-navy">{growth.companyAddress}</h2>
            <address className="mt-3 text-sm not-italic leading-7">WorkWorkWork AG<br />Fänn West 10<br />6403 Küssnacht am Rigi<br />{locale === 'en' ? 'Switzerland' : 'CH'}</address>
          </div>
          <NextLink href="/en/relocation-checklist" className="inline-flex min-h-11 items-center text-sm text-navy underline underline-offset-4">{growth.checklist}</NextLink>
        </aside>
      </div>
    </section>
  </>;
}

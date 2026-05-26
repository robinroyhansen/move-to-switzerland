'use client';

import { useLocale } from 'next-intl';
import { type ReactNode, useEffect, useRef, useState } from 'react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Link } from '@/i18n/routing';
import { trackConversion } from '@/lib/analytics';
import { getContactEnhancementCopy } from '@/lib/contact-enhancement-copy';
import { getContactCopy } from '@/lib/contact-copy';

type Status = 'idle' | 'sending' | 'success' | 'error';

type Option = {
  value: string;
  label: string;
};

type FieldErrors = Record<string, string>;

function RadioPills({
  name,
  options,
  label,
  required = false,
}: {
  name: string;
  options: Option[];
  label: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-wrap gap-2.5" role="radiogroup" aria-label={label}>
      {options.map((option) => (
        <label key={option.value} className="group cursor-pointer">
          <input
            type="radio"
            name={name}
            value={option.value}
            required={required}
            className="peer sr-only"
          />
          <span className="inline-flex min-h-11 items-center rounded-full border border-navy/10 bg-cream/50 px-4 py-2.5 text-sm font-medium text-charcoal/65 transition-all duration-200 peer-checked:border-gold peer-checked:bg-navy peer-checked:text-text-light group-hover:border-gold/60">
            {option.label}
          </span>
        </label>
      ))}
    </div>
  );
}

function CheckboxPills({ name, options, label }: { name: string; options: Option[]; label: string }) {
  return (
    <div className="flex flex-wrap gap-2.5" role="group" aria-label={label}>
      {options.map((option) => (
        <label key={option.value} className="group cursor-pointer">
          <input type="checkbox" name={name} value={option.value} className="peer sr-only" />
          <span className="inline-flex min-h-11 items-center rounded-full border border-navy/10 bg-cream/50 px-4 py-2.5 text-sm font-medium text-charcoal/65 transition-all duration-200 peer-checked:border-gold peer-checked:bg-navy peer-checked:text-text-light group-hover:border-gold/60">
            {option.label}
          </span>
        </label>
      ))}
    </div>
  );
}

function FieldLabel({
  children,
  required = false,
}: {
  children: ReactNode;
  required?: boolean;
}) {
  return (
    <label className="mb-2.5 block text-xs font-medium uppercase tracking-[0.15em] text-charcoal/50">
      {children}
      {required && <span aria-hidden="true"> *</span>}
    </label>
  );
}

const inputClass =
  'w-full rounded-sm border border-navy/8 bg-cream/40 px-4 py-3.5 text-sm text-charcoal placeholder-charcoal/25 transition-all duration-300 focus:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold';

function FieldError({ message }: { message?: string }) {
  if (!message) return null;

  return <p className="mt-2 text-sm text-red-700">{message}</p>;
}

function ProgressStep({ index, title }: { index: number; title: string }) {
  return (
    <div className="flex min-w-[9rem] flex-1 items-center gap-3 rounded-full border border-navy/8 bg-cream/50 px-3 py-2">
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-navy text-xs font-semibold text-gold">
        {index}
      </span>
      <span className="text-xs font-medium uppercase tracking-[0.12em] text-charcoal/55">{title.replace(/^\d+\.\s*/, '')}</span>
    </div>
  );
}

function collectAttribution() {
  if (typeof window === 'undefined') return {};

  const params = new URLSearchParams(window.location.search);
  const utm: Record<string, string> = {};

  for (const key of ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'fbclid']) {
    const value = params.get(key);
    if (value) {
      utm[key] = value;
    }
  }

  return {
    ...utm,
    previousRoute: window.sessionStorage.getItem('mts_previous_route') || '',
    landingPage: window.sessionStorage.getItem('mts_landing_page') || window.location.href,
  };
}

export default function ContactPage() {
  const locale = useLocale();
  const copy = getContactCopy(locale);
  const enhanced = getContactEnhancementCopy(locale);
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [errors, setErrors] = useState<FieldErrors>({});
  const [startedAt, setStartedAt] = useState('');
  const [optionalOpen, setOptionalOpen] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    setStartedAt(Date.now().toString());
    if (!window.sessionStorage.getItem('mts_landing_page')) {
      window.sessionStorage.setItem('mts_landing_page', window.location.href);
    }

    return () => {
      window.sessionStorage.setItem('mts_previous_route', window.location.pathname);
    };
  }, []);

  function addError(nextErrors: FieldErrors, formData: FormData, name: string, message: string) {
    const value = formData.get(name);
    if (!value || value.toString().trim() === '') {
      nextErrors[name] = message;
    }
  }

  function focusFirstError(nextErrors: FieldErrors) {
    const firstField = Object.keys(nextErrors)[0];
    if (!firstField) return;

    window.requestAnimationFrame(() => {
      const field = formRef.current?.querySelector<HTMLElement>(`[name="${firstField}"]`);
      field?.focus();
      field?.scrollIntoView({ block: 'center', behavior: 'smooth' });
    });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');
    setErrors({});
    trackConversion('contact_form_submit_attempt');

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload: Record<string, FormDataEntryValue | FormDataEntryValue[]> = {};

    for (const [key, value] of formData.entries()) {
      if (key === 'servicesNeeded' || key === 'preferredCantons') {
        continue;
      }
      payload[key] = value;
    }

    const nextErrors: FieldErrors = {};
    addError(nextErrors, formData, 'enquiryType', enhanced.validation.required);
    addError(nextErrors, formData, 'primaryGoal', enhanced.validation.required);
    addError(nextErrors, formData, 'country', enhanced.validation.required);
    addError(nextErrors, formData, 'timeline', enhanced.validation.required);
    addError(nextErrors, formData, 'name', enhanced.validation.required);
    addError(nextErrors, formData, 'email', enhanced.validation.required);
    addError(nextErrors, formData, 'preferredContact', enhanced.validation.preferredContact);
    addError(nextErrors, formData, 'message', enhanced.validation.required);
    addError(nextErrors, formData, 'privacyConsent', enhanced.validation.consent);

    const email = formData.get('email')?.toString().trim();
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = enhanced.validation.email;
    }

    const selectedServices = formData.getAll('servicesNeeded');
    if (selectedServices.length === 0) {
      nextErrors.servicesNeeded = enhanced.validation.servicesNeeded;
    }

    if (formData.get('preferredContact') === 'phone' && !formData.get('phone')?.toString().trim()) {
      nextErrors.phone = enhanced.validation.phoneRequired;
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setErrorMessage(Object.values(nextErrors)[0]);
      setStatus('error');
      focusFirstError(nextErrors);
      trackConversion('contact_form_validation_error', {
        field: Object.keys(nextErrors)[0],
      });
      return;
    }

    payload.servicesNeeded = selectedServices;
    payload.preferredCantons = formData.getAll('preferredCantons');
    payload.pageUrl = window.location.href;
    payload.referrer = document.referrer;
    payload.locale = document.documentElement.lang;
    payload.attribution = JSON.stringify(collectAttribution());

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setStatus('success');
        form.reset();
        setOptionalOpen(false);
        trackConversion('contact_form_submit_success', {
          locale,
          primaryGoal: String(payload.primaryGoal || ''),
          timeline: String(payload.timeline || ''),
          servicesCount: selectedServices.length,
        });
      } else {
        const detail = await res.json().catch(() => null);
        setErrorMessage(detail?.error || enhanced.validation.submitError);
        setStatus('error');
        trackConversion('contact_form_submit_error', {
          status: res.status,
        });
      }
    } catch {
      setErrorMessage(enhanced.validation.submitError);
      setStatus('error');
      trackConversion('contact_form_submit_error', {
        status: 'network',
      });
    }
  }

  return (
    <>
      <section className="bg-navy pb-20 pt-36">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="gold-line-center" />
          <h1 className="luxury-heading mb-5 font-serif text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">
            {copy.pageTitle}
          </h1>
          <p className="text-lg font-light text-text-light/55">
            {copy.pageSubtitle}
          </p>
        </div>
      </section>

      <section className="bg-cream py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-12">
            <div className="lg:col-span-3">
              <ScrollReveal>
                <div className="rounded-lg border border-navy/[0.04] bg-white p-6 shadow-sm sm:p-10">
                  <div className="mb-8 flex items-start gap-3">
                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2Zm10-10V7a4 4 0 0 0-8 0v4h8Z" />
                    </svg>
                    <div>
                      <p className="text-xs italic text-charcoal/45">{copy.confidential}</p>
                      <p className="mt-1 text-sm font-light leading-relaxed text-charcoal/55">
                        {copy.noSensitive}
                      </p>
                    </div>
                  </div>

                  {status === 'success' ? (
                    <div className="py-16 text-center">
                      <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-green-50">
                        <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m5 13 4 4L19 7" />
                        </svg>
                      </div>
                      <h2 className="font-serif text-3xl font-semibold text-navy">{enhanced.status.successTitle}</h2>
                      <p className="mx-auto mt-3 max-w-md font-light leading-relaxed text-charcoal/65">{enhanced.status.successText}</p>
                    </div>
                  ) : (
                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-10" noValidate>
                      <input type="hidden" name="formStartedAt" value={startedAt} />
                      <div className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden">
                        <label>
                          Company website
                          <input type="text" name="companyWebsite" tabIndex={-1} autoComplete="off" />
                        </label>
                      </div>

                      <div aria-label={enhanced.progressTitle} className="grid gap-2 sm:grid-cols-3">
                        <ProgressStep index={1} title={copy.sections.situationTitle} />
                        <ProgressStep index={2} title={copy.sections.coordinationTitle} />
                        <ProgressStep index={3} title={copy.sections.responseTitle} />
                      </div>

                      <fieldset className="space-y-5">
                        <div>
                          <p className="font-serif text-2xl font-semibold text-navy">{copy.sections.situationTitle}</p>
                          <p className="mt-2 text-sm font-light leading-relaxed text-charcoal/55">
                            {copy.sections.situationText}
                          </p>
                        </div>

                        <div>
                          <FieldLabel required>{copy.labels.enquiryType}</FieldLabel>
                          <RadioPills name="enquiryType" label={copy.labels.enquiryType} options={copy.options.enquiryTypes} required />
                          <FieldError message={errors.enquiryType} />
                        </div>

                        <div>
                          <FieldLabel required>{copy.labels.primaryGoal}</FieldLabel>
                          <RadioPills name="primaryGoal" label={copy.labels.primaryGoal} options={copy.options.primaryGoals} required />
                          <FieldError message={errors.primaryGoal} />
                        </div>

                        <div className="grid gap-5 sm:grid-cols-2">
                          <div>
                            <FieldLabel required>{copy.labels.country}</FieldLabel>
                            <input type="text" name="country" required className={inputClass} autoComplete="country-name" />
                            <FieldError message={errors.country} />
                          </div>
                          <div>
                            <FieldLabel>{copy.labels.nationality}</FieldLabel>
                            <input type="text" name="nationality" className={inputClass} autoComplete="country-name" />
                          </div>
                        </div>

                        <div>
                          <FieldLabel required>{copy.labels.timeline}</FieldLabel>
                          <RadioPills name="timeline" label={copy.labels.timeline} options={copy.options.timelines} required />
                          <FieldError message={errors.timeline} />
                        </div>
                      </fieldset>

                      <fieldset className="space-y-5 border-t border-navy/8 pt-10">
                        <div>
                          <p className="font-serif text-2xl font-semibold text-navy">{copy.sections.coordinationTitle}</p>
                          <p className="mt-2 text-sm font-light leading-relaxed text-charcoal/55">
                            {copy.sections.coordinationText}
                          </p>
                        </div>

                        <div>
                          <FieldLabel required>{copy.labels.servicesNeeded}</FieldLabel>
                          <CheckboxPills name="servicesNeeded" label={copy.labels.servicesNeeded} options={copy.options.services} />
                          <FieldError message={errors.servicesNeeded || (errorMessage === copy.serviceError ? copy.serviceError : undefined)} />
                        </div>

                        <div className="grid gap-5 sm:grid-cols-2">
                          <div>
                            <FieldLabel>{copy.labels.targetCanton}</FieldLabel>
                            <input type="text" name="targetCanton" className={inputClass} placeholder={copy.placeholders.targetCanton} />
                          </div>
                          <div>
                            <FieldLabel>{copy.labels.familySize}</FieldLabel>
                            <input type="text" name="familySize" className={inputClass} placeholder={copy.placeholders.familySize} />
                          </div>
                        </div>

                        <div>
                          <FieldLabel>{copy.labels.existingAdvisors}</FieldLabel>
                          <RadioPills name="existingAdvisors" label={copy.labels.existingAdvisors} options={copy.options.advisorOptions} />
                        </div>

                        <div className="rounded-lg border border-navy/8 bg-cream/35">
                          <button
                            type="button"
                            onClick={() => setOptionalOpen((open) => !open)}
                            className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                            aria-expanded={optionalOpen}
                          >
                            <span>
                              <span className="block font-serif text-xl font-semibold text-navy">{enhanced.optionalContextTitle}</span>
                              <span className="mt-1 block text-sm font-light leading-relaxed text-charcoal/55">{enhanced.optionalContextText}</span>
                            </span>
                            <span className="shrink-0 rounded-full border border-gold/25 px-3 py-1 text-xs font-medium uppercase tracking-[0.12em] text-gold">
                              {optionalOpen ? enhanced.hideOptional : enhanced.showOptional}
                            </span>
                          </button>
                          {optionalOpen && (
                            <div className="space-y-5 border-t border-navy/8 px-5 py-5">
                              <div className="grid gap-5 sm:grid-cols-2">
                                <div>
                                  <FieldLabel>{enhanced.labels.relocationYear}</FieldLabel>
                                  <input type="text" name="relocationYear" className={inputClass} placeholder={enhanced.placeholders.relocationYear} />
                                </div>
                                <div>
                                  <FieldLabel>{enhanced.labels.schoolAgeRange}</FieldLabel>
                                  <input type="text" name="schoolAgeRange" className={inputClass} placeholder={enhanced.placeholders.schoolAgeRange} />
                                </div>
                              </div>
                              <div>
                                <FieldLabel>{enhanced.labels.advisoryScope}</FieldLabel>
                                <RadioPills name="advisoryScope" label={enhanced.labels.advisoryScope} options={enhanced.options.advisoryScopes} />
                              </div>
                              <div>
                                <FieldLabel>{enhanced.labels.preferredCantons}</FieldLabel>
                                <CheckboxPills name="preferredCantons" label={enhanced.labels.preferredCantons} options={enhanced.options.preferredCantons} />
                              </div>
                              <div>
                                <FieldLabel>{enhanced.labels.urgencyReason}</FieldLabel>
                                <input type="text" name="urgencyReason" className={inputClass} placeholder={enhanced.placeholders.urgencyReason} />
                              </div>
                            </div>
                          )}
                        </div>
                      </fieldset>

                      <fieldset className="space-y-5 border-t border-navy/8 pt-10">
                        <div>
                          <p className="font-serif text-2xl font-semibold text-navy">{copy.sections.responseTitle}</p>
                          <p className="mt-2 text-sm font-light leading-relaxed text-charcoal/55">
                            {copy.sections.responseText}
                          </p>
                        </div>

                        <div className="grid gap-5 sm:grid-cols-2">
                          <div>
                            <FieldLabel required>{copy.labels.name}</FieldLabel>
                            <input type="text" name="name" required className={inputClass} autoComplete="name" />
                            <FieldError message={errors.name} />
                          </div>
                          <div>
                            <FieldLabel required>{copy.labels.email}</FieldLabel>
                            <input type="email" name="email" required className={inputClass} autoComplete="email" />
                            <FieldError message={errors.email} />
                          </div>
                        </div>

                        <div className="grid gap-5 sm:grid-cols-2">
                          <div>
                            <FieldLabel>{copy.labels.phone}</FieldLabel>
                            <input type="tel" name="phone" className={inputClass} autoComplete="tel" />
                            <FieldError message={errors.phone} />
                          </div>
                          <div>
                            <FieldLabel>{copy.labels.hearAbout}</FieldLabel>
                            <input type="text" name="hearAbout" className={inputClass} />
                          </div>
                        </div>

                        <div>
                          <FieldLabel required>{copy.labels.preferredContact}</FieldLabel>
                          <RadioPills name="preferredContact" label={copy.labels.preferredContact} options={copy.options.contactMethods} required />
                          <FieldError message={errors.preferredContact} />
                        </div>

                        <div>
                          <FieldLabel required>{copy.labels.message}</FieldLabel>
                          <textarea
                            name="message"
                            required
                            rows={6}
                            className={`${inputClass} resize-none`}
                            placeholder={copy.placeholders.message}
                          />
                          <FieldError message={errors.message} />
                        </div>

                        <label className="flex items-start gap-3 rounded-sm border border-navy/8 bg-cream/40 p-4 text-sm font-light leading-relaxed text-charcoal/60">
                          <input type="checkbox" name="privacyConsent" value="yes" required className="mt-1 h-4 w-4 rounded border-navy/20 text-gold" />
                          <span>
                            {enhanced.privacy.beforeLink}
                            <Link href="/privacy" className="font-medium text-navy underline decoration-gold/40 underline-offset-4 hover:text-gold">
                              {enhanced.privacy.linkText}
                            </Link>
                            {enhanced.privacy.afterLink}
                          </span>
                        </label>
                        <FieldError message={errors.privacyConsent} />
                      </fieldset>

                      {status === 'error' && (
                        <p className="rounded-sm border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                          {errorMessage || enhanced.validation.submitError}
                        </p>
                      )}

                      <button
                        type="submit"
                        disabled={status === 'sending'}
                        className="sticky bottom-4 z-10 w-full rounded-full bg-navy px-6 py-4 text-sm font-medium uppercase tracking-[0.15em] text-text-light shadow-xl shadow-navy/15 transition-all duration-300 hover:bg-navy-light disabled:opacity-50"
                      >
                        {status === 'sending' ? enhanced.status.sending : copy.submit}
                      </button>
                    </form>
                  )}
                </div>
              </ScrollReveal>
            </div>

            <aside className="lg:col-span-2">
              <ScrollReveal delay={150}>
                <div className="sticky top-28 space-y-6">
                <div className="rounded-lg bg-navy p-8 sm:p-10">
                  <h2 className="mb-6 font-serif text-2xl font-semibold text-gold">
                    {copy.aside.title}
                  </h2>
                  <div className="space-y-6 text-sm font-light leading-relaxed text-text-light/45">
                    {copy.aside.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>

                  <div className="mt-10 space-y-5 border-t border-text-light/10 pt-8">
                    {copy.aside.items.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                        <p className="text-sm text-text-light/55">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-lg border border-navy/8 bg-white p-7 shadow-sm">
                  <h2 className="font-serif text-2xl font-semibold text-navy">{enhanced.process.title}</h2>
                  <p className="mt-3 text-sm font-light leading-relaxed text-charcoal/60">{enhanced.process.intro}</p>
                  <ol className="mt-6 space-y-4">
                    {enhanced.process.steps.map((step, index) => (
                      <li key={step} className="flex gap-3 text-sm leading-relaxed text-charcoal/65">
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold/12 text-xs font-semibold text-gold">{index + 1}</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
                <div className="rounded-lg border border-gold/15 bg-gold/5 p-7">
                  <h2 className="font-serif text-2xl font-semibold text-navy">{enhanced.trust.title}</h2>
                  <div className="mt-5 space-y-3">
                    {enhanced.trust.items.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                        <p className="text-sm text-charcoal/65">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
                </div>
              </ScrollReveal>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}

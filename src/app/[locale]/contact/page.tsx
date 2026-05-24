'use client';

import { useTranslations } from 'next-intl';
import { type ReactNode, useEffect, useState } from 'react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { trackConversion } from '@/lib/analytics';

type Status = 'idle' | 'sending' | 'success' | 'error';

type Option = {
  value: string;
  label: string;
};

const enquiryTypes: Option[] = [
  { value: 'private-individual', label: 'Private individual' },
  { value: 'family-office', label: 'Family office' },
  { value: 'entrepreneur', label: 'Entrepreneur' },
  { value: 'advisor', label: 'Advisor for a client' },
  { value: 'other', label: 'Other' },
];

const primaryGoals: Option[] = [
  { value: 'family-relocation', label: 'Relocate myself or my family' },
  { value: 'tax-residency', label: 'Swiss tax and residency planning' },
  { value: 'company-family-office', label: 'Company or family-office setup' },
  { value: 'settlement', label: 'Real estate, schools, and settlement' },
  { value: 'banking-wealth', label: 'Banking and wealth coordination' },
  { value: 'swiss-arrival', label: 'Swiss Arrival guide' },
];

const timelines: Option[] = [
  { value: 'urgent', label: 'Urgent' },
  { value: 'under-3-months', label: 'Under 3 months' },
  { value: '3-6-months', label: '3-6 months' },
  { value: '6-12-months', label: '6-12 months' },
  { value: 'early-planning', label: 'Early planning' },
];

const services: Option[] = [
  { value: 'residence-permits', label: 'Residence permits' },
  { value: 'lump-sum-taxation', label: 'Lump-sum taxation' },
  { value: 'company-formation', label: 'Company formation' },
  { value: 'family-office', label: 'Family office' },
  { value: 'real-estate', label: 'Real estate' },
  { value: 'schooling', label: 'Schools' },
  { value: 'private-banking', label: 'Private banking' },
  { value: 'health-concierge', label: 'Health concierge' },
  { value: 'full-coordination', label: 'Full relocation coordination' },
];

const contactMethods: Option[] = [
  { value: 'email', label: 'Email' },
  { value: 'phone', label: 'Phone' },
  { value: 'whatsapp', label: 'WhatsApp' },
];

const advisorOptions: Option[] = [
  { value: 'yes', label: 'Yes' },
  { value: 'no', label: 'No' },
  { value: 'not-sure', label: 'Not sure' },
];

function RadioPills({
  name,
  options,
  required = false,
}: {
  name: string;
  options: Option[];
  required?: boolean;
}) {
  return (
    <div className="flex flex-wrap gap-2.5" role="radiogroup">
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

function CheckboxPills({ name, options }: { name: string; options: Option[] }) {
  return (
    <div className="flex flex-wrap gap-2.5">
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
  'w-full rounded-sm border border-navy/8 bg-cream/40 px-4 py-3.5 text-sm text-charcoal placeholder-charcoal/25 transition-all duration-300 focus:bg-white';

export default function ContactPage() {
  const t = useTranslations();
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [startedAt, setStartedAt] = useState('');

  useEffect(() => {
    setStartedAt(Date.now().toString());
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');
    trackConversion('contact_form_submit_attempt');

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload: Record<string, FormDataEntryValue | FormDataEntryValue[]> = {};

    for (const [key, value] of formData.entries()) {
      if (key === 'servicesNeeded') {
        continue;
      }
      payload[key] = value;
    }

    const selectedServices = formData.getAll('servicesNeeded');
    if (selectedServices.length === 0) {
      setErrorMessage('Please select at least one service area.');
      setStatus('error');
      trackConversion('contact_form_validation_error', {
        field: 'servicesNeeded',
      });
      return;
    }

    payload.servicesNeeded = selectedServices;
    payload.pageUrl = window.location.href;
    payload.referrer = document.referrer;
    payload.locale = document.documentElement.lang;

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setStatus('success');
        form.reset();
        trackConversion('contact_form_submit_success');
      } else {
        const data = await res.json().catch(() => null);
        setErrorMessage(data?.error || t('contact.form.error'));
        setStatus('error');
        trackConversion('contact_form_submit_error', {
          status: res.status,
        });
      }
    } catch {
      setErrorMessage(t('contact.form.error'));
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
            Confidential Relocation Intake
          </h1>
          <p className="text-lg font-light text-text-light/55">
            Share the essentials privately so we can assess the right Swiss path before the first conversation.
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
                      <p className="text-xs italic text-charcoal/45">{t('contact.confidential')}</p>
                      <p className="mt-1 text-sm font-light leading-relaxed text-charcoal/55">
                        Do not send passports, bank statements, or sensitive documents through this form.
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
                      <p className="font-light text-charcoal/65">{t('contact.form.success')}</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-10">
                      <input type="hidden" name="formStartedAt" value={startedAt} />
                      <div className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden">
                        <label>
                          Company website
                          <input type="text" name="companyWebsite" tabIndex={-1} autoComplete="off" />
                        </label>
                      </div>

                      <fieldset className="space-y-5">
                        <div>
                          <p className="font-serif text-2xl font-semibold text-navy">1. Your Situation</p>
                          <p className="mt-2 text-sm font-light leading-relaxed text-charcoal/55">
                            The basics help us route the inquiry correctly without asking for sensitive documentation.
                          </p>
                        </div>

                        <div>
                          <FieldLabel required>I am enquiring as</FieldLabel>
                          <RadioPills name="enquiryType" options={enquiryTypes} required />
                        </div>

                        <div>
                          <FieldLabel required>Primary goal</FieldLabel>
                          <RadioPills name="primaryGoal" options={primaryGoals} required />
                        </div>

                        <div className="grid gap-5 sm:grid-cols-2">
                          <div>
                            <FieldLabel required>{t('contact.form.country')}</FieldLabel>
                            <input type="text" name="country" required className={inputClass} autoComplete="country-name" />
                          </div>
                          <div>
                            <FieldLabel>Nationality or citizenship</FieldLabel>
                            <input type="text" name="nationality" className={inputClass} autoComplete="country-name" />
                          </div>
                        </div>

                        <div>
                          <FieldLabel required>Timeline</FieldLabel>
                          <RadioPills name="timeline" options={timelines} required />
                        </div>
                      </fieldset>

                      <fieldset className="space-y-5 border-t border-navy/8 pt-10">
                        <div>
                          <p className="font-serif text-2xl font-semibold text-navy">2. What Needs Coordinating</p>
                          <p className="mt-2 text-sm font-light leading-relaxed text-charcoal/55">
                            Select every area that may be relevant. A precise answer is not required at this stage.
                          </p>
                        </div>

                        <div>
                          <FieldLabel required>Services needed</FieldLabel>
                          <CheckboxPills name="servicesNeeded" options={services} />
                        </div>

                        <div className="grid gap-5 sm:grid-cols-2">
                          <div>
                            <FieldLabel>Target canton or city</FieldLabel>
                            <input type="text" name="targetCanton" className={inputClass} placeholder="Zug, Zurich, Schwyz, undecided..." />
                          </div>
                          <div>
                            <FieldLabel>Family members relocating</FieldLabel>
                            <input type="text" name="familySize" className={inputClass} placeholder="Just me, couple, family of 4..." />
                          </div>
                        </div>

                        <div>
                          <FieldLabel>Existing Swiss advisors</FieldLabel>
                          <RadioPills name="existingAdvisors" options={advisorOptions} />
                        </div>
                      </fieldset>

                      <fieldset className="space-y-5 border-t border-navy/8 pt-10">
                        <div>
                          <p className="font-serif text-2xl font-semibold text-navy">3. How To Respond</p>
                          <p className="mt-2 text-sm font-light leading-relaxed text-charcoal/55">
                            We will use this information only to assess and respond to your inquiry.
                          </p>
                        </div>

                        <div className="grid gap-5 sm:grid-cols-2">
                          <div>
                            <FieldLabel required>{t('contact.form.name')}</FieldLabel>
                            <input type="text" name="name" required className={inputClass} autoComplete="name" />
                          </div>
                          <div>
                            <FieldLabel required>{t('contact.form.email')}</FieldLabel>
                            <input type="email" name="email" required className={inputClass} autoComplete="email" />
                          </div>
                        </div>

                        <div className="grid gap-5 sm:grid-cols-2">
                          <div>
                            <FieldLabel>{t('contact.form.phone')}</FieldLabel>
                            <input type="tel" name="phone" className={inputClass} autoComplete="tel" />
                          </div>
                          <div>
                            <FieldLabel>{t('contact.form.hearAbout')}</FieldLabel>
                            <input type="text" name="hearAbout" className={inputClass} />
                          </div>
                        </div>

                        <div>
                          <FieldLabel required>Preferred response</FieldLabel>
                          <RadioPills name="preferredContact" options={contactMethods} required />
                        </div>

                        <div>
                          <FieldLabel required>{t('contact.form.message')}</FieldLabel>
                          <textarea
                            name="message"
                            required
                            rows={6}
                            className={`${inputClass} resize-none`}
                            placeholder="What should we understand before the first confidential conversation?"
                          />
                        </div>

                        <label className="flex items-start gap-3 rounded-sm border border-navy/8 bg-cream/40 p-4 text-sm font-light leading-relaxed text-charcoal/60">
                          <input type="checkbox" name="privacyConsent" value="yes" required className="mt-1 h-4 w-4 rounded border-navy/20 text-gold" />
                          <span>
                            I consent to Move to Switzerland processing this information to respond to my inquiry. I understand I should not submit sensitive documents through this form.
                          </span>
                        </label>
                      </fieldset>

                      {status === 'error' && (
                        <p className="rounded-sm border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                          {errorMessage || t('contact.form.error')}
                        </p>
                      )}

                      <button
                        type="submit"
                        disabled={status === 'sending'}
                        className="w-full rounded-full bg-navy px-6 py-4 text-sm font-medium uppercase tracking-[0.15em] text-text-light transition-all duration-300 hover:bg-navy-light disabled:opacity-50"
                      >
                        {status === 'sending' ? t('contact.form.sending') : 'Submit Confidential Intake'}
                      </button>
                    </form>
                  )}
                </div>
              </ScrollReveal>
            </div>

            <aside className="lg:col-span-2">
              <ScrollReveal delay={150}>
                <div className="rounded-lg bg-navy p-8 sm:p-10">
                  <h2 className="mb-6 font-serif text-2xl font-semibold text-gold">
                    Private Review
                  </h2>
                  <div className="space-y-6 text-sm font-light leading-relaxed text-text-light/45">
                    <p>
                      This intake is designed for relocation, residency, tax, family-office, and settlement inquiries where discretion matters.
                    </p>
                    <p>
                      A concise first submission is enough. If the matter is suitable, the next step is a private consultation before any documents are requested.
                    </p>
                  </div>

                  <div className="mt-10 space-y-5 border-t border-text-light/10 pt-8">
                    {[
                      'Confidential review',
                      'No public recipient address exposed',
                      'No sensitive documents requested',
                      'Response routed through a private server-side workflow',
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                        <p className="text-sm text-text-light/55">{item}</p>
                      </div>
                    ))}
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

'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

export default function ContactPage() {
  const t = useTranslations();
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-navy">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl text-white font-semibold mb-4">
            {t('contact.pageTitle')}
          </h1>
          <p className="text-white/60 text-lg">
            {t('contact.pageSubtitle')}
          </p>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-xl p-8 sm:p-10 shadow-sm border border-navy/5">
                <div className="flex items-center gap-2 mb-8">
                  <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <p className="text-xs text-charcoal/50 italic">
                    {t('contact.confidential')}
                  </p>
                </div>

                {status === 'success' ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-charcoal/70">{t('contact.form.success')}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-xs text-charcoal/60 uppercase tracking-wider mb-2">
                        {t('contact.form.name')} *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        className="w-full px-4 py-3 border border-navy/10 rounded-lg text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 bg-cream/30"
                      />
                    </div>

                    <div>
                      <label className="block text-xs text-charcoal/60 uppercase tracking-wider mb-2">
                        {t('contact.form.email')} *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-navy/10 rounded-lg text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 bg-cream/30"
                      />
                    </div>

                    <div>
                      <label className="block text-xs text-charcoal/60 uppercase tracking-wider mb-2">
                        {t('contact.form.phone')}
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        className="w-full px-4 py-3 border border-navy/10 rounded-lg text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 bg-cream/30"
                      />
                    </div>

                    <div>
                      <label className="block text-xs text-charcoal/60 uppercase tracking-wider mb-2">
                        {t('contact.form.country')} *
                      </label>
                      <input
                        type="text"
                        name="country"
                        required
                        className="w-full px-4 py-3 border border-navy/10 rounded-lg text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 bg-cream/30"
                      />
                    </div>

                    <div>
                      <label className="block text-xs text-charcoal/60 uppercase tracking-wider mb-2">
                        {t('contact.form.message')} *
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        className="w-full px-4 py-3 border border-navy/10 rounded-lg text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 bg-cream/30 resize-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs text-charcoal/60 uppercase tracking-wider mb-2">
                        {t('contact.form.hearAbout')}
                      </label>
                      <input
                        type="text"
                        name="hearAbout"
                        className="w-full px-4 py-3 border border-navy/10 rounded-lg text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 bg-cream/30"
                      />
                    </div>

                    {status === 'error' && (
                      <p className="text-red-600 text-sm">{t('contact.form.error')}</p>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="w-full bg-navy text-white py-4 rounded-lg text-sm font-medium tracking-wider uppercase hover:bg-navy-light transition-colors disabled:opacity-50"
                    >
                      {status === 'sending' ? t('contact.form.sending') : t('contact.form.submit')}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Offices sidebar */}
            <div className="lg:col-span-2">
              <h3 className="font-serif text-xl text-navy font-semibold mb-6">
                {t('contact.offices.title')}
              </h3>
              <div className="space-y-6">
                {(['zurich', 'zug', 'schwyz'] as const).map((office) => (
                  <div
                    key={office}
                    className="bg-white rounded-xl p-6 shadow-sm border border-navy/5"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <h4 className="font-serif text-lg text-navy font-semibold">
                        {t(`about.offices.${office}`)}
                      </h4>
                    </div>
                    <p className="text-sm text-charcoal/50">Switzerland</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-navy rounded-xl text-center">
                <p className="text-gold font-serif text-lg mb-2">info@movetoswitzerland.com</p>
                <p className="text-white/40 text-xs">
                  {t('contact.confidential')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

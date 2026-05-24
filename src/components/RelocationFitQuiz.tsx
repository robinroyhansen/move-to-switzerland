'use client';

import { useMemo, useState } from 'react';
import { useLocale } from 'next-intl';
import { ConversionLink } from '@/components/ConversionLink';
import { trackConversion } from '@/lib/analytics';
import { getConversionCopy, type QuizResultKey } from '@/lib/conversion-copy';

type QuestionKey = 'profile' | 'priority' | 'origin' | 'timeline';
type SubmitStatus = 'idle' | 'sending' | 'success' | 'error';

type Answers = Record<QuestionKey, string>;

const resultServices: Record<QuizResultKey, string[]> = {
  zug: ['residence-permits', 'company-formation', 'private-banking', 'full-coordination'],
  zurich: ['residence-permits', 'schooling', 'real-estate', 'private-banking'],
  schwyz: ['residence-permits', 'lump-sum-taxation', 'real-estate', 'full-coordination'],
  vaudGeneva: ['residence-permits', 'lump-sum-taxation', 'schooling', 'full-coordination'],
};

function getResultKey(answers: Answers): QuizResultKey {
  if (answers.priority === 'privacy') return 'schwyz';
  if (answers.origin === 'uk' && answers.priority === 'tax') return 'vaudGeneva';
  if (answers.profile === 'private-wealth' && answers.priority === 'tax') return 'vaudGeneva';
  if (answers.priority === 'schools' || answers.priority === 'urban') return 'zurich';
  return 'zug';
}

function mapProfile(profile: string) {
  if (profile === 'family-office') return 'family-office';
  if (profile === 'entrepreneur') return 'entrepreneur';
  return 'private-individual';
}

function mapPrimaryGoal(answers: Answers) {
  if (answers.priority === 'tax') return 'tax-residency';
  if (answers.priority === 'business' || answers.profile === 'family-office') return 'company-family-office';
  if (answers.priority === 'schools') return 'settlement';
  return 'family-relocation';
}

export function RelocationFitQuiz() {
  const locale = useLocale();
  const copy = getConversionCopy(locale);
  const quizCopy = copy.quiz;
  const [answers, setAnswers] = useState<Answers>({
    profile: 'entrepreneur',
    priority: 'tax',
    origin: 'uae',
    timeline: '3-6-months',
  });
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [startedAt] = useState(() => Date.now().toString());

  const resultKey = useMemo(() => getResultKey(answers), [answers]);
  const result = {
    ...quizCopy.results[resultKey],
    services: resultServices[resultKey],
  };

  function setAnswer(key: QuestionKey, value: string) {
    setAnswers((current) => ({ ...current, [key]: value }));
    trackConversion('quiz_answer_selected', {
      question: key,
      value,
    });
  }

  async function submitResult(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    const payload = {
      name,
      email,
      country: quizCopy.originLabels[answers.origin],
      enquiryType: mapProfile(answers.profile),
      primaryGoal: mapPrimaryGoal(answers),
      timeline: answers.timeline,
      servicesNeeded: result.services,
      targetCanton: result.title,
      familySize: answers.profile === 'family' ? 'Family profile from relocation fit quiz' : '',
      existingAdvisors: 'not-sure',
      preferredContact: 'email',
      hearAbout: 'Relocation fit quiz',
      privacyConsent: 'yes',
      formStartedAt: startedAt,
      locale: document.documentElement.lang,
      pageUrl: window.location.href,
      referrer: document.referrer,
      message: [
        'Relocation fit quiz result request.',
        '',
        `Recommended path: ${result.title}`,
        `Summary: ${result.summary}`,
        `Profile: ${answers.profile}`,
        `Priority: ${answers.priority}`,
        `Origin: ${quizCopy.originLabels[answers.origin]}`,
        `Timeline: ${answers.timeline}`,
      ].join('\n'),
    };

    trackConversion('quiz_result_submit', {
      result: result.title,
      timeline: answers.timeline,
      origin: answers.origin,
    });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.error || quizCopy.error);
      }

      setStatus('success');
      setName('');
      setEmail('');
      trackConversion('quiz_result_success', {
        result: result.title,
      });
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : quizCopy.error);
      trackConversion('quiz_result_error', {
        result: result.title,
      });
    }
  }

  return (
    <section id="relocation-fit" className="bg-navy py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-gold/70">
              {quizCopy.eyebrow}
            </p>
            <h2 className="luxury-heading font-serif text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
              {quizCopy.title}
            </h2>
            <p className="mt-6 max-w-xl text-base font-light leading-relaxed text-text-light/50">
              {quizCopy.description}
            </p>
          </div>

          <div className="rounded-lg border border-gold/15 bg-text-light/[0.03] p-5 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              {quizCopy.questions.map((question) => (
                <div key={question.key}>
                  <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-text-light/35">
                    {question.label}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {question.options.map((option) => {
                      const selected = answers[question.key] === option.value;

                      return (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => setAnswer(question.key, option.value)}
                          className={`rounded-full border px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                            selected
                              ? 'border-gold bg-gold text-navy'
                              : 'border-text-light/10 text-text-light/55 hover:border-gold/60 hover:text-gold'
                          }`}
                        >
                          {option.label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-md bg-cream p-6 text-charcoal">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">{quizCopy.likelyRoute}</p>
              <h3 className="mt-3 font-serif text-2xl font-semibold text-navy">{result.title}</h3>
              <p className="mt-3 text-sm font-light leading-relaxed text-charcoal/60">{result.summary}</p>

              <form onSubmit={submitResult} className="mt-6 grid gap-3 sm:grid-cols-[1fr_1fr_auto]">
                <input
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder={quizCopy.namePlaceholder}
                  required
                  className="rounded-sm border border-navy/10 bg-white px-4 py-3 text-sm text-charcoal placeholder-charcoal/30"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder={quizCopy.emailPlaceholder}
                  required
                  className="rounded-sm border border-navy/10 bg-white px-4 py-3 text-sm text-charcoal placeholder-charcoal/30"
                />
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="rounded-full bg-navy px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-text-light transition-colors hover:bg-navy-light disabled:opacity-50"
                >
                  {status === 'sending' ? quizCopy.sending : quizCopy.sendPlan}
                </button>
              </form>

              {status === 'success' && (
                <p className="mt-3 text-sm text-green-700">{quizCopy.success}</p>
              )}
              {status === 'error' && (
                <p className="mt-3 text-sm text-red-700">{errorMessage}</p>
              )}

              <div className="mt-5 flex flex-wrap gap-3">
                <ConversionLink
                  href="/contact"
                  eventName="quiz_full_intake_click"
                  eventParams={{ result: result.title }}
                  className="text-sm font-medium text-gold hover:text-gold-dark"
                >
                  {quizCopy.fullIntake}
                </ConversionLink>
                <ConversionLink
                  href="/swiss-arrival"
                  eventName="quiz_swiss_arrival_click"
                  eventParams={{ result: result.title }}
                  className="text-sm font-medium text-charcoal/45 hover:text-charcoal"
                >
                  {quizCopy.guide}
                </ConversionLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

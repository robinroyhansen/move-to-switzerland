'use client';

import { useMemo, useState } from 'react';
import { ConversionLink } from '@/components/ConversionLink';
import { trackConversion } from '@/lib/analytics';

type QuestionKey = 'profile' | 'priority' | 'origin' | 'timeline';
type SubmitStatus = 'idle' | 'sending' | 'success' | 'error';

type Answers = Record<QuestionKey, string>;

const questions: Array<{
  key: QuestionKey;
  label: string;
  options: Array<{ value: string; label: string }>;
}> = [
  {
    key: 'profile',
    label: 'Who is moving?',
    options: [
      { value: 'entrepreneur', label: 'Founder' },
      { value: 'family', label: 'Family' },
      { value: 'family-office', label: 'Family office' },
      { value: 'private-wealth', label: 'Private wealth' },
    ],
  },
  {
    key: 'priority',
    label: 'What matters most?',
    options: [
      { value: 'tax', label: 'Tax planning' },
      { value: 'schools', label: 'Schools' },
      { value: 'privacy', label: 'Privacy' },
      { value: 'business', label: 'Business setup' },
      { value: 'urban', label: 'City access' },
    ],
  },
  {
    key: 'origin',
    label: 'Current base',
    options: [
      { value: 'denmark', label: 'Denmark' },
      { value: 'uae', label: 'UAE' },
      { value: 'uk', label: 'UK' },
      { value: 'gcc', label: 'GCC' },
      { value: 'eu', label: 'EU' },
      { value: 'other', label: 'Other' },
    ],
  },
  {
    key: 'timeline',
    label: 'Expected timing',
    options: [
      { value: 'urgent', label: 'Urgent' },
      { value: 'under-3-months', label: 'Under 3 months' },
      { value: '3-6-months', label: '3-6 months' },
      { value: 'early-planning', label: 'Early planning' },
    ],
  },
];

const originLabels: Record<string, string> = {
  denmark: 'Denmark',
  uae: 'United Arab Emirates',
  uk: 'United Kingdom',
  gcc: 'GCC',
  eu: 'European Union',
  other: 'Other or not specified',
};

const resultCopy = {
  zug: {
    title: 'Zug first, with Zurich as the practical backup',
    summary:
      'Your answers point toward Zug for tax, company formation, banking access, and founder infrastructure. Zurich should stay in the comparison if schools, hiring, or daily city access matter.',
    services: ['residence-permits', 'company-formation', 'private-banking', 'full-coordination'],
  },
  zurich: {
    title: 'Zurich first, with Zug and Schwyz benchmarked',
    summary:
      'Your answers point toward Zurich for schools, airport access, international community, banking density, and daily life. Zug or Schwyz may still win if tax privacy outranks city access.',
    services: ['residence-permits', 'schooling', 'real-estate', 'private-banking'],
  },
  schwyz: {
    title: 'Schwyz first, with Zug as the operational comparison',
    summary:
      'Your answers point toward Schwyz for privacy, lower-tax living, and a quieter family base. The tradeoff is less institutional density than Zurich or Zug, so sequencing matters.',
    services: ['residence-permits', 'lump-sum-taxation', 'real-estate', 'full-coordination'],
  },
  vaudGeneva: {
    title: 'Vaud or Geneva first, with forfait feasibility checked early',
    summary:
      'Your answers point toward a French-speaking canton where lump-sum taxation, schools, and international family infrastructure can be assessed together before committing.',
    services: ['residence-permits', 'lump-sum-taxation', 'schooling', 'full-coordination'],
  },
};

function getResult(answers: Answers) {
  if (answers.priority === 'privacy') return resultCopy.schwyz;
  if (answers.origin === 'uk' && answers.priority === 'tax') return resultCopy.vaudGeneva;
  if (answers.profile === 'private-wealth' && answers.priority === 'tax') return resultCopy.vaudGeneva;
  if (answers.priority === 'schools' || answers.priority === 'urban') return resultCopy.zurich;
  return resultCopy.zug;
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

  const result = useMemo(() => getResult(answers), [answers]);

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
      country: originLabels[answers.origin],
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
        `Origin: ${originLabels[answers.origin]}`,
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
        throw new Error(data?.error || 'The result could not be sent right now.');
      }

      setStatus('success');
      setName('');
      setEmail('');
      trackConversion('quiz_result_success', {
        result: result.title,
      });
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'The result could not be sent right now.');
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
              Canton fit quiz
            </p>
            <h2 className="luxury-heading font-serif text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
              Find the Swiss route worth discussing first
            </h2>
            <p className="mt-6 max-w-xl text-base font-light leading-relaxed text-text-light/50">
              A four-question filter for serious movers. It will not replace advice, but it gives the first consultation a sharper starting point.
            </p>
          </div>

          <div className="rounded-lg border border-gold/15 bg-text-light/[0.03] p-5 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              {questions.map((question) => (
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
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">Likely first route</p>
              <h3 className="mt-3 font-serif text-2xl font-semibold text-navy">{result.title}</h3>
              <p className="mt-3 text-sm font-light leading-relaxed text-charcoal/60">{result.summary}</p>

              <form onSubmit={submitResult} className="mt-6 grid gap-3 sm:grid-cols-[1fr_1fr_auto]">
                <input
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Name"
                  required
                  className="rounded-sm border border-navy/10 bg-white px-4 py-3 text-sm text-charcoal placeholder-charcoal/30"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Email"
                  required
                  className="rounded-sm border border-navy/10 bg-white px-4 py-3 text-sm text-charcoal placeholder-charcoal/30"
                />
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="rounded-full bg-navy px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-text-light transition-colors hover:bg-navy-light disabled:opacity-50"
                >
                  {status === 'sending' ? 'Sending' : 'Send plan'}
                </button>
              </form>

              {status === 'success' && (
                <p className="mt-3 text-sm text-green-700">Your quiz result was sent. We will use it as context for the first reply.</p>
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
                  Complete the full confidential intake
                </ConversionLink>
                <ConversionLink
                  href="/swiss-arrival"
                  eventName="quiz_swiss_arrival_click"
                  eventParams={{ result: result.title }}
                  className="text-sm font-medium text-charcoal/45 hover:text-charcoal"
                >
                  Get the Swiss Arrival guide
                </ConversionLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

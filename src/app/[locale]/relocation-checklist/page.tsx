import { PracticalResources } from '@/components/PracticalResources';
import NextLink from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import checklist from '@/content/relocation-checklist.json';
import { Checklist } from './Checklist';

const url = 'https://move-to-switzerland.com/en/relocation-checklist';
const title = 'Moving to Switzerland Checklist: Plan, Arrive & Settle';
const description = 'A free 18-step Swiss relocation checklist with official sources, saved progress and a printable PDF. Plan residence, housing, insurance, customs and arrival.';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== 'en') return { robots: { index: false, follow: false } };
  return { title, description, alternates: { canonical: url, languages: { en: url } }, openGraph: { title, description, url, locale: 'en', type: 'website' } };
}

export default async function RelocationChecklistPage({ params }: { params: Promise<{ locale: string }> }) {
  if ((await params).locale !== 'en') notFound();
  return (
    <article className="relocation-checklist bg-cream pb-20 pt-32 text-navy sm:pt-40">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'WebPage', '@id': url, url, name: title, description, inLanguage: 'en', dateModified: checklist.updated, publisher: { '@id': 'https://move-to-switzerland.com/#organization' }, citation: checklist.sources.map(source => source.url) }) }} />
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <header className="mb-10">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-charcoal/65">A practical guide from Move to Switzerland</p>
          <h1 className="max-w-3xl font-serif text-5xl font-semibold leading-[1.08] sm:text-6xl">Your move to Switzerland, one step at a time.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-charcoal/80">From the first residence question to your first weeks in a new home. Use this checklist to organise the decisions, documents and conversations behind your move.</p>
          <p className="mt-5 text-sm leading-6 text-charcoal/70">Helping hundreds of people move to Switzerland since 2012. <NextLink href="/en/about" className="underline underline-offset-4">Meet our team</NextLink>.</p>
          <p className="mt-2 text-xs text-charcoal/65">Updated 10 September 2026 · Free to use · No email required</p>
        </header>
        <aside className="mb-8 border-l-2 border-gold pl-5 text-sm leading-7 text-charcoal/80">
          Start with your residence route. Requirements vary by nationality, activity, household and canton. This is a planning aid; confirm the rules and deadlines for your circumstances with the relevant authority and your advisers. Skip any task that does not apply to you.
        </aside>
        <Checklist />
        <section className="mt-14 border-t border-navy/15 pt-8" aria-labelledby="checklist-sources">
          <h2 id="checklist-sources" className="font-serif text-3xl font-semibold">Official sources</h2>
          <p className="mt-3 text-sm leading-7 text-charcoal/70">Use the live guidance below to confirm your position. Our task sequence is a practical planning framework, not a list of requirements that applies to every move.</p>
          <ol className="mt-5 list-decimal space-y-3 pl-5 text-sm leading-6">
            {checklist.sources.map(source => <li key={source.id}><a href={source.url} className="underline underline-offset-4 hover:text-gold-dark">{source.name}</a></li>)}
          </ol>
        </section>
        <section className="checklist-cta mt-14 bg-navy p-7 text-white sm:p-10">
          <h2 className="font-serif text-3xl font-semibold">Turn the checklist into your relocation plan.</h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-white/80">Tell us your relocation goal. We offer online consultations and in-person meetings in Zurich, with offices in Zurich, Zug and Schwyz.</p>
          <NextLink href="/en/contact" className="mt-6 inline-flex min-h-11 items-center bg-gold px-6 py-3 text-sm font-semibold text-navy hover:bg-gold-light">Discuss your move</NextLink>
        </section>
        <p className="checklist-print-footer mt-8 text-xs leading-6 text-charcoal/65">Move to Switzerland · WorkWorkWork AG · Fänn West 10, 6403 Küssnacht am Rigi, Switzerland<br />move-to-switzerland.com/en/relocation-checklist</p>
      </div>
      <PracticalResources exclude="/relocation-checklist" />
    </article>
  );
}

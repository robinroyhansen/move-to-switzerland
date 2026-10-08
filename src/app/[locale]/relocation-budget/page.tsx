import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BudgetPlanner } from './BudgetPlanner';
import { PracticalResources } from '@/components/PracticalResources';

const url = 'https://move-to-switzerland.com/en/relocation-budget';
const title = 'Swiss Relocation Budget Planner: Compare Zurich, Zug & Schwyz';
const description = 'Build your own Swiss relocation budget. Compare monthly spending, moving costs and refundable deposits for Zurich, Zug and Schwyz. Free CSV download.';
const tax = 'https://www.estv.admin.ch/en/swiss-tax-statistics';
const health = 'https://www.bag.admin.ch/en/health-insurance-requirement-to-obtain-insurance-for-persons-resident-in-switzerland';
const link = 'text-navy underline decoration-gold/70 underline-offset-4 hover:decoration-navy';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  if ((await params).locale !== 'en') return { robots: { index: false, follow: false } };
  return { title, description, alternates: { canonical: url, languages: { en: url } }, openGraph: { title, description, url, type: 'website', locale: 'en' } };
}

export default async function BudgetPage({ params }: { params: Promise<{ locale: string }> }) {
  if ((await params).locale !== 'en') notFound();
  return <>
    <article className="bg-cream pb-10 pt-32 sm:pt-40">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context':'https://schema.org', '@type':'WebPage', '@id':url, url, name:title, description, inLanguage:'en', datePublished:'2026-09-10', dateModified:'2026-09-10', publisher:{'@id':'https://move-to-switzerland.com/#organization'}, citation:[tax,health] }) }} />
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <header className="max-w-3xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-charcoal/65">A practical planning tool · CHF</p>
          <h1 className="font-serif text-5xl font-semibold leading-[1.08] text-navy sm:text-6xl">What will your move to Switzerland cost?</h1>
          <p className="mt-6 text-lg leading-8 text-charcoal/80">Build a budget around your household and the homes you are actually considering. Compare monthly spending and first-year cash needs for Zurich, Zug and Schwyz using your own figures.</p>
          <p className="mt-5 text-sm leading-7 text-charcoal/70">Free to use. No account or email required. Your entered amounts are not sent to our server or analytics provider.</p>
        </header>
        <section className="mt-10 max-w-[72ch] text-base leading-8 text-charcoal/80" aria-labelledby="budget-preparation">
          <h2 id="budget-preparation" className="mb-4 font-serif text-3xl font-semibold text-navy">Compare the same household in each place.</h2>
          <p>Use a consistent move date, household size, school choice and travel pattern. Get an actual rental quote for each address, an insurance quote for each person, and an estimate of any tax due. A canton name on its own cannot tell you the cost of your move.</p>
          <p className="mt-4">The Federal Tax Administration provides calculation and comparison tools and explains that tax rates and bases vary by canton and municipality. Use the same tax year and assumptions, and have your adviser check the result. <a href={tax} className={link}>Official Swiss tax comparison tools</a>.</p>
          <p className="mt-4">Check the health-insurance position for everyone moving. For those subject to compulsory cover, the Federal Office of Public Health explains when the obligation starts, how enrolment works and possible exceptions. Keep the premium separate from a reserve for out-of-pocket costs. <a href={health} className={link}>Official health-insurance guidance</a>.</p>
        </section>
        <BudgetPlanner />
        <div className="max-w-[72ch] space-y-9 text-base leading-8 text-charcoal/80">
          <section>
            <h2 className="mb-4 font-serif text-3xl font-semibold text-navy">Check the costs a monthly comparison can miss.</h2>
            <ul className="list-disc space-y-3 pl-5">
              <li><strong className="text-navy">Deposits:</strong> keep refundable security separate from spending. Confirm how much cash is tied up and on what terms.</li>
              <li><strong className="text-navy">Housing overlap:</strong> include only the extra temporary accommodation or departure-country rent, avoiding the Swiss rent already counted monthly.</li>
              <li><strong className="text-navy">Annual and term bills:</strong> turn school, insurance and other periodic invoices into monthly equivalents for comparison, then record their actual payment dates separately.</li>
              <li><strong className="text-navy">Income timing:</strong> compare the budget with the income that will actually be available. A first-year total does not show when a deposit or invoice is due.</li>
            </ul>
          </section>
          <section>
            <h2 className="mb-4 font-serif text-3xl font-semibold text-navy">Use the result to resolve decisions.</h2>
            <p>A lower total with several missing fields is not a cheaper plan. Complete the same categories for each location, then look at what drives the difference. A housing saving may be offset by commuting or childcare; a refundable deposit affects liquidity without being ordinary spending.</p>
            <p className="mt-4">Bring the comparison and its unanswered questions to your advisers. Our <Link href="/en/cantons#local-planning" className={link}>local planning guide</Link> explains the next registration questions, and the <Link href="/en/renting-in-switzerland" className={link}>rental guide</Link> helps you assess the proposed home.</p>
            <Link href="/en/contact" className="mt-6 inline-flex min-h-12 items-center rounded-sm bg-navy px-6 py-3 font-semibold text-white hover:bg-navy-light">Discuss your relocation plan</Link>
          </section>
          <p className="text-sm leading-7 text-charcoal/65">Created by <Link href="/en/about" className={link}>Move to Switzerland</Link>, helping hundreds of people move since 2012. Published 10 September 2026. This worksheet adds your inputs; it is not a tax calculation, a quote or individual financial advice.</p>
        </div>
      </div>
    </article>
    <PracticalResources exclude="/relocation-budget" />
  </>;
}

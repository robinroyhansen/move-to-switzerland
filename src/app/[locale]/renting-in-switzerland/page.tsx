import { setRequestLocale } from 'next-intl/server';
import { defaultOgImage } from '@/lib/seo';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PracticalResources } from '@/components/PracticalResources';

const url = 'https://move-to-switzerland.com/en/renting-in-switzerland';
const title = 'Renting in Switzerland: First Home, Application & Deposit';
const description = 'A practical guide to renting your first home in Zurich, Zug or Schwyz: application documents, temporary housing, deposits, lease checks and the handover.';
const bwo = 'https://www.bwo.admin.ch/dam/fr/sd-web/xKj1v2BhllVl/englisch.pdf';
const zurich = 'https://www.stadt-zuerich.ch/zuzug';
const kuessnacht = 'https://www.kuessnacht.ch/verwaltung/verwaltung/dienstleistungen.html/27/service/373';
const link = 'text-navy underline decoration-gold/70 underline-offset-4 hover:decoration-navy';
const h2 = 'mb-5 font-serif text-3xl font-semibold leading-tight text-navy sm:text-4xl';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  if ((await params).locale !== 'en') return { robots: { index: false, follow: false } };
  return { title, description, alternates: { canonical: url, languages: { en: url } }, openGraph: { title, description, url, type: 'article', locale: 'en', publishedTime: '2026-09-10', modifiedTime: '2026-09-10', images: [defaultOgImage] } };
}

export default async function RentingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  if (locale !== 'en') notFound();
  return <>
    <article className="bg-cream pb-12 pt-32 sm:pt-40">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context':'https://schema.org', '@type':'Article', headline:title, description, mainEntityOfPage:url, inLanguage:'en', datePublished:'2026-09-10', dateModified:'2026-09-10', author:{'@type':'Organization',name:'Move to Switzerland',url:'https://move-to-switzerland.com/en/about'}, publisher:{'@id':'https://move-to-switzerland.com/#organization'}, citation:[bwo,zurich,kuessnacht] }) }} />
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <header className="max-w-3xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-charcoal/65">Housing · Zurich, Zug and Schwyz</p>
          <h1 className="font-serif text-5xl font-semibold leading-[1.08] text-navy sm:text-6xl">Renting your first home in Switzerland.</h1>
          <p className="mt-6 text-lg leading-8 text-charcoal/80">A good rental decision connects your address, arrival paperwork and daily routine. Use this guide to prepare the questions and documents before you apply.</p>
          <p className="mt-5 text-sm leading-7 text-charcoal/70">By <Link href="/en/about" className={link}>Move to Switzerland</Link>. Helping hundreds of people move to Switzerland since 2012.<br />Published and sources checked 10 September 2026.</p>
        </header>
        <nav aria-label="On this page" className="my-10 border-y border-navy/15 py-5">
          <p className="text-sm font-semibold text-navy">In this guide</p>
          <ol className="mt-3 flex flex-wrap gap-x-6 gap-y-3 text-sm">
            {[['shortlist','Choose the address'],['application','Prepare your application'],['temporary','Temporary housing'],['lease','Lease and deposit'],['handover','Move-in day']].map(([id,label]) => <li key={id}><a href={`#${id}`} className={link}>{label}</a></li>)}
          </ol>
        </nav>
        <div className="max-w-[72ch] space-y-12 text-base leading-8 text-charcoal/80">
          <section id="shortlist" className="scroll-mt-28">
            <h2 className={h2}>Start with two or three workable addresses.</h2>
            <p>Make a short list of what the home must support: your work location, household size, move-in date, school or childcare plans, accessibility and pets. Rank these before viewing properties. A home that looks attractive on a map may create a difficult school run or require a second move.</p>
            <p className="mt-4">For Zurich, test the journey to the actual office or campus. For Zug, compare the specific municipality and address. In Schwyz, prepare separate comparisons for homes in Küssnacht, the town of Schwyz or other municipalities. Record the full journey at the time you would normally travel, including connections and walking.</p>
            <p className="mt-4">Compare the advertised rent, additional charges, parking, commuting and any overlapping accommodation. Keep the security deposit separate from spending: it affects the cash you need at the start. The <Link href="/en/relocation-budget" className={link}>budget planner</Link> separates recurring costs, setup spending and refundable cash tied up.</p>
          </section>
          <section id="application" className="scroll-mt-28">
            <h2 className={h2}>Prepare the application before the viewing.</h2>
            <p>The Federal Office for Housing describes applications asking about employment, salary, household and nationality or residence status; a debt-enforcement-register extract is also commonly requested. Check the property manager&apos;s current list. <a href={bwo} className={link}>Official renting guide, pages 9–11 (PDF)</a>.</p>
            <p className="mt-4">If you are new to Switzerland, ask which evidence the manager accepts when you do not yet have a Swiss record or residence card. Explain the status accurately and ask whether alternative documentation is useful. An application and a residence application are separate processes; neither guarantees the other will be approved.</p>
            <ul className="mt-4 list-disc space-y-3 pl-5">
              <li>Keep the requested documents in one folder and check names, dates and contact details for consistency.</li>
              <li>Ask whether all adult applicants need to provide separate information and sign.</li>
              <li>Confirm how to deliver sensitive documents securely to the actual property manager.</li>
              <li>Record when the decision is expected and how you should follow up.</li>
            </ul>
            <p className="mt-4">Avoid sending a full financial dossier to every advert. Verify who manages the property and provide the documents requested for that application through their agreed channel.</p>
          </section>
          <section id="temporary" className="scroll-mt-28">
            <h2 className={h2}>Check temporary housing before paying.</h2>
            <p>Ask the provider what written accommodation evidence it can supply, then ask the registration office whether that evidence is suitable for your circumstances. Keep both replies. Do this while you can still change the booking.</p>
            <p className="mt-4">Zurich&apos;s arrival instructions list a lease, accommodation certificate or sublease. Küssnacht lists a rental or purchase agreement, housing evidence or an owner&apos;s confirmation. Read the complete requirements for your nationality and type of move. <a href={zurich} className={link}>Zurich registration</a>; <a href={kuessnacht} className={link}>Küssnacht registration</a>.</p>
            <p className="mt-4">Also confirm the minimum stay, extension process, cancellation terms, mail arrangements and what happens if your permanent home is delayed. A slightly longer initial stay may simplify planning, but compare the actual terms rather than assuming you can extend later.</p>
          </section>
          <section id="lease" className="scroll-mt-28">
            <h2 className={h2}>Understand the lease and the upfront payment.</h2>
            <p>The official housing guide explains that a residential rental deposit is capped at three months&apos; rent and held in a special bank account in the tenant&apos;s name. It also explains that service-charge advances can produce a later balancing payment or refund. Check the proposed agreement and payment instructions. <a href={bwo} className={link}>Federal Office for Housing, pages 10–11 (PDF)</a>.</p>
            <p className="mt-4">Before signing, ask for clear answers to these questions:</p>
            <ol className="mt-4 list-decimal space-y-3 pl-5">
              <li>What exactly is included in the rent and which costs are separate?</li>
              <li>What are the start date, minimum term, notice rules and any fixed end date?</li>
              <li>How are the deposit and any other payments arranged?</li>
              <li>What applies to pets, parking, laundry, storage or furniture taken over?</li>
              <li>Who handles repairs and how are existing defects recorded?</li>
            </ol>
            <p className="mt-4">If you are comparing a deposit account with a guarantee or insurance product, check the fees, cover and repayment obligations separately. A recurring fee is not the same thing as a refundable deposit. Get unclear contract terms explained before you commit.</p>
          </section>
          <section id="handover" className="scroll-mt-28">
            <h2 className={h2}>Use the handover to close the gaps.</h2>
            <p>The official housing guide describes a joint inspection and written record of defects when the apartment is handed over. Read that record carefully. <a href={bwo} className={link}>Official handover guidance (PDF)</a>.</p>
            <p className="mt-4">As a practical preparation step, bring your lease, the agreed inventory and a way to take dated photographs. Check keys, access, appliances and any items left by the previous tenant. Ask how to report problems you discover after moving in, and keep a copy of the signed record.</p>
            <p className="mt-4">Then confirm mail access, utilities, internet, insurance and the local registration appointment. Use the <Link href="/en/relocation-checklist" className={link}>arrival checklist</Link> to keep those tasks visible while you unpack.</p>
          </section>
          <section className="border-t border-navy/15 pt-8">
            <h2 className={h2}>Bring your housing questions to the first conversation.</h2>
            <p>Tell us where you are considering living, your target arrival month and what is still unresolved. We can discuss housing coordination alongside residence planning, schools and settlement. Online consultations are available, with in-person meetings in Zurich.</p>
            <Link href="/en/contact" className="mt-6 inline-flex min-h-12 items-center rounded-sm bg-navy px-6 py-3 font-semibold text-white hover:bg-navy-light">Discuss your relocation</Link>
            <p className="mt-6 text-sm leading-7 text-charcoal/65">This guide combines official guidance with our suggested preparation steps. It is general information; the actual lease, your circumstances and applicable rules need individual review. No guarantee of a rental offer or residence approval is implied.</p>
          </section>
        </div>
      </div>
    </article>
    <PracticalResources exclude="/renting-in-switzerland" />
  </>;
}

import Link from 'next/link';

export const localKnowledgeUpdated = '2026-09-10';
export const localKnowledgeSlugs = new Set(['swiss-residency-permits-guide', 'lex-koller-swiss-real-estate', 'best-international-schools-zurich-zug-schwyz', 'relocating-to-switzerland-timeline']);
const sources = {
  zurich: 'https://www.stadt-zuerich.ch/zuzug',
  zug: 'https://www.zg.ch/behoerden/gemeinden/steinhausen/verwaltung/praesidiales/zu-und-wegzug',
  kuessnacht: 'https://www.kuessnacht.ch/verwaltung/verwaltung/dienstleistungen.html/27/service/373',
  tax: 'https://www.estv.admin.ch/en/swiss-tax-statistics',
  school: 'https://www.stadt-zuerich.ch/schulen',
  letzi: 'https://www.stadt-zuerich.ch/de/bildung/volksschule/schulorganisation/schulkreise/letzi/schulbetrieb.html',
};
const linkClass = 'text-navy underline underline-offset-4 hover:text-gold-dark';
const headingClass = 'mt-8 font-serif text-2xl font-semibold leading-snug text-navy';

function Source({ id, children }: { id: keyof typeof sources; children: React.ReactNode }) {
  return <a href={sources[id]} className={linkClass}>{children}</a>;
}

export function LocalKnowledge({ topic = 'cantons' }: { topic?: string }) {
  return (
    <section id="local-planning" className="my-12 border-t border-navy/15 pt-10 text-base leading-8 text-charcoal/80" aria-labelledby="local-planning-heading">
      {topic === 'cantons' ? <>
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-charcoal/65">Zurich, Zug and Schwyz in practice</p>
        <h2 id="local-planning-heading" className="mt-4 font-serif text-3xl font-semibold leading-tight text-navy sm:text-4xl">Choose a municipality, then plan your move.</h2>
        <p className="mt-5">A canton comparison is a starting point. Your actual address determines which local office you deal with and which daily journeys you make. Narrow your search to two or three municipalities, then test each against your residence route, household budget and family routine.</p>
        <h3 className={headingClass}>Zurich: distinguish the city from the canton</h3>
        <p className="mt-3">The City of Zurich requires people arriving from abroad to register in person by appointment at Personenmeldeamt Zürich Süd; registration is due within 14 days and can take place only after the actual move-in. For a family registration, every family member must attend. Build that appointment into your first fortnight and confirm the documents before attending. These are city instructions: if your home is in another municipality in Canton Zurich, use that municipality&apos;s process. <Source id="zurich">City of Zurich registration guidance</Source>.</p>
        <h3 className={headingClass}>Zug: confirm which office handles your registration</h3>
        <p className="mt-3">Do not assume every arrival starts at the town hall. For example, Steinhausen directs foreign nationals moving from abroad, another canton or another Zug municipality to the cantonal migration office for registration. That is a useful question to resolve before your first appointment: who handles your nationality and move type, and which documents do they need? <Source id="zug">Steinhausen&apos;s official move-in guidance</Source>.</p>
        <h3 className={headingClass}>Schwyz: check the rules for your exact destination</h3>
        <p className="mt-3">A move to Küssnacht is handled locally through its Einwohneramt. The district&apos;s document list for foreign nationals includes accommodation evidence, identity and civil-status documents, with additional items depending on the move. It also asks self-employed applicants for a business plan. Non-EU/EFTA nationals moving from another canton are instructed to have the canton-change application examined before registration. Ask which of these requirements apply to you. <Source id="kuessnacht">Küssnacht registration and document list</Source>.</p>
        <h3 className={headingClass}>Compare the weekly routine before the headline tax rate</h3>
        <p className="mt-3">Use the same income, wealth and household assumptions when comparing municipalities. The Federal Tax Administration provides a tax calculator and explains that cantons and municipalities have their own rates and bases. Save the tax year and assumptions with every estimate, then ask your adviser to check the result. <Source id="tax">Official tax comparison tools</Source>.</p>
        <ul className="mt-4 list-disc space-y-3 pl-5">
          <li><strong className="text-navy">If work is in Zurich:</strong> test the full trip from the proposed home to the office at your usual commuting time, including connections and the walk at each end.</li>
          <li><strong className="text-navy">If your business is in Zug:</strong> separate the company&apos;s location from where your household will live. Compare both sets of costs and ask your advisers about the consequences.</li>
          <li><strong className="text-navy">If comparing homes in Schwyz:</strong> assess the actual journey from each address. A home in Küssnacht, the town of Schwyz or another municipality should have its own transport, school and cost comparison.</li>
          <li><strong className="text-navy">If children are moving:</strong> confirm the school route, language support and childcare arrangements before narrowing the housing search.</li>
        </ul>
        <h3 className={headingClass}>Bring a short decision brief to your consultation</h3>
        <p className="mt-3">A useful brief has five items: your nationality and intended activity, target move month, household members, two or three preferred municipalities, and the questions you still need answered. We offer online consultations and in-person meetings in Zurich, with offices in Zurich, Zug and Schwyz. Our company address is Fänn West 10, 6403 Küssnacht am Rigi.</p>
      </> : topic === 'swiss-residency-permits-guide' ? <>
        <h2 id="local-planning-heading" className="font-serif text-3xl font-semibold text-navy">From a residence route to a local registration appointment</h2>
        <p className="mt-4">Knowing which permit you may qualify for is only one part of the move. Before arriving, confirm the office handling your registration, the accommodation evidence it accepts and who must attend. Municipality registration and permission to work should be checked separately.</p>
        <p className="mt-4">In the City of Zurich, arrivals from abroad require an in-person appointment at Zürich Süd, with all family members present for a family registration. By contrast, Steinhausen in Canton Zug directs foreign nationals to the cantonal migration office. The right appointment depends on where you will actually live. <Source id="zurich">Zurich&apos;s appointment instructions</Source>; <Source id="zug">Steinhausen&apos;s registration instructions</Source>.</p>
        <p className="mt-4">If your first home is temporary, send the municipality a description of the arrangement before booking and ask which accommodation evidence it requires. Keep its reply with your application documents. Do not assume a holiday booking alone will resolve residence registration.</p>
      </> : topic === 'lex-koller-swiss-real-estate' ? <>
        <h2 id="local-planning-heading" className="font-serif text-3xl font-semibold text-navy">Before choosing a property in Zurich, Zug or Schwyz</h2>
        <p className="mt-4">Separate three decisions: whether you may acquire the property, whether it fits your residence plan, and whether the address works for daily life. A purchase decision should follow a review of the property and your circumstances by the appropriate advisers.</p>
        <p className="mt-4">For the address comparison, keep one worksheet per home: municipality, total housing cost, office commute, school and childcare route, and any unresolved registration questions. Use identical household assumptions in the <Source id="tax">Federal Tax Administration&apos;s comparison tools</Source> so that different estimates are actually comparable.</p>
        <p className="mt-4">Before paying for temporary accommodation, ask its provider for the written housing evidence it can supply and confirm acceptance with the registration office. Zurich lists a lease, accommodation certificate or sublease among its arrival documents; Küssnacht lists a rental or purchase agreement, housing evidence or an owner&apos;s confirmation. Read the complete local list for your circumstances. <Source id="zurich">Zurich</Source>; <Source id="kuessnacht">Küssnacht</Source>.</p>
      </> : topic === 'best-international-schools-zurich-zug-schwyz' ? <>
        <h2 id="local-planning-heading" className="font-serif text-3xl font-semibold text-navy">Plan the school journey together with the home search</h2>
        <p className="mt-4">Build a shortlist around your child&apos;s age, current curriculum, language needs and intended length of stay. For each school, confirm current availability, entry requirements, support, fees and the actual campus before choosing accommodation. A school name or reputation does not establish that a suitable place is available.</p>
        <p className="mt-4">Include local public schooling in the comparison. The City of Zurich provides a school map and directory by school district. Its Letzi school district asks families arriving from outside the city to submit a move-in form to the district school authority. Use the authority responsible for your intended address to confirm placement and support. <Source id="school">Zurich school directory</Source>; <Source id="letzi">Letzi move-in procedure</Source>.</p>
        <p className="mt-4">Check childcare and the journey separately from admission. Test the door-to-door route on a normal school day and plan who handles collection, activities and work travel. Repeat that exercise for each proposed home in Zurich, Zug or Schwyz.</p>
      </> : <>
        <h2 id="local-planning-heading" className="font-serif text-3xl font-semibold text-navy">Put local appointments into the relocation timeline</h2>
        <p className="mt-4">A useful timeline names the owner and dependency of each task. For example, a registration appointment needs the right identity and housing evidence; a school enquiry needs your child&apos;s details and intended address; a moving quote needs a goods inventory and destination.</p>
        <p className="mt-4">For an arrival from abroad into the City of Zurich, plan the required in-person appointment after your actual move-in and within the city&apos;s 14-day registration period. If no suitable slot is available, contact the registration office promptly for instructions. <Source id="zurich">City of Zurich arrival guidance</Source>.</p>
        <p className="mt-4">Before booking movers, agree which decisions are still conditional on your residence application or housing contract. Keep a fallback arrival date and review the cancellation terms of temporary accommodation. Our free checklist turns these dependencies into tasks you can track.</p>
      </>}
      <p className="mt-6 text-sm"><Link href="/en/relocation-budget" className={linkClass}>Build your budget</Link> · <Link href="/en/renting-in-switzerland" className={linkClass}>Prepare your rental application</Link> · <Link href="/en/cantons#local-planning" className={linkClass}>Compare local planning considerations</Link> · <Link href="/en/relocation-checklist" className={linkClass}>Use the relocation checklist</Link></p>
      <p className="mt-5 text-xs leading-6 text-charcoal/65">Local guidance checked 10 September 2026. Official procedures can change; confirm the instructions for your nationality, address and move type before applying. Planning questions are our suggested preparation framework.</p>
    </section>
  );
}

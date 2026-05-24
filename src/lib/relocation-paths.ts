export type RelocationPath = {
  slug: string;
  audience: string;
  title: string;
  description: string;
  metaDescription: string;
  startingPoint: string;
  likelyCantons: string[];
  urgentQuestions: string[];
  workstreams: string[];
  proofPoints: string[];
};

export const relocationPaths: RelocationPath[] = [
  {
    slug: 'from-denmark',
    audience: 'Danish founders and families',
    title: 'Move to Switzerland from Denmark',
    description:
      'A practical path for Danish entrepreneurs, investors, and families comparing Swiss residency, tax, banking, schools, and settlement.',
    metaDescription:
      'Relocation advisory for Danish entrepreneurs and families moving to Switzerland. Compare cantons, permits, tax, banking, schools, and settlement.',
    startingPoint: 'Denmark',
    likelyCantons: ['Zug', 'Schwyz', 'Zurich'],
    urgentQuestions: [
      'When should Danish tax exit planning begin?',
      'Which Swiss canton fits family life and business ownership?',
      'How should banking, schools, housing, and permits be sequenced?',
    ],
    workstreams: [
      'Danish exit and Swiss entry timeline',
      'Canton comparison for tax, schools, and airport access',
      'B-permit application and family inclusion',
      'Private banking and source-of-wealth preparation',
    ],
    proofPoints: [
      'Built for cross-border founders who need one accountable coordinator',
      'Covers practical settlement, not only tax theory',
      'Designed for families that need school timing handled early',
    ],
  },
  {
    slug: 'from-uae',
    audience: 'UAE residents and post-exit founders',
    title: 'Move to Switzerland from the UAE',
    description:
      'A coordinated relocation route for UAE-based founders, investors, and families moving wealth, residency, schools, and governance to Switzerland.',
    metaDescription:
      'Swiss relocation advisory for UAE residents, founders, and families. Coordinate permits, banking, wealth documentation, schools, and canton selection.',
    startingPoint: 'UAE',
    likelyCantons: ['Zug', 'Zurich', 'Geneva'],
    urgentQuestions: [
      'How should source-of-wealth documentation be prepared for Swiss banks?',
      'Can a UAE company structure be reorganized before Swiss residency?',
      'Which canton makes sense for family, banking, and business access?',
    ],
    workstreams: [
      'Pre-immigration asset and company review',
      'Swiss banking readiness and documentation narrative',
      'Residence permit and family relocation sequence',
      'International school shortlisting and visits',
    ],
    proofPoints: [
      'Strong fit for crypto, private equity, and operating-company wealth',
      'Parallel handling of permits, banking, housing, and schools',
      'Useful for families moving quickly after a liquidity event',
    ],
  },
  {
    slug: 'from-uk',
    audience: 'UK non-doms, founders, and family offices',
    title: 'Move to Switzerland from the UK',
    description:
      'A Swiss relocation path for UK residents reviewing tax residency, family settlement, wealth governance, banking, and long-term security.',
    metaDescription:
      'Swiss relocation advisory for UK residents, founders, non-doms, and family offices moving to Switzerland. Plan residency, tax, banking, and schools.',
    startingPoint: 'United Kingdom',
    likelyCantons: ['Geneva', 'Vaud', 'Zurich', 'Zug'],
    urgentQuestions: [
      'When does UK tax residency end and Swiss tax residency begin?',
      'Is lump-sum taxation viable for the family profile?',
      'Which school and canton combination protects the family timeline?',
    ],
    workstreams: [
      'UK departure and Swiss arrival timeline',
      'Forfait fiscal feasibility review',
      'School, housing, and canton comparison',
      'Banking, governance, and advisor coordination',
    ],
    proofPoints: [
      'Built for families who need a clean move, not fragmented advice',
      'Connects Swiss lifestyle decisions with tax and banking realities',
      'Keeps existing UK advisors coordinated with Swiss execution',
    ],
  },
  {
    slug: 'swiss-residence-permit-entrepreneurs',
    audience: 'Entrepreneurs and active business owners',
    title: 'Swiss Residence Permit for Entrepreneurs',
    description:
      'A founder-focused route through Swiss residency, company substance, banking, source-of-wealth documentation, and family settlement.',
    metaDescription:
      'Swiss residence permit advisory for entrepreneurs. Plan canton selection, company formation, banking, permits, and family relocation.',
    startingPoint: 'International',
    likelyCantons: ['Zug', 'Zurich', 'Vaud'],
    urgentQuestions: [
      'Should the Swiss company be formed before or after permit submission?',
      'What economic substance does the canton expect?',
      'How should business wealth be documented for banks and authorities?',
    ],
    workstreams: [
      'Founder profile and canton fit assessment',
      'Company formation and governance setup',
      'Permit application and family inclusion',
      'Banking readiness, leases, insurance, and settlement',
    ],
    proofPoints: [
      'Best for founders who need business and family workstreams aligned',
      'Connects permits with company substance and banking credibility',
      'Reduces delays from incomplete documentation sequencing',
    ],
  },
  {
    slug: 'lump-sum-taxation-switzerland',
    audience: 'High-net-worth individuals',
    title: 'Lump-Sum Taxation in Switzerland',
    description:
      'A discreet planning route for eligible foreign nationals assessing forfait fiscal, canton choice, living-cost base, and residency timing.',
    metaDescription:
      'Lump-sum taxation advisory in Switzerland. Assess forfait fiscal eligibility, canton choice, taxable base, permits, and relocation timing.',
    startingPoint: 'International',
    likelyCantons: ['Vaud', 'Geneva', 'Valais', 'Schwyz', 'Zug'],
    urgentQuestions: [
      'Is forfait fiscal realistic for the family profile?',
      'Which cantons are worth approaching first?',
      'What lifestyle and housing assumptions drive the taxable base?',
    ],
    workstreams: [
      'Eligibility and canton shortlist',
      'Tax ruling preparation and authority dialogue',
      'Residence permit and housing coordination',
      'Banking, insurance, and annual compliance handover',
    ],
    proofPoints: [
      'Combines tax ruling work with the real relocation plan',
      'Keeps canton negotiation connected to lifestyle reality',
      'Useful before public commitments or sensitive documentation',
    ],
  },
  {
    slug: 'zug-relocation-advisor',
    audience: 'Founders, family offices, and crypto investors',
    title: 'Zug Relocation Advisor',
    description:
      'A focused relocation path for clients considering Zug for tax, crypto banking, company formation, international schools, and family life.',
    metaDescription:
      'Zug relocation advisor for entrepreneurs, family offices, and crypto investors. Coordinate permits, company setup, banking, schools, and housing.',
    startingPoint: 'International',
    likelyCantons: ['Zug'],
    urgentQuestions: [
      'Is Zug the right fit, or only the obvious one?',
      'Can banking, school places, and housing be secured on the same timeline?',
      'What corporate substance is needed for the planned structure?',
    ],
    workstreams: [
      'Zug fit assessment against Zurich, Schwyz, and Vaud',
      'Permit and company formation sequencing',
      'Crypto-friendly and traditional banking introductions',
      'School, housing, insurance, and daily settlement setup',
    ],
    proofPoints: [
      'Designed for clients who need speed without losing discretion',
      'Balances low-tax appeal with practical family logistics',
      'Useful for crypto-native wealth and active operating companies',
    ],
  },
];

export const relocationPathSlugs = relocationPaths.map((path) => path.slug);

export function getRelocationPath(slug: string) {
  return relocationPaths.find((path) => path.slug === slug);
}

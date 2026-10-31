export const monthlyCosts = [
  { id: 'rent', label: 'Base rent', hint: 'Use the actual listing or offer.' },
  { id: 'charges', label: 'Rental service charges', hint: 'Enter separately only if excluded from your rent figure.' },
  { id: 'health', label: 'Household health-insurance premiums', hint: 'Add the quoted premiums for everyone moving.' },
  { id: 'tax', label: 'Tax provision', hint: 'Use an adviser-checked monthly estimate. Do not deduct it twice when comparing net income.' },
  { id: 'schools', label: 'Childcare and school fees', hint: 'Convert annual or term charges into a monthly equivalent.' },
  { id: 'transport', label: 'Transport and parking', hint: 'Include the travel pattern and parking you will actually use.' },
  { id: 'food', label: 'Food and household spending', hint: 'Use your own household assumptions.' },
  { id: 'utilities', label: 'Utilities, internet and phone', hint: 'Include only costs not already counted in service charges.' },
  { id: 'insurance', label: 'Other insurance and health-cost reserve', hint: 'Allow for cover and out-of-pocket costs relevant to you.' },
  { id: 'other', label: 'Other recurring costs', hint: 'Include leisure, subscriptions and annual bills divided by 12.' },
] as const;
export const upfrontCosts = [
  { id: 'setup', label: 'Moving and setup spending', hint: 'Quotes for moving, travel, furniture, installation and administration.' },
  { id: 'overlap', label: 'Extra accommodation or housing overlap', hint: 'Only costs additional to the twelve months of rent counted above.' },
  { id: 'deposit', label: 'Refundable deposit or security held', hint: 'Cash tied up separately from spending. Confirm the actual arrangement.' },
] as const;
export const budgetFields = [...monthlyCosts, ...upfrontCosts];
export type BudgetValues = Record<string, string>;

// Integer cents avoid floating-point summation errors. Blank and invalid are distinct.
export function parseChf(value: string): number | null | undefined {
  const cleaned = value.trim().replace(',', '.');
  if (!cleaned) return null;
  if (!/^\d{1,9}(?:\.\d{0,2})?$/.test(cleaned)) return undefined;
  const [whole, fraction = ''] = cleaned.split('.');
  return Number(whole) * 100 + Number(fraction.padEnd(2, '0'));
}

export function budgetTotals(values: BudgetValues) {
  const parsed = Object.fromEntries(budgetFields.map(field => [field.id, parseChf(values[field.id] || '')]));
  const invalid = budgetFields.filter(field => parsed[field.id] === undefined).map(field => field.id);
  const monthly = monthlyCosts.reduce((sum, field) => sum + (parsed[field.id] ?? 0), 0);
  const setup = (parsed.setup ?? 0) + (parsed.overlap ?? 0);
  const deposit = parsed.deposit ?? 0;
  return { invalid, entered: Object.values(parsed).filter(value => typeof value === 'number').length, monthly, firstYearSpending: monthly * 12 + setup, deposit, firstYearCash: monthly * 12 + setup + deposit };
}

export function budgetCsv(budgets: BudgetValues[]) {
  const names = ['Zurich', 'Zug', 'Schwyz'];
  const rows = [ ['Planning worksheet (CHF); user estimates, not market prices', ...names],
    ...budgetFields.map(field => [field.label, ...budgets.map(values => { const cents = parseChf(values[field.id] || ''); return typeof cents === 'number' ? (cents / 100).toFixed(2) : ''; })]),
    ...(['monthly', 'firstYearSpending', 'deposit', 'firstYearCash'] as const).map((key, index) => [ ['Monthly spending (entered items only)', 'First-year spending (entered items only)', 'Refundable security held', 'First-year cash including security'][index], ...budgets.map(values => { const totals = budgetTotals(values); return totals.invalid.length ? 'Invalid input' : (totals[key] / 100).toFixed(2); })]),
    ['Fields entered (blank fields are not estimated)', ...budgets.map(values => `${budgetTotals(values).entered}/${budgetFields.length}`)],
  ];
  return rows.map(row => row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(',')).join('\r\n');
}

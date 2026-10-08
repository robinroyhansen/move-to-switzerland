'use client';

import { useState } from 'react';
import { monthlyCosts, upfrontCosts, budgetFields, budgetTotals, budgetCsv, parseChf, type BudgetValues } from '@/lib/relocation-budget';

const places = ['Zurich', 'Zug', 'Schwyz'];
const money = (cents: number) => new Intl.NumberFormat('en-CH', { style: 'currency', currency: 'CHF', maximumFractionDigits: 2 }).format(cents / 100);

export function BudgetPlanner() {
  const [budgets, setBudgets] = useState<BudgetValues[]>([{}, {}, {}]);
  const [selected, setSelected] = useState(0);
  const [notice, setNotice] = useState('');
  const current = budgets[selected];
  const totals = budgets.map(budgetTotals);
  const invalid = totals.some(total => total.invalid.length > 0);

  function update(id: string, value: string) {
    setBudgets(previous => previous.map((budget, index) => index === selected ? { ...budget, [id]: value } : budget));
    setNotice('');
  }

  function download() {
    const blob = new Blob(['\uFEFF', budgetCsv(budgets)], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'swiss-relocation-budget.csv';
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    setNotice('Your budget spreadsheet download has started.');
  }

  return <section id="planner" className="my-10 scroll-mt-28 border-y border-navy/20 py-8" aria-labelledby="planner-heading">
    <h2 id="planner-heading" className="font-serif text-3xl font-semibold text-navy">Build your comparison</h2>
    <p className="mt-4 max-w-2xl text-sm leading-7 text-charcoal/80">Enter your own quotes and estimates in CHF. There are no preset market prices. Blank fields remain unbudgeted; enter 0 for a cost that does not apply. Figures stay in this page&apos;s memory and are cleared when you reload or leave. Download a copy to keep them.</p>
    <div className="mt-6 flex flex-wrap items-end gap-5">
      <div className="min-w-48 flex-1 sm:flex-none">
        <label htmlFor="budget-place" className="block text-sm font-semibold text-navy">Location to edit</label>
        <select id="budget-place" value={selected} onChange={event => setSelected(Number(event.target.value))} className="mt-2 min-h-12 w-full rounded-sm border border-navy/30 bg-white px-4 py-3 text-base text-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy">
          {places.map((place, index) => <option key={place} value={index}>{place}</option>)}
        </select>
      </div>
      <button type="button" disabled={invalid || totals.every(total => total.entered === 0)} onClick={download} className="min-h-12 rounded-sm bg-navy px-5 py-3 text-sm font-semibold text-white hover:bg-navy-light disabled:cursor-not-allowed disabled:opacity-50">Download all three budgets (CSV)</button>
    </div>
    <p role="status" className="mt-3 min-h-6 text-sm text-charcoal/75">{notice}</p>
    <div className="mt-6 grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
      <div>
        {[{ name: 'Monthly costs', fields: monthlyCosts }, { name: 'One-time amounts', fields: upfrontCosts }].map(group => <fieldset key={`${selected}-${group.name}`} className="mb-8">
          <legend className="mb-4 font-serif text-2xl font-semibold text-navy">{places[selected]}: {group.name}</legend>
          <div className="divide-y divide-navy/10">
            {group.fields.map(field => {
              const id = `budget-${selected}-${field.id}`;
              const isInvalid = parseChf(current[field.id] || '') === undefined;
              return <div key={field.id} className="grid gap-3 py-4 sm:grid-cols-[minmax(0,1fr)_9rem]">
                <div>
                  <label htmlFor={id} className="text-sm font-semibold text-navy">{field.label}</label>
                  <p id={`${id}-hint`} className="mt-1 text-xs leading-6 text-charcoal/70">{field.hint}</p>
                </div>
                <div>
                  <input id={id} type="text" inputMode="decimal" autoComplete="off" maxLength={12} value={current[field.id] || ''} placeholder="CHF" onChange={event => update(field.id, event.target.value)} aria-invalid={isInvalid} aria-describedby={`${id}-hint${isInvalid ? ` ${id}-error` : ''}`} className="min-h-12 w-full rounded-sm border border-navy/25 bg-white px-3 py-2 text-base text-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy" />
                  {isInvalid && <p id={`${id}-error`} className="mt-2 text-xs leading-5 text-red-800">Use a positive number or 0, with at most two decimal places. No thousands separators.</p>}
                </div>
              </div>;
            })}
          </div>
        </fieldset>)}
      </div>
      <aside className="lg:sticky lg:top-28 lg:self-start" aria-labelledby="comparison-heading">
        <h3 id="comparison-heading" className="font-serif text-2xl font-semibold text-navy">Your comparison</h3>
        <p className="mt-3 text-sm leading-7 text-charcoal/75">These are totals of the amounts you entered. They do not estimate missing costs, calculate tax, predict rent or establish affordability.</p>
        <div className="mt-5 divide-y divide-navy/15 border-y border-navy/15">
          {totals.map((total, index) => <section key={places[index]} className="py-5" aria-labelledby={`summary-${index}`}>
            <h4 id={`summary-${index}`} className="font-semibold text-navy">{places[index]}</h4>
            <p className="mt-1 text-xs leading-6 text-charcoal/65">{total.entered} of {budgetFields.length} fields entered{total.entered < budgetFields.length ? ' · Partial estimate' : ''}</p>
            {total.invalid.length ? <p className="mt-3 text-sm text-red-800">Correct the invalid amounts in this location to calculate its totals.</p> : <dl className="mt-3 space-y-3 text-sm">
              {[
                ['Monthly spending', total.monthly],
                ['First-year spending', total.firstYearSpending],
                ['Refundable security held', total.deposit],
                ['First-year cash including security', total.firstYearCash],
              ].map(([label, value]) => <div key={label} className="flex justify-between gap-4"><dt className="text-charcoal/75">{label}</dt><dd className="shrink-0 font-semibold tabular-nums text-navy">{total.entered ? money(Number(value)) : '—'}</dd></div>)}
            </dl>}
          </section>)}
        </div>
        <p className="mt-4 text-xs leading-6 text-charcoal/70">First-year spending = 12 × monthly costs + moving/setup + extra housing overlap. First-year cash adds the refundable security. This is a full-year provision, not a bill due on arrival; payment dates and deposit release are not modelled.</p>
      </aside>
    </div>
  </section>;
}

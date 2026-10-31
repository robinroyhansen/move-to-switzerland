const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const ts = require('typescript');
const exportsObject = {};
vm.runInNewContext(ts.transpileModule(fs.readFileSync('src/lib/relocation-budget.ts', 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } }).outputText, { exports: exportsObject });
const { parseChf, budgetTotals, budgetCsv } = exportsObject;

test('budget distinguishes missing, zero, decimal and invalid amounts', () => {
  assert.equal(parseChf(''), null);
  assert.equal(parseChf('0'), 0);
  assert.equal(parseChf('12.34'), 1234);
  assert.equal(parseChf('12,34'), 1234);
  assert.equal(parseChf('12.'), 1200);
  for(const value of ['-1','1e3','NaN','Infinity','1,234','1.234','1.2.3','1000000000','=1+2']) assert.equal(parseChf(value), undefined, value);
});

test('cash provision separates refundable deposits from spending without rounding drift', () => {
  const totals = budgetTotals({rent:'2500',charges:'250',food:'0.10',other:'0.20',setup:'3500',overlap:'1000',deposit:'7500'});
  assert.equal(totals.monthly, 275030);
  assert.equal(totals.firstYearSpending, 3750360);
  assert.equal(totals.deposit, 750000);
  assert.equal(totals.firstYearCash, 4500360);
  assert.equal(totals.entered, 7);
  assert.equal(totals.invalid.length, 0);
});

test('partial and invalid plans do not masquerade as complete budgets', () => {
  assert.equal(budgetTotals({}).entered,0);
  assert.equal(budgetTotals({rent:'0'}).entered,1);
  const bad = budgetTotals({rent:'invalid',food:'100'});
  assert.equal(bad.invalid.join(','),'rent');
  assert.equal(bad.entered,1);
});

test('CSV preserves all three budgets, blank fields and prevents input formula injection', () => {
  const csv = budgetCsv([{rent:'2500.10'},{rent:'2600',deposit:'7000'},{rent:'=HYPERLINK("x")'}]);
  assert.match(csv,/"Base rent","2500.10","2600.00",""/);
  assert.match(csv,/"Refundable deposit or security held","","7000.00",""/);
  assert.match(csv,/Invalid input/);
  assert.doesNotMatch(csv,/HYPERLINK/);
  assert.match(csv,/Fields entered/);
});

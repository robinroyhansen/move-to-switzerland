import { readFile, writeFile } from 'node:fs/promises';

const origin = 'https://move-to-switzerland.com';
const keyLocation = `${origin}/indexnow-key.txt`;
const endpoint = 'https://www.bing.com/indexnow';
const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');
const useSitemap = args.includes('--sitemap');
const suppliedUrls = args.filter((arg) => !arg.startsWith('--'));

async function fetchText(url) {
  const response = await fetch(url, {
    redirect: 'error',
    signal: AbortSignal.timeout(30_000),
  });
  if (!response.ok) throw new Error(`${url}: HTTP ${response.status}`);
  return response.text();
}

function validateUrl(value) {
  const url = new URL(value);
  if (url.origin !== origin || url.username || url.password || url.search || url.hash) {
    throw new Error(`Expected a canonical URL on ${origin}: ${value}`);
  }
  return url.href;
}

async function main() {
  if (args.some((arg) => arg.startsWith('--') && !['--dry-run', '--sitemap'].includes(arg)) ||
      (useSitemap && suppliedUrls.length) || (!useSitemap && !suppliedUrls.length)) {
    throw new Error('Usage: node scripts/submit-indexnow.mjs [--dry-run] (--sitemap | URL [URL ...])');
  }

  const key = (await readFile(new URL('../public/indexnow-key.txt', import.meta.url), 'utf8')).trim();
  if (!/^[a-zA-Z0-9-]{8,128}$/.test(key)) throw new Error('Invalid IndexNow key file.');

  const urls = useSitemap
    ? [...(await fetchText(`${origin}/sitemap.xml`)).matchAll(/<loc>\s*([^<]+?)\s*<\/loc>/g)].map((match) => match[1])
    : suppliedUrls;
  const urlList = [...new Set(urls.map(validateUrl))];
  if (!urlList.length || urlList.length > 10_000) throw new Error('Expected 1–10,000 canonical URLs.');

  if (dryRun) {
    console.log(JSON.stringify({ dryRun: true, host: new URL(origin).host, urlCount: urlList.length, sample: urlList.slice(0, 3) }, null, 2));
    return;
  }

  if ((await fetchText(keyLocation)).trim() !== key) {
    throw new Error('The live verification file does not match. Deploy the key file before submitting.');
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    redirect: 'error',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ host: new URL(origin).host, key, keyLocation, urlList }),
    signal: AbortSignal.timeout(30_000),
  });
  if (![200, 202].includes(response.status)) {
    throw new Error(`IndexNow returned HTTP ${response.status}. No automatic retry was made.`);
  }

  const receipt = {
    submittedAt: new Date().toISOString(),
    endpoint,
    host: new URL(origin).host,
    httpStatus: response.status,
    status: response.status === 202 ? 'received; key validation pending' : 'submitted successfully',
    urlCount: urlList.length,
    urlList,
    note: 'Submission receipt only; this does not prove crawling, indexing, or ranking. Google Search Console submission is separate.',
  };
  await writeFile(new URL('../docs/indexnow-submission.json', import.meta.url), `${JSON.stringify(receipt, null, 2)}\n`);
  console.log(JSON.stringify({ ...receipt, urlList: undefined }, null, 2));
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});

"""Check rendered SEO against a running build: python3 scripts/check-seo.py [base URL]."""
import concurrent.futures
import json
from html.parser import HTMLParser
from pathlib import Path
import sys
import urllib.error
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET

BASE = (sys.argv[1] if len(sys.argv) > 1 else 'http://localhost:3100').rstrip('/')
SITE = 'https://move-to-switzerland.com'
LOCALES = {p.stem for p in (Path(__file__).resolve().parents[1] / 'src/messages').glob('*.json')}


def fetch(path, host=None):
    headers = {'User-Agent': 'MTS-SEO-check/1.0'}
    if host:
        headers['Host'] = host
    with urllib.request.urlopen(urllib.request.Request(BASE + path, headers=headers), timeout=30) as r:
        return r.read().decode(), r.headers, r.url


class Page(HTMLParser):
    def __init__(self):
        super().__init__()
        self.canonicals, self.hreflangs, self.schemas, self.links = [], [], [], []
        self.title, self.lang, self.og_url = '', '', ''
        self.robots, self.headings = '', 0
        self.in_title, self.in_schema, self.schema = False, False, ''
        self.ids = []
        self.visible = []
        self.script_depth = 0
        self.direction = None

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if 'id' in a: self.ids.append(a['id'])
        if tag == 'html': self.lang, self.direction = a.get('lang'), a.get('dir')
        if tag in ['script', 'style']: self.script_depth += 1
        if tag == 'h1': self.headings += 1
        if tag == 'title': self.in_title = True
        if tag == 'meta' and a.get('property') == 'og:url': self.og_url = a.get('content')
        if tag == 'meta' and a.get('name') == 'robots': self.robots = a.get('content', '')
        if tag == 'link' and a.get('rel') == 'canonical': self.canonicals.append(a.get('href'))
        if tag == 'link' and a.get('hreflang'): self.hreflangs.append(a)
        if tag == 'a' and a.get('href'): self.links.append(a['href'])
        if tag == 'script' and a.get('type') == 'application/ld+json':
            self.in_schema, self.schema = True, ''

    def handle_data(self, data):
        if not self.script_depth: self.visible.append(data)
        if self.in_title: self.title += data
        if self.in_schema: self.schema += data

    def handle_endtag(self, tag):
        if tag in ['script', 'style']: self.script_depth = max(0, self.script_depth - 1)
        if tag == 'title': self.in_title = False
        if tag == 'script' and self.in_schema:
            self.schemas.append(json.loads(self.schema))
            self.in_schema = False


def check_page(url):
    try:
        path = urllib.parse.urlsplit(url).path
        html, headers, final = fetch(path)
        page = Page()
        page.feed(html)
        assert urllib.parse.urlsplit(final).path == path, 'unexpected redirect'
        assert page.canonicals == [url], f'canonical: {page.canonicals}'
        assert page.og_url == url, f'og:url: {page.og_url}'
        assert page.lang == path.split('/')[1], f'lang: {page.lang}'
        assert page.title.strip() and page.headings == 1, f'title/H1: {page.title}, {page.headings}'
        assert 'noindex' not in page.robots, 'noindex'
        assert 'noindex' not in headers.get('X-Robots-Tag', '').lower(), 'HTTP noindex'
        if page.lang in ['ar', 'fa', 'he']:
            assert page.direction == 'rtl', 'missing RTL direction'
        businesses = [item for item in page.schemas if item.get('@type') == 'LocalBusiness']
        assert len(businesses) == 1, 'expected one confirmed business record'
        business = businesses[0]
        assert business['@id'] == SITE + '/#business', 'inconsistent business identity'
        assert business['address']['streetAddress'] == 'Fänn West 10', 'incorrect business address'
        assert business['address']['postalCode'] == '6403', 'incorrect business postcode'
        assert 'telephone' not in business and 'priceRange' not in business, 'unconfirmed business details'
        assert 'serviceType' not in business and business['hasOfferCatalog']['itemListElement'], 'invalid business service property'
        assert 'caseSnapshots' not in html, 'retired case claims in client payload'
        visible = ' '.join(' '.join(page.visible).split())
        for item in page.schemas:
            if item.get('@type') == 'Service':
                assert item['provider']['@id'] == business['@id'], 'disconnected service provider'
            if item.get('@type') == 'FAQPage':
                for question in item['mainEntity']:
                    assert ' '.join(question['name'].split()) in visible, 'FAQ question absent from visible page'
                    assert ' '.join(question['acceptedAnswer']['text'].split()) in visible, 'FAQ answer absent from visible page'
        assert 'hreflang' in headers.get('Link', '') or page.hreflangs, 'missing language alternates'
        if path.startswith('/en/guides'):
            assert len(page.ids) == len(set(page.ids)), 'duplicate element IDs'
            for href in page.links:
                if href.startswith('#'):
                    assert href[1:] in page.ids, f'broken section anchor: {href}'
            if path != '/en/guides':
                assert sum(schema.get('@type') == 'BreadcrumbList' for schema in page.schemas) == 1, 'duplicate breadcrumb markup'
        for schema in page.schemas:
            if schema.get('@type') == 'Article' and schema.get('citation'):
                if '/insights/' in path:
                    expected_date = '2026-09-10' if path.startswith('/en/') else '2026-09-11'
                else:
                    expected_date = '2026-09-10' if path.startswith('/en/guides/') or path == '/en/renting-in-switzerland' else '2026-09-08'
                assert schema['dateModified'] == expected_date, 'incorrect revision date'
                assert schema['author']['url'].endswith('/about'), 'missing author context'
                assert all(source in page.links for source in schema['citation']), 'sources absent from visible links'
        if '/services/' in path:
            assert any('/insights/' in link for link in page.links), 'no guide links'
        for href in page.links:
            target = urllib.parse.urlsplit(urllib.parse.urljoin(url, href))
            if target.netloc == 'move-to-switzerland.com':
                normalized = SITE + target.path.rstrip('/')
                if target.path.startswith('/downloads/'):
                    continue
                if target.path not in ['', '/'] and not target.path.endswith('/swiss-arrival'):
                    assert normalized in URLS, f'internal link absent from sitemap: {normalized}'
        return None
    except Exception as error:
        return f'{url}: {error}'


sitemap, _, _ = fetch('/sitemap.xml')
root = ET.fromstring(sitemap)
entries = root.findall('{*}url')
URLS = {entry.find('{*}loc').text for entry in entries}
assert len(URLS) == len(entries), 'duplicate sitemap URLs'
assert {urllib.parse.urlsplit(url).path.split('/')[1] for url in URLS} == LOCALES, 'locale coverage'
revision = json.loads((Path(__file__).resolve().parents[1] / 'src/content/editorial-revision.json').read_text())
for entry in entries:
    path = urllib.parse.urlsplit(entry.find('{*}loc').text).path
    locale, _, suffix = path.lstrip('/').partition('/')
    relative = '/' + suffix if suffix else ''
    date = entry.find('{*}lastmod')
    if relative in revision['paths']:
        assert date is not None and date.text == revision.get('pathDates', {}).get(relative, revision['localeDates'][locale]), 'incorrect stored sitemap revision'
    else:
        assert date is None, 'unexpected sitemap revision for unchanged content'
for entry in entries:
    url = entry.find('{*}loc').text
    alternatives = entry.findall('{http://www.w3.org/1999/xhtml}link')
    assert url in {a.get('href') for a in alternatives}, f'missing self hreflang: {url}'
    assert all(a.get('href') in URLS for a in alternatives), f'unlisted alternate: {url}'

with concurrent.futures.ThreadPoolExecutor(max_workers=8) as pool:
    failures = [failure for failure in pool.map(check_page, sorted(URLS)) if failure]

# Host-aware endpoints must keep Swiss Arrival's six locales separate.
arrival, _, _ = fetch('/sitemap.xml', 'swissarrival.com')
arrival_urls = [e.text for e in ET.fromstring(arrival).findall('{*}url/{*}loc')]
assert len(arrival_urls) == 6 and all(u.startswith('https://swissarrival.com/') for u in arrival_urls)
for host, expected in [('move-to-switzerland.com', SITE), ('swissarrival.com', 'https://swissarrival.com')]:
    robots, _, _ = fetch('/robots.txt', host)
    assert f'Sitemap: {expected}/sitemap.xml' in robots
for path in ['/en/services/not-a-service', '/en/insights/not-an-article', '/en/relocation/not-a-route', '/de/relocation-checklist', '/de/renting-in-switzerland', '/de/relocation-budget', '/de/guides', '/fr/guides/moving-to-lucerne', '/en/guides/not-a-guide']:
    try:
        fetch(path)
        failures.append(f'{path}: expected 404')
    except urllib.error.HTTPError as error:
        if error.code != 404: failures.append(f'{path}: {error.code}')
if failures:
    print('\n'.join(failures))
    sys.exit(1)
print(f'PASS: {len(URLS)} pages across {len(LOCALES)} locales; canonicals, titles, H1, links, language alternates, source markup, host-aware sitemaps/robots and invalid-route 404s.')

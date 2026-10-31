"""Measure initial HTML/script assets, using identical gzip compression for comparisons.

Usage: python3 scripts/measure-page-weight.py BASE_URL OUTPUT.json
Not a browser waterfall or a Core Web Vitals measurement. Includes legacy scripts.
"""
import concurrent.futures
import gzip
from html.parser import HTMLParser
import json
from pathlib import Path
import sys
import urllib.parse
import urllib.request

BASE = sys.argv[1].rstrip('/')
PATHS = ['/en', '/de', '/ar', '/en/contact', '/en/insights/opening-swiss-private-bank-account', '/en/cantons']


class Scripts(HTMLParser):
    def __init__(self):
        super().__init__()
        self.urls = []

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == 'script' and attrs.get('src') and attrs['src'] not in self.urls:
            self.urls.append(attrs['src'])


def fetch(path):
    url = urllib.parse.urljoin(BASE, path)
    assert urllib.parse.urlsplit(url).netloc == urllib.parse.urlsplit(BASE).netloc, 'unexpected external asset'
    with urllib.request.urlopen(url, timeout=45) as response:
        return response.read()


def measure(path):
    body = fetch(path)
    parser = Scripts()
    parser.feed(body.decode())
    scripts = []
    for url in parser.urls:
        data = fetch(url)
        scripts.append({'path': url, 'bytes': len(data), 'gzipBytes': len(gzip.compress(data, mtime=0))})
    return {
        'path': path,
        'htmlBytes': len(body),
        'htmlGzipBytes': len(gzip.compress(body, mtime=0)),
        'scriptBytes': sum(item['bytes'] for item in scripts),
        'scriptGzipBytes': sum(item['gzipBytes'] for item in scripts),
        'scripts': scripts,
    }


with concurrent.futures.ThreadPoolExecutor(max_workers=3) as pool:
    rows = list(pool.map(measure, PATHS))
Path(sys.argv[2]).write_text(json.dumps(rows, indent=2) + '\n')
print(json.dumps([{key: value for key, value in row.items() if key != 'scripts'} for row in rows], indent=2))
if '--assert-budgets' in sys.argv:
    for row in rows:
        assert row['scriptGzipBytes'] < 256 * 1024, f"{row['path']}: initial script budget exceeded"
        assert row['htmlGzipBytes'] < 64 * 1024, f"{row['path']}: HTML budget exceeded"
    print('PASS: initial script and HTML budgets')

"""Read-only Search Console audit. Uses an existing token or Google CLI login.

No login, permission change or sitemap submission is initiated. Credentials are
kept in memory and never written to the report. API access failures are reported
as unavailable data, never as zero traffic or an indexing failure.
"""
import argparse
import datetime as dt
import json
import os
from pathlib import Path
import subprocess
import urllib.error
import urllib.parse
import urllib.request

ROOT = Path(__file__).resolve().parents[1]
ORIGIN = 'https://move-to-switzerland.com'
LOCALES = sorted(p.stem for p in (ROOT / 'src/messages').glob('*.json'))
PROPERTY = 'sc-domain:move-to-switzerland.com'


def request(token, url, body=None):
    data = None if body is None else json.dumps(body).encode()
    req = urllib.request.Request(url, data=data, headers={
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json',
    })
    try:
        with urllib.request.urlopen(req, timeout=30) as response:
            return json.load(response)
    except urllib.error.HTTPError as error:
        # Only retain the API's status and reason, not request headers or tokens.
        payload = json.load(error).get('error', {})
        raise RuntimeError(f"HTTP {error.code}: {payload.get('message', 'API request failed')}") from None


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--output', default=str(ROOT / 'docs/search-console-audit.json'))
    args = parser.parse_args()
    report = {
        'checkedAt': dt.datetime.now(dt.timezone.utc).isoformat(),
        'requestedProperty': PROPERTY,
        'locales': LOCALES,
        'status': 'unavailable',
        'note': 'Unavailable data is not evidence of zero traffic or non-indexing.',
    }
    try:
        token = os.environ.get('GSC_ACCESS_TOKEN')
        if not token:
            result = subprocess.run(['gcloud', 'auth', 'print-access-token'],
                                    capture_output=True, text=True, timeout=30)
            if result.returncode:
                raise RuntimeError('Existing Google CLI credentials are unavailable; no login was initiated.')
            token = result.stdout.strip()
        if not token:
            raise RuntimeError('No existing Search Console access token is available.')
        sites = request(token, 'https://www.googleapis.com/webmasters/v3/sites').get('siteEntry', [])
        accepted = [p for p in sites if p.get('siteUrl') in [PROPERTY, ORIGIN + '/'] and p.get('permissionLevel') != 'siteUnverifiedUser']
        if not accepted:
            raise RuntimeError('The existing account does not expose a verified matching property.')
        selected = next((p for p in accepted if p['siteUrl'] == PROPERTY), accepted[0])
        property_url = selected['siteUrl']
        base = 'https://www.googleapis.com/webmasters/v3/sites/' + urllib.parse.quote(property_url, safe='')
        report.update(status='partial', property=property_url, permission=selected['permissionLevel'])
        report['sitemaps'] = request(token, base + '/sitemaps').get('sitemap', [])
        # Leave a three-day buffer and request final data. Missing dates can still
        # occur; empty rows remain labelled as no returned data, not a failure.
        end = dt.date.today() - dt.timedelta(days=3)
        periods = {'latest28Days': (end - dt.timedelta(days=27), end),
                   'previous28Days': (end - dt.timedelta(days=55), end - dt.timedelta(days=28))}
        report['performance'] = {}
        for name, (start, finish) in periods.items():
            common = {'startDate': str(start), 'endDate': str(finish), 'type': 'web', 'dataState': 'final'}
            period = {'startDate': str(start), 'endDate': str(finish), 'byLocale': {}}
            for locale in LOCALES:
                filters = [{'filters': [{'dimension': 'page', 'operator': 'includingRegex',
                            'expression': '^https://move-to-switzerland[.]com/' + locale + '(/|$)'}]}]
                totals = request(token, base + '/searchAnalytics/query', common | {'dimensionFilterGroups': filters})
                # Top rows are useful for prioritisation, but not complete query
                # coverage. Do not sum their metrics as total site performance.
                rows = request(token, base + '/searchAnalytics/query', common | {
                    'dimensionFilterGroups': filters, 'dimensions': ['page', 'query'], 'rowLimit': 1000})
                period['byLocale'][locale] = {'totals': totals.get('rows', []), 'topPageQueryRows': rows.get('rows', []),
                    'note': 'Top 1,000 returned rows at most; query rows do not represent complete traffic.'}
            report['performance'][name] = period
        report['urlInspections'] = {}
        for locale in LOCALES:
            url = ORIGIN + '/' + locale
            report['urlInspections'][url] = request(token,
                'https://searchconsole.googleapis.com/v1/urlInspection/index:inspect',
                {'inspectionUrl': url, 'siteUrl': property_url, 'languageCode': 'en-US'})
        report['status'] = 'complete'
        report['note'] = 'Read-only report. URL Inspection covers one homepage per locale, not every sitemap URL.'
    except (RuntimeError, OSError, subprocess.TimeoutExpired, urllib.error.URLError) as error:
        report['reason'] = str(error)
    output = Path(args.output)
    output.parent.mkdir(parents=True, exist_ok=True)
    output.write_text(json.dumps(report, ensure_ascii=False, indent=2) + '\n')
    print(json.dumps({k: report[k] for k in ['checkedAt', 'status', 'reason'] if k in report}, indent=2))


if __name__ == '__main__':
    main()

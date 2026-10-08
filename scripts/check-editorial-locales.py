"""Check completeness and critical facts in the multilingual editorial refresh."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
REVISION = json.loads((ROOT / 'src/content/editorial-revision.json').read_text())
ENGLISH = json.loads((ROOT / 'src/messages/en.json').read_text())


def get(data, key):
    for part in key.split('.'):
        data = data[int(part)] if isinstance(data, list) else data[part]
    return data


def shape(value):
    if isinstance(value, dict):
        return {key: shape(item) for key, item in value.items()}
    if isinstance(value, list):
        return [shape(item) for item in value]
    return type(value).__name__


def leaves(value, prefix=''):
    if isinstance(value, dict):
        for key, item in value.items():
            yield from leaves(item, prefix + '.' + key)
    elif isinstance(value, list):
        for key, item in enumerate(value):
            yield from leaves(item, prefix + '.' + str(key))
    elif isinstance(value, str):
        yield prefix, value


failures, count = [], 0
for locale in REVISION['localeDates']:
    data = json.loads((ROOT / 'src/messages' / (locale + '.json')).read_text())
    advice = json.loads((ROOT / 'src/content/advisory' / (locale + '.json')).read_text())
    for key in REVISION['messageRoots']:
        content = get(data, key)
        if shape(content) != shape(get(ENGLISH, key)):
            failures.append(f'{locale}: structure mismatch in {key}')
        for path, text in leaves(content, key):
            count += 1
            if not text.strip() or any(marker in text for marker in ['▁', '\ufffd', 'MTSBRAND', '<unk>']):
                failures.append(f'{locale}: incomplete translation in {path}')
            if any(claim in text for claim in ['11.9%', '19.7%', '22.4%', '35,000/m', '99.9%', 'SEBA']):
                failures.append(f'{locale}: superseded claim in {path}')
    for slug, article in data['insights']['articles'].items():
        if list(article['sections']) != [str(i) for i in range(int(article['sectionCount']))]:
            failures.append(f'{locale}: inconsistent article sections: {slug}')
    if locale != 'en':
        for number, key in enumerate(['taxEligibility', 'taxBase', 'taxProcess']):
            if data['conversionCopy']['relocationPaths']['lump-sum-taxation-switzerland']['faqs'][number]['answer'] != advice[key]:
                failures.append(f'{locale}: approved tax qualification changed')
        if data['faq']['items'][1]['answer'] != advice['taxEligibility'] + ' ' + advice['taxBase']:
            failures.append(f'{locale}: inconsistent tax FAQ')
        if data['services']['items']['residency']['detail'] != advice['permitEU'] + '\n\n' + advice['permitNonEU']:
            failures.append(f'{locale}: inconsistent residence eligibility')
    for key in ['zurich', 'zug', 'schwyz']:
        if len(data['cantonsPage'][key]['schools']['list']) != 3:
            failures.append(f'{locale}: outdated school list')

if failures:
    raise SystemExit('\n'.join(failures))
print(f'PASS: {len(REVISION["localeDates"])} languages; {count} editorial text fields; article structures, critical eligibility copy and retired claims.')

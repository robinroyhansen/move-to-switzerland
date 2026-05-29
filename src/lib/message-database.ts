import type { Locale } from '@/i18n/config';
import ar from '@/messages/ar.json';
import da from '@/messages/da.json';
import de from '@/messages/de.json';
import en from '@/messages/en.json';
import fa from '@/messages/fa.json';
import fr from '@/messages/fr.json';
import he from '@/messages/he.json';
import hi from '@/messages/hi.json';
import it from '@/messages/it.json';
import ko from '@/messages/ko.json';
import no from '@/messages/no.json';
import pt from '@/messages/pt.json';
import ro from '@/messages/ro.json';
import ru from '@/messages/ru.json';
import tr from '@/messages/tr.json';
import zh from '@/messages/zh.json';

export const translationDatabase = {
  ar,
  da,
  de,
  en,
  fa,
  fr,
  he,
  hi,
  it,
  ko,
  no,
  pt,
  ro,
  ru,
  tr,
  zh,
} satisfies Record<Locale, Record<string, unknown>>;

export function normalizeLocale(locale = 'en'): Locale {
  const normalized = locale.toLowerCase().split('-')[0] as Locale;
  return normalized in translationDatabase ? normalized : 'en';
}

export function getMessageSection<T>(locale: string | undefined, section: string): T {
  const normalized = normalizeLocale(locale);
  const messages = translationDatabase[normalized] as Record<string, unknown>;
  const fallback = translationDatabase.en as Record<string, unknown>;
  return (messages[section] ?? fallback[section]) as T;
}

import { getMessageSection } from '@/lib/message-database';

export type LegalCopy = {
  privacySections: Array<{ title: string; text: string }>;
  imprint: {
    registrationText: string;
    contactTitle: string;
    contactText: string;
    disclaimerTitle: string;
    disclaimerText: string;
  };
};

export function getLegalCopy(locale = 'en'): LegalCopy {
  return getMessageSection<LegalCopy>(locale, 'legalCopy');
}

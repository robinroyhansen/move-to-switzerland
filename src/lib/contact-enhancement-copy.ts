import { getMessageSection } from '@/lib/message-database';

export type ContactEnhancementCopy = {
  metadata: {
    title: string;
    description: string;
  };
  progressTitle: string;
  optionalContextTitle: string;
  optionalContextText: string;
  showOptional: string;
  hideOptional: string;
  labels: {
    relocationYear: string;
    preferredCantons: string;
    advisoryScope: string;
    schoolAgeRange: string;
    urgencyReason: string;
  };
  placeholders: {
    relocationYear: string;
    schoolAgeRange: string;
    urgencyReason: string;
  };
  validation: {
    required: string;
    email: string;
    servicesNeeded: string;
    preferredContact: string;
    phoneRequired: string;
    consent: string;
    submitError: string;
  };
  status: {
    sending: string;
    successTitle: string;
    successText: string;
  };
  process: {
    title: string;
    intro: string;
    steps: string[];
  };
  trust: {
    title: string;
    items: string[];
  };
  options: {
    advisoryScopes: Array<{ value: string; label: string }>;
    preferredCantons: Array<{ value: string; label: string }>;
  };
  privacy: {
    beforeLink: string;
    linkText: string;
    afterLink: string;
  };
  honeypotLabel: string;
};

export function getContactEnhancementCopy(locale = 'en'): ContactEnhancementCopy {
  return getMessageSection<ContactEnhancementCopy>(locale, 'contactEnhancementCopy');
}

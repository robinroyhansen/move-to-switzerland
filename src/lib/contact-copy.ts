import { getMessageSection } from '@/lib/message-database';

export type ContactOption = {
  value: string;
  label: string;
};

export type ContactCopy = {
  pageTitle: string;
  pageSubtitle: string;
  confidential: string;
  noSensitive: string;
  serviceError: string;
  sections: {
    situationTitle: string;
    situationText: string;
    coordinationTitle: string;
    coordinationText: string;
    responseTitle: string;
    responseText: string;
  };
  labels: {
    enquiryType: string;
    primaryGoal: string;
    country: string;
    nationality: string;
    timeline: string;
    servicesNeeded: string;
    targetCanton: string;
    familySize: string;
    existingAdvisors: string;
    name: string;
    email: string;
    phone: string;
    hearAbout: string;
    preferredContact: string;
    message: string;
  };
  placeholders: {
    targetCanton: string;
    familySize: string;
    message: string;
  };
  submit: string;
  privacyConsent: string;
  aside: {
    title: string;
    paragraphs: string[];
    items: string[];
  };
  options: {
    enquiryTypes: ContactOption[];
    primaryGoals: ContactOption[];
    timelines: ContactOption[];
    services: ContactOption[];
    contactMethods: ContactOption[];
    advisorOptions: ContactOption[];
  };
};

export function getContactCopy(locale = 'en'): ContactCopy {
  return getMessageSection<ContactCopy>(locale, 'contactCopy');
}

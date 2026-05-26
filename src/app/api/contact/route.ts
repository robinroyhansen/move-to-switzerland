import { NextRequest, NextResponse } from 'next/server';

type IntakePayload = {
  name: string;
  email: string;
  phone?: string;
  country: string;
  nationality?: string;
  enquiryType: string;
  primaryGoal: string;
  timeline: string;
  servicesNeeded: string[];
  targetCanton?: string;
  familySize?: string;
  existingAdvisors?: string;
  preferredContact: string;
  hearAbout?: string;
  message: string;
  privacyConsent: string;
  companyWebsite?: string;
  formStartedAt?: string;
  locale?: string;
  pageUrl?: string;
  referrer?: string;
};

const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;
const RATE_LIMIT_MAX = 5;

const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

const enquiryTypeLabels: Record<string, string> = {
  'private-individual': 'Private individual',
  'family-office': 'Family office',
  entrepreneur: 'Entrepreneur',
  advisor: 'Advisor for a client',
  other: 'Other',
};

const primaryGoalLabels: Record<string, string> = {
  'family-relocation': 'Relocate myself or my family',
  'tax-residency': 'Swiss tax and residency planning',
  'company-family-office': 'Company or family-office setup',
  settlement: 'Real estate, schools, and settlement',
  'banking-wealth': 'Banking and wealth coordination',
  'swiss-arrival': 'Swiss Arrival guide',
};

const timelineLabels: Record<string, string> = {
  urgent: 'Urgent',
  'under-3-months': 'Under 3 months',
  '3-6-months': '3-6 months',
  '6-12-months': '6-12 months',
  'early-planning': 'Early planning',
};

const serviceLabels: Record<string, string> = {
  'residence-permits': 'Residence permits',
  'lump-sum-taxation': 'Lump-sum taxation',
  'company-formation': 'Company formation',
  'family-office': 'Family office',
  'real-estate': 'Real estate',
  schooling: 'Schools',
  'private-banking': 'Private banking',
  'health-concierge': 'Health concierge',
  'full-coordination': 'Full relocation coordination',
};

const contactMethodLabels: Record<string, string> = {
  email: 'Email',
  phone: 'Phone',
};

const advisorLabels: Record<string, string> = {
  yes: 'Yes',
  no: 'No',
  'not-sure': 'Not sure',
};

function cleanString(value: unknown, maxLength = 500): string {
  if (typeof value !== 'string') {
    return '';
  }

  return value.replace(/\s+/g, ' ').trim().slice(0, maxLength);
}

function cleanLongText(value: unknown, maxLength = 5000): string {
  if (typeof value !== 'string') {
    return '';
  }

  return value.replace(/\r\n/g, '\n').replace(/\r/g, '\n').trim().slice(0, maxLength);
}

function cleanArray(value: unknown): string[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .map((item) => cleanString(item, 80))
    .filter(Boolean)
    .slice(0, 20);
}

function optionLabel(value: string, labels: Record<string, string>): string {
  return labels[value] || value || 'Not provided';
}

function getClientKey(request: NextRequest): string {
  const forwardedFor = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim();
  const realIp = request.headers.get('x-real-ip')?.trim();

  return forwardedFor || realIp || 'unknown';
}

function checkRateLimit(key: string): boolean {
  const now = Date.now();
  const current = rateLimitStore.get(key);

  if (!current || current.resetAt <= now) {
    rateLimitStore.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }

  if (current.count >= RATE_LIMIT_MAX) {
    return false;
  }

  current.count += 1;
  return true;
}

function buildPayload(body: Record<string, unknown>): IntakePayload {
  return {
    name: cleanString(body.name, 160),
    email: cleanString(body.email, 240).toLowerCase(),
    phone: cleanString(body.phone, 80),
    country: cleanString(body.country, 120),
    nationality: cleanString(body.nationality, 120),
    enquiryType: cleanString(body.enquiryType, 80),
    primaryGoal: cleanString(body.primaryGoal, 80),
    timeline: cleanString(body.timeline, 80),
    servicesNeeded: cleanArray(body.servicesNeeded),
    targetCanton: cleanString(body.targetCanton, 120),
    familySize: cleanString(body.familySize, 120),
    existingAdvisors: cleanString(body.existingAdvisors, 80),
    preferredContact: cleanString(body.preferredContact, 80),
    hearAbout: cleanString(body.hearAbout, 240),
    message: cleanLongText(body.message),
    privacyConsent: cleanString(body.privacyConsent, 20),
    companyWebsite: cleanString(body.companyWebsite, 240),
    formStartedAt: cleanString(body.formStartedAt, 30),
    locale: cleanString(body.locale, 20),
    pageUrl: cleanString(body.pageUrl, 500),
    referrer: cleanString(body.referrer, 500),
  };
}

function validatePayload(payload: IntakePayload): string | null {
  if (!payload.name || !payload.email || !payload.country || !payload.message) {
    return 'Please complete all required fields.';
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
    return 'Please enter a valid email address.';
  }

  if (!payload.enquiryType || !enquiryTypeLabels[payload.enquiryType]) {
    return 'Please select who is making the inquiry.';
  }

  if (!payload.primaryGoal || !primaryGoalLabels[payload.primaryGoal]) {
    return 'Please select the primary goal.';
  }

  if (!payload.timeline || !timelineLabels[payload.timeline]) {
    return 'Please select the expected timeline.';
  }

  if (payload.servicesNeeded.length === 0) {
    return 'Please select at least one service area.';
  }

  if (!payload.preferredContact || !contactMethodLabels[payload.preferredContact]) {
    return 'Please select a preferred response method.';
  }

  if (payload.privacyConsent !== 'yes') {
    return 'Please confirm the privacy consent.';
  }

  return null;
}

function shouldSilentlyDrop(payload: IntakePayload): boolean {
  if (payload.companyWebsite) {
    return true;
  }

  const startedAt = Number(payload.formStartedAt);
  return Number.isFinite(startedAt) && startedAt > 0 && Date.now() - startedAt < 1500;
}

function leadPriority(payload: IntakePayload): 'High' | 'Medium' | 'Standard' {
  if (payload.timeline === 'urgent' || payload.timeline === 'under-3-months') {
    return 'High';
  }

  if (
    payload.primaryGoal === 'tax-residency' ||
    payload.primaryGoal === 'company-family-office' ||
    payload.servicesNeeded.includes('family-office') ||
    payload.servicesNeeded.includes('lump-sum-taxation')
  ) {
    return 'Medium';
  }

  return 'Standard';
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function row(label: string, value: string): string {
  return `
    <tr>
      <td style="padding:8px 12px;border-bottom:1px solid #eee;color:#666;width:190px;">${escapeHtml(label)}</td>
      <td style="padding:8px 12px;border-bottom:1px solid #eee;color:#111;">${escapeHtml(value || 'Not provided')}</td>
    </tr>`;
}

function buildEmail(payload: IntakePayload) {
  const priority = leadPriority(payload);
  const services = payload.servicesNeeded.map((service) => optionLabel(service, serviceLabels)).join(', ');

  const subject = `[Move to Switzerland] ${priority} inquiry: ${optionLabel(payload.primaryGoal, primaryGoalLabels)} / ${optionLabel(payload.timeline, timelineLabels)}`;

  const text = [
    'New Move to Switzerland intake',
    '',
    `Lead priority: ${priority}`,
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone || 'Not provided'}`,
    `Country: ${payload.country}`,
    `Nationality: ${payload.nationality || 'Not provided'}`,
    `Inquiry type: ${optionLabel(payload.enquiryType, enquiryTypeLabels)}`,
    `Primary goal: ${optionLabel(payload.primaryGoal, primaryGoalLabels)}`,
    `Timeline: ${optionLabel(payload.timeline, timelineLabels)}`,
    `Services needed: ${services}`,
    `Target canton/city: ${payload.targetCanton || 'Not provided'}`,
    `Family members relocating: ${payload.familySize || 'Not provided'}`,
    `Existing Swiss advisors: ${optionLabel(payload.existingAdvisors || '', advisorLabels)}`,
    `Preferred response: ${optionLabel(payload.preferredContact, contactMethodLabels)}`,
    `How they heard about us: ${payload.hearAbout || 'Not provided'}`,
    `Locale: ${payload.locale || 'Not provided'}`,
    `Page URL: ${payload.pageUrl || 'Not provided'}`,
    `Referrer: ${payload.referrer || 'Not provided'}`,
    '',
    'Message:',
    payload.message,
  ].join('\n');

  const html = `
    <div style="font-family:Arial,sans-serif;line-height:1.5;color:#111;">
      <h1 style="font-size:20px;margin:0 0 12px;">New Move to Switzerland intake</h1>
      <p style="margin:0 0 20px;color:#555;">Lead priority: <strong>${escapeHtml(priority)}</strong></p>
      <table style="border-collapse:collapse;width:100%;max-width:760px;font-size:14px;">
        ${row('Name', payload.name)}
        ${row('Email', payload.email)}
        ${row('Phone', payload.phone || '')}
        ${row('Country', payload.country)}
        ${row('Nationality', payload.nationality || '')}
        ${row('Inquiry type', optionLabel(payload.enquiryType, enquiryTypeLabels))}
        ${row('Primary goal', optionLabel(payload.primaryGoal, primaryGoalLabels))}
        ${row('Timeline', optionLabel(payload.timeline, timelineLabels))}
        ${row('Services needed', services)}
        ${row('Target canton/city', payload.targetCanton || '')}
        ${row('Family members relocating', payload.familySize || '')}
        ${row('Existing Swiss advisors', optionLabel(payload.existingAdvisors || '', advisorLabels))}
        ${row('Preferred response', optionLabel(payload.preferredContact, contactMethodLabels))}
        ${row('Heard about us', payload.hearAbout || '')}
        ${row('Locale', payload.locale || '')}
        ${row('Page URL', payload.pageUrl || '')}
        ${row('Referrer', payload.referrer || '')}
      </table>
      <h2 style="font-size:16px;margin:24px 0 8px;">Message</h2>
      <div style="white-space:pre-wrap;border:1px solid #eee;background:#fafafa;padding:14px;">${escapeHtml(payload.message)}</div>
      <p style="margin-top:18px;color:#777;font-size:12px;">Do not request or send sensitive documents until a private channel is agreed.</p>
    </div>`;

  return { subject, text, html };
}

async function sendWithResend(payload: IntakePayload) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    throw new Error('Contact delivery is not configured.');
  }

  const { subject, text, html } = buildEmail(payload);

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: payload.email,
      subject,
      text,
      html,
    }),
  });

  if (!response.ok) {
    const detail = await response.text().catch(() => '');
    throw new Error(`Resend delivery failed: ${response.status} ${detail.slice(0, 200)}`);
  }
}

export async function POST(request: NextRequest) {
  try {
    const clientKey = getClientKey(request);
    if (!checkRateLimit(clientKey)) {
      return NextResponse.json({ error: 'Too many submissions. Please try again later.' }, { status: 429 });
    }

    const body = (await request.json()) as Record<string, unknown>;
    const payload = buildPayload(body);

    if (shouldSilentlyDrop(payload)) {
      return NextResponse.json({ success: true });
    }

    const validationError = validatePayload(payload);
    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 });
    }

    if (process.env.CONTACT_FORM_DRY_RUN === 'true') {
      console.info('Contact form dry run', {
        primaryGoal: payload.primaryGoal,
        timeline: payload.timeline,
        servicesCount: payload.servicesNeeded.length,
        locale: payload.locale,
      });
      return NextResponse.json({ success: true });
    }

    await sendWithResend(payload);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form submission failed', error);
    return NextResponse.json(
      { error: 'The inquiry could not be sent right now. Please try again later.' },
      { status: 503 }
    );
  }
}

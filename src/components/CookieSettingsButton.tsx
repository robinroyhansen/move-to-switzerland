'use client';
import { SETTINGS_EVENT } from '@/lib/analytics';
export function CookieSettingsButton({ label }: { label: string }) {
  return <button type="button" onClick={() => window.dispatchEvent(new Event(SETTINGS_EVENT))} className="min-h-11 text-sm underline underline-offset-4">{label}</button>;
}

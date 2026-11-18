import { EMAIL_PATTERN, normalizeEmail } from './email';

export type EarningsEntry = { email: string; amount: number };
export type SkippedEntry = { label: string; reason: string };

const LINE_PATTERN = /^([^\s,;]+)[\s,;]+(.+)$/;
const AMOUNT_PATTERN = /^\d+(\.\d{1,2})?$/;
const MAX_AMOUNT = 99_999_999.99;

export const todayInIndia = () =>
  new Date().toLocaleDateString('en-CA', { timeZone: 'Asia/Kolkata' });

/** Returns an error message, or null when `date` is a real calendar day that isn't in the future. */
export function validateEarningsDate(date: unknown): string | null {
  if (typeof date !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return 'Choose the date these earnings are for.';
  }
  if (new Date(`${date}T00:00:00Z`).toISOString().slice(0, 10) !== date) {
    return 'That date does not exist.';
  }
  if (date > todayInIndia()) {
    return 'Earnings can’t be entered for a future date.';
  }
  return null;
}

function parseAmount(raw: string): number | null {
  const cleaned = raw.replace(/[₹,\s]/g, '');
  if (!AMOUNT_PATTERN.test(cleaned)) return null;
  const amount = Number(cleaned);
  return amount <= MAX_AMOUNT ? amount : null;
}

/** Reads one "email, amount" pair per line (comma, tab or space separated). */
export function parseEarningsLines(text: unknown): { entries: EarningsEntry[]; rejected: SkippedEntry[] } {
  const entries: EarningsEntry[] = [];
  const rejected: SkippedEntry[] = [];
  const seen = new Set<string>();

  const lines = typeof text === 'string' ? text.split(/\r?\n/) : [];
  lines.forEach((line, index) => {
    if (!line.trim()) return;

    const label = `Line ${index + 1}`;
    const match = LINE_PATTERN.exec(line.trim());
    const email = match ? normalizeEmail(match[1]) : '';
    const amount = match ? parseAmount(match[2]) : null;

    if (!EMAIL_PATTERN.test(email)) {
      rejected.push({ label, reason: 'Expected “email, amount”.' });
    } else if (amount === null) {
      rejected.push({ label: email, reason: 'Amount must be a number like 1250 or 1250.50.' });
    } else if (seen.has(email)) {
      rejected.push({ label: email, reason: 'Listed more than once.' });
    } else {
      seen.add(email);
      entries.push({ email, amount });
    }
  });

  return { entries, rejected };
}

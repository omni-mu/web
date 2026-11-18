import { pool } from './db';
import { parseEarningsLines, SkippedEntry, validateEarningsDate } from './earnings-input';

export type RecordEarningsResult =
  | { ok: true; date: string; saved: number; skipped: SkippedEntry[] }
  | { ok: false; status: number; error: string };

export async function recordEarnings(date: unknown, text: unknown): Promise<RecordEarningsResult> {
  const dateError = validateEarningsDate(date);
  if (dateError) return { ok: false, status: 400, error: dateError };

  const { entries, rejected } = parseEarningsLines(text);
  if (entries.length === 0) {
    return { ok: false, status: 400, error: 'Add at least one valid “email, amount” row.' };
  }

  const { rows: drivers } = await pool.query<{ email: string; driver_id: string }>(
    `select lower(u.email) as email, dp.id as driver_id
       from users u
       join driver_profiles dp on dp.user_id = u.id
      where lower(u.email) = any($1)`,
    [entries.map(entry => entry.email)],
  );
  const driverIdByEmail = new Map(drivers.map(driver => [driver.email, driver.driver_id]));

  const found = entries.filter(entry => driverIdByEmail.has(entry.email));
  const missing = entries
    .filter(entry => !driverIdByEmail.has(entry.email))
    .map(entry => ({ label: entry.email, reason: 'No driver account found.' }));

  if (found.length > 0) {
    await pool.query(
      `insert into driver_daily_earnings (driver_id, earning_date, amount)
       select t.driver_id, $1::date, t.amount
         from unnest($2::uuid[], $3::numeric[]) as t(driver_id, amount)
       on conflict (driver_id, earning_date)
       do update set amount = excluded.amount, updated_at = now()`,
      [date, found.map(entry => driverIdByEmail.get(entry.email)), found.map(entry => entry.amount)],
    );
  }

  return { ok: true, date: date as string, saved: found.length, skipped: [...rejected, ...missing] };
}

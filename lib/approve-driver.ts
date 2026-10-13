import { pool } from './db';

export type ApproveResult =
  | { ok: true }
  | { ok: false; status: number; error: string };

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const normalizeEmail = (value: unknown) =>
  typeof value === 'string' ? value.trim().toLowerCase() : '';

export async function approveDriver(email: string): Promise<ApproveResult> {
  if (!EMAIL_PATTERN.test(email)) {
    return { ok: false, status: 400, error: 'Enter a valid email address.' };
  }

  const { rows: users } = await pool.query<{ id: string }>(
    'select id from users where lower(email) = $1',
    [email],
  );
  if (users.length === 0) {
    return { ok: false, status: 404, error: `No account found for ${email}.` };
  }

  const { rowCount } = await pool.query(
    'update driver_profiles set is_verified = true, updated_at = now() where user_id = any($1)',
    [users.map(user => user.id)],
  );
  if (!rowCount) {
    return {
      ok: false,
      status: 404,
      error: `${email} has no driver profile yet. Ask them to finish sign-up in the app.`,
    };
  }

  return { ok: true };
}

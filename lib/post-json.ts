export type PostResult<T> = { ok: true; data: T } | { ok: false; error: string };

const NETWORK_ERROR = 'Can’t reach the server. Check your connection and try again.';
const GENERIC_ERROR = 'Something went wrong. Try again.';

export async function postJson<T>(url: string, body: unknown): Promise<PostResult<T>> {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    const data = await response.json().catch(() => ({}));

    return response.ok ? { ok: true, data } : { ok: false, error: data.error ?? GENERIC_ERROR };
  } catch {
    return { ok: false, error: NETWORK_ERROR };
  }
}

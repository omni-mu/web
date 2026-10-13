import { approveDriver, normalizeEmail } from '@/lib/approve-driver';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  if (!process.env.DATABASE_URL) {
    return Response.json({ error: 'Server is not configured (DATABASE_URL missing).' }, { status: 503 });
  }

  const body = await request.json().catch(() => null);
  const email = normalizeEmail(body?.email);

  const result = await approveDriver(email);
  if (!result.ok) {
    return Response.json({ error: result.error }, { status: result.status });
  }

  return Response.json({ email });
}

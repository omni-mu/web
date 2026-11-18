import { recordEarnings } from '@/lib/record-earnings';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  if (!process.env.DATABASE_URL) {
    return Response.json({ error: 'Server is not configured (DATABASE_URL missing).' }, { status: 503 });
  }

  const body = await request.json().catch(() => null);

  const result = await recordEarnings(body?.date, body?.entries);
  if (!result.ok) {
    return Response.json({ error: result.error }, { status: result.status });
  }

  const { ok, ...summary } = result;
  return Response.json(summary);
}

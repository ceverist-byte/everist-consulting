'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { signSession, PORTAL_COOKIE } from '@/lib/portal-auth';

const SESSION_MAX_AGE = 60 * 60 * 24 * 7;

function clientFromPath(path: string): string | null {
  const segments = path.split('/').filter(Boolean);
  return segments[1] ?? null;
}

export async function loginAction(formData: FormData): Promise<void> {
  const password = String(formData.get('password') ?? '');
  const next = String(formData.get('next') ?? '');
  const client = clientFromPath(next);

  if (!client) {
    redirect('/portal/login?error=1');
  }

  const envKey = `PORTAL_${client.toUpperCase()}_PASSWORD`;
  const expected = process.env[envKey];

  if (!expected || password !== expected) {
    const params = new URLSearchParams({ error: '1' });
    if (next) params.set('next', next);
    redirect(`/portal/login?${params.toString()}`);
  }

  const token = await signSession(client);
  // Next.js 15: cookies() is async. If on Next.js 14, remove the await.
  const jar = await cookies();
  jar.set(PORTAL_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: SESSION_MAX_AGE,
    path: '/',
  });

  redirect(next || `/portal/${client}`);
}

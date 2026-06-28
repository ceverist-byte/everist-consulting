'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { signSession, signAdminSession, PORTAL_COOKIE } from '@/lib/portal-auth';
import { CLIENT_DISPLAY } from '@/lib/portal-clients';

const SESSION_MAX_AGE = 60 * 60 * 24 * 7;

function clientFromPath(path: string): string | null {
  const segments = path.split('/').filter(Boolean);
  return segments[1] ?? null;
}

function clientEnvKey(client: string): string {
  return `PORTAL_${client.replace(/-/g, '_').toUpperCase()}_PASSWORD`;
}

async function setSessionCookie(token: string): Promise<void> {
  // Next.js 15: cookies() is async. If on Next.js 14, remove the await.
  const jar = await cookies();
  jar.set(PORTAL_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: SESSION_MAX_AGE,
    path: '/',
  });
}

export async function loginAction(formData: FormData): Promise<void> {
  const password = String(formData.get('password') ?? '');
  const next = String(formData.get('next') ?? '');
  const client = clientFromPath(next);

  // ── No ?next= target: route by password alone ─────────────────────────────
  // The submitted access code decides the destination. Admin is checked first,
  // then each known client's password in turn; first match wins.
  if (!client) {
    const adminPw = process.env.PORTAL_ADMIN_PASSWORD;
    if (adminPw && password === adminPw) {
      await setSessionCookie(await signAdminSession());
      redirect('/portal/admin');
    }

    for (const slug of Object.keys(CLIENT_DISPLAY)) {
      const expected = process.env[clientEnvKey(slug)];
      if (expected && password === expected) {
        await setSessionCookie(await signSession(slug));
        redirect(`/portal/${slug}`);
      }
    }

    redirect('/portal/login?error=1');
  }

  // ── ?next= target present: validate against that client's password ─────────
  // (existing logic, unchanged)
  const isAdmin = client === 'admin';
  const expected = isAdmin
    ? process.env.PORTAL_ADMIN_PASSWORD
    : process.env[clientEnvKey(client)];

  if (!expected || password !== expected) {
    const params = new URLSearchParams({ error: '1' });
    if (next) params.set('next', next);
    redirect(`/portal/login?${params.toString()}`);
  }

  const token = isAdmin ? await signAdminSession() : await signSession(client);
  await setSessionCookie(token);

  redirect(next || `/portal/${client}`);
}

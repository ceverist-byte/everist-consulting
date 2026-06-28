import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { verifySession, PORTAL_COOKIE } from '@/lib/portal-auth';
import { CLIENT_DISPLAY } from '@/lib/portal-clients';
import { loginAction } from './actions';

function clientFromPath(path?: string): string | null {
  if (!path) return null;
  const segments = path.split('/').filter(Boolean);
  return segments[1] ?? null;
}

// Next.js 15: searchParams is a Promise. If on Next.js 14, change to:
// interface Props { searchParams: { next?: string; error?: string }; }
// and remove the 'await' below.
interface Props {
  searchParams: Promise<{ next?: string; error?: string }>;
}

const MONO =
  "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Consolas, monospace";
const SANS =
  "'Inter Tight', 'Inter', 'Helvetica Neue', Arial, sans-serif";

export default async function LoginPage({ searchParams }: Props) {
  const params = await searchParams;
  const jar = await cookies();
  const token = jar.get(PORTAL_COOKIE)?.value;
  const targetClient = clientFromPath(params.next);

  if (token && targetClient) {
    const session = await verifySession(token);
    if (session?.client === targetClient && params.next) {
      redirect(params.next);
    }
  }

  const clientLabel = targetClient
    ? (CLIENT_DISPLAY[targetClient] ?? null)
    : null;
  const hasError = params.error === '1';
  const nextPath = params.next ?? '';

  return (
    <div style={{ maxWidth: '360px', margin: '0 auto', paddingTop: '16px' }}>
      <div
        style={{
          borderBottom: '1px solid #111111',
          paddingBottom: '18px',
          marginBottom: '32px',
        }}
      >
        <p
          style={{
            fontFamily: MONO,
            fontSize: '10px',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#6A6861',
            margin: '0 0 10px',
          }}
        >
          {clientLabel ? `${clientLabel} · Access` : 'Portal Access'}
        </p>
        <h1
          style={{
            fontSize: '22px',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            margin: 0,
            color: '#111111',
          }}
        >
          Enter your access code.
        </h1>
      </div>

      {hasError && (
        <p
          style={{
            fontFamily: MONO,
            fontSize: '10px',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: '#9A3030',
            margin: '0 0 20px',
          }}
        >
          Access code not recognized.
        </p>
      )}

      <form action={loginAction}>
        <input type="hidden" name="next" value={nextPath} />

        <div style={{ marginBottom: '16px' }}>
          <label
            htmlFor="portal-password"
            style={{
              display: 'block',
              fontFamily: MONO,
              fontSize: '10px',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#6A6861',
              marginBottom: '8px',
            }}
          >
            Access Code
          </label>
          <input
            id="portal-password"
            type="password"
            name="password"
            required
            autoComplete="current-password"
            autoFocus
            style={{
              display: 'block',
              width: '100%',
              padding: '10px 12px',
              border: '1px solid #D8D4CB',
              background: '#F3F0EA',
              color: '#111111',
              fontFamily: SANS,
              fontSize: '15px',
              lineHeight: 1.4,
              outline: 'none',
              boxSizing: 'border-box' as const,
              borderRadius: 0,
              WebkitAppearance: 'none' as const,
            }}
          />
        </div>

        <button
          type="submit"
          style={{
            display: 'block',
            width: '100%',
            padding: '11px 16px',
            background: '#111111',
            color: '#F3F0EA',
            border: 'none',
            fontFamily: SANS,
            fontSize: '13px',
            fontWeight: 600,
            letterSpacing: '0.06em',
            textTransform: 'uppercase' as const,
            cursor: 'pointer',
            borderRadius: 0,
            WebkitAppearance: 'none' as const,
          }}
        >
          Enter
        </button>
      </form>

      <p
        style={{
          fontFamily: MONO,
          fontSize: '10px',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: '#6A6861',
          marginTop: '24px',
          lineHeight: 1.8,
        }}
      >
        Access provided by Everist Consulting.
        <br />
        Questions: chris@everistconsulting.com
      </p>
    </div>
  );
}

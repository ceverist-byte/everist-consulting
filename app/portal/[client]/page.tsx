import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { CLIENT_DISPLAY } from '@/lib/portal-clients';
import { listClients, loadManifest } from '@/lib/portal-content';

export const dynamic = 'force-static';
export const dynamicParams = false;

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

const MONO =
  "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Consolas, monospace";
const SANS =
  "'Inter Tight', 'Inter', 'Helvetica Neue', Arial, sans-serif";

export function generateStaticParams() {
  return listClients().map((client) => ({ client }));
}

interface Props {
  params: Promise<{ client: string }>;
}

export default async function ClientPortalPage({ params }: Props) {
  const { client } = await params;
  const manifest = loadManifest(client);
  if (!manifest) notFound();

  const display = CLIENT_DISPLAY[client] ?? client;

  return (
    <div style={{ maxWidth: '680px', fontFamily: SANS }}>
      {/* Client header */}
      <div
        style={{
          borderBottom: '2px solid #111111',
          paddingBottom: '20px',
          marginBottom: '36px',
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
          {manifest.eyebrow}
        </p>
        <h1
          style={{
            fontSize: 'clamp(20px, 3vw, 26px)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            margin: 0,
            color: '#111111',
          }}
        >
          {display}
        </h1>
      </div>

      {/* Deliverables section */}
      <div>
        <p
          style={{
            fontFamily: MONO,
            fontSize: '10px',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#6A6861',
            margin: '0 0 14px',
          }}
        >
          Deliverables
        </p>

        {manifest.deliverables.map((d, i) => (
          <Link
            key={d.slug}
            href={`/portal/${client}/${d.slug}`}
            style={{
              textDecoration: 'none',
              display: 'block',
              ...(i > 0 ? { marginTop: '12px' } : {}),
            }}
          >
            <div
              style={{
                border: '1px solid #D8D4CB',
                padding: '18px 20px',
                display: 'grid',
                gridTemplateColumns: '1fr auto',
                alignItems: 'start',
                gap: '16px',
                cursor: 'pointer',
                color: '#111111',
              }}
            >
              {/* Left: document identity */}
              <div>
                {d.eyebrow && (
                  <p
                    style={{
                      fontFamily: MONO,
                      fontSize: '10px',
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: '#6A6861',
                      margin: '0 0 6px',
                    }}
                  >
                    {d.eyebrow}
                  </p>
                )}
                <p
                  style={{
                    fontFamily: SANS,
                    fontSize: '15px',
                    fontWeight: 600,
                    letterSpacing: '-0.01em',
                    margin: '0 0 4px',
                    color: '#111111',
                  }}
                >
                  {d.title}
                </p>
                {d.description && (
                  <p
                    style={{
                      fontFamily: SANS,
                      fontSize: '14px',
                      color: '#4F4A43',
                      lineHeight: 1.55,
                      margin: 0,
                    }}
                  >
                    {d.description}
                  </p>
                )}
              </div>

              {/* Right: view arrow */}
              <span
                style={{
                  fontFamily: MONO,
                  fontSize: '10px',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: '#8A642C',
                  whiteSpace: 'nowrap',
                  paddingTop: '2px',
                }}
              >
                View →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

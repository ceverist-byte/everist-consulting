import { readFileSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

export const dynamic = 'force-static';

const MONO =
  "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Consolas, monospace";
const SANS =
  "'Inter Tight', 'Inter', 'Helvetica Neue', Arial, sans-serif";

export default function DempseyPortalPage() {
  // Read current BEP metadata from the source file so the index
  // stays in sync with the document without a separate manual update.
  const raw = readFileSync(
    join(process.cwd(), 'content/portal/dempsey/bep.md'),
    'utf-8'
  );
  const { data: meta } = matter(raw);
  const revision = (meta.revision as string) ?? '';
  const date = (meta.date as string) ?? '';
  const status = (meta.status as string) ?? '';

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
          EVC-1.5 · Scan Bridge
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
          Dempsey Construction
        </h1>
      </div>

      {/* Documents section */}
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
          Documents
        </p>

        {/* BEP row */}
        <Link
          href="/portal/dempsey/bep"
          style={{ textDecoration: 'none', display: 'block' }}
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
                BEP · {revision} · {date}
              </p>
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
                Lite BIM Execution Plan
              </p>
              <p
                style={{
                  fontFamily: MONO,
                  fontSize: '10px',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#6A6861',
                  margin: 0,
                }}
              >
                {status}
              </p>
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
      </div>
    </div>
  );
}

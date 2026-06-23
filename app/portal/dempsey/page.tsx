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
          Deliverables
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

        {/* Coordination Finding stub */}
        <div
          style={{
            border: '1px solid #D8D4CB',
            padding: '18px 20px',
            marginTop: '12px',
          }}
        >
          <p
            style={{
              fontFamily:
                "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",
              fontSize: '10px',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#6A6861',
              margin: '0 0 6px',
            }}
          >
            Coordination Finding
          </p>
          {/* LOE intro */}
          <p
            style={{
              fontFamily: "'Inter Tight', 'Inter', 'Helvetica Neue', Arial, sans-serif",
              fontSize: '14px',
              color: '#4F4A43',
              lineHeight: 1.55,
              margin: '0 0 10px',
            }}
          >
            Routing analysis and conflict identification for the overhead MEP systems
            within the scope established by the BIM Execution Plan. Coordination
            findings document the current state at a specific typical condition and
            are updated as each study is located and confirmed by field markup.
          </p>

          {/* Zone bullets */}
          <ul
            style={{
              margin: '0 0 16px',
              paddingLeft: '18px',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}
          >
            <li
              style={{
                fontFamily: "'Inter Tight', 'Inter', 'Helvetica Neue', Arial, sans-serif",
                fontSize: '14px',
                color: '#4F4A43',
                lineHeight: 1.55,
              }}
            >
              <strong>Zone 1</strong> — Level 4 elevator lobby. Fan coil and structural
              penetration conditions at the replicated instance of the studied Level 3
              typical. Instance verification pending as-built delivery.
            </li>
            <li
              style={{
                fontFamily: "'Inter Tight', 'Inter', 'Helvetica Neue', Arial, sans-serif",
                fontSize: '14px',
                color: '#4F4A43',
                lineHeight: 1.55,
              }}
            >
              <strong>Zone 2</strong> — East end of Level 2, refrigerant bundle origin.
              Where the main line-sets rise from the Level 1 parking ceiling and enter
              the building's overhead distribution. Highest-priority routing study. Study
              boundary pending M403–M405 drawings and scan delivery.
            </li>
            <li
              style={{
                fontFamily: "'Inter Tight', 'Inter', 'Helvetica Neue', Arial, sans-serif",
                fontSize: '14px',
                color: '#4F4A43',
                lineHeight: 1.55,
              }}
            >
              <strong>Zone 3</strong> — West corridor at Level 4, terminal end of the
              refrigerant line-set run. Exhaust co-present at this location due to the
              in-unit fan routing. Two-system overhead condition at the west end of the
              distribution route.
            </li>
          </ul>

          {/* Two-column thumbnail layout */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '12px',
              marginBottom: '14px',
            }}
          >
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/portal/dempsey/zones/zone2-L2.png"
                alt="Zone 2, Level 2 location study"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
              <p
                style={{
                  fontFamily:
                    "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",
                  fontSize: '10px',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase' as const,
                  color: '#6A6861',
                  margin: '6px 0 0',
                }}
              >
                Zone 2 · Level 2.
              </p>
            </div>
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/portal/dempsey/zones/zones1-3-L4.png"
                alt="Zones 1 and 3, Level 4 location study"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
              <p
                style={{
                  fontFamily:
                    "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",
                  fontSize: '10px',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase' as const,
                  color: '#6A6861',
                  margin: '6px 0 0',
                }}
              >
                Zones 1 and 3 · Level 4.
              </p>
            </div>
          </div>

          {/* Disclaimer */}
          <p
            style={{
              fontFamily:
                "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",
              fontSize: '10px',
              letterSpacing: '0.08em',
              color: '#6A6861',
              margin: 0,
              lineHeight: 1.6,
            }}
          >
            Zone boundaries derived from H+W Engineering mechanical drawings. Final
            placement confirmed by field markup and as-built delivery.
          </p>
        </div>

        {/* Back-check Checklist stub */}
        <div
          style={{
            border: '1px solid #D8D4CB',
            padding: '18px 20px',
            marginTop: '12px',
          }}
        >
          <p
            style={{
              fontFamily:
                "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",
              fontSize: '10px',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#6A6861',
              margin: '0 0 6px',
            }}
          >
            Back-check Checklist
          </p>
          <p
            style={{
              fontFamily: "'Inter Tight', 'Inter', 'Helvetica Neue', Arial, sans-serif",
              fontSize: '14px',
              color: '#4F4A43',
              lineHeight: 1.55,
              margin: 0,
            }}
          >
            A back-check checklist for field verification at install, built from the
            confirmed coordination findings and coached through cycle one by Everist
            Consulting. No instances ready. Fills in when a coordination finding is
            confirmed and direction is aligned.
          </p>
        </div>
      </div>
    </div>
  );
}

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
          <ul style={{ margin: '0 0 16px', paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li style={{ fontFamily: "'Inter Tight', 'Inter', 'Helvetica Neue', Arial, sans-serif", fontSize: '14px', color: '#4F4A43', lineHeight: 1.55 }}>
              <strong>Corridor:</strong> refrigerant mains and fire protection routing confirmed to fit through the structural beam penetrations at both suite-side and corridor-side locations. Specific routing path between the two options is being finalized with the installing contractor.{' '}<span style={{ fontFamily: "'JetBrains Mono', ui-monospace, monospace", fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: '#6A6861' }}>In coordination</span>
            </li>
            <li style={{ fontFamily: "'Inter Tight', 'Inter', 'Helvetica Neue', Arial, sans-serif", fontSize: '14px', color: '#4F4A43', lineHeight: 1.55 }}>
              <strong>Elevator lobby, south:</strong> vertical duct run is already in place and captured in the existing-conditions model, so that portion needs no further coordination. Current focus is routing the horizontal branch out of the shaft around the adjacent electrical room.{' '}<span style={{ fontFamily: "'JetBrains Mono', ui-monospace, monospace", fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: '#6A6861' }}>In coordination</span>
            </li>
            <li style={{ fontFamily: "'Inter Tight', 'Inter', 'Helvetica Neue', Arial, sans-serif", fontSize: '14px', color: '#4F4A43', lineHeight: 1.55 }}>
              <strong>Elevator lobby, north:</strong> beam penetration for the refrigerant corner turn is confirmed workable. Coordinating the connection detail where the route meets a second beam intersection nearby.{' '}<span style={{ fontFamily: "'JetBrains Mono', ui-monospace, monospace", fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: '#6A6861' }}>In coordination</span>
            </li>
            <li style={{ fontFamily: "'Inter Tight', 'Inter', 'Helvetica Neue', Arial, sans-serif", fontSize: '14px', color: '#4F4A43', lineHeight: 1.55 }}>
              <strong>West corridor:</strong> convergence point where fan coil, exhaust, and fire protection meet; existing conditions captured. A fan coil conflict was identified this week and is being characterized. Exhaust routing remains pending design direction.{' '}<span style={{ fontFamily: "'JetBrains Mono', ui-monospace, monospace", fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: '#6A6861' }}>Pending design direction</span>
            </li>
          </ul>

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
            Zone boundaries field-confirmed and anchored to the ARC as-built delivery;
            final placement governed by field markup. No dimensions published.
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

import { readFileSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

export const dynamic = 'force-static';

const MONO =
  "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Consolas, monospace";
const SANS =
  "'Inter Tight', 'Inter', 'Helvetica Neue', Arial, sans-serif";

// Update this date with each Coordination Finding content dispatch.
const COORDINATION_FINDING_UPDATED = 'July 27, 2026';

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
          {/* Dispatch date, matches the BEP row's transmittal-status treatment */}
          <p
            style={{
              fontFamily: MONO,
              fontSize: '10px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#6A6861',
              margin: '0 0 10px',
            }}
          >
            Last updated {COORDINATION_FINDING_UPDATED}
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

          <p
            style={{
              fontFamily: "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",
              fontSize: '10px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase' as const,
              color: '#8A642C',
              margin: '24px 0 10px',
            }}
          >
            Update, July 22, 2026
          </p>

          <p
            style={{
              fontFamily: "'Inter Tight', 'Inter', 'Helvetica Neue', Arial, sans-serif",
              fontSize: '14px',
              color: '#4F4A43',
              lineHeight: 1.55,
              margin: '0 0 12px',
            }}
          >
            The four locations above were the initial study areas, each scoped to a
            typical condition. As the work progressed the modeling shifted from
            discrete zones to a floor-plate-wide approach at Level 2, approaching what
            a comprehensive project-wide exercise would cover within specific building
            systems. That shift resolved several of the original questions and changed
            what the remaining ones are.
          </p>

          <ul style={{ margin: '0 0 12px', paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li style={{ fontFamily: "'Inter Tight', 'Inter', 'Helvetica Neue', Arial, sans-serif", fontSize: '14px', color: '#4F4A43', lineHeight: 1.55 }}>
              <strong>Corridor.</strong> Carried the beam penetration study. The work
              established the optimal locations to penetrate beams for fire protection
              mains and refrigerant, and confirmed that anything not routed through a
              beam penetration fits above the ceiling. Fire protection branch lines
              were confirmed to fit relative to the fan coil units.
            </li>
            <li style={{ fontFamily: "'Inter Tight', 'Inter', 'Helvetica Neue', Arial, sans-serif", fontSize: '14px', color: '#4F4A43', lineHeight: 1.55 }}>
              <strong>Elevator lobby, south.</strong> The original question was routing
              the horizontal branch out of the shaft around the adjacent electrical
              room. That question became moot when the exhaust design moved to in-unit
              fans, which removed the shaft routing from the scope.
            </li>
            <li style={{ fontFamily: "'Inter Tight', 'Inter', 'Helvetica Neue', Arial, sans-serif", fontSize: '14px', color: '#4F4A43', lineHeight: 1.55 }}>
              <strong>Elevator lobby, north.</strong> The corner turn question was
              relieved by routing the fire protection mains and refrigerant above the
              suites north of the corridor, which avoided the second beam intersection
              entirely.
            </li>
            <li style={{ fontFamily: "'Inter Tight', 'Inter', 'Helvetica Neue', Arial, sans-serif", fontSize: '14px', color: '#4F4A43', lineHeight: 1.55 }}>
              <strong>West corridor.</strong> Existing conditions were confirmed
              clear through the floor-plate-wide modeling at Level 2, covering the
              typical suite band. The west-most suite, outside that typical band,
              was not part of this scope and has not been reviewed.
            </li>
            <li style={{ fontFamily: "'Inter Tight', 'Inter', 'Helvetica Neue', Arial, sans-serif", fontSize: '14px', color: '#4F4A43', lineHeight: 1.55 }}>
              <strong>Exhaust, representative suite.</strong> Design direction has moved
              to an in-unit fan solution. Modeling is paused pending revised mechanical
              drawings from the design team; verification resumes once those are issued.
            </li>
            <li style={{ fontFamily: "'Inter Tight', 'Inter', 'Helvetica Neue', Arial, sans-serif", fontSize: '14px', color: '#4F4A43', lineHeight: 1.55 }}>
              <strong>Elevator hall, Level 3.</strong> The study was reproduced against
              the current documents and surfaced nothing new. It confirms the earlier
              finding: the ducts serving the fan coil unit at the elevator hall do not
              fit above the ceiling as designed. This is the one condition the
              modeling confirmed as a hard negative, and it carries a design response
              rather than a field resolution.
            </li>
            <li style={{ fontFamily: "'Inter Tight', 'Inter', 'Helvetica Neue', Arial, sans-serif", fontSize: '14px', color: '#4F4A43', lineHeight: 1.55 }}>
              <strong>Level 4.</strong> The remaining scope. What existing roof piping
              introduces to the overhead at Level 4 has not been studied, and part of
              the plumbing design scope is to rework existing piping. Level 4
              conditions are not assumed to repeat from the levels below.
            </li>
          </ul>

          <p
            style={{
              fontFamily: "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",
              fontSize: '10px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase' as const,
              color: '#8A642C',
              margin: '24px 0 10px',
            }}
          >
            Update, July 24, 2026
          </p>

          <p
            style={{
              fontFamily: "'Inter Tight', 'Inter', 'Helvetica Neue', Arial, sans-serif",
              fontSize: '14px',
              color: '#4F4A43',
              lineHeight: 1.55,
              margin: '0 0 12px',
            }}
          >
            Jason Garrett now maintains the live coordination register day to day.
            Everist Consulting coaches the first verification cycle.
          </p>

          <p
            style={{
              fontFamily: "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",
              fontSize: '10px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase' as const,
              color: '#8A642C',
              margin: '24px 0 10px',
            }}
          >
            Update, July 27, 2026
          </p>

          <p
            style={{
              fontFamily: "'Inter Tight', 'Inter', 'Helvetica Neue', Arial, sans-serif",
              fontSize: '14px',
              color: '#4F4A43',
              lineHeight: 1.55,
              margin: '0 0 12px',
            }}
          >
            The coordination model is final as of today. Tags are organized by
            system, and named scenes open directly to each open coordination
            condition, one scene per item. Work under the current letter of
            engagement is complete.
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
              margin: '0 0 14px',
            }}
          >
            The back-check checklist verifies at install that what was coordinated is
            what gets built. Because installation on this project is not driven by
            shop drawings produced from the coordination model, each study also
            identifies the verifying artifact: the specific contract instrument that
            governs what is installed at that location. Naming the artifact is what
            makes a coordination decision enforceable in the field.
          </p>

          <p
            style={{
              fontFamily: "'Inter Tight', 'Inter', 'Helvetica Neue', Arial, sans-serif",
              fontSize: '14px',
              color: '#4F4A43',
              lineHeight: 1.55,
              margin: '0 0 12px',
              fontWeight: 600,
            }}
          >
            The artifacts identified to date, by study:
          </p>

          <ul style={{ margin: '0 0 12px', paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li style={{ fontFamily: "'Inter Tight', 'Inter', 'Helvetica Neue', Arial, sans-serif", fontSize: '14px', color: '#4F4A43', lineHeight: 1.55 }}>
              <strong>Refrigerant and fire protection mains, beam penetrations.</strong> Structural
              engineer of record's penetration allowances at the C12 and C10 channels,
              with the connection detail referenced on the structural details sheet,
              carried into field markup.
            </li>
            <li style={{ fontFamily: "'Inter Tight', 'Inter', 'Helvetica Neue', Arial, sans-serif", fontSize: '14px', color: '#4F4A43', lineHeight: 1.55 }}>
              <strong>Fire protection branch lines.</strong> Fire protection
              subcontractor shop drawing showing head orientation, tap details by
              branch, and head locations by level.
            </li>
            <li style={{ fontFamily: "'Inter Tight', 'Inter', 'Helvetica Neue', Arial, sans-serif", fontSize: '14px', color: '#4F4A43', lineHeight: 1.55 }}>
              <strong>Fan coil units, elevator hall at Level 3.</strong> The request
              for information carried by Dempsey and the design team's redesigned
              distribution answering it.
            </li>
            <li style={{ fontFamily: "'Inter Tight', 'Inter', 'Helvetica Neue', Arial, sans-serif", fontSize: '14px', color: '#4F4A43', lineHeight: 1.55 }}>
              <strong>Elevator lobby penetrations.</strong> Still outstanding.
              Whether beam penetrations are required here depends on how the fan
              coil duct routing at the elevator hall, Level 3 is resolved.
              Verifying artifact: the design team's response to the pending
              redesign request, once issued.
            </li>
            <li style={{ fontFamily: "'Inter Tight', 'Inter', 'Helvetica Neue', Arial, sans-serif", fontSize: '14px', color: '#4F4A43', lineHeight: 1.55 }}>
              <strong>Fan coil access panels.</strong> Panel positioning and type
              are established in the architectural contract documents.
              No separate submittal is required to verify this location.
            </li>
            <li style={{ fontFamily: "'Inter Tight', 'Inter', 'Helvetica Neue', Arial, sans-serif", fontSize: '14px', color: '#4F4A43', lineHeight: 1.55 }}>
              <strong>Balcony ceiling assembly.</strong> The accepted balcony ceiling
              detail carried onto the architectural details sheet of record.
            </li>
            <li style={{ fontFamily: "'Inter Tight', 'Inter', 'Helvetica Neue', Arial, sans-serif", fontSize: '14px', color: '#4F4A43', lineHeight: 1.55 }}>
              <strong>Level 4 overhead.</strong> The Level 4 existing conditions pass
              and the plumbing rework design, coordinated against the architectural
              note delegating Level 4 ceiling and soffit heights to field coordination.
            </li>
          </ul>

          <p
            style={{
              fontFamily: "'Inter Tight', 'Inter', 'Helvetica Neue', Arial, sans-serif",
              fontSize: '14px',
              color: '#4F4A43',
              lineHeight: 1.55,
              margin: 0,
            }}
          >
            Each artifact is tracked to a named responsible party and a date derived
            from the field install milestone it releases. Everist Consulting coaches
            the first verification cycle; administrative ownership sits with Dempsey.
          </p>
        </div>
      </div>
    </div>
  );
}

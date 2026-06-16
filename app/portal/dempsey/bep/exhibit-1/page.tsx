import Link from 'next/link';
import ExhibitOneSwimLane from '../ExhibitOneSwimLane';

export const dynamic = 'force-static';

const MONO =
  "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Consolas, monospace";
const SANS =
  "'Inter Tight', 'Inter', 'Helvetica Neue', Arial, sans-serif";

export default function Exhibit1Page() {
  return (
    <div style={{ fontFamily: SANS }}>
      {/* Header row: back link + title */}
      <div
        style={{
          display: 'flex',
          alignItems: 'baseline',
          gap: '20px',
          marginBottom: '24px',
          paddingBottom: '18px',
          borderBottom: '1px solid #D8D4CB',
          maxWidth: '680px',
        }}
      >
        <Link
          href="/portal/dempsey/bep"
          style={{
            fontFamily: MONO,
            fontSize: '10px',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: '#6A6861',
            textDecoration: 'none',
            flexShrink: 0,
          }}
        >
          ← BEP
        </Link>
        <div>
          <p
            style={{
              fontFamily: MONO,
              fontSize: '10px',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#6A6861',
              margin: '0 0 4px',
            }}
          >
            Exhibit 1
          </p>
          <h1
            style={{
              fontFamily: SANS,
              fontSize: '18px',
              fontWeight: 700,
              letterSpacing: '-0.01em',
              margin: 0,
              color: '#111111',
            }}
          >
            Coordination Swim-Lane
          </h1>
        </div>
      </div>

      {/* Full-bleed diagram — breaks out of portal main's 840px constraint */}
      <div
        style={{
          width: '100vw',
          position: 'relative',
          left: '50%',
          transform: 'translateX(-50%)',
          paddingBottom: '32px',
          paddingLeft: '32px',
          paddingRight: '32px',
          boxSizing: 'border-box',
        }}
      >
        <ExhibitOneSwimLane />
      </div>
    </div>
  );
}

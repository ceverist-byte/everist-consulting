import Link from 'next/link';
import Exhibit3View from './Exhibit3View';

export const dynamic = 'force-static';

const MONO = "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Consolas, monospace";
const SANS = "'Inter Tight', 'Inter', 'Helvetica Neue', Arial, sans-serif";

export default function Exhibit3Page() {
  return (
    <div style={{ fontFamily: SANS }}>
      {/* Back navigation */}
      <div
        style={{
          marginBottom: '28px',
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
          }}
        >
          &#8592; BEP
        </Link>
      </div>

      {/* Page header */}
      <div style={{ marginBottom: '28px', maxWidth: '680px' }}>
        <p
          style={{
            fontFamily: MONO,
            fontSize: '10px',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#6A6861',
            margin: '0 0 6px',
          }}
        >
          Exhibit 3
        </p>
        <h1
          style={{
            fontFamily: SANS,
            fontSize: 'clamp(18px, 2.5vw, 24px)',
            fontWeight: 700,
            letterSpacing: '-0.01em',
            lineHeight: 1.1,
            color: '#111111',
            margin: '0 0 10px',
          }}
        >
          Location Breakdown Structure
        </h1>
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
          Everist Consulting, existing conditions integration, BEP 03
        </p>
      </div>

      {/* Carousel + legend */}
      <Exhibit3View />
    </div>
  );
}

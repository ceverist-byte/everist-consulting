import type { Metadata } from 'next';
import ModelViewer from './ModelViewer';

export const metadata: Metadata = {
  title: 'Governed-Elevation Vertical Stack — Everist Consulting',
  description:
    "The project's system priority structure rendered as a representative section at governed elevations, for field confirmation.",
  robots: { index: true, follow: true },
};

const MONO =
  "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Consolas, monospace";
const SANS =
  "'Inter Tight', 'Inter', 'Helvetica Neue', Arial, sans-serif";

export default function GoverningElevationPage() {
  return (
    <>
      <div
        style={{
          flexShrink: 0,
          padding: '24px 32px 20px',
          borderBottom: '1px solid #D8D4CB',
        }}
      >
        <p
          style={{
            fontFamily: MONO,
            fontSize: '10px',
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: '#6A6861',
            margin: '0 0 6px',
          }}
        >
          Exhibit 2 · EVC-1.5
        </p>
        <h1
          style={{
            fontFamily: SANS,
            fontSize: '22px',
            fontWeight: 700,
            letterSpacing: '-0.01em',
            margin: '0 0 6px',
            color: '#111111',
          }}
        >
          Governed-Elevation Vertical Stack
        </h1>
        <p
          style={{
            fontFamily: SANS,
            fontSize: '13px',
            color: '#4F4A43',
            margin: 0,
          }}
        >
          The project&apos;s system priority structure rendered as a representative
          section at governed elevations, for field confirmation.
        </p>
      </div>

      <div style={{ flex: 1, overflow: 'hidden' }}>
        <ModelViewer />
      </div>
    </>
  );
}

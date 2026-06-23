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
        <ol
          className="list-decimal pl-5"
          style={{
            fontFamily: SANS,
            fontSize: '12px',
            lineHeight: 1.5,
            color: '#4F4A43',
            margin: '10px 0 0',
          }}
        >
          <li>
            Main duct conflicts with the bath ceiling at 7&apos;-2&quot;. The duct
            cannot run at this elevation without cutting into the approved ceiling
            plane.
          </li>
          <li>
            Bath fan coil must sit above the 7&apos;-2&quot; bath ceiling and below
            the deck above. Duct connection to be field-verified.
          </li>
          <li>
            Fire protection main runs parallel alongside the main duct through the
            same overhead zone.
          </li>
          <li>
            No overhead systems run above the 8&apos;-2&quot; living area ceiling.
          </li>
        </ol>
      </div>

      <div style={{ flex: 1, overflow: 'hidden' }}>
        <ModelViewer />
      </div>
    </>
  );
}

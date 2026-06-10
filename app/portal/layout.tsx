import type { Metadata } from 'next';

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

function ECMark({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 1000 1000"
      shapeRendering="crispEdges"
      aria-hidden="true"
      focusable="false"
    >
      <g fill="#8A642C">
        <rect x="0" y="0" width="170" height="1000" />
        <rect x="0" y="830" width="1000" height="170" />
        <rect x="830" y="300" width="170" height="700" />
        <rect x="0" y="0" width="700" height="170" />
        <rect x="280" y="280" width="120" height="440" />
        <rect x="280" y="280" width="440" height="120" />
        <rect x="280" y="440" width="280" height="120" />
        <rect x="280" y="600" width="360" height="120" />
      </g>
    </svg>
  );
}

const MONO =
  "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Consolas, monospace";
const SANS =
  "'Inter Tight', 'Inter', 'Helvetica Neue', Arial, sans-serif";

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        overflowY: 'auto',
        background: '#F3F0EA',
        color: '#111111',
        fontFamily: SANS,
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
        display: 'flex',
        flexDirection: 'column',
        zIndex: 9999,
      }}
    >
      <header
        style={{
          flexShrink: 0,
          borderBottom: '1px solid #D8D4CB',
          padding: '18px 32px',
          display: 'flex',
          alignItems: 'center',
          gap: '14px',
        }}
      >
        <ECMark size={24} />
        <span
          style={{
            fontFamily: MONO,
            fontSize: '10px',
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: '#6A6861',
          }}
        >
          Everist Consulting · Client Portal
        </span>
      </header>

      <main
        style={{
          flex: 1,
          padding: '48px 32px',
          width: '100%',
          maxWidth: '840px',
          margin: '0 auto',
          boxSizing: 'border-box',
        }}
      >
        {children}
      </main>

      <footer
        style={{
          flexShrink: 0,
          borderTop: '1px solid #D8D4CB',
          padding: '16px 32px',
          fontFamily: MONO,
          fontSize: '10px',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: '#6A6861',
        }}
      >
        Everist Consulting · Confidential
      </footer>
    </div>
  );
}

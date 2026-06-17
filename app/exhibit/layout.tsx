const logoSvg = `<svg viewBox="0 0 1800 700" xmlns="http://www.w3.org/2000/svg">
  <g transform="translate(70 70) scale(0.56)" fill="#111111">
    <rect x="0" y="0" width="170" height="1000"/>
    <rect x="0" y="830" width="1000" height="170"/>
    <rect x="830" y="300" width="170" height="700"/>
    <rect x="0" y="0" width="700" height="170"/>
    <rect x="280" y="280" width="120" height="440"/>
    <rect x="280" y="280" width="440" height="120"/>
    <rect x="280" y="440" width="280" height="120"/>
    <rect x="280" y="600" width="360" height="120"/>
  </g>
  <g font-family="'Inter Tight','Inter','Helvetica Neue',Arial,sans-serif" fill="#111111">
    <text x="720" y="340" font-size="170" font-weight="700" letter-spacing="-4">EVERIST</text>
    <text x="720" y="470" font-size="96" font-weight="500" letter-spacing="6">CONSULTING</text>
  </g>
</svg>`;

export default function ExhibitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: '#F3F0EA',
        color: '#111111',
        fontFamily: "'Inter Tight', 'Inter', 'Helvetica Neue', Arial, sans-serif",
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <header
        style={{
          flexShrink: 0,
          borderBottom: '1px solid #D8D4CB',
          padding: '16px 32px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <a
          href="https://www.everistconsulting.com"
          aria-label="Everist Consulting home"
          style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}
        >
          <span
            style={{ display: 'block', width: '148px' }}
            dangerouslySetInnerHTML={{ __html: logoSvg }}
          />
        </a>
      </header>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        {children}
      </div>
    </div>
  );
}

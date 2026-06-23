import { readFileSync } from 'fs';
import { join } from 'path';
import Link from 'next/link';
import type { Metadata } from 'next';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Renovation Assessment · Military Residential',
  robots: { index: false, follow: false },
};

const MONO =
  "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Consolas, monospace";

// The source is a full HTML document; render only its <body> inner content
// inside the portal shell. Fall back to the whole file if there is no <body>.
function extractBody(html: string): string {
  const match = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  return match ? match[1] : html;
}

export default function RenovationAssessmentPage() {
  const filePath = join(
    process.cwd(),
    'content/portal/clark-sd/renovation-military-residential.html'
  );
  const raw = readFileSync(filePath, 'utf-8');
  const body = extractBody(raw);

  return (
    <div>
      {/* Back navigation */}
      <div
        style={{
          marginBottom: '32px',
          paddingBottom: '20px',
          borderBottom: '1px solid #D8D4CB',
          maxWidth: '720px',
        }}
      >
        <Link
          href="/portal/clark-sd"
          style={{
            fontFamily: MONO,
            fontSize: '10px',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: '#6A6861',
            textDecoration: 'none',
          }}
        >
          ← Clark Construction Portal
        </Link>
      </div>

      {/* Renovation note body */}
      <div
        className="portal-note-content"
        style={{ maxWidth: '720px', margin: '0 auto' }}
        dangerouslySetInnerHTML={{ __html: body }}
      />
    </div>
  );
}

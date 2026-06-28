import { readdirSync } from 'fs';
import { join } from 'path';
import type { Metadata } from 'next';
import Link from 'next/link';
import { CLIENT_DISPLAY } from '@/lib/portal-clients';

// Inventory is read from the content tree at request time.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Portal Inventory',
  robots: { index: false, follow: false },
};

const MONO =
  "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Consolas, monospace";
const SANS =
  "'Inter Tight', 'Inter', 'Helvetica Neue', Arial, sans-serif";

interface InventoryRow {
  slug: string;
  display: string;
  deliverable: string;
  url: string;
}

// The inventory derives entirely from two always-current sources:
//   1. CLIENT_DISPLAY        — slug + display name
//   2. content/portal/[slug] — deliverable slugs (the .md/.html filenames)
// No file content is read; status/revision/date drift and are not trusted.
function readInventory(): InventoryRow[] {
  const base = join(process.cwd(), 'content/portal');
  const rows: InventoryRow[] = [];

  for (const slug of Object.keys(CLIENT_DISPLAY)) {
    let files: string[];
    try {
      files = readdirSync(join(base, slug)).filter(
        (f) => f.endsWith('.md') || f.endsWith('.html')
      );
    } catch {
      continue;
    }

    for (const file of files.sort()) {
      const deliverable = file.replace(/\.(md|html)$/, '');
      rows.push({
        slug,
        display: CLIENT_DISPLAY[slug],
        deliverable,
        url: `/portal/${slug}/${deliverable}`,
      });
    }
  }

  return rows;
}

const TH: React.CSSProperties = {
  fontFamily: MONO,
  fontSize: '10px',
  letterSpacing: '0.14em',
  textTransform: 'uppercase',
  color: '#8A642C',
  fontWeight: 600,
  textAlign: 'left',
  padding: '0 16px 10px 0',
  borderBottom: '2px solid #111111',
  whiteSpace: 'nowrap',
};

const TD: React.CSSProperties = {
  fontFamily: SANS,
  fontSize: '14px',
  color: '#111111',
  padding: '12px 16px 12px 0',
  borderBottom: '1px solid #D8D4CB',
  verticalAlign: 'top',
  lineHeight: 1.5,
};

export default function PortalAdminPage() {
  const rows = readInventory();

  return (
    <div style={{ fontFamily: SANS }}>
      {/* Inventory links inherit the cell typography/color; underline on hover only. */}
      <style>{`.inv-link{color:inherit;text-decoration:none}.inv-link:hover{text-decoration:underline}`}</style>
      {/* Header */}
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
          Internal · Inventory
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
          Portal Inventory
        </h1>
      </div>

      {rows.length === 0 ? (
        <p
          style={{
            fontFamily: MONO,
            fontSize: '11px',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#6A6861',
          }}
        >
          No deliverables found.
        </p>
      ) : (
        <div style={{ overflowX: 'auto' }}>
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
            }}
          >
            <thead>
              <tr>
                <th style={TH}>Client</th>
                <th style={TH}>Deliverable</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.url}>
                  <td style={TD}>
                    <Link href={`/portal/${row.slug}`} className="inv-link">
                      {row.display}
                    </Link>
                  </td>
                  <td style={{ ...TD, fontFamily: MONO, fontSize: '12px' }}>
                    <Link href={row.url} className="inv-link">
                      {row.deliverable}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

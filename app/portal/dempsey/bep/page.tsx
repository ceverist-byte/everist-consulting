import { readFileSync } from 'fs';
import { join } from 'path';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import matter from 'gray-matter';
import Link from 'next/link';
import styles from './bep.module.css';
import ExhibitOneSwimLane from './ExhibitOneSwimLane';

export const dynamic = 'force-static';

async function renderMarkdown(markdown: string): Promise<string> {
  const result = await remark()
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeStringify)
    .process(markdown);
  return result.toString();
}

interface ExhibitMeta {
  num: string;
  title: string;
  desc: string;
}

function parseExhibits(text: string): ExhibitMeta[] {
  const lines = text.split('\n').filter(l => /\*\*Exhibit \d+/.test(l));
  return lines.flatMap(line => {
    const headerMatch = line.match(/\*\*Exhibit (\d+) · ([^*]+?)\.\*\*/);
    const descMatch = line.match(/\.\*\* (.+?) In production\./);
    if (!headerMatch) return [];
    return [{
      num: `Exhibit ${headerMatch[1]}`,
      title: headerMatch[2].trim(),
      desc: descMatch ? descMatch[1].trim() : '',
    }];
  });
}

const EXHIBITS_MARKER = '\n## Exhibits\n';

const MONO =
  "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Consolas, monospace";

export default async function BEPPage() {
  const filePath = join(process.cwd(), 'content/portal/dempsey/bep.md');
  const raw = readFileSync(filePath, 'utf-8');

  const { data: meta, content: body } = matter(raw);
  const revision = (meta.revision as string) ?? '';
  const revDate = (meta.date as string) ?? '';

  const splitIdx = body.indexOf(EXHIBITS_MARKER);
  const mainMarkdown =
    splitIdx >= 0 ? body.slice(0, splitIdx) : body;
  const exhibitsSection =
    splitIdx >= 0 ? body.slice(splitIdx + EXHIBITS_MARKER.length) : '';

  const html = await renderMarkdown(mainMarkdown);

  // ─── GOLD HIGHLIGHTS: incomplete elements ────────────────────────────────────
  // Each block is independently removable when the item is complete.
  let processedHtml = html;

  // Exhibit 1 — inline references in E, F, G link to the dedicated exhibit page.
  processedHtml = processedHtml.replaceAll(
    'swim-lane, Exhibit 1.',
    'swim-lane, <a href="/portal/dempsey/bep/exhibit-1" style="color:#8A642C;text-decoration:underline;text-underline-offset:2px">Exhibit 1</a>.'
  );

  // Exhibit 3 — two inline references in Section D link to the dedicated
  // exhibit page. Remove when Exhibit 3 is superseded.
  processedHtml = processedHtml.replaceAll(
    'located study map at Exhibit 3',
    '<a href="/portal/dempsey/bep/exhibit-3" style="color:#8A642C;text-decoration:underline;text-underline-offset:2px">located study map at Exhibit 3</a>'
  );

  // Level 4 guest suites — the single bullet in section D As-Built Integration.
  // Regex handles optional whitespace between <li> and <strong>.
  // REMOVE THIS BLOCK when Level 4 drawings are delivered and integrated.
  processedHtml = processedHtml.replace(
    /(<li>)\s*(<strong>Level 4 guest suites\.)/,
    '<li style="background:rgba(138,100,44,0.1);border-left:2px solid rgba(138,100,44,0.35);padding-left:6px;margin-left:-8px;list-style-position:outside">$2'
  );
  // ─────────────────────────────────────────────────────────────────────────────

  const exhibits = parseExhibits(exhibitsSection);

  return (
    <div>
      {/* Back navigation */}
      <div
        style={{
          marginBottom: '32px',
          paddingBottom: '20px',
          borderBottom: '1px solid #D8D4CB',
          maxWidth: '680px',
        }}
      >
        <Link
          href="/portal/dempsey"
          style={{
            fontFamily: MONO,
            fontSize: '10px',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: '#6A6861',
            textDecoration: 'none',
          }}
        >
          ← Dempsey Portal
        </Link>
      </div>

      {/* Main document body */}
      <article
        className={styles.document}
        dangerouslySetInnerHTML={{ __html: processedHtml }}
      />

      {/* Exhibits section */}
      <section aria-labelledby="exhibits-heading">
        <h2
          id="exhibits-heading"
          style={{
            fontFamily: "'Inter Tight', 'Inter', 'Helvetica Neue', Arial, sans-serif",
            fontSize: '15px',
            fontWeight: 700,
            letterSpacing: 0,
            margin: '44px 0 14px',
            paddingBottom: '10px',
            borderBottom: '1px solid #D8D4CB',
            maxWidth: '680px',
          }}
        >
          Exhibits
        </h2>

        <div className={styles.exhibitGroup} style={{ maxWidth: '680px' }}>
          {exhibits.map(ex => {
            const exNumber = ex.num.replace('Exhibit ', '');

            // Exhibit 1 — delivered. Embedded swim-lane; title anchors to the diagram. No gold.
            if (exNumber === '1') {
              return (
                <div key={ex.num}>
                  <div className={styles.exhibitNum} style={{ marginBottom: '4px' }}>
                    {ex.num}
                  </div>
                  <div className={styles.exhibitTitle} style={{ marginBottom: '10px' }}>
                    <a
                      href="/portal/dempsey/bep/exhibit-1"
                      style={{
                        color: '#8A642C',
                        textDecoration: 'underline',
                        textUnderlineOffset: '2px',
                      }}
                    >
                      {ex.title}
                    </a>
                  </div>
                  <ExhibitOneSwimLane />
                </div>
              );
            }

            // Exhibit 3 — delivered. Live link, no gold, no In Production marker.
            if (exNumber === '3') {
              return (
                <figure
                  key={ex.num}
                  id="exhibit-3"
                  className={styles.exhibit}
                >
                  <div className={styles.exhibitNum}>{ex.num}</div>
                  <div className={styles.exhibitTitle}>
                    <a
                      href="/portal/dempsey/bep/exhibit-3"
                      style={{
                        color: '#8A642C',
                        textDecoration: 'underline',
                        textUnderlineOffset: '2px',
                      }}
                    >
                      {ex.title}
                    </a>
                  </div>
                  {ex.desc && (
                    <div className={styles.exhibitDesc}>{ex.desc}</div>
                  )}
                </figure>
              );
            }

            // Exhibit 2 — delivered. Links to the governed-elevation exhibit page.
            return (
              <figure
                key={ex.num}
                id={`exhibit-${exNumber}`}
                className={styles.exhibit}
              >
                <div className={styles.exhibitNum}>{ex.num}</div>
                <div className={styles.exhibitTitle}>
                  <a
                    href="/exhibit/evc1-5-governed-elevation-vertical-stack"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: '#8A642C',
                      textDecoration: 'underline',
                      textUnderlineOffset: '2px',
                    }}
                  >
                    {ex.title}
                  </a>
                </div>
                {ex.desc && (
                  <div className={styles.exhibitDesc}>{ex.desc}</div>
                )}
              </figure>
            );
          })}
        </div>
      </section>

      {/* Document footer */}
      <p className={styles.docFooter} style={{ maxWidth: '680px' }}>
        Everist Consulting · EVC-1.5 · La Jolla Cove Hotel · Job 25029 · {revision} · {revDate}
      </p>
    </div>
  );
}

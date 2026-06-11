import { readFileSync } from 'fs';
import { join } from 'path';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import matter from 'gray-matter';
import Link from 'next/link';
import styles from './bep.module.css';

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
        dangerouslySetInnerHTML={{ __html: html }}
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
          {exhibits.map(ex => (
            <figure
              key={ex.num}
              id={`exhibit-${ex.num.replace('Exhibit ', '')}`}
              className={styles.exhibit}
            >
              <div className={styles.exhibitNum}>{ex.num}</div>
              <div className={styles.exhibitTitle}>{ex.title}</div>
              {ex.desc && (
                <div className={styles.exhibitDesc}>{ex.desc}</div>
              )}
              <div className={styles.exhibitPending}>In production</div>
            </figure>
          ))}
        </div>
      </section>

      {/* Document footer */}
      <p className={styles.docFooter} style={{ maxWidth: '680px' }}>
        Everist Consulting · EVC-1.5 · La Jolla Cove Hotel · Job 25029 · {revision} · {revDate}
      </p>
    </div>
  );
}

import { readFileSync } from 'fs';
import { join } from 'path';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
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

const EXHIBITS_MARKER = '\n## Exhibits\n';

export default async function BEPPage() {
  const filePath = join(process.cwd(), 'content/portal/dempsey/bep.md');
  const markdown = readFileSync(filePath, 'utf-8');

  const splitIdx = markdown.indexOf(EXHIBITS_MARKER);
  const mainMarkdown =
    splitIdx >= 0 ? markdown.slice(0, splitIdx) : markdown;

  const html = await renderMarkdown(mainMarkdown);

  return (
    <div>
      <article
        className={styles.document}
        dangerouslySetInnerHTML={{ __html: html }}
      />

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
          <figure id="exhibit-1" className={styles.exhibit}>
            <div className={styles.exhibitNum}>Exhibit 1</div>
            <div className={styles.exhibitTitle}>Coordination Swim-Lane</div>
            <div className={styles.exhibitDesc}>
              Roles, decision ownership, shop-drawing ownership, and the instruction
              vector as one sequence of work. Sections E, F, and G reference it.
            </div>
            <div className={styles.exhibitPending}>In production</div>
          </figure>

          <figure id="exhibit-2" className={styles.exhibit}>
            <div className={styles.exhibitNum}>Exhibit 2</div>
            <div className={styles.exhibitTitle}>Governed-Elevation Vertical Stack</div>
            <div className={styles.exhibitDesc}>
              The system priority structure of Section C rendered as a representative
              section at governed elevations, for field confirmation.
            </div>
            <div className={styles.exhibitPending}>In production</div>
          </figure>
        </div>
      </section>

      <p className={styles.docFooter} style={{ maxWidth: '680px' }}>
        Everist Consulting · EVC-1.5 · La Jolla Cove Hotel · Job 25029 · REV 0 · 2026-06-10
      </p>
    </div>
  );
}

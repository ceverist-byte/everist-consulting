import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import matter from 'gray-matter';
import { CLIENT_DISPLAY } from '@/lib/portal-clients';
import {
  listClients,
  loadManifest,
  findDeliverable,
  readDeliverableFile,
} from '@/lib/portal-content';

export const dynamic = 'force-static';
export const dynamicParams = false;

const MONO =
  "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Consolas, monospace";

// The HTML deliverables are full standalone documents; render only the <body>
// inner content inside the portal shell. Fall back to the whole file if there
// is no <body>.
function extractBody(html: string): string {
  const match = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  return match ? match[1] : html;
}

async function renderMarkdown(markdown: string): Promise<string> {
  const result = await remark()
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeStringify)
    .process(markdown);
  return result.toString();
}

export function generateStaticParams() {
  const params: { client: string; deliverable: string }[] = [];
  for (const client of listClients()) {
    const manifest = loadManifest(client);
    if (!manifest) continue;
    for (const d of manifest.deliverables) {
      params.push({ client, deliverable: d.slug });
    }
  }
  return params;
}

interface Props {
  params: Promise<{ client: string; deliverable: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { client, deliverable } = await params;
  const d = findDeliverable(client, deliverable);
  return {
    title: d?.metaTitle ?? d?.title ?? 'Portal',
    robots: { index: false, follow: false },
  };
}

export default async function DeliverablePage({ params }: Props) {
  const { client, deliverable } = await params;
  const d = findDeliverable(client, deliverable);
  if (!d) notFound();

  const raw = readDeliverableFile(client, d.file);

  let bodyHtml: string;
  if (d.file.endsWith('.html')) {
    bodyHtml = extractBody(raw);
  } else {
    const { content } = matter(raw);
    bodyHtml = await renderMarkdown(content);
  }

  const backLabel = `← ${CLIENT_DISPLAY[client] ?? client} Portal`;

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
          href={`/portal/${client}`}
          style={{
            fontFamily: MONO,
            fontSize: '10px',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: '#6A6861',
            textDecoration: 'none',
          }}
        >
          {backLabel}
        </Link>
      </div>

      {/* Deliverable body */}
      <div
        className="portal-note-content"
        style={{ maxWidth: '720px', margin: '0 auto' }}
        dangerouslySetInnerHTML={{ __html: bodyHtml }}
      />
    </div>
  );
}

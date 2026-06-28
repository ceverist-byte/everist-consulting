import { readFileSync, readdirSync, existsSync } from 'fs';
import { join } from 'path';

const PORTAL_CONTENT_DIR = join(process.cwd(), 'content/portal');

export interface Deliverable {
  /** URL segment and lookup key, e.g. "renovation-military-residential". */
  slug: string;
  /** Content filename within content/portal/[client]/, .md or .html. */
  file: string;
  /** Small mono label above the title on the index row. */
  eyebrow?: string;
  /** Bold deliverable title on the index row. */
  title: string;
  /** Optional descriptive line under the title. */
  description?: string;
  /** Optional <title> override for the deliverable page. */
  metaTitle?: string;
}

export interface ClientManifest {
  /** Mono eyebrow shown above the client name on the index header. */
  eyebrow: string;
  deliverables: Deliverable[];
}

// Clients served by the dynamic routes are exactly those that ship a
// client.json manifest. Bespoke clients (e.g. dempsey) keep their own static
// route tree and intentionally omit the manifest, so they are not enumerated
// here and the static segment takes routing precedence.
export function listClients(): string[] {
  let entries: string[];
  try {
    entries = readdirSync(PORTAL_CONTENT_DIR);
  } catch {
    return [];
  }
  return entries
    .filter((name) => existsSync(join(PORTAL_CONTENT_DIR, name, 'client.json')))
    .sort();
}

export function loadManifest(client: string): ClientManifest | null {
  const path = join(PORTAL_CONTENT_DIR, client, 'client.json');
  if (!existsSync(path)) return null;
  try {
    return JSON.parse(readFileSync(path, 'utf-8')) as ClientManifest;
  } catch {
    return null;
  }
}

export function findDeliverable(
  client: string,
  slug: string
): Deliverable | null {
  const manifest = loadManifest(client);
  if (!manifest) return null;
  return manifest.deliverables.find((d) => d.slug === slug) ?? null;
}

export function readDeliverableFile(client: string, file: string): string {
  return readFileSync(join(PORTAL_CONTENT_DIR, client, file), 'utf-8');
}

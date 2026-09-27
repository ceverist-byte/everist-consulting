import type { MetadataRoute } from "next";
import fs from "node:fs";
import path from "node:path";

const baseUrl = "https://www.everistconsulting.com";

const PAGE_FILES = new Set([
  "page.tsx",
  "page.ts",
  "page.jsx",
  "page.js",
  "page.mdx",
]);

type ChangeFrequency = NonNullable<
  MetadataRoute.Sitemap[number]["changeFrequency"]
>;
type RouteMeta = { priority: number; changeFrequency: ChangeFrequency };

// EXACT priority + changeFrequency values carried over from the previous
// hardcoded sitemap. Any discovered route not listed here uses DEFAULT_META.
const META: Record<string, RouteMeta> = {
  "/": { priority: 1.0, changeFrequency: "monthly" },
  "/services": { priority: 0.9, changeFrequency: "monthly" },
  "/work": { priority: 0.8, changeFrequency: "weekly" },
  "/ai-automation": { priority: 0.8, changeFrequency: "monthly" },
  "/pursuit": { priority: 0.8, changeFrequency: "monthly" },
  "/keelhold": { priority: 0.8, changeFrequency: "monthly" },
  "/about": { priority: 0.8, changeFrequency: "monthly" },
  "/contact": { priority: 0.6, changeFrequency: "monthly" },
};

const DEFAULT_META: RouteMeta = { priority: 0.7, changeFrequency: "monthly" };

// Routes deliberately kept out of the sitemap.
const EXCLUDE_EXACT = new Set(["/coming-soon"]);
const EXCLUDE_PREFIXES = ["/api"];

function isExcluded(route: string): boolean {
  if (EXCLUDE_EXACT.has(route)) return true;
  return EXCLUDE_PREFIXES.some((prefix) => route.startsWith(prefix));
}

// Convert an app/-relative directory into a URL path, applying App Router
// conventions. Returns null for routes that must be skipped entirely.
function toRoute(relDir: string): string | null {
  const segments = relDir.split(path.sep).filter(Boolean);
  const urlParts: string[] = [];

  for (const segment of segments) {
    if (segment.startsWith("_")) return null; // private folder
    if (segment.startsWith("@")) return null; // parallel route slot
    if (segment.includes("[")) return null; // dynamic / catch-all
    if (segment.startsWith("(.")) return null; // intercepting route
    if (segment.startsWith("(") && segment.endsWith(")")) continue; // route group
    urlParts.push(segment);
  }

  return "/" + urlParts.join("/");
}

function discoverRoutes(): string[] {
  const appDir = path.join(process.cwd(), "app");
  const routes = new Set<string>();

  function walk(dir: string) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    if (entries.some((e) => e.isFile() && PAGE_FILES.has(e.name))) {
      const route = toRoute(path.relative(appDir, dir));
      if (route && !isExcluded(route)) routes.add(route);
    }

    for (const entry of entries) {
      if (entry.isDirectory()) walk(path.join(dir, entry.name));
    }
  }

  walk(appDir);
  return [...routes];
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return discoverRoutes()
    .map((route) => {
      const meta = META[route] ?? DEFAULT_META;
      return {
        url: `${baseUrl}${route}`,
        lastModified,
        changeFrequency: meta.changeFrequency,
        priority: meta.priority,
      };
    })
    .sort((a, b) =>
      b.priority !== a.priority
        ? b.priority - a.priority
        : a.url.localeCompare(b.url),
    );
}

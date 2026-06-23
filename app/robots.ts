import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/coming-soon", "/field-notes/", "/portal/", "/portal/admin"],
    },
    sitemap: "https://www.everistconsulting.com/sitemap.xml",
  };
}

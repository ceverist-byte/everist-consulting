import type { Metadata } from "next";

interface PageMetadataInput {
  title: string;
  description: string;
  path: string;
  robots?: Metadata["robots"];
}

export function pageMetadata({
  title,
  description,
  path,
  robots,
}: PageMetadataInput): Metadata {
  const ogTitle = `${title} | Everist Consulting`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: ogTitle,
      description,
      url: path,
      siteName: "Everist Consulting",
      type: "website",
      locale: "en_US",
      images: ["/opengraph-image"],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: ["/opengraph-image"],
    },
    ...(robots ? { robots } : {}),
  };
}

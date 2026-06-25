import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Script from "next/script";

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Everist Consulting — VDC Strategy & Operating Model Design",
    template: "%s | Everist Consulting",
  },
  description:
    "VDC operating model design and AI advisory for general contractors and owner-side capital programs. Based in San Diego.",
  keywords: [
    "VDC consulting",
    "VDC operating model design",
    "construction technology strategy",
    "BIM operating model",
    "VDC organizational design",
    "Last Planner System",
    "AI adoption construction",
    "construction digital transformation",
    "San Diego VDC",
  ],
  authors: [{ name: "Chris Everist" }],
  openGraph: {
    type: "website",
    url: "https://everistconsulting.com",
    siteName: "Everist Consulting",
    title: "Everist Consulting — VDC Operating Model Design",
    description:
      "VDC operating model design and AI advisory for general contractors and owner-side capital programs.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Everist Consulting — VDC Operating Model Design",
    description:
      "VDC operating model design and AI advisory for general contractors and owner-side capital programs.",
  },
  metadataBase: new URL("https://everistconsulting.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={interTight.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://www.everistconsulting.com/#organization",
                  name: "Everist Consulting",
                  url: "https://www.everistconsulting.com",
                  description:
                    "Independent VDC operating model consultancy and AI advisory practice serving general contractors and owner-side capital programs in San Diego, California.",
                  foundingDate: "2026",
                  founder: { "@id": "https://www.everistconsulting.com/#person" },
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "San Diego",
                    addressRegion: "CA",
                    addressCountry: "US",
                  },
                  areaServed: "US",
                  knowsAbout: [
                    "Virtual Design and Construction",
                    "VDC Operating Model Design",
                    "Construction Technology Strategy",
                    "AI Advisory",
                    "Construction Coordination Governance",
                  ],
                  contactPoint: {
                    "@type": "ContactPoint",
                    email: "chris@everistconsulting.com",
                    contactType: "business",
                  },
                },
                {
                  "@type": "Person",
                  "@id": "https://www.everistconsulting.com/#person",
                  name: "Christopher Everist",
                  alternateName: "Chris Everist",
                  url: "https://www.everistconsulting.com/about",
                  jobTitle: "Founder",
                  worksFor: { "@id": "https://www.everistconsulting.com/#organization" },
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "San Diego",
                    addressRegion: "CA",
                    addressCountry: "US",
                  },
                  knowsAbout: [
                    "Virtual Design and Construction",
                    "VDC Operating Model Design",
                    "Construction Technology Strategy",
                    "AI Advisory",
                    "BIM",
                    "Lean Construction",
                    "Construction Coordination Governance",
                  ],
                  sameAs: [
                    "https://www.linkedin.com/in/christopher-everist-b52a9528/",
                  ],
                },
              ],
            }),
          }}
        />
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-9DMHNF8VQC"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9DMHNF8VQC');
          `}
        </Script>
      </body>
    </html>
  );
}

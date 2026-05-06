import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

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
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

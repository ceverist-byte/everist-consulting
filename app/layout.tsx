import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Everist Consulting — VDC Strategy & Operating Model Design",
    template: "%s | Everist Consulting",
  },
  description:
    "VDC organizational design and implementation consulting for general contractors and owner-side capital programs. Based in San Diego. Founded by Chris Everist.",
  keywords: [
    "VDC consulting",
    "construction technology strategy",
    "BIM operating model",
    "VDC organizational design",
    "Last Planner System®",
    "AI adoption construction",
    "construction digital transformation",
    "San Diego VDC",
  ],
  authors: [{ name: "Chris Everist" }],
  openGraph: {
    type: "website",
    url: "https://everistconsulting.com",
    siteName: "Everist Consulting",
    title: "Everist Consulting — VDC Strategy & Operating Model Design",
    description:
      "Transform VDC from coordination function to competitive advantage. Organizational design consulting for GCs and owner-side capital programs.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Everist Consulting — VDC Strategy & Operating Model Design",
    description:
      "Transform VDC from coordination function to competitive advantage.",
  },
  metadataBase: new URL("https://everistconsulting.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body className="bg-slate-950 text-cream antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

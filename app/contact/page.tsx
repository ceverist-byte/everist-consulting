import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact — Book a Discovery Call",
  description:
    "Book a 30-minute VDC Structural Diagnostic with Chris Everist. Based in San Diego, CA. Remote-first.",
};

export default function ContactPage() {
  return (
    <>
      <section
        style={{
          background: "#0f1117",
          paddingTop: "120px",
          paddingBottom: "64px",
          paddingLeft: "24px",
          paddingRight: "24px",
          borderBottom: "1px solid rgba(240,236,228,0.06)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 20% 60%, rgba(193,145,75,0.09) 0%, transparent 50%)",
          }}
        />
        <div className="relative max-w-6xl mx-auto">
          <div className="eyebrow" style={{ display: "block", marginBottom: "24px" }}>
            Discovery Call
          </div>
          <h1
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "#f0ece4",
              marginBottom: "20px",
              maxWidth: "560px",
            }}
          >
            The 30-Minute VDC Structural Diagnostic.
          </h1>
          <p
            style={{
              fontSize: "1rem",
              color: "#9a9590",
              lineHeight: 1.75,
              maxWidth: "480px",
              marginBottom: "12px",
            }}
          >
            No pitch. No proposal. A structured 30-minute conversation that
            maps your current VDC structure against your stated outcomes — and
            produces a clear picture of where the gap is.
          </p>
          <p
            style={{
              fontSize: "0.9375rem",
              color: "#9a9590",
              lineHeight: 1.75,
              maxWidth: "480px",
            }}
          >
            Most conversations produce the structural diagnosis on their own. If
            a formal engagement makes sense afterward, I&apos;ll scope it
            specifically for your situation.
          </p>
        </div>
      </section>

      <section style={{ background: "#0f1117", padding: "64px 24px 96px" }}>
        <div className="max-w-6xl mx-auto">
          <ContactClient />
        </div>
      </section>
    </>
  );
}

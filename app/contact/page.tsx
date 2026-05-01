import type { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact — Book a Discovery Call",
  description:
    "Book a 30-minute VDC Structural Diagnostic with Chris Everist. Based in San Diego, CA. Remote-first.",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative border-b border-[var(--rule-strong)] bg-[var(--bg)] pb-16 pt-32">
        <PageShell className="relative">
          <div className="eyebrow mb-6 block">
            Discovery Call
          </div>
          <h1
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "var(--text-primary)",
              marginBottom: "20px",
              maxWidth: "560px",
            }}
          >
            The 30-Minute VDC Structural Diagnostic.
          </h1>
          <p
            style={{
              fontSize: "1rem",
              color: "var(--text-primary)",
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
              color: "var(--text-primary)",
              lineHeight: 1.75,
              maxWidth: "480px",
            }}
          >
            Most conversations produce the structural diagnosis on their own. If
            a formal engagement makes sense afterward, I&apos;ll scope it
            specifically for your situation.
          </p>
        </PageShell>
      </section>

      <section className="bg-[var(--bg)] pb-24 pt-16">
        <PageShell>
          <ContactClient />
        </PageShell>
      </section>
    </>
  );
}

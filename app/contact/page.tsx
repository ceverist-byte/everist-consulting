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
      <section className="relative overflow-hidden border-b border-[rgba(240,236,228,0.06)] bg-slate-950 pb-16 pt-32">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 20% 60%, rgba(193,145,75,0.09) 0%, transparent 50%)",
          }}
        />
        <PageShell className="relative">
          <div className="eyebrow mb-6 block">
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
        </PageShell>
      </section>

      <section className="bg-slate-950 pb-24 pt-16">
        <PageShell>
          <ContactClient />
        </PageShell>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";
import AssessmentClient from "./AssessmentClient";

export const metadata: Metadata = {
  title: "VDC Assessment — Find Your Archetype",
  description:
    "Two diagnostic tracks: VDC Organizational Archetype Finder and AI Adoption in Construction. Understand where your organization stands and what the path forward looks like.",
};

export default function AssessmentPage() {
  return (
    <>
      {/* Header */}
      <section className="relative bg-[var(--bg)] pb-16 pt-32">
        <PageShell className="relative">
          <div className="mx-auto max-w-3xl text-center">
          <div className="eyebrow" style={{ display: "block", marginBottom: "20px" }}>
            Diagnostic Assessments
          </div>
          <h1
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "var(--text-primary)",
              marginBottom: "16px",
            }}
          >
            Where does your organization stand?
          </h1>
          <p
            style={{
              fontSize: "1rem",
              color: "var(--text-secondary)",
              lineHeight: 1.7,
              maxWidth: "480px",
              margin: "0 auto",
            }}
          >
            Two tracks. Five minutes each. Grounded in the same diagnostic
            framework used in live discovery calls with GCs and capital program
            owners.
          </p>
          </div>
        </PageShell>
      </section>

      <section className="border-t border-[var(--rule)] bg-[var(--bg)] pb-24">
        <PageShell>
          <AssessmentClient />
        </PageShell>
      </section>
    </>
  );
}

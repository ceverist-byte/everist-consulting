import type { Metadata } from "next";
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
      <section
        style={{
          background: "#0f1117",
          paddingTop: "120px",
          paddingBottom: "64px",
          paddingLeft: "24px",
          paddingRight: "24px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center top, rgba(193,145,75,0.1) 0%, transparent 55%)",
          }}
        />
        <div className="relative max-w-3xl mx-auto text-center">
          <div className="eyebrow" style={{ display: "block", marginBottom: "20px" }}>
            Diagnostic Assessments
          </div>
          <h1
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "#f0ece4",
              marginBottom: "16px",
            }}
          >
            Where does your organization stand?
          </h1>
          <p
            style={{
              fontSize: "1rem",
              color: "#9a9590",
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
      </section>

      {/* Assessment client — track selector + quiz */}
      <section
        style={{
          background: "#0f1117",
          padding: "0 24px 96px",
          borderTop: "1px solid rgba(240,236,228,0.06)",
        }}
      >
        <AssessmentClient />
      </section>
    </>
  );
}

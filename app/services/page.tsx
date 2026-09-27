import Link from "next/link";
import PageShell from "@/components/layout/PageShell";
import OperatingModelDiagram from "@/components/OperatingModelDiagram";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Services — VDC Operating Model Design",
  description:
    "VDC operating model design, structural diagnostics, pursuit advisory, design management, BIM/VDC coordination with Last Planner System®, Keelhold™ owner alignment, and strategic decision support for general contractors and owner-side capital programs.",
  path: "/services",
});

const strategicDecisionSupport = {
  name: "Strategic Decision Support",
  description:
    "Ad-hoc advisory for specific organizational decisions — evaluating a platform investment, structuring a new VDC role, responding to an owner's digital delivery requirements. Delivered as a defined scope, not an open-ended retainer.",
  prose:
    "You get pre-investment technology evaluation, VDC leader role design with hiring support, and a structured response to owner digital deliverable requirements.",
};

const audiences = [
  {
    type: "General Contractors",
    description:
      "Mid-size to large GCs rebuilding VDC capability into something operationally durable — typically after growth, leadership transitions, or a recognition that the current structure can't produce the outcomes leadership expects.",
  },
  {
    type: "Hospital & University Capital Programs",
    description:
      "Owner-side capital programs running healthcare, research, and institutional projects where coordination governance affects accreditation, opening dates, and patient care.",
  },
  {
    type: "CM and Owner's Rep Principals",
    description:
      "Advising owners on project readiness before GC selection — particularly when project complexity or duration warrants structural diagnosis upstream.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          background: "var(--bg)",
          paddingTop: "120px",
          paddingBottom: "64px",
          paddingLeft: "24px",
          paddingRight: "24px",
          borderBottom: "1px solid var(--rule-strong)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <PageShell className="relative">
          <div className="eyebrow" style={{ display: "block", marginBottom: "24px" }}>
            Services
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
              maxWidth: "780px",
            }}
          >
            The governance layer above coordination.
          </h1>
          <div style={{ maxWidth: "680px" }}>
            <p style={{ fontSize: "1.0625rem", color: "var(--text-primary)", lineHeight: 1.75, marginBottom: "16px" }}>
              Most VDC consultants assume the organizational structure is already correct and work on tools, workflows, and training from there. I work at the layer upstream — where the structural decisions that determine whether any of that sticks actually live.
            </p>
            <p style={{ fontSize: "1rem", color: "var(--text-primary)", lineHeight: 1.75 }}>
              The deliverable is structural clarity — the kind that survives personnel changes and produces outcomes leadership can predict.
            </p>
          </div>
        </PageShell>
      </section>

      {/* Operating model — foundation layer + timeline band */}
      <OperatingModelDiagram />

      {/* Complementary capability */}
      <section style={{ background: "var(--bg)", padding: "80px 24px" }}>
        <PageShell>
          <div className="eyebrow" style={{ display: "block", marginBottom: "40px" }}>
            Complementary capabilities
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "32px",
            }}
            className="md:[grid-template-columns:1fr_1fr]"
          >
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "1.5rem",
                  fontWeight: 800,
                  color: "var(--text-primary)",
                  letterSpacing: "-0.015em",
                  marginBottom: "16px",
                }}
              >
                {strategicDecisionSupport.name}
              </h2>
              <p style={{ fontSize: "0.9375rem", color: "var(--text-primary)", lineHeight: 1.75 }}>
                {strategicDecisionSupport.description}
              </p>
            </div>
            <div
              style={{
                background: "transparent",
                border: "1px solid var(--rule)",
                borderRadius: "2px",
                padding: "22px",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.625rem",
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--text-secondary)",
                  marginBottom: "12px",
                }}
              >
                What you get
              </div>
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "var(--text-primary)",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {strategicDecisionSupport.prose}
              </p>
            </div>
          </div>
        </PageShell>
      </section>

      {/* Who this is for */}
      <section
        style={{
          background: "var(--bg)",
          borderTop: "1px solid var(--rule-strong)",
          borderBottom: "1px solid var(--rule-strong)",
          padding: "80px 24px",
        }}
      >
        <PageShell>
          <div className="eyebrow" style={{ display: "block", marginBottom: "16px" }}>
            Who This Is For
          </div>
          <h2
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: "var(--text-primary)",
              marginBottom: "40px",
              lineHeight: 1.2,
              maxWidth: "560px",
            }}
          >
            Three groups consistently benefit from this work.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {audiences.map((a) => (
              <div
                key={a.type}
                style={{
                  background: "transparent",
                  border: "1px solid var(--rule)",
                  borderRadius: "2px",
                  padding: "24px",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "1.0625rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: "12px",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {a.type}
                </h3>
                <p style={{ fontSize: "0.875rem", color: "var(--text-primary)", lineHeight: 1.7 }}>
                  {a.description}
                </p>
              </div>
            ))}
          </div>
        </PageShell>
      </section>

      {/* CTA */}
      <section
        style={{
          background: "var(--bg)",
          padding: "80px 24px",
          textAlign: "center",
        }}
      >
        <div className="max-w-xl mx-auto">
          <h2
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(1.5rem, 3vw, 2.125rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: "var(--text-primary)",
              marginBottom: "16px",
              lineHeight: 1.2,
            }}
          >
            Engagements are scoped individually.
          </h2>
          <p
            style={{
              fontSize: "0.9375rem",
              color: "var(--text-primary)",
              lineHeight: 1.7,
              marginBottom: "36px",
            }}
          >
            Every engagement is scoped individually based on organizational complexity. Most begin with a 30-minute diagnostic conversation before a proposal is drafted.
          </p>
          <Link
            href="/contact"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.8125rem",
              fontWeight: 700,
              letterSpacing: "0.07em",
              textTransform: "uppercase",
              padding: "15px 32px",
              background: "var(--fg)",
              color: "var(--bg)",
              borderRadius: "2px",
              border: "1px solid var(--fg)",
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            Start with a Discovery Call →
          </Link>
        </div>
      </section>
    </>
  );
}
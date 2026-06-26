import Link from "next/link";
import type { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "Services — VDC Operating Model Design",
  description:
    "VDC operating model design, AI and automation advisory, Last Planner System® implementation, and strategic decision support for general contractors and owner-side capital programs.",
};

const coreEngagement = {
  name: "VDC Operating Model Design",
  description:
    "The core engagement. Diagnose the gap between the outcomes leadership expects from VDC and the structure the organization has built around it. Design the operating model — placement, authority, governance, and accountability — that closes the gap and survives personnel changes.",
  prose:
    "You get a clear, leadership-legible picture of where the gap is and what's causing it, an operating model design that survives personnel changes, and a sequenced implementation roadmap with the change management approach to match. Implementation support is available when you want it — designed to transfer capability, not extend the engagement.",
};

const complementaryLines = [
  {
    name: "AI & Automation Advisory",
    description:
      "Strategic advisory on AI adoption in construction — evaluating tools against actual workflows, diagnosing why a pilot stalled, structuring the operational decisions that determine whether AI investments produce results. Not tool deployment.",
    prose:
      "You get use case identification grounded in your actual workflows, vendor and platform evaluation against the decision points that matter, and workflow redesign before any tool gets deployed — plus governance design for running AI in production environments.",
  },
  {
    name: "Last Planner System®",
    description:
      "Implementation and governance design for Last Planner System® — the production planning methodology that connects VDC digital delivery to field execution. Particularly effective when combined with VDC operating model design.",
    prose:
      "You get a pull planning structure designed for your project type, integrated with prefabrication and field operations, and governance that holds across project handoffs.",
  },
  {
    name: "Strategic Decision Support",
    description:
      "Ad-hoc advisory for specific organizational decisions — evaluating a platform investment, structuring a new VDC role, responding to an owner's digital delivery requirements. Delivered as a defined scope, not an open-ended retainer.",
    prose:
      "You get pre-investment technology evaluation, VDC leader role design with hiring support, and a structured response to owner digital deliverable requirements.",
  },
  {
    name: "Pursuit Advisory",
    description:
      "Strategy and governance for complex public pursuits — defining what the win turns on, building the team's differentiated story, and governing the submission so the artifact set is whole before the window closes. Not proposal production. The upstream decisions that determine whether a capable team's submission reflects how well it has already thought the project through.",
    prose:
      "You get a clear win thesis and the specific points the submission has to prove, a differentiated story carried by the team's own exhibits rather than a template, and a governed artifact set that's assembled and coherent before the window closes. Interview and shortlist preparation stays focused on what actually moves the panel.",
  },
];

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

      {/* Service lines */}
      <section style={{ background: "var(--bg)", padding: "80px 24px" }}>
        <PageShell>
          <div className="eyebrow" style={{ display: "block", marginBottom: "40px" }}>
            What I Offer
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
            {/* Core engagement */}
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
                  {coreEngagement.name}
                </h2>
                <p style={{ fontSize: "0.9375rem", color: "var(--text-primary)", lineHeight: 1.75 }}>
                  {coreEngagement.description}
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
                  {coreEngagement.prose}
                </p>
              </div>
            </div>

            {/* Complementary capabilities */}
            <div>
              <div style={{ height: "1px", background: "var(--rule-strong)", marginBottom: "48px" }} />
              <div className="eyebrow" style={{ display: "block", marginBottom: "40px" }}>
                Complementary capabilities
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
                {complementaryLines.map((s, i) => (
                  <div
                    key={s.name}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr",
                      gap: "32px",
                      paddingBottom: i < complementaryLines.length - 1 ? "48px" : "0",
                      borderBottom: i < complementaryLines.length - 1 ? "1px solid var(--rule-strong)" : "none",
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
                        {s.name}
                      </h2>
                      <p style={{ fontSize: "0.9375rem", color: "var(--text-primary)", lineHeight: 1.75 }}>
                        {s.description}
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
                        {s.prose}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
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
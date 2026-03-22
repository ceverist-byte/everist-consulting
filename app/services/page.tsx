import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — VDC Operating Model Design",
  description:
    "The Everist 3-Phase Method: Stakeholder Diagnosis, Operating Model Design, and Implementation Support. Plus Last Planner System and AI/Automation Advisory.",
};

const phases = [
  {
    number: "01",
    phase: "Phase 1",
    name: "Stakeholder Diagnosis",
    range: "$15,000–$25,000",
    duration: "2–4 weeks",
    description:
      "You can't fix a structural problem you haven't mapped. Phase 1 produces a clear, documented picture of where decisions actually get made — not where the org chart says they get made.",
    activities: [
      "Interviews with regional leadership, operations, preconstruction, and VDC",
      "Decision gate mapping across a representative project lifecycle",
      "Authority proximity assessment — who actually controls what",
      "Expectation vs. capability audit across key outcome areas",
      "Archetype identification and gap quantification",
    ],
    deliverables: [
      "Current-state authority map",
      "Decision timing diagnosis",
      "Identified archetype (1–4) with supporting evidence",
      "Gap analysis: authority vs. stated expectations",
      "Executive summary for leadership presentation",
    ],
    output:
      "A clear diagnosis of why transformation is stalling — and a documented foundation for the operating model design.",
  },
  {
    number: "02",
    phase: "Phase 2",
    name: "Operating Model Design",
    range: "$25,000–$50,000",
    duration: "4–8 weeks",
    description:
      "The structural answer. Where should VDC sit? What authority does it need? How do you build governance that survives personnel changes? Phase 2 produces the operating model design — the decisions that make transformation possible.",
    activities: [
      "Organizational placement recommendation with rationale",
      "Decision authority framework — who decides what, when",
      "Incentive structure redesign to make adoption rational",
      "Stakeholder alignment strategy for internal buy-in",
      "Governance framework design — mandate, accountability, escalation paths",
      "Enterprise standards architecture",
    ],
    deliverables: [
      "Organizational placement recommendation",
      "Authority & Governance Framework document",
      "Stakeholder alignment strategy",
      "Implementation roadmap with sequenced milestones",
      "Change management playbook",
      "Executive presentation package",
    ],
    output:
      "An operating model that makes transformation structurally possible — not dependent on heroic individual effort.",
  },
  {
    number: "03",
    phase: "Phase 3",
    name: "Implementation Support",
    range: "$5,000–$10,000/month",
    duration: "Optional retainer",
    description:
      "Governance degrades under pressure. Phase 3 keeps the operating model on track through the first year of implementation — when old habits are strongest and new structures are most fragile.",
    activities: [
      "Monthly governance check-ins with VDC and regional leadership",
      "Adoption signal tracking against the implementation roadmap",
      "Course correction as organizational dynamics evolve",
      "Leadership coaching on structural design and change management",
      "Quarterly operating model reviews",
    ],
    deliverables: [
      "Monthly adoption tracking report",
      "Quarterly operating model review",
      "On-call advisory for structural decisions",
      "Transition plan when retainer concludes",
    ],
    output:
      "Transformation that sticks — with a defined exit from the retainer when the team owns the model independently.",
  },
];

const additionalServices = [
  {
    name: "Last Planner System",
    icon: "LPS",
    description:
      "Implementation and governance design for Last Planner System — the production planning methodology that connects VDC digital delivery to field execution. Particularly effective when combined with VDC operating model redesign.",
    useCases: [
      "Healthcare facilities with complex phasing requirements",
      "GCs integrating prefabrication with pull planning",
      "Owner programs requiring construction sequencing visibility",
    ],
  },
  {
    name: "AI/Automation Advisory",
    icon: "AI",
    description:
      "Strategic advisory on AI adoption in construction — use case identification, vendor evaluation, data readiness assessment, and governance design. Not tool deployment. The organizational decisions that determine whether AI investments produce results.",
    useCases: [
      "Capital programs evaluating AI for schedule compression",
      "GCs assessing AI readiness before platform investment",
      "Owner-side organizations building AI governance frameworks",
    ],
  },
  {
    name: "Strategic Decision Support",
    icon: "SD",
    description:
      "Ad-hoc advisory for specific organizational decisions — evaluating a platform investment, structuring a new VDC role, responding to an owner's digital delivery requirements. Delivered as a defined scope, not an open-ended retainer.",
    useCases: [
      "Pre-investment technology evaluation",
      "VDC leader role design and hiring support",
      "Owner digital deliverable requirement response",
    ],
  },
];

const archetypeMatrix = [
  {
    archetype: "Coordination Shop",
    num: "1",
    primaryFit: "Phase 1 + Phase 2",
    detail:
      "The structural misalignment is clearest here. Phase 1 maps the gap between what VDC is expected to deliver and what its current positioning allows. Phase 2 designs the operating model needed to shift.",
  },
  {
    archetype: "Preconstruction Tool Group",
    num: "2",
    primaryFit: "Phase 1 + Phase 2",
    detail:
      "The precon/operations handoff is the structural weak point. Phase 1 identifies where adoption breaks down. Phase 2 redesigns the authority structure that makes enterprise standards stick.",
  },
  {
    archetype: "Execution Engine",
    num: "3",
    primaryFit: "Phase 2 + Phase 3",
    detail:
      "You've solved the tactical problem. The gap is connecting VDC to regional strategy. Phase 2 designs the repositioning. Phase 3 supports the governance transition as the new structure takes hold.",
  },
  {
    archetype: "Strategic Delivery Office",
    num: "4",
    primaryFit: "Phase 3 · Strategic Decision Support",
    detail:
      "The operating model exists. The challenge is sustainability and scale — ensuring governance survives growth and personnel changes. Phase 3 retainer and decision support fit best here.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
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
              "radial-gradient(ellipse at 30% 60%, rgba(193,145,75,0.09) 0%, transparent 50%)",
          }}
        />
        <div className="relative max-w-6xl mx-auto">
          <div className="eyebrow" style={{ display: "block", marginBottom: "24px" }}>
            The Everist Operating Model Design Method
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
              maxWidth: "640px",
            }}
          >
            Organizational governance design. Not another BIM execution plan.
          </h1>
          <p
            style={{
              fontSize: "1rem",
              color: "#9a9590",
              lineHeight: 1.75,
              maxWidth: "540px",
              marginBottom: "20px",
            }}
          >
            Most VDC consultants assume the organizational structure is already
            correct and work on tools, workflows, and training from there. I
            work at the layer upstream — where the structural decisions that
            determine whether any of that sticks actually live.
          </p>
          <div
            style={{
              display: "inline-flex",
              gap: "8px",
              alignItems: "center",
              padding: "10px 16px",
              background: "rgba(193,145,75,0.07)",
              border: "1px solid rgba(193,145,75,0.18)",
              borderRadius: "6px",
            }}
          >
            <span style={{ fontSize: "0.8125rem", color: "#c1914b" }}>
              Authority → Decision structure → Operating model → Technology
            </span>
          </div>
        </div>
      </section>

      {/* 3-Phase Method */}
      <section style={{ background: "#0f1117", padding: "80px 24px" }}>
        <div className="max-w-6xl mx-auto">
          <div className="eyebrow" style={{ display: "block", marginBottom: "40px" }}>
            The 3-Phase Method
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
            {phases.map((p, i) => (
              <div
                key={p.phase}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "48px",
                  paddingBottom: i < phases.length - 1 ? "48px" : "0",
                  borderBottom:
                    i < phases.length - 1
                      ? "1px solid rgba(240,236,228,0.06)"
                      : "none",
                }}
                className="[grid-template-columns:1fr] md:[grid-template-columns:1fr_1fr]"
              >
                {/* Left: overview */}
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      marginBottom: "16px",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-syne)",
                        fontSize: "0.625rem",
                        fontWeight: 700,
                        letterSpacing: "0.16em",
                        textTransform: "uppercase",
                        color: "#c1914b",
                      }}
                    >
                      {p.phase}
                    </span>
                    <span
                      style={{
                        width: "1px",
                        height: "14px",
                        background: "rgba(240,236,228,0.12)",
                        display: "inline-block",
                      }}
                    />
                    <span
                      style={{ fontSize: "0.8125rem", color: "#6b6762" }}
                    >
                      {p.duration}
                    </span>
                  </div>
                  <h2
                    style={{
                      fontFamily: "var(--font-syne)",
                      fontSize: "1.5rem",
                      fontWeight: 800,
                      color: "#f0ece4",
                      letterSpacing: "-0.015em",
                      marginBottom: "8px",
                    }}
                  >
                    {p.name}
                  </h2>
                  <div
                    style={{
                      fontSize: "0.9375rem",
                      color: "#c1914b",
                      marginBottom: "16px",
                    }}
                  >
                    {p.range}
                  </div>
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      color: "#9a9590",
                      lineHeight: 1.75,
                      marginBottom: "20px",
                    }}
                  >
                    {p.description}
                  </p>
                  <div
                    style={{
                      background: "rgba(193,145,75,0.06)",
                      border: "1px solid rgba(193,145,75,0.14)",
                      borderRadius: "8px",
                      padding: "14px 16px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.8125rem",
                        color: "#9a9590",
                        fontStyle: "italic",
                        lineHeight: 1.6,
                      }}
                    >
                      Output: {p.output}
                    </span>
                  </div>
                </div>

                {/* Right: activities + deliverables */}
                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  <div
                    style={{
                      background: "rgba(240,236,228,0.03)",
                      border: "1px solid rgba(240,236,228,0.07)",
                      borderRadius: "10px",
                      padding: "22px",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "var(--font-syne)",
                        fontSize: "0.625rem",
                        fontWeight: 700,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "#6b6762",
                        marginBottom: "12px",
                      }}
                    >
                      Key Activities
                    </div>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "7px" }}>
                      {p.activities.map((a) => (
                        <li
                          key={a}
                          style={{
                            fontSize: "0.875rem",
                            color: "#9a9590",
                            lineHeight: 1.55,
                            display: "flex",
                            gap: "10px",
                            alignItems: "flex-start",
                          }}
                        >
                          <span style={{ color: "#c1914b", flexShrink: 0, fontSize: "0.5625rem", paddingTop: "5px" }}>▸</span>
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div
                    style={{
                      background: "rgba(240,236,228,0.03)",
                      border: "1px solid rgba(240,236,228,0.07)",
                      borderRadius: "10px",
                      padding: "22px",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "var(--font-syne)",
                        fontSize: "0.625rem",
                        fontWeight: 700,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "#6b6762",
                        marginBottom: "12px",
                      }}
                    >
                      Deliverables
                    </div>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "6px" }}>
                      {p.deliverables.map((d) => (
                        <li
                          key={d}
                          style={{
                            fontSize: "0.875rem",
                            color: "#9a9590",
                            lineHeight: 1.55,
                            display: "flex",
                            gap: "10px",
                            alignItems: "flex-start",
                          }}
                        >
                          <span style={{ color: "#c1914b", flexShrink: 0, fontSize: "0.5625rem", paddingTop: "5px" }}>▸</span>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Archetype-to-service mapping */}
      <section
        style={{
          background: "#171923",
          borderTop: "1px solid rgba(240,236,228,0.06)",
          borderBottom: "1px solid rgba(240,236,228,0.06)",
          padding: "80px 24px",
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="eyebrow" style={{ display: "block", marginBottom: "16px" }}>
            Engagement Fit by Archetype
          </div>
          <h2
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: "#f0ece4",
              marginBottom: "40px",
              lineHeight: 1.2,
            }}
          >
            Where you are determines where we start.
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {archetypeMatrix.map((a) => (
              <div
                key={a.archetype}
                style={{
                  display: "grid",
                  gridTemplateColumns: "200px 160px 1fr",
                  gap: "24px",
                  alignItems: "start",
                  padding: "20px 24px",
                  background: "rgba(240,236,228,0.025)",
                  border: "1px solid rgba(240,236,228,0.06)",
                  borderRadius: "8px",
                }}
                className="[grid-template-columns:1fr] md:[grid-template-columns:200px_160px_1fr]"
              >
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-syne)",
                      fontSize: "0.5625rem",
                      fontWeight: 700,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "#6b6762",
                      marginBottom: "4px",
                    }}
                  >
                    Archetype {a.num}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-syne)",
                      fontSize: "0.9375rem",
                      fontWeight: 700,
                      color: "#f0ece4",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {a.archetype}
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: "#c1914b",
                      fontFamily: "var(--font-syne)",
                      fontWeight: 600,
                    }}
                  >
                    {a.primaryFit}
                  </div>
                </div>
                <p style={{ fontSize: "0.875rem", color: "#6b6762", lineHeight: 1.65 }}>
                  {a.detail}
                </p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "28px" }}>
            <Link
              href="/assessment"
              style={{
                fontSize: "0.875rem",
                color: "#9a9590",
                textDecoration: "none",
                fontFamily: "var(--font-dm-sans)",
              }}
            >
              Not sure which archetype you are? Take the 5-minute assessment →
            </Link>
          </div>
        </div>
      </section>

      {/* Additional service lines */}
      <section style={{ background: "#0f1117", padding: "80px 24px" }}>
        <div className="max-w-6xl mx-auto">
          <div className="eyebrow" style={{ display: "block", marginBottom: "16px" }}>
            Additional Service Lines
          </div>
          <h2
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: "#f0ece4",
              marginBottom: "40px",
              lineHeight: 1.2,
            }}
          >
            Complementary capabilities.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {additionalServices.map((s) => (
              <div
                key={s.name}
                style={{
                  background: "rgba(240,236,228,0.025)",
                  border: "1px solid rgba(240,236,228,0.07)",
                  borderRadius: "12px",
                  padding: "28px",
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    background: "rgba(193,145,75,0.12)",
                    border: "1px solid rgba(193,145,75,0.24)",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-syne)",
                    fontSize: "0.625rem",
                    fontWeight: 700,
                    color: "#c1914b",
                    letterSpacing: "0.06em",
                    marginBottom: "16px",
                  }}
                >
                  {s.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-syne)",
                    fontSize: "1.0625rem",
                    fontWeight: 700,
                    color: "#f0ece4",
                    marginBottom: "10px",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {s.name}
                </h3>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "#9a9590",
                    lineHeight: 1.7,
                    marginBottom: "16px",
                  }}
                >
                  {s.description}
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "5px" }}>
                  {s.useCases.map((u) => (
                    <li
                      key={u}
                      style={{
                        fontSize: "0.8125rem",
                        color: "#6b6762",
                        lineHeight: 1.6,
                        display: "flex",
                        gap: "8px",
                        alignItems: "flex-start",
                      }}
                    >
                      <span style={{ color: "#c1914b", fontSize: "0.5rem", paddingTop: "5px", flexShrink: 0 }}>▸</span>
                      {u}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          background: "#171923",
          borderTop: "1px solid rgba(240,236,228,0.06)",
          padding: "80px 24px",
          textAlign: "center",
        }}
      >
        <div className="max-w-xl mx-auto">
          <h2
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "clamp(1.5rem, 3vw, 2.125rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: "#f0ece4",
              marginBottom: "16px",
              lineHeight: 1.2,
            }}
          >
            Engagements are scoped individually.
          </h2>
          <p
            style={{
              fontSize: "0.9375rem",
              color: "#9a9590",
              lineHeight: 1.7,
              marginBottom: "36px",
            }}
          >
            The fees listed are ranges based on organizational complexity and
            scope. Most engagements begin with a 30-minute diagnostic
            conversation before a proposal is drafted.
          </p>
          <Link
            href="/contact"
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "0.8125rem",
              fontWeight: 700,
              letterSpacing: "0.07em",
              textTransform: "uppercase",
              padding: "15px 32px",
              background: "#c1914b",
              color: "#0f1117",
              borderRadius: "6px",
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

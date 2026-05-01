import Link from "next/link";
import type { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "About Chris Everist — VDC Consulting",
  description:
    "20+ years in construction technology. built the VDC practice at a leading GC from the ground up. Architectural background · LEED AP · Assoc. DBIA. Based in San Diego.",
};

const credentials = [
  "Licensed Architect",
  "LEED AP",
  "Associate DBIA",
  "20+ years construction technology",
];

const timeline = [
  {
    period: "2026 →",
    role: "Founder",
    company: "Everist Consulting",
    detail:
      "VDC strategy and operating model design for GCs and owner-side capital programs. Launched 2026.",
    highlight: true,
  },
  {
    period: "10+ years",
    role: "VDC Practice Leader",
    company: "West Coast GC",
    detail:
      "Built VDC capability from zero — organizational design, team development, governance frameworks, and financial sustainability. Zero voluntary turnover across the full tenure.",
  },
  {
    period: "5 years",
    role: "Construction Technology Leadership",
    company: "Turner Construction",
    detail:
      "Field technology, design integration, and digital delivery — including one year leading international VDC and lean instruction across Southeast Asia.",
  },
];

const philosophy = [
  {
    claim: "Start with authority, not tools.",
    explanation:
      "Every failing VDC transformation I've seen was diagnosed as a technology problem and treated with more software. The actual problem — almost every time — was that VDC had responsibility without authority. You cannot buy your way out of a governance problem.",
  },
  {
    claim: "The structural answer changes everything downstream.",
    explanation:
      "Where VDC sits in the org chart determines what decisions it can influence, when it engages, and what outcomes leadership can reasonably expect. Getting that placement right makes every subsequent investment — tools, training, headcount — dramatically more effective.",
  },
  {
    claim: "Transformation should transfer.",
    explanation:
      "The goal of a consulting engagement isn't dependency. It's a governance framework your team owns and operates independently. Phase 3 is optional retainer — because if the operating model is designed correctly, you shouldn't need me indefinitely.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          background: "var(--bg)",
          paddingTop: "120px",
          paddingBottom: "80px",
          paddingLeft: "24px",
          paddingRight: "24px",
          position: "relative",
          overflow: "hidden",
          borderBottom: "1px solid var(--rule-strong)",
        }}
      >
        <PageShell className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            {/* Bio */}
            <div>
              <div className="eyebrow" style={{ display: "block", marginBottom: "24px" }}>
                About Chris Everist
              </div>
              <h1
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 800,
                  lineHeight: 1.1,
                  letterSpacing: "-0.03em",
                  color: "var(--text-primary)",
                  marginBottom: "24px",
                }}
              >
                Built from inside the problem.
              </h1>
              <p
                style={{
                  fontSize: "1rem",
                  color: "var(--text-primary)",
                  lineHeight: 1.75,
                  marginBottom: "16px",
                }}
              >
                I've been inside the structural problem I now help organizations solve — across two decades, multiple organizations, and both sides of the owner/contractor relationship.
              </p>
              <p
                style={{
                  fontSize: "1rem",
                  color: "var(--text-primary)",
                  lineHeight: 1.75,
                  marginBottom: "16px",
                }}
              >
                I&apos;ve built VDC capability from the ground up: recruited teams, established governance frameworks, and made it financially durable. I&apos;ve also watched that work stall at other organizations — not because of the technology, but because of where VDC sat structurally relative to the decisions it was expected to influence. That observation, repeated across enough contexts, became the methodology.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "var(--text-primary)",
                  lineHeight: 1.75,
                  marginBottom: "20px",
                }}
              >
                Before founding Everist Consulting, I spent five years at Turner Construction — including a year leading international VDC and lean instruction across Southeast Asia — followed by more than a decade leading VDC practice at a West Coast general contractor.
              </p>
              <p
                style={{
                  fontSize: "1rem",
                  color: "var(--text-primary)",
                  lineHeight: 1.75,
                  marginBottom: "36px",
                }}
              >
                I launched Everist Consulting in 2026 to work directly
                with GC executives and owner-side capital programs — hospital
                campuses, universities, data centers — on the organizational
                design decisions that determine whether VDC creates competitive
                advantage or just costs money.
              </p>

              {/* Credential chips */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {credentials.map((c) => (
                  <span
                    key={c}
                    style={{
                      fontSize: "0.8125rem",
                      color: "var(--text-secondary)",
                      border: "1px solid var(--rule)",
                      borderRadius: "4px",
                      padding: "6px 12px",
                    }}
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>

            {/* Stat card */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                {
                  value: "20+",
                  label: "Years in construction technology",
                  sub: "Turner · Leading GC · Everist Consulting",
                },
                {
                  value: "10+",
                  label: "Years building the GC VDC practice",
                  sub: "From zero to profitable, purpose-built operating model",
                },
                {
                  value: "0",
                  label: "Team turnover during that period",
                  sub: "Governance that makes people want to stay",
                },
              ].map((s) => (
                <div
                  key={s.label}
                  style={{
                    background: "transparent",
                    border: "1px solid var(--rule)",
                    borderRadius: "2px",
                    padding: "22px 24px",
                    display: "flex",
                    gap: "20px",
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "2.25rem",
                      fontWeight: 800,
                      color: "var(--accent)",
                      lineHeight: 1,
                      minWidth: "60px",
                    }}
                  >
                    {s.value}
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "0.9375rem",
                        color: "var(--text-primary)",
                        fontWeight: 500,
                        marginBottom: "4px",
                        lineHeight: 1.4,
                      }}
                    >
                      {s.label}
                    </div>
                    <div style={{ fontSize: "0.8125rem", color: "var(--text-secondary)" }}>
                      {s.sub}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </PageShell>
      </section>

      {/* Career timeline */}
      <section
        style={{
          background: "var(--bg)",
          padding: "80px 24px",
          borderBottom: "1px solid var(--rule-strong)",
        }}
      >
        <PageShell>
          <div className="eyebrow" style={{ display: "block", marginBottom: "40px" }}>
            Career
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {timeline.map((t, i) => (
              <div
                key={t.company}
                style={{
                  display: "grid",
                  gridTemplateColumns: "120px 1fr",
                  gap: "32px",
                  paddingBottom: i < timeline.length - 1 ? "36px" : "0",
                  marginBottom: i < timeline.length - 1 ? "36px" : "0",
                  borderBottom:
                    i < timeline.length - 1
                      ? "1px solid var(--rule-strong)"
                      : "none",
                }}
              >
                <div
                  style={{
                    fontSize: "0.8125rem",
                    color: "var(--text-secondary)",
                    paddingTop: "4px",
                  }}
                >
                  {t.period}
                </div>
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      marginBottom: "6px",
                      flexWrap: "wrap",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "1.0625rem",
                        fontWeight: 700,
                        color: "var(--text-primary)",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {t.role}
                    </span>
                    <span style={{ color: "var(--text-secondary)", fontSize: "0.875rem" }}>
                      ·
                    </span>
                    <span
                      style={{
                        fontSize: "0.9375rem",
                        color: t.highlight ? "var(--accent)" : "var(--text-secondary)",
                      }}
                    >
                      {t.company}
                    </span>
                  </div>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--text-primary)",
                      lineHeight: 1.7,
                    }}
                  >
                    {t.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </PageShell>
      </section>

      {/* Philosophy */}
      <section
        style={{
          background: "var(--bg)",
          padding: "80px 24px",
          borderBottom: "1px solid var(--rule-strong)",
        }}
      >
        <PageShell>
          <div className="eyebrow" style={{ display: "block", marginBottom: "16px" }}>
            Consulting Philosophy
          </div>
          <h2
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              fontWeight: 800,
              letterSpacing: "-0.025em",
              color: "var(--text-primary)",
              marginBottom: "48px",
              lineHeight: 1.15,
              maxWidth: "540px",
            }}
          >
            Three things I believe that most consultants don&apos;t act on.
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            {philosophy.map((p, i) => (
              <div
                key={p.claim}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "40px",
                  paddingBottom: i < philosophy.length - 1 ? "32px" : "0",
                  borderBottom:
                    i < philosophy.length - 1
                      ? "1px solid var(--rule-strong)"
                      : "none",
                  alignItems: "start",
                }}
                className="[grid-template-columns:1fr] md:[grid-template-columns:1fr_1fr]"
              >
                <div>
                  <span
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.625rem",
                      fontWeight: 700,
                      color: "var(--accent)",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      marginRight: "10px",
                    }}
                  >
                    0{i + 1}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "1.125rem",
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      lineHeight: 1.35,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {p.claim}
                  </span>
                </div>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "var(--text-primary)",
                    lineHeight: 1.75,
                  }}
                >
                  {p.explanation}
                </p>
              </div>
            ))}
          </div>
        </PageShell>
      </section>

      {/* Who I work with */}
      <section
        style={{
          background: "var(--bg)",
          padding: "80px 24px",
          borderBottom: "1px solid var(--rule-strong)",
        }}
      >
        <PageShell>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <div className="eyebrow" style={{ display: "block", marginBottom: "20px" }}>
                Who I Work With
              </div>
              <h2
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                  color: "var(--text-primary)",
                  marginBottom: "20px",
                  lineHeight: 1.2,
                }}
              >
                GCs and owner-side capital programs with a structural problem to solve.
              </h2>
              <p
                style={{
                  fontSize: "0.9375rem",
                  color: "var(--text-primary)",
                  lineHeight: 1.75,
                }}
              >
                I don&apos;t work with firms that want help deploying a software
                platform. I work with leaders who have recognized that the
                technology isn&apos;t the bottleneck — the organization is.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                {
                  type: "General Contractors",
                  description:
                    "Mid-size to large GCs redesigning VDC practices after growth, leadership transitions, or a recognition that their current structure can't produce the outcomes they need.",
                },
                {
                  type: "Owner-Side Capital Programs",
                  description:
                    "Hospital campuses, university systems, and data center operators who need delivery oversight capability — and the governance to make it durable.",
                },
                {
                  type: "Healthcare & Life Sciences",
                  description:
                    "Complex capital programs where VDC and Last Planner integration directly affects patient care, accreditation timelines, and regulatory compliance.",
                },
              ].map((c) => (
                <div
                  key={c.type}
                  style={{
                    background: "transparent",
                    border: "1px solid var(--rule)",
                    borderRadius: "2px",
                    padding: "20px 22px",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.875rem",
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      marginBottom: "6px",
                    }}
                  >
                    {c.type}
                  </div>
                  <p
                    style={{
                      fontSize: "0.8125rem",
                      color: "var(--text-primary)",
                      lineHeight: 1.65,
                    }}
                  >
                    {c.description}
                  </p>
                </div>
              ))}
            </div>
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
        <PageShell className="max-w-xl text-center">
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
            Ready to have the structural conversation?
          </h2>
          <p
            style={{
              fontSize: "0.9375rem",
              color: "var(--text-primary)",
              lineHeight: 1.7,
              marginBottom: "36px",
            }}
          >
            The 30-minute VDC Structural Diagnostic maps your actual decision
            authority against your stated expectations. No pitch, no proposal —
            just a clear picture of where the gap is.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.8125rem",
                fontWeight: 700,
                letterSpacing: "0.07em",
                textTransform: "uppercase",
                padding: "15px 28px",
                background: "var(--fg)",
                color: "var(--bg)",
                borderRadius: "2px",
                border: "1px solid var(--fg)",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Book a Discovery Call
            </Link>
            <Link
              href="/assessment"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.8125rem",
                fontWeight: 700,
                letterSpacing: "0.07em",
                textTransform: "uppercase",
                padding: "15px 28px",
                border: "1px solid var(--fg)",
                color: "var(--text-primary)",
                borderRadius: "2px",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Take the Assessment First
            </Link>
          </div>
        </PageShell>
      </section>
    </>
  );
}

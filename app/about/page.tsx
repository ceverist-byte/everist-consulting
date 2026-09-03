import Link from "next/link";
import type { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "About Chris Everist — VDC Consulting",
  description:
    "Founder of Everist Consulting. Over twenty years inside the construction technology layer of buildings, including Turner Construction and an extended tenure leading VDC practice at a West Coast general contractor. Based in San Diego.",
};

const timeline = [
  {
    period: "2026 →",
    role: "Founder",
    company: "Everist Consulting",
    detail:
      "VDC operating model design and AI advisory for general contractors and owner-side capital programs.",
    highlight: true,
  },
  {
    period: "Extended tenure",
    role: "VDC Practice Leader",
    company: "West Coast general contractor",
    detail:
      "Built VDC capability from the ground up — organizational design, governance frameworks, and the structures that made the practice operationally durable.",
  },
  {
    period: "Five years",
    role: "Construction Technology Leadership",
    company: "Turner Construction",
    detail:
      "Field technology, design integration, and digital delivery — including a year leading international VDC and lean instruction across Southeast Asia.",
  },
];

const philosophy = [
  {
    claim: "Start with authority, not tools.",
    explanation:
      "Every failing VDC transformation I've seen was diagnosed as a technology problem and treated with more software. The actual problem — almost every time — was that someone could see the decision that needed to be made and didn't have the standing to make it. You cannot buy your way out of a governance problem.",
  },
  {
    claim: "The structural answer changes everything downstream.",
    explanation:
      "Where VDC sits in the org chart determines what decisions it can influence, when it engages, and what outcomes leadership can reasonably expect. Getting that placement right makes every subsequent investment — tools, training, headcount — dramatically more effective.",
  },
  {
    claim: "Transformation should transfer.",
    explanation:
      "The goal of a consulting engagement isn't dependency. It's a governance framework your team owns and operates independently — designed to transfer when the model is in place.",
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
              <p style={{ fontSize: "1rem", color: "var(--text-primary)", lineHeight: 1.75, marginBottom: "16px" }}>
                Most VDC investments don&apos;t fail on technology. They fail at the moment someone needed the standing to decide something, and didn&apos;t have it, so the decision got deferred until it was expensive. I&apos;ve been inside that problem — across two decades, multiple organizations, and both sides of the owner/contractor relationship.
              </p>
              <p style={{ fontSize: "1rem", color: "var(--text-primary)", lineHeight: 1.75, marginBottom: "16px" }}>
                I&apos;ve built VDC capability from the ground up: organizational design, governance frameworks, and the structures that make a practice financially durable. I&apos;ve also watched that work stall at other organizations — not because of the technology, but because of where VDC sat structurally relative to the decisions it was expected to influence. That observation, repeated across enough contexts, became the methodology.
              </p>
              <p style={{ fontSize: "1.0625rem", color: "var(--text-primary)", lineHeight: 1.75, marginBottom: "20px" }}>
                Before founding Everist Consulting, I spent five years at Turner Construction — including a year leading international VDC and lean instruction across Southeast Asia — followed by an extended tenure leading VDC practice at a West Coast general contractor.
              </p>
              <p style={{ fontSize: "1rem", color: "var(--text-primary)", lineHeight: 1.75 }}>
                I launched Everist Consulting in 2026 to work directly with GC executives and owner-side capital programs — hospital campuses, universities, data centers — on the organizational design decisions that determine whether VDC creates competitive advantage or just costs money.
              </p>
            </div>

            {/* Background card */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div
                style={{
                  background: "transparent",
                  border: "1px solid var(--rule)",
                  borderRadius: "2px",
                  padding: "24px",
                }}
              >
                <div className="eyebrow" style={{ display: "block", marginBottom: "12px" }}>
                  Published & Speaking
                </div>
                <h2
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "1.25rem",
                    fontWeight: 800,
                    letterSpacing: "-0.015em",
                    color: "var(--text-primary)",
                    lineHeight: 1.2,
                    marginBottom: "16px",
                  }}
                >
                  On the record.
                </h2>
                <p style={{ fontSize: "0.9375rem", color: "var(--text-primary)", lineHeight: 1.7, marginBottom: "12px" }}>
                  Co-author, <em>BIM with the End in Mind</em> (USIBD, 2021).
                </p>
                <p style={{ fontSize: "0.9375rem", color: "var(--text-primary)", lineHeight: 1.7 }}>
                  Co-presenter, inaugural Agentic AI in Construction webinar with Datagrid (March 2025).
                </p>
              </div>
              <div
                style={{
                  background: "transparent",
                  border: "1px solid var(--rule)",
                  borderRadius: "2px",
                  padding: "24px",
                }}
              >
                <div className="eyebrow" style={{ display: "block", marginBottom: "16px" }}>
                  Background
                </div>
                <p style={{ fontSize: "0.9375rem", color: "var(--text-primary)", lineHeight: 1.7 }}>
                  Time in architecture and sustainability before moving into construction (background only, not active credentials). That trajectory shapes how the practice reads the seam between authored intent and built outcome — the territory where coordination decisions either preserve or unwind what was drawn.
                </p>
              </div>
              <div
                style={{
                  background: "transparent",
                  border: "1px solid var(--rule)",
                  borderRadius: "2px",
                  padding: "24px",
                }}
              >
                <div className="eyebrow" style={{ display: "block", marginBottom: "16px" }}>
                  Based in
                </div>
                <p style={{ fontSize: "0.9375rem", color: "var(--text-primary)", lineHeight: 1.6 }}>
                  San Diego, California. Remote-first across the United States.
                </p>
              </div>
              <div
                style={{
                  background: "transparent",
                  border: "1px solid var(--rule)",
                  borderRadius: "2px",
                  padding: "24px",
                }}
              >
                <div className="eyebrow" style={{ display: "block", marginBottom: "16px" }}>
                  Outside the Practice
                </div>
                <p style={{ fontSize: "0.9375rem", color: "var(--text-primary)", lineHeight: 1.7 }}>
                  I spend time on trail crews with the San Diego Mountain Biking Association — currently helping with recovery work in Los Peñasquitos Canyon after the 2026 Sorrento Fire. I ride mountain bikes and gravel, locally and further afield, and in January I&apos;ll complete a StrongFirst kettlebell instructor certification (SFG-I).
                </p>
              </div>
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
                  gridTemplateColumns: "160px 1fr",
                  gap: "32px",
                  paddingBottom: i < timeline.length - 1 ? "36px" : "0",
                  marginBottom: i < timeline.length - 1 ? "36px" : "0",
                  borderBottom: i < timeline.length - 1 ? "1px solid var(--rule-strong)" : "none",
                }}
              >
                <div style={{ fontSize: "0.8125rem", color: "var(--text-secondary)", paddingTop: "4px" }}>
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
                    <span style={{ color: "var(--text-secondary)", fontSize: "0.875rem" }}>·</span>
                    <span
                      style={{
                        fontSize: "0.9375rem",
                        color: t.highlight ? "var(--accent)" : "var(--text-secondary)",
                      }}
                    >
                      {t.company}
                    </span>
                  </div>
                  <p style={{ fontSize: "0.875rem", color: "var(--text-primary)", lineHeight: 1.7 }}>
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
                  borderBottom: i < philosophy.length - 1 ? "1px solid var(--rule-strong)" : "none",
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
                <p style={{ fontSize: "0.9375rem", color: "var(--text-primary)", lineHeight: 1.75 }}>
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
              <p style={{ fontSize: "0.9375rem", color: "var(--text-primary)", lineHeight: 1.75 }}>
                I don&apos;t work with firms that want help deploying a software platform. I work with leaders who have recognized that the technology isn&apos;t the bottleneck — the organization is.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {audiences.map((c) => (
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
                  <p style={{ fontSize: "0.8125rem", color: "var(--text-primary)", lineHeight: 1.65 }}>
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
          <p style={{ fontSize: "0.9375rem", color: "var(--text-primary)", lineHeight: 1.7, marginBottom: "36px" }}>
            The 30-minute VDC Structural Diagnostic maps your actual decision authority against your stated expectations. No pitch, no proposal — just a clear picture of where the gap is.
          </p>
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
        </PageShell>
      </section>
    </>
  );
}
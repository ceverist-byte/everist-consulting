import Link from "next/link";
import type { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "AI & Automation Advisory",
  description:
    "AI & Automation Advisory for construction firms, capital programs, and technology partners evaluating tools, diagnosing stalled pilots, and redesigning the operational structure around how AI is actually adopted.",
};

const problemStatements = [
  {
    label:
      "We're getting pitched AI tools constantly and don't know how to evaluate them.",
    body:
      "I help firms evaluate AI against actual construction workflows: estimating handoffs, submittal review, meeting prep, schedule reporting, field documentation, and owner communication. The question is not whether a demo looks impressive. The question is whether the tool changes a real decision point without creating more coordination overhead.",
  },
  {
    label: "We started an AI initiative. It's not going anywhere.",
    body:
      "Most stalled pilots break for familiar reasons: nobody owns the workflow, the data is inconsistent, the approval path is unclear, or the field team was never going to use it the way leadership assumed. I identify where the initiative actually failed and what has to change structurally before the tool gets another chance.",
  },
  {
    label:
      "We need someone who understands both AI and construction in the same room.",
    body:
      "I work between AI consultants, software vendors, and construction leadership when each group is describing the same problem in different terms. That usually means translating between what the tool does, what the project team actually has time for, and what leadership thinks is being bought.",
  },
];

const audiences = [
  "General contractors and construction firms evaluating AI tools, sorting through vendor pressure, or trying to restart pilots that stalled between preconstruction, operations, and the field",
  "Owner-side capital programs hearing claims about digital twins, predictive reporting, or AI-assisted delivery and needing a clearer read on what is real, what is premature, and what would have to change operationally",
  "AI and technology consultants who understand the tool but need construction domain depth before advising teams responsible for schedules, coordination, closeout, and project controls",
];

const workFormats = [
  {
    name: "Advisory sessions",
    detail:
      "Structured working sessions to evaluate a platform, diagnose a stalled pilot, or test a vendor claim against how your team actually buys out work, coordinates trades, reports status, or turns over a project. Hourly or half-day.",
  },
  {
    name: "Workflow design",
    detail:
      "Redesign a specific process before the tool is deployed: who owns the input, where judgment still sits, what gets standardized, what gets escalated, and how the output enters the job without creating another side system. Scoped by process.",
  },
  {
    name: "Domain partnership",
    detail:
      "Ongoing collaboration with AI or technology consultants serving construction clients who need someone in the room with real construction pattern recognition. Structured as a non-exclusive partnership around shared client work, not a packaged service tier.",
  },
];

export default function AiAutomationPage() {
  return (
    <>
      <section
        style={{
          background: "var(--bg)",
          paddingTop: "120px",
          paddingBottom: "88px",
          paddingLeft: "24px",
          paddingRight: "24px",
          borderBottom: "1px solid var(--rule-strong)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <PageShell className="relative">
          <div className="eyebrow" style={{ display: "block", marginBottom: "24px" }}>
            AI &amp; Automation Advisory
          </div>
          <h1
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(2.2rem, 5vw, 4rem)",
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              color: "var(--text-primary)",
              maxWidth: "860px",
              marginBottom: "24px",
            }}
          >
            Construction is being pitched AI faster than it can absorb it.
          </h1>
          <div
            style={{
              maxWidth: "760px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              marginBottom: "40px",
            }}
          >
            <p
              style={{
                fontSize: "1.0625rem",
                fontWeight: 400,
                color: "var(--text-primary)",
                lineHeight: 1.75,
              }}
            >
              Construction runs on fragmented workflows, inconsistent data, and
              too many reporting loops. That makes it a natural target for AI
              and a difficult place to adopt it well.
            </p>
            <p
              style={{
                fontSize: "1.0625rem",
                fontWeight: 400,
                color: "var(--text-primary)",
                lineHeight: 1.75,
              }}
            >
              The result is a predictable pattern: a platform gets bought, a
              pilot gets launched, a few teams try it — and then it dies
              quietly. Not because the model failed. Because no one changed how
              work actually moves: who decides, who owns the output, and how it
              fits into the workflow.
            </p>
            <p
              style={{
                fontSize: "1.0625rem",
                fontWeight: 400,
                color: "var(--text-primary)",
                lineHeight: 1.75,
              }}
            >
              Most AI advisors have never sat inside a buyout meeting, OAC
              meeting, coordination call, or closeout scramble. Most
              construction teams do not have the time or internal fluency to
              translate vendor claims into operational decisions. That gap is
              where most AI initiatives stall and where this work lives.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
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
              Book a 30-minute call
            </Link>
            <a
              href="mailto:chris@everistconsulting.com"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.9375rem",
                fontWeight: 400,
                padding: "15px 24px",
                border: "1px solid var(--fg)",
                color: "var(--text-primary)",
                borderRadius: "2px",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Reach out directly
            </a>
          </div>
        </PageShell>
      </section>

      <section style={{ background: "var(--bg)", padding: "88px 24px" }}>
        <PageShell>
          <div className="eyebrow" style={{ display: "block", marginBottom: "18px" }}>
            What I Help With
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
              gap: "24px",
            }}
            className="md:grid-cols-3"
          >
            {problemStatements.map((item, index) => (
              <article
                key={item.label}
                style={{
                  background: "transparent",
                  border: "1px solid var(--rule)",
                  borderRadius: "2px",
                  padding: "28px",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--accent)",
                    marginBottom: "20px",
                  }}
                >
                  {String.fromCharCode(65 + index)}
                </div>
                <h2
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "1.35rem",
                    lineHeight: 1.3,
                    letterSpacing: "-0.02em",
                    color: "var(--text-primary)",
                    marginBottom: "16px",
                  }}
                >
                  {item.label}
                </h2>
                <p
                  style={{
                    fontSize: "0.98rem",
                    color: "var(--text-primary)",
                    lineHeight: 1.75,
                  }}
                >
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </PageShell>
      </section>

      <section
        style={{
          background: "var(--bg)",
          padding: "0 24px 88px",
        }}
      >
        <PageShell>
          <div
            style={{
              borderTop: "1px solid var(--rule-strong)",
              paddingTop: "88px",
            }}
          >
            <div className="eyebrow" style={{ display: "block", marginBottom: "18px" }}>
              Who This Is For
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
                gap: "20px",
              }}
              className="md:grid-cols-3"
            >
              {audiences.map((audience, index) => (
                <div
                  key={audience}
                  style={{
                    padding: "24px 0 0",
                    borderTop:
                      index === 0
                        ? "2px solid var(--fg)"
                        : "2px solid var(--rule)",
                  }}
                >
                  <p
                    style={{
                      fontSize: "1rem",
                      color: "var(--text-primary)",
                      lineHeight: 1.75,
                      maxWidth: "360px",
                    }}
                  >
                    {audience}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </PageShell>
      </section>

      <section
        style={{
          background: "var(--bg)",
          padding: "88px 24px",
          borderTop: "1px solid var(--rule-strong)",
          borderBottom: "1px solid var(--rule-strong)",
        }}
      >
        <PageShell>
          <div className="eyebrow" style={{ display: "block", marginBottom: "18px" }}>
            How I Work
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
              gap: "18px",
            }}
          >
            {workFormats.map((format) => (
              <div
                key={format.name}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: "12px",
                  padding: "24px 0",
                  borderBottom: "1px solid var(--rule)",
                }}
                className="md:[grid-template-columns:260px_1fr]"
              >
                <h2
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "1.2rem",
                    lineHeight: 1.25,
                    color: "var(--text-primary)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {format.name}
                </h2>
                <p
                  style={{
                    fontSize: "1rem",
                    color: "var(--text-primary)",
                    lineHeight: 1.75,
                    maxWidth: "760px",
                  }}
                >
                  {format.detail}
                </p>
              </div>
            ))}
          </div>
        </PageShell>
      </section>

      <section style={{ background: "var(--bg)", padding: "88px 24px 104px" }}>
        <PageShell>
          <div
            style={{
              maxWidth: "760px",
              padding: "32px",
              borderRadius: "2px",
              border: "1px solid var(--rule)",
              background: "transparent",
            }}
          >
            <div className="eyebrow" style={{ display: "block", marginBottom: "16px" }}>
              Start The Conversation
            </div>
            <p
              style={{
                fontSize: "1rem",
                color: "var(--text-primary)",
                lineHeight: 1.75,
                marginBottom: "24px",
                maxWidth: "560px",
              }}
            >
              If you&apos;re trying to sort out whether a tool belongs in your
              workflow, why a pilot stalled, or what would actually have to
              change before AI becomes useful, we can start with one
              conversation.
            </p>
            <div className="flex flex-wrap items-center gap-4">
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
                Book a 30-minute call
              </Link>
              <a
                href="mailto:chris@everistconsulting.com"
                style={{
                  fontSize: "0.95rem",
                  color: "var(--text-primary)",
                  textDecoration: "none",
                  borderBottom: "1px solid var(--rule)",
                  paddingBottom: "2px",
                }}
              >
                Or reach out directly
              </a>
            </div>
          </div>
        </PageShell>
      </section>
    </>
  );
}

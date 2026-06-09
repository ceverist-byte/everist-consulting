import Link from "next/link";
import type { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "Pursuit Advisory | Everist Consulting",
  description:
    "Strategy and governance for complex public pursuits — defining what the win turns on, building a team's differentiated story, and governing the submission before the window closes. For mid-market general contractors in Southern California.",
};

const problemStatements = [
  {
    label: "We keep making the shortlist and losing the interview.",
    body:
      "The interview is a different instrument than the written submission, and most teams prepare for it by rehearsing. I help the team find the few things that decide the room, then govern the prep so the panel sees how this team thinks — not a polished pitch every competitor is also delivering. The goal is a team that walks in aligned, not scripted.",
  },
  {
    label: "Our submissions come out looking like everyone else's.",
    body:
      "Capable teams produce interchangeable proposals when no one owns the story. I work with you and your design and trade partners to surface what truly sets this team apart on this project — the real thing, not the version everyone claims — and make the exhibits carry it. A submission that reflects how well you have already thought through the problem is the one that separates.",
  },
  {
    label:
      "Every pursuit turns into a fire drill, and the package comes together the night before.",
    body:
      "That is an operating-model problem, not an effort problem. I define what has to exist and by when, supply or source the production capacity to hit it, and govern the assembly so the artifact set is complete and coherent before the window closes — not scrambled into it. The deadline stops being the thing you survive and starts being the thing you plan against.",
  },
];

const audiences = [
  "Mid-market general contractors pursuing complex public work — school district lease-leaseback, municipal CMAR, progressive design-build — where the win depends on a team telling one credible story, not on each firm submitting its own. The alignment has to span the design and trade partners you bring into the pursuit, because that is where the seams are.",
  "GC pursuit and preconstruction leaders responsible for assembling that team, who can see the submission isn't reflecting the team's real strength and don't have the internal capacity to govern it pursuit after pursuit.",
  "Firms moving up-market — into healthcare tenant improvements, university capital programs, or federal design-build — where the procurement has become more sophisticated than the pursuit process that got them this far.",
];

const workFormats = [
  {
    name: "Pursuit positioning session",
    detail:
      "A focused working session before a specific pursuit: what sets this team apart, and what a winning submission would have to prove. It sets the strategy the rest of the pursuit is built on. Stands alone, or opens a full engagement. Scoped as a half-day or day.",
  },
  {
    name: "Pursuit engagement",
    detail:
      "The core. For a named pursuit, I define the strategy and the artifact set the submission requires, govern its assembly to the submission date, and supply or source production capacity where your team needs it. Scoped per pursuit.",
  },
  {
    name: "Interview / shortlist war room",
    detail:
      "High-intensity, once you've made the shortlist. The orals decide it from here. A short, focused push on what moves the panel, who carries which part, and a team that arrives aligned. Timeboxed to the interview window.",
  },
  {
    name: "Pursuit-program governance",
    detail:
      "The higher altitude. Ongoing across your pursuit calendar — building the way the firm pursues complex public work into a repeatable capability the team owns, rather than a fire drill it survives each time. Structured as a retainer, with a defined exit once the capability is internal.",
  },
];

export default function PursuitPage() {
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
            Pursuit Advisory
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
            Teams don't lose complex public work on capability. They lose on
            the submission.
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
              A capable team assembles a pursuit. The past performance is real. The
              right people are on it. The submission goes in, reads competently — and
              loses. Or it makes the shortlist and loses the interview. The debrief
              says the same thing it always says: strong team, but the proposal
              didn't separate you from the field. The capability was never the
              question.
            </p>
            <p
              style={{
                fontSize: "1.0625rem",
                fontWeight: 400,
                color: "var(--text-primary)",
                lineHeight: 1.75,
              }}
            >
              A submission is the output of an operating model. Who owns the
              pursuit's strategic logic. Who decides what the team is actually
              claiming, and what it will prove. Whether the artifact set was aligned
              and whole before the window closed. When no one owns that layer, a team
              defaults to the most comfortable version of itself — every voice
              included, nothing pressure-tested, a smooth consensus that says
              "we can" instead of showing the thinking that proves
              "we already have." Comfort is easy to assemble. It is also
              what makes one capable team's submission indistinguishable from
              the next. Rigor is the thing that gets taken offline.
            </p>
            <p
              style={{
                fontSize: "1.0625rem",
                fontWeight: 400,
                color: "var(--text-primary)",
                lineHeight: 1.75,
              }}
            >
              Most pursuit help operates downstream — graphics, proposal writing,
              production support — after the strategic decisions have already been
              made, or defaulted. Useful work, but it polishes whatever story the team
              arrived with. I work upstream, at the layer where the team decides what
              the win actually turns on, what the submission has to prove, and whether
              the exhibits — which stay the team's own — carry the team's
              real story instead of a template. The production can come from your
              people, from me, or from resources I source. The strategy and the
              governance are the work.
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
            <blockquote
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "clamp(1.375rem, 2.5vw, 1.75rem)",
                fontWeight: 600,
                lineHeight: 1.3,
                letterSpacing: "-0.02em",
                color: "var(--accent)",
                borderLeft: "2px solid var(--accent)",
                paddingLeft: "20px",
                margin: "0 0 24px",
              }}
            >
              Before your next complex pursuit, ask the team: "Who owns the
              story this submission has to tell — and has it been pressure-tested, or
              only agreed to?"
            </blockquote>
            <div className="eyebrow" style={{ display: "block", marginBottom: "16px" }}>
              Start the conversation
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
              If the honest answer is that no one owns it, the window is already
              working against you. One conversation is enough to tell whether this is
              the problem.
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

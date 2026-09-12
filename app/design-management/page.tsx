import Link from "next/link";
import PageShell from "@/components/layout/PageShell";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Design Management for Design-Build Teams",
  description:
    "Design management for design-build and progressive design-build teams — defining what must be managed and establishing ownership for each function. San Diego.",
  path: "/design-management",
});

const whatGetsManaged = [
  {
    term: "Team Alignment",
    body: "The team confirms it understands the same risk the same way, before anyone proposes a solution. Misalignment at the start becomes rework and conflict later.",
  },
  {
    term: "Design Planning",
    body: "The criteria the design is developed against — how complete it has to be at each stage, and the cost and quality commitments it is expected to hold. How the finished building will be operated is one of those criteria, set here rather than discovered at turnover.",
  },
  {
    term: "Constructability",
    body: "A continuous inventory of risk, worked down as the design develops and informed by the 3D model. Not a review convened once the documents are nearly complete.",
  },
  {
    term: "Communication and Documentation",
    body: "How information moves and how it closes — meeting cadence, reporting, submittal review, question resolution, and a distinct thread for everything that goes to the owner or the agency.",
  },
  {
    term: "Cost Development",
    body: "Cost, schedule, and constructability treated as inputs to the design rather than verdicts on it. The design is built to the number, not cut back to it.",
  },
  {
    term: "Design Quality",
    body: "Managed through structured review against named criteria on a set cadence. Not assumed at delivery.",
  },
];

const audiences = [
  "Design-build and progressive design-build teams assembling around a pursuit.",
  "General contractors carrying design risk on design-assist work.",
  "Owners and public agencies who need to see, before award, that a team has named its ownership rather than assumed it.",
];

export default function DesignManagementPage() {
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
            Design Management
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
            The design gets managed. The question is by whom.
          </h1>
          <div
            style={{
              maxWidth: "760px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
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
              On a design-build project, six functions have to be managed from
              the moment the team forms. Most teams can name all six. Fewer
              can say, function by function, which party owns it, which party
              executes it, and what happens when those turn out to be the
              same party.
            </p>
            <p
              style={{
                fontSize: "1.0625rem",
                fontWeight: 400,
                color: "var(--text-primary)",
                lineHeight: 1.75,
              }}
            >
              Design management defines what must be managed and establishes
              ownership for each function across the team. I hold the system.
              The design-build team does the work.
            </p>
            <blockquote
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "clamp(1.25rem, 2.2vw, 1.5rem)",
                fontWeight: 600,
                lineHeight: 1.3,
                letterSpacing: "-0.02em",
                color: "var(--accent)",
                borderLeft: "2px solid var(--accent)",
                paddingLeft: "20px",
                margin: "12px 0 0",
              }}
            >
              Who owns the design risk inventory, and what happens when an
              item on it is noted but never retired?
            </blockquote>
          </div>
        </PageShell>
      </section>

      <section style={{ background: "var(--bg)", padding: "88px 24px" }}>
        <PageShell>
          <div className="eyebrow" style={{ display: "block", marginBottom: "18px" }}>
            What gets managed
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              maxWidth: "760px",
            }}
          >
            {whatGetsManaged.map((item) => (
              <p
                key={item.term}
                style={{
                  fontSize: "1rem",
                  color: "var(--text-primary)",
                  lineHeight: 1.75,
                }}
              >
                <strong style={{ fontWeight: 700 }}>{item.term}.</strong>{" "}
                {item.body}
              </p>
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
              Two sides of one ledger
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                maxWidth: "760px",
              }}
            >
              <p
                style={{
                  fontSize: "1rem",
                  color: "var(--text-primary)",
                  lineHeight: 1.75,
                }}
              >
                Constructability and cost development are usually run as
                separate exercises. One is a review. The other is a workshop.
                Both get convened after the design is mostly done.
              </p>
              <p
                style={{
                  fontSize: "1rem",
                  color: "var(--text-primary)",
                  lineHeight: 1.75,
                }}
              >
                They are the same discipline. Retiring a risk early and
                capturing value from a design decision are the same act
                applied to two sides of one ledger — risk retirement on one
                side, value capture on the other. The value a team captures
                by designing well is what closes the gap that unretired risk
                would otherwise consume. Treat either one as a scheduled
                checkpoint and both bills arrive together, late.
              </p>
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
            What you get
          </div>
          <p
            style={{
              fontSize: "1rem",
              color: "var(--text-primary)",
              lineHeight: 1.75,
              maxWidth: "760px",
            }}
          >
            A written design management plan that names, for each function,
            who owns it, who executes it, and what stops if the owner
            misses. Ownership stated in writing survives personnel change.
            Ownership assumed does not.
          </p>
        </PageShell>
      </section>

      <section style={{ background: "var(--bg)", padding: "88px 24px" }}>
        <PageShell>
          <div className="eyebrow" style={{ display: "block", marginBottom: "18px" }}>
            Who this is for
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
        </PageShell>
      </section>

      <section
        style={{
          background: "var(--bg)",
          padding: "80px 24px 104px",
          textAlign: "center",
        }}
      >
        <div className="max-w-xl mx-auto">
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

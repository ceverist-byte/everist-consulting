import Link from "next/link";
import type { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "Engagement 01: Overhead MEP Coordination — Everist Consulting",
  description:
    "A six-week overhead MEP coordination engagement on an active hotel renovation. The studies built the dimensioned record that turned field observations into documented engineering decisions in time to matter.",
};

const moments = [
  {
    label: "Moment 01 · Fire Main Clearance",
    paragraphs: [
      "The field team had identified the conflict by observation: a large-diameter fire main running directly under a structural beam, at a clearance the plans did not show. With three floors of active construction and a fixed installation deadline, the team needed a confirmed measurement before the trade could proceed.",
      "The study confirmed the main at 86.5 inches above finished floor with half an inch of clearance to the beam bottom. With that dimension in the record, the routing change required to give the main proper clearance became a documented engineering decision — not a measurement taken in the field under pressure, the basis for which would be lost the moment the dust settled.",
    ],
  },
  {
    label: "Moment 02 · Ceiling Assembly · RFI 102",
    paragraphs: [
      "The ceiling assembly specified in the original plans was 3.5 inches thick — too thick to fit the limited vertical space available between the structural deck above and the finished ceiling below. The mechanical subcontractor had already identified the conflict and proposed a 1.5-inch alternative assembly. The conflict was visible to the trade. What was missing was a scaled drawing that confirmed the thinner assembly would actually fit across every zone where it would be used.",
      "The study produced that drawing. It confirmed the alternative fit within the available depth at every needed location. RFI 102 — the formal request for engineering approval — carried the substantiation into the project record, and the thinner assembly was approved before rough-in began. A trade's proposed substitution had become a documented engineering decision with the dimensioned basis attached.",
    ],
  },
  {
    label: "Moment 03 · Duct Sizing · RFI 80",
    paragraphs: [
      "Duct sizing conflicts were already known to the field superintendent before the study reached those areas. He had walked the rooms and drawn the conflicts by hand on section cuts — vertical slices showing how the ductwork would intersect ceiling space at room after room. The question for the engineering team was whether the conflicts were isolated to a few rooms or systemic across the building. Hand-drawn observations were not sufficient evidence to answer.",
      "The study answered it. Dimensioned three-dimensional geometry corroborated the field work across multiple room types and all three floors, establishing the pattern as systemic, not isolated. RFI 80 carried the finding into the coordination record. A field observation made under time pressure had become a documented condition backed by scaled evidence — the basis on which the engineering team could plan a response.",
    ],
  },
  {
    label: "Moment 04 · Duct-Through-Beam Conflict · RFI 146",
    paragraphs: [
      "Corridor transitions at multiple locations on three floors carried a duct-through-beam conflict the field team had identified but could not formalize. The geometry was complex — structural beams crossing the duct path at varying elevations, each crossing potentially requiring a different penetration size. Resolving it required coordinated decisions from both the mechanical engineer of record and the structural engineer of record. Neither could act without scaled section drawings at each crossing point.",
      "The study produced those drawings. Section views at every beam crossing, with confirmed elevations and duct routing constraints, in a form the mechanical engineer could respond to directly. RFI 146 — Mechanical Duct Exhaust Resize — was issued by the mechanical engineer and coordinated with the structural engineer, establishing approved penetration sizes and duct routing across all three floors. The engineering response had a geometric basis to build on because the study had built it.",
    ],
  },
  {
    label: "Moment 05 · Equipment Schedule Conflict",
    paragraphs: [
      "The fifth moment surfaced during production, not from the original problem scope. The project's mechanical equipment schedule specified a particular cooling unit at a specific location with a single air outlet and a single air return. The mechanical floor plan, also in the contract set, showed the same unit at the same location distributing air to four directions. The two contract documents disagreed with each other. Both could not be correct.",
      "The conflict was documented as a coordination finding inside the working model and flagged in the Phase 1 transmittal as a condition requiring engineering clarification before that area can be modeled or fabricated. The study's role was to surface a contract-document inconsistency that had no obvious path to discovery otherwise — a governance moment that exists only because a record-building process was operating when the inconsistency became visible.",
    ],
  },
];

export default function OverheadMepPage() {
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
        }}
      >
        <PageShell>
          <div className="eyebrow" style={{ display: "block", marginBottom: "24px" }}>
            Selected Work · 01
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
              maxWidth: "780px",
            }}
          >
            Forcing engineering decisions before installation foreclosed them.
          </h1>
          <p
            style={{
              fontSize: "1.0625rem",
              color: "var(--text-primary)",
              lineHeight: 1.75,
              maxWidth: "680px",
            }}
          >
            Six weeks of overhead systems coordination on a hotel renovation already under construction. Three floors of mechanical, electrical, and plumbing rough-in moving toward a fixed installation deadline. Coordination decisions made before installation are inexpensive; the same decisions made after steel and ductwork are in place can cost ten to a hundred times more. The engagement built the dimensioned geometric record needed to make those decisions in time — at a precision the available 2D drawing tools could not generate.
          </p>
        </PageShell>
      </section>

      {/* Divider */}
      <PageShell>
        <div style={{ height: "1px", background: "var(--rule)" }} />
      </PageShell>

      {/* Engagement context */}
      <section
        style={{
          background: "var(--bg)",
          padding: "80px 24px",
        }}
      >
        <PageShell>
          <div style={{ display: "flex", flexDirection: "column", gap: "24px", maxWidth: "680px" }}>
            <p style={{ fontSize: "1rem", color: "var(--text-primary)", lineHeight: 1.75 }}>
              The engagement was structured as six weeks of weekly coordination sessions with field leadership, producing four modeled areas of the building. Each module&apos;s scope was set by the field team, directing the studies toward conditions they had already identified through observation and hand-drawn section work. The studies confirmed dimensions and exposed geometry; they did not independently assess what to study.
            </p>
            <p style={{ fontSize: "1rem", color: "var(--text-primary)", lineHeight: 1.75 }}>
              What the engagement was not: fabrication-ready modeling, trade coordination management, or a record of conflicts resolved. The purpose was narrower and more specific — to establish the constraint picture with enough geometric precision to force engineering and trade decisions, converting the field team&apos;s observations into a record the engineering team could respond to before installation foreclosed the options.
            </p>
            <p style={{ fontSize: "1rem", color: "var(--text-primary)", lineHeight: 1.75 }}>
              Six weeks of work in this register made a working definition possible: governance is the structural infrastructure that answers — who decides, when, with what evidence, and how do we know later — by design rather than by accident. The five moments below are documented instances of that infrastructure being built where it was missing.
            </p>
          </div>
        </PageShell>
      </section>

      {/* Divider */}
      <PageShell>
        <div style={{ height: "1px", background: "var(--rule)" }} />
      </PageShell>

      {/* Governance moments */}
      <section
        style={{
          background: "var(--bg)",
          padding: "80px 24px",
        }}
      >
        <PageShell>
          <h2
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(1.5rem, 2.4vw, 1.875rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
              color: "var(--text-primary)",
              marginBottom: "48px",
              maxWidth: "560px",
            }}
          >
            Five governance moments, in sequence.
          </h2>
          {moments.map((moment, idx) => (
            <div key={moment.label}>
              {idx > 0 && (
                <div
                  style={{
                    height: "1px",
                    background: "var(--rule)",
                    margin: "40px 0",
                  }}
                />
              )}
              <div className="eyebrow" style={{ display: "block", marginBottom: "20px" }}>
                {moment.label}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "680px" }}>
                {moment.paragraphs.map((para, pidx) => (
                  <p
                    key={pidx}
                    style={{
                      fontSize: "1rem",
                      color: "var(--text-primary)",
                      lineHeight: 1.75,
                    }}
                  >
                    {para}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </PageShell>
      </section>

      {/* Divider */}
      <PageShell>
        <div style={{ height: "1px", background: "var(--rule)" }} />
      </PageShell>

      {/* Closing */}
      <section
        style={{
          background: "var(--bg)",
          padding: "80px 24px",
        }}
      >
        <PageShell>
          <p
            style={{
              fontSize: "1rem",
              color: "var(--text-primary)",
              lineHeight: 1.75,
              maxWidth: "680px",
            }}
          >
            Five moments. Five records built. None of the conditions were discovered by the studies; the field team had identified every one of them first. What the engagement produced was the dimensioned record that converted each field observation into a documented engineering decision in time to matter — the structural infrastructure that turns ad-hoc coordination into governance by design.
          </p>
        </PageShell>
      </section>

      {/* Navigation footer */}
      <section
        style={{
          background: "var(--bg)",
          padding: "0 24px 96px",
        }}
      >
        <PageShell>
          <Link
            href="/work"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.9375rem",
              fontWeight: 600,
              letterSpacing: "-0.005em",
              color: "var(--text-primary)",
              textDecoration: "none",
              borderBottom: "1px solid var(--rule)",
              paddingBottom: "2px",
              display: "inline-block",
            }}
          >
            ← <span style={{ color: "var(--accent)" }}>Selected Work</span>
          </Link>
          <span style={{ color: "var(--text-secondary)", padding: "0 12px" }}>·</span>
          <Link
            href="/contact"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.9375rem",
              fontWeight: 600,
              letterSpacing: "-0.005em",
              color: "var(--text-primary)",
              textDecoration: "none",
              borderBottom: "1px solid var(--rule)",
              paddingBottom: "2px",
              display: "inline-block",
            }}
          >
            <span style={{ color: "var(--accent)" }}>Discuss your engagement</span>{" "}
            →
          </Link>
        </PageShell>
      </section>
    </>
  );
}

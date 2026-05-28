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
      "In the first coordination session, the fire main was flagged as open and urgent. The field eye had read the main's entry at approximately 7'-4\" above finished floor — close enough to the beam bottom to be a concern, but field measurement gives you a range, and the range crossed up to 8'-6\" depending on where you stood and what you could see from below. The beam bottom was a fixed 7'-9\". Somewhere in that field range, the main and the beam met. Where exactly was a question no 2D overlay could answer.",
      "Without a confirmed dimension, the fire protection trade had three options before rough-in: install to the field estimate, halt for a measurement that would push the schedule into the trades queued behind them, or escalate to an RFI that wouldn't resolve in the time the project had. None of the three were acceptable in an occupied hotel with a fire-suppression system whose rough-in inspection is a prerequisite for framing close-in. A failed inspection on a life-safety system in an operating building isn't a paperwork problem. It's an open hazard with construction crews working around it.",
      "The sectional study placed the main at 86.5 inches above finished floor — 7'-2.5\", not 7'-4\". The field had been off by an inch and a half. The beam bottom was at 7'-9\". Net clearance: half an inch. That half-inch was the difference between a routing jog the trade could install in a day and a physical interference that would have surfaced at rough-in inspection, in an occupied building, on a life-safety system. The required jog became a documented engineering decision with the section geometry as its basis. The trade had its routing answer six weeks before installation — not in the field at install time, when half an inch is the same as no clearance at all.",
    ],
  },
  {
    label: "Moment 02 · Ceiling Assembly · RFI 102",
    paragraphs: [
      "The framing foreman brought the conflict to the table early: the permit-set ceiling assembly — three and a half inches deep — would not fit. He had walked the rooms. He had the heights confirmed. Above the ceiling line: fan coils, the main duct, the fire main, structural beams. Below: 7'-2\" in bathrooms, 7'-6\" in corridors, 8'-2\" in living zones. The math didn't work. The ceiling was the last and most flexible element in a stack where everything above it was either fixed or quasi-fixed. The 3.5-inch assembly couldn't be where it had to be.",
      "He had a solution: a thinner system, an inch and a half deep, that attaches directly to structure without hanger wires. The cavity could hold it. What was missing was confirmation across every zone where the substitution would land — and a record sufficient for the architect of record to approve it without speculation.",
      "The sectional study built that record. The stacking diagram set the 3.5-inch assembly against the 1.5-inch proposed system side by side, the original in teal, the proposed in magenta, and made the two-inch differential a visible spatial decision rather than a specification debate. RFI 102 — the formal request for engineering approval — was issued with the substantiation attached. The architect of record took no exception. The thinner assembly was approved across seven conflict zones in two suite configurations before framing began. A trade's proposed substitution had become a documented engineering decision with the dimensioned basis attached — and the framing crew was working from an approved assembly when they showed up to install, not from a pending RFI.",
    ],
  },
  {
    label: "Moment 03 · Duct Sizing · RFI 80",
    paragraphs: [
      "Before the study reached the duct sizing zones, the superintendent had already sketched the conflicts by hand. Seven room conditions across three floors, drawn on section cuts in the field — beams crossing, ducts blocked, ceiling heights tight. He had the evidence. What he didn't have was a record the engineering team could respond to with confidence.",
      "The mechanical engineer of record had taken first attempts at the problem, room by room. Relocate the fan coil here. Reroute the duct across the corridor. Rotate the fan coil and flatten the return-air duct. Each response solved one room. None of them confirmed the routing would fit given the existing beam depths and the ceiling heights already locked. And — quietly — the same constraint was repeating itself room after room, floor after floor. The annotation that appeared at every cut was identical: “Conflict with duct size, steel elevations, and ceiling height.” Repeated language at multiple rooms across all three floors. What had been treated as separate room problems was one project problem repeating at every bay where a beam crossed.",
      "The study put dimensions to the superintendent's sketches and produced what the room-by-room responses could not — a project-wide finding with scaled evidence. RFI 80 closed on May 8 not as a single resolution, but as a deliberate split into two new RFIs: one for the Level 4 steel upgrade, one for the duct-through-beam coordination across every crossing (RFI 146 would carry it forward). The split was itself a governance act. Two structural problems conflated into one were disaggregated, each onto a resolution path that could actually close. A field observation made under time pressure had become a project-level decision framework — the basis on which the engineering team could plan a coordinated response, not a sequence of room-by-room patches that would have failed at installation when the next bay revealed the same condition.",
    ],
  },
  {
    label: "Moment 04 · Duct-Through-Beam Conflict · RFI 146",
    paragraphs: [
      "By mid-April, two engineers of record were waiting for each other to move first. The structural engineer would not confirm beam penetration parameters without a specific dimensional question to evaluate. The mechanical engineer could not propose specific duct sizes without confirmed penetration parameters. The owner's construction manager had asked the structural engineer directly — what's the maximum penetration you can accommodate? Can the beam be shifted? The structural engineer's response, in the same letter: “We defer to the architect of record and mechanical engineer.” Three weeks before structural steel was scheduled to install, a duct-through-beam conflict that touched every bay on three floors had no resolution mechanism. Each engineer's response was contingent on the other's. Neither could move.",
      "In the first coordination session, the engagement put section geometry in the room. Not a question — a geometric constraint with a specific consequence: at this beam crossing, a duct passing through can be no more than four inches deep at one side of the floor plate, three inches at the other. Confirm or correct. The structural engineer responded within a week with a penetration allowance for one specific room. A month later the full penetration matrix was issued from a jobsite discussion: maximum penetrations for each channel type, with engineered stiffener plate details for every beam type involved. The mechanical engineer followed days later with revised duct sizing across the entire floor plate. RFI 146 — Mechanical Duct Exhaust Resize — entered the engineering record.",
      "What broke the deadlock was not the request. The owner's construction manager had made the request four weeks earlier and received the deferral. What broke the deadlock was geometry. A specific dimensional question replaces a general coordination request — and once the question is specific, the response is bounded, traceable, and actionable. Without that geometry, steel would have gone up with no confirmed penetration plan, and any field-cut penetration in a seismically zoned occupied building without engineering direction is a contract liability the project could not absorb. The engineering response had a geometric basis to build on because the study had built it.",
    ],
  },
  {
    label: "Moment 05 · Equipment Schedule Conflict",
    paragraphs: [
      "The fifth moment surfaced during MOD 4 production, not from the engagement's original scope. The mechanical equipment schedule specified a fan coil unit at a particular location in the elevator hall lobby — a single-outlet ducted type. The mechanical floor plan, also in the contract set, showed the same unit at the same location distributing air to four directions — a ceiling cassette configuration. The two documents disagreed about what the unit actually was. Not in dimensions, not in capacity — in product family. Different connection geometry. Different unit dimensions. Different fabrication paths.",
      "Both documents were internally consistent. The schedule made sense to anyone reading the schedule. The floor plan made sense to anyone reading the floor plan. The conflict only became visible when the unit was placed in three-dimensional context and connected to the duct configuration the plan called for. Standard 2D coordination overlays — the same Bluebeam workflow that had carried the project this far — would not have caught it. Shop drawing review against the schedule alone would not have caught it. The most likely discovery point, without the study, was installation: when the trade arrived with the single-outlet unit specified by the schedule and tried to connect it to the four-direction duct layout shown on the floor plan, and found the connection points didn't match.",
      "By that point, the wrong unit had already been ordered. Lead time on a VRF-compatible fan coil unit in this configuration runs six to ten weeks. The corrective options at installation are equally bad: return the unit and stop work on that location for two months; accept the unit and redesign the duct configuration around it; or — the option most often taken under pressure — install the unit anyway and absorb the airflow mismatch into the system's commissioning, where it surfaces months later as comfort complaints that have no obvious cause.",
      "The study placed the unit, connected it to its specified duct configuration, and found the conflict in modeling — not in the field. The Phase 1 transmittal documented the inconsistency, flagged it for mechanical engineer of record clarification, and pinned it as a condition requiring resolution before the elevator hall could be modeled or fabricated. A contract-document inconsistency with no obvious detection path had been surfaced six weeks before it would have surfaced expensively, by accident, at installation.",
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
            By the time the engagement started, mechanical fabrication was already cutting metal. Steel install was eleven days from rough-in. The coordination window for changing a routing decision wasn&apos;t open — it was closing. The operating standard set in the first session was simple: force decision. Not &ldquo;we will look into it.&rdquo; Six weeks later, five conditions that would have failed at installation had been converted into engineering decisions documented in time to matter — at a precision the available 2D drawing tools could not generate. Coordination decisions made before installation are inexpensive. The same decisions made after steel and ductwork are in place cost ten to a hundred times more — in rework, change orders, trade halts, and inspections that fail in occupied buildings. The window doesn&apos;t reopen.
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
              The engagement was structured as six weeks of weekly onsite working sessions — a Monday rhythm — with the general contractor&apos;s superintendent as the primary technical counterpart. The first session reframed the sectioning approach: instead of modeling by suite type, the engagement modeled by beam-crossing bay. That reframe was the first governance decision of the engagement, and it held through six weeks. Documentation moved in parallel — Bluebeam overlays for field-accessible communication (structural beams in purple, mechanical in green, corridor reflected ceiling plans in blue), sectional models for dimensional confirmation, RFIs for formal engineering action. Each format did a specific job. The field team set every module&apos;s scope, directing the studies toward conditions they had already identified through observation and hand-drawn section work. The studies confirmed dimensions and exposed geometry; they did not independently assess what to study.
            </p>
            <p style={{ fontSize: "1rem", color: "var(--text-primary)", lineHeight: 1.75 }}>
              What the engagement was not: fabrication-ready modeling. Trade coordination management. A list of conflicts resolved. The mechanical fabrication shop was already cutting metal at engagement start. The structural steel crew was scheduled. The framing trade was queued behind them. None of those moves were the engagement&apos;s to make. The engagement&apos;s job was narrower and more specific — convert the field team&apos;s observations into dimensioned records the engineering teams could act on, fast enough to matter.
            </p>
            <p style={{ fontSize: "1rem", color: "var(--text-primary)", lineHeight: 1.75 }}>
              Six weeks of work in this register made a working definition possible: governance is the structural infrastructure that answers — who decides, when, with what evidence, and how do we know later — by design rather than by accident. The five moments below are what that infrastructure looks like when it gets built where it was missing.
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
            Five moments. Five records built. The studies did not discover the conditions — the field team had identified every one of them first. What the engagement produced was the dimensioned evidence that converted each field observation into an engineering decision documented in time to matter. The fire main jog before rough-in, not after. The ceiling assembly approved before framing, not stalled at fit-up. The duct sizing reframed as a project condition, not a sequence of room-by-room patches that would have failed at the next bay. The penetration matrix unlocked from a deadlock that had no path through advocacy alone. The equipment schedule conflict caught at the modeling table, not at the installation crew&apos;s clipboard. None of these resolutions were inevitable. Each one required infrastructure — the kind that answers, by design, who decides, with what evidence, and how anyone knows the basis for the decision later. That is what governance looks like when it gets built where it was missing.
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

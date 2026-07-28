import Link from "next/link";
import type { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";
import CoordinationSwimLane from "@/components/CoordinationSwimLane";

export const metadata: Metadata = {
  title: "Engagement 02: Scan-Anchored Overhead Coordination — Everist Consulting",
  description:
    "A four-level hotel renovation scanned to as-built accuracy where no coordination model existed. A swim-lane exhibit routed every finding to a documented decision, and a constraint log shipped seven days before rough-in with every open item carrying a name inside the client's organization.",
};

const lead =
  "The framing crews were not waiting on me. Every day of metal stud that went up closed another sight line to the overhead, and the overhead was the whole job: a four-level hotel renovation, structure exposed, rough-in dates staggered floor by floor. Two clocks. One printed on the schedule. The other moving down the corridor.";

const beforeExhibit = [
  "So the scan came first. The general contractor put the order in, and the scanners were on site the next morning. Two technicians, four floors, about two days. Thirteen days later I had the building as it actually was, including a number no drawing carries at any price: how much the beam bottoms move. Two inches across a single floor, at the level where the tightest slot in the building measured five.",
  "Speed was the easy part. The harder fact was drawn into the job before the scanners showed up. Nobody builds from a coordination model here. It would never issue a shop drawing; the trades' own plan markups stand in for them. The design stayed the design team's, and the scan contract stayed the general contractor's. So the execution plan's first exhibit, posted before anything got modeled, was a one-page swim-lane of how a settled decision travels to the people doing the work: coordination finding, request for information, confirmed direction, the trade's markups, a back-check against that direction, a hold at install. And the plan named the last stop before anyone knew what the findings would be: a checklist the client would own. I would build it and coach it exactly once. That was in writing from the outset.",
];

const afterExhibit = [
  "For the middle of the job, the room carried the vector. Twenty days before rough-in I put a magenta box on the screen in the trade coordination meeting. Ugly on purpose. It stood for three refrigerant mains and the fire main sharing one five-by-eighteen-inch opening through a beam, and I would not let it look finished until someone who hangs pipe said it was. The mechanical contractor said it out loud, in the room: “With both options, we can fit the refrigerant lines and the fire sprinkler.” The box got to become real after that. Not before.",
  "The assistant superintendent came late to that meeting; an inspector had him. The first thing he asked was whether he could take the model over himself. His words: “I can practice.” He drove the rest of the walkthrough with his trades watching, and near the end he told me, “this is outside of what we're modeling right now,” and let me go. He was holding my scope line for me. That week he sent nine pages of marked drawings covering three floors and three sheet types. Read that from my side of the table: the client was directing the model now. I was operating it.",
  "One condition refused to settle. The elevator hall on the third level. I placed the ducts exactly where the design puts them and they do not fit: bottom of duct at eighty-four inches against a seven-foot-six ceiling and a seven-two soffit, and under the beam we measured closer to seven flat. Three ducts, sixteen, twenty-four, and sixteen inches wide, into a corner that holds two. The transition from the fan coil to those ducts is drawn nowhere. I told them the solution was not obvious to me. Then I put the real question on the table: either this is ours to figure out, and we spend the time, or it goes to whoever is responsible for finishing the design. The assistant superintendent chose. The request was his to write, asking the design team to fit the distribution inside the ceiling not boxed in by steel, and I handed him a save of the model with the ceilings turned transparent and proposed nothing. The one condition the modeling proved could not be solved in the field left the building as a design question, addressed to its owner.",
  "Seven days before rough-in, the gate the plan had drawn at the outset came due. Every open condition got the same question, the one the swim-lane had been asking since before the model existed: has this become a contractual installation instruction, or is it still living in field direction, a verbal confirmation, an unanswered request. Twenty-one items were open. Most had not made the trip. That was not a discovery. It was the reason the gate was on the drawing.",
  "Walking the rows still turned up two things worth the check. A penetration allowance carried as pending that had never actually been asked, for a beam type that appears nowhere in the structural set. And two channels scheduled for replacement with wide-flange sections, the permission to cut written for the members coming out, not the ones going in. Nobody did anything wrong. Every request was answered, every response issued, every package distributed. A project record does not carry itself. The gate is the assignment to notice.",
  "So the list went out that night as what it is: a constraint log, straight out of lean practice, no dressing on it. Every row carries the artifact that makes the decision enforceable, the one instrument that actually governs what gets installed at that location. A person who owes it. A date worked back from the install it releases. Proposed, not final; what belonged on it would be agreed in the room, not assumed. And the sentence that mattered most was the one the plan had already made at the outset: I coach the first cycle and then it is yours.",
  "The next afternoon the project engineer and I were alone with the list. I had asked for thirty minutes. It ran long. He does not run modeling software, which is the point. We went row by row: what closing this one means, which artifact proves it, who owes it, by when. Nothing got signed. Nothing needed to be. That evening I sent him the simpler version I owed him, the moot rows struck, each one saying why.",
  "By the end of the week, every function on the log had a name inside their organization. Requests for information. Pricing. Submittals. Scheduling and field coordination. None of them mine.",
];

const closing = "Rough-in starts this week. It is theirs.";

export default function ScanAnchoredOverheadCoordinationPage() {
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
            Selected Work · 02
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
            What Was Coordinated Is What Gets Built
          </h1>
          <p
            style={{
              fontSize: "1.0625rem",
              fontStyle: "italic",
              color: "var(--text-secondary)",
              lineHeight: 1.6,
              maxWidth: "680px",
              marginBottom: "24px",
            }}
          >
            A four-level hotel renovation, two clocks, and a list that ended up
            belonging to the client.
          </p>
          <p
            style={{
              fontSize: "1.0625rem",
              color: "var(--text-primary)",
              lineHeight: 1.75,
              maxWidth: "680px",
            }}
          >
            {lead}
          </p>
        </PageShell>
      </section>

      {/* Divider */}
      <PageShell>
        <div style={{ height: "1px", background: "var(--rule)" }} />
      </PageShell>

      {/* Engagement narrative */}
      <section
        style={{
          background: "var(--bg)",
          padding: "80px 24px",
        }}
      >
        <PageShell>
          <div style={{ display: "flex", flexDirection: "column", gap: "24px", maxWidth: "680px" }}>
            {beforeExhibit.map((para, idx) => (
              <p
                key={idx}
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

          {/* Exhibit — the execution plan's first exhibit, anonymized */}
          <div style={{ margin: "40px 0" }}>
            <CoordinationSwimLane />
            <p
              style={{
                fontSize: "0.8125rem",
                color: "var(--text-secondary)",
                lineHeight: 1.6,
                maxWidth: "680px",
                marginTop: "12px",
              }}
            >
              The swim-lane from the execution plan&apos;s first exhibit, identity
              layer removed.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "24px", maxWidth: "680px" }}>
            {afterExhibit.map((para, idx) => (
              <p
                key={idx}
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
            {closing}
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

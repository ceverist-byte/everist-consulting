// Operating Model Design — foundation layer + timeline band.
// Four-position timeline (01 Seeing, 02 Pursuit, 03 Design, 04 Precon through
// Construction) laid out as a 2x2 grid, a single unbroken rule under each position,
// and the Operating Model Design foundation band running full-bleed beneath the
// whole thing.
//
// Follows the site pattern set by CoordinationSwimLane: inline styles driven by the
// CSS custom properties in app/globals.css. Tailwind is used only for the responsive
// grid, which inline styles cannot express.

import Link from "next/link";
import PageShell from "@/components/layout/PageShell";
import KeelholdMark from "@/components/KeelholdMark";

function SeeingIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
      <line
        x1="18"
        y1="18"
        x2="25"
        y2="25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PursuitIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="14" cy="14" r="5.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="14" cy="14" r="1.5" fill="currentColor" />
    </svg>
  );
}

function ConcurrentIcon() {
  return (
    <svg
      width="34"
      height="24"
      viewBox="0 0 34 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="22" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function DesignIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="4" y="4" width="20" height="20" stroke="currentColor" strokeWidth="1.5" />
      <line x1="4" y1="18" x2="18" y2="4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

const timelinePositions = [
  {
    number: "01",
    label: "Seeing",
    title: "The Structural Diagnostic",
    body: "Before anyone can fund a fix, someone has to see the gap. A structured conversation that names where a project's coordination problem will surface, and who won't have the authority to stop it. What it finds becomes a written condition the design has to satisfy — not just a name on a slide.",
    Icon: SeeingIcon,
    span: "md:col-span-3",
  },
  {
    number: "02",
    label: "Pursuit",
    title: "Pursuit Advisory",
    body: "Strategy and governance for complex pursuits. What the win turns on, made visible before the interview, not after.",
    Icon: PursuitIcon,
    span: "md:col-span-3",
  },
  {
    number: "03",
    label: "Design",
    title: "Design Management",
    body: "Six functions have to be managed from the day a design-build team forms. Naming them is easy. Naming who owns each one, and what stops if that person misses, is the work.",
    Icon: DesignIcon,
    span: "md:col-span-3",
  },
  {
    number: "04",
    label: "Precon through Construction",
    title: "BIM/VDC + Last Planner System®",
    body: "The conditions set upstream carry into this phase, where the model and the schedule are what prove — or disprove — that they've held. Coordination modeling and production planning, running together rather than staged. One governs what gets built where. The other governs when the room decides it.",
    Icon: ConcurrentIcon,
    span: "md:col-span-3",
  },
];

const foundation = {
  label: "Operating Model Design",
  body: "A room decides. This is what makes sure the room's decision doesn't quietly get overridden before the next meeting.",
};

export default function OperatingModelDiagram() {
  return (
    <section style={{ background: "var(--bg)", padding: "80px 24px 0" }}>
      <PageShell>
        <div className="eyebrow" style={{ display: "block", marginBottom: "40px" }}>
          What I Offer
        </div>

        {/* Timeline band */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-x-8 gap-y-12">
          {timelinePositions.map(({ number, label, title, body, Icon, span }) => (
            <div
              key={number}
              className={span}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                color: "var(--text-primary)",
              }}
            >
              <Icon />
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  color: "var(--accent)",
                  marginTop: "4px",
                }}
              >
                {number}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.625rem",
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--text-secondary)",
                }}
              >
                {label}
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "clamp(1.125rem, 2vw, 1.375rem)",
                  fontWeight: 800,
                  lineHeight: 1.25,
                  letterSpacing: "-0.015em",
                  color: "var(--text-primary)",
                }}
              >
                {title}
              </h3>
              <p
                style={{
                  fontSize: "0.9375rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.7,
                  maxWidth: "34rem",
                }}
              >
                {body}
              </p>
              {/* Timeline rule — single unbroken line under each position.
                  marginTop:auto bottom-aligns the rules across a row so the band
                  still reads as one timeline when body copy runs uneven. */}
              <div
                style={{
                  marginTop: "auto",
                  paddingTop: "16px",
                  borderBottom: "2px solid var(--rule-strong)",
                }}
              />
            </div>
          ))}
        </div>
      </PageShell>

      {/* Connective prose — bridges the diagnostic phase and the BIM/VDC + LPS
          phase. Untitled, unnumbered: not a fifth timeline position. */}
      <PageShell>
        <div style={{ marginTop: "56px", maxWidth: "42rem" }}>
          <KeelholdMark animated={false} maxWidth={280} />
          <p
            style={{
              fontSize: "0.9375rem",
              color: "var(--text-secondary)",
              lineHeight: 1.75,
              marginTop: "20px",
              marginBottom: "16px",
            }}
          >
            Keelhold&trade; holds the owner&apos;s conditions from design into
            construction.
          </p>
          <Link
            href="/keelhold"
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
            <span style={{ color: "var(--accent)" }}>See how it holds</span>{" "}
            →
          </Link>
        </div>
      </PageShell>

      {/* Foundation band — full-bleed, sits beneath everything */}
      <div
        style={{
          margin: "72px -24px 0",
          padding: "44px 24px",
          background: "rgba(17, 17, 17, 0.05)",
        }}
      >
        <PageShell>
          <div
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.625rem",
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--text-primary)",
              marginBottom: "12px",
            }}
          >
            {foundation.label}
          </div>
          <p
            style={{
              fontSize: "clamp(1rem, 1.6vw, 1.125rem)",
              color: "var(--text-secondary)",
              lineHeight: 1.7,
              maxWidth: "52rem",
            }}
          >
            {foundation.body}
          </p>
        </PageShell>
      </div>
    </section>
  );
}

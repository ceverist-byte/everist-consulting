import Link from "next/link";
import PageShell from "@/components/layout/PageShell";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "The Same Ledger",
  description:
    "Constructability review and value engineering are the same discipline, run as two separate exercises, both too late.",
  path: "/notes/the-same-ledger",
});

const h2Style = {
  fontFamily: "var(--font-sans)",
  fontSize: "clamp(1.5rem, 2.4vw, 1.875rem)",
  fontWeight: 800,
  letterSpacing: "-0.02em",
  lineHeight: 1.25,
  color: "var(--text-primary)",
  marginBottom: "24px",
  maxWidth: "560px",
};

const bodyParaStyle = {
  fontSize: "1rem",
  color: "var(--text-primary)",
  lineHeight: 1.75,
};

const footerLinkStyle = {
  fontFamily: "var(--font-sans)",
  fontSize: "0.9375rem",
  fontWeight: 600,
  letterSpacing: "-0.005em",
  color: "var(--text-primary)",
  textDecoration: "none",
  borderBottom: "1px solid var(--rule)",
  paddingBottom: "2px",
  display: "inline-block",
};

export default function TheSameLedgerPage() {
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
            Notes · 12
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
            The Same Ledger
          </h1>
        </PageShell>
      </section>

      {/* Divider */}
      <PageShell>
        <div style={{ height: "1px", background: "var(--rule)" }} />
      </PageShell>

      {/* Essay body */}
      <section
        style={{
          background: "var(--bg)",
          padding: "80px 24px",
        }}
      >
        <PageShell>
          {/* Intro */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "680px" }}>
            <p style={bodyParaStyle}>
              Every project runs a constructability review. Every project runs a value engineering
              workshop. On most jobs these are separate events, owned by different people, arriving
              from different directions, and convened at roughly the same moment — after the design is
              mostly finished.
            </p>
            <p style={bodyParaStyle}>They are doing the same thing. Neither side knows it.</p>
          </div>

          {/* Two names for one act */}
          <div style={{ marginTop: "56px" }}>
            <h2 style={h2Style}>Two names for one act</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "680px" }}>
              <p style={bodyParaStyle}>
                A constructability review finds risk. Something in the design will be hard to build,
                expensive to build, or impossible to build the way it is drawn. The review names it and
                writes it down.
              </p>
              <p style={bodyParaStyle}>
                A value engineering workshop finds money. Something in the design costs more than it
                needs to, and a different decision would cost less. The workshop names it and writes it
                down.
              </p>
              <p style={bodyParaStyle}>
                Retiring a risk early and capturing value from a design decision are the same act
                applied to opposite sides of one ledger. A risk retired before it hardens costs nothing
                to fix. Value captured while the decision is still open is free. The same drawing, read
                by the same people, in the same hour, produces both.
              </p>
              <p style={bodyParaStyle}>
                The industry separates them because they arrive from different places. Risk comes from
                the field. Value comes from the estimate. So one belongs to the builder and the other
                belongs to the accountant, and the two conversations happen in different rooms with
                different attendance.
              </p>
            </div>
          </div>

          {/* The ledger balances or it does not */}
          <div style={{ marginTop: "56px" }}>
            <h2 style={h2Style}>The ledger balances or it does not</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "680px" }}>
              <p style={bodyParaStyle}>This is a cost problem, not an organizational tidiness problem.</p>
              <p style={bodyParaStyle}>
                The value a team captures by designing well is what closes the gap that unretired risk
                would otherwise consume. These are not two budgets. They are one. Every item left on the
                risk list eventually draws against the same account that good design decisions pay into.
              </p>
              <p style={bodyParaStyle}>
                Run them separately and you lose the ability to see the balance. The risk list has forty
                items and no price. The savings list has a number and no exposure. Nobody can say
                whether the project is ahead or behind, because nobody is looking at both columns at
                once.
              </p>
            </div>
          </div>

          {/* Late is the entire problem */}
          <div style={{ marginTop: "56px" }}>
            <h2 style={h2Style}>Late is the entire problem</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "24px", maxWidth: "680px" }}>
              <p style={bodyParaStyle}>
                A review convened at ninety percent design is not a review. It is an inventory of
                decisions that can no longer be changed cheaply.
              </p>
              <p style={bodyParaStyle}>
                By then a constructability finding is a change order and a value engineering idea is a
                cut. Both feel like loss, because both are. The team that was supposed to be improving
                the design is now negotiating over which damage to absorb.
              </p>
              <p style={bodyParaStyle}>
                Worked continuously instead — the list drawn down as the design develops, priced as it
                goes — the two lists become one list that shrinks. Nothing gets convened. Nothing
                arrives late. The work is ordinary, weekly, and unremarkable, which is exactly why it
                works.
              </p>
              <p style={bodyParaStyle}>
                Treat either one as a scheduled checkpoint and both bills arrive together, at the worst
                possible moment, and the last month of design is spent arguing over a ledger nobody
                kept.
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
                  margin: 0,
                }}
              >
                Who owns the risk list, and what happens to the project when an item on it is noted but
                never retired?
              </blockquote>
            </div>
          </div>
        </PageShell>
      </section>

      {/* Divider */}
      <PageShell>
        <div style={{ height: "1px", background: "var(--rule)" }} />
      </PageShell>

      {/* Footer links */}
      <section
        style={{
          background: "var(--bg)",
          padding: "80px 24px 96px",
        }}
      >
        <PageShell>
          <Link href="/notes" style={footerLinkStyle}>
            ← <span style={{ color: "var(--accent)" }}>Notes</span>
          </Link>
          <div style={{ marginTop: "24px" }}>
            <Link href="/contact" style={footerLinkStyle}>
              <span style={{ color: "var(--accent)" }}>Book a Discovery Call</span> →
            </Link>
          </div>
        </PageShell>
      </section>
    </>
  );
}

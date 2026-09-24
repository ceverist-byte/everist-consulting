import Link from "next/link";
import PageShell from "@/components/layout/PageShell";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Whose Decision Is It, Actually",
  description:
    "When a contractor punts its own means-and-methods decision to the owner, the delay isn't caution — it's a conviction nobody has formed yet.",
  path: "/notes/whose-decision-is-it-actually",
});

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

export default function WhoseDecisionIsItActuallyPage() {
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
            Notes · 13
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
            Whose Decision Is It, Actually
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
          <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "680px" }}>
            <p style={bodyParaStyle}>
              Ask a general contractor who decides whether the project gets BIM coordination, and the
              honest answer is usually the contractor. Coordination, resolving where one trade&apos;s
              work collides with another&apos;s before either shows up on site, is means and methods.
              It&apos;s how a GC chooses to execute its own scope. Most contracts never mention it,
              because most owners never specify it. There&apos;s nothing to approve.
            </p>
            <p style={bodyParaStyle}>
              And yet the decision routinely gets punted upward anyway. Not to production, not to
              engineering, upward, to the owner, on a question the owner was never actually asked to
              weigh in on.
            </p>
            <p style={bodyParaStyle}>
              Two reasons this happens, and only one of them is honest. Sometimes the constraint is
              real, a late-arriving scope, a capped budget, a contingency line that has to be touched
              to fund anything not already priced in. That&apos;s a legitimate reason to go ask.
              It&apos;s not a judgment on coordination, it&apos;s a judgment on where the dollars sit.
            </p>
            <p style={bodyParaStyle}>
              The other reason looks identical from the outside and means something very different. It
              shows up as a soft, uncertain answer, not sure if they&apos;ll want to proceed, we&apos;ll
              circle back once someone decides. No case being made for the cost of not coordinating, no
              urgency behind the ask, just a decision quietly handed to someone else, on a question
              that was never really theirs to answer in the first place. You don&apos;t ask permission
              to buy insurance against your own risk, you buy it, or you decide the exposure is small
              enough to skip. Punting the decision is itself the decision, it just doesn&apos;t look
              like one.
            </p>
            <p style={bodyParaStyle}>
              A contractor that has genuinely priced the risk doesn&apos;t need anyone&apos;s blessing
              to spend a little now to avoid a lot later. It funds the coordination itself, or makes
              the case loud enough that funding it becomes obvious. The organizations that route the
              decision elsewhere aren&apos;t usually protecting a budget, they&apos;re avoiding a
              conviction they haven&apos;t formed yet. That&apos;s the actual tell, not the delay, the
              shape of the excuse.
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
              Closing question: if coordination is means and methods, and the decision to fund it
              keeps landing on someone else&apos;s desk, whose risk is actually being managed, and
              whose isn&apos;t.
            </blockquote>
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

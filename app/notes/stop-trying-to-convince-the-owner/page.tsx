import Link from "next/link";
import PageShell from "@/components/layout/PageShell";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Stop Trying to Convince the Owner",
  description:
    "Executives who resist better delivery usually already believe the case. They are bound by an upstream constraint, and that constraint is what has to change.",
  path: "/notes/stop-trying-to-convince-the-owner",
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

export default function StopTryingToConvinceTheOwnerPage() {
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
            Notes · 14
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
            Stop Trying to Convince the Owner
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
              Anyone who has pushed for better delivery knows the line. Leadership won&apos;t change.
              You say it after the third meeting where the executive agreed with every point, then
              funded the next job exactly the way they funded the last one. The natural conclusion is
              that they don&apos;t believe you. Usually they do. They just can&apos;t act on it.
            </p>
          </div>

          {/* The argument aims at the wrong thing */}
          <div style={{ marginTop: "56px" }}>
            <h2 style={h2Style}>The argument aims at the wrong thing</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "680px" }}>
              <p style={bodyParaStyle}>
                Persuasion goes after belief. It assumes the person across the table needs a better
                case, so you bring more data, a sharper story, a job that went well. But the executives
                who block change are rarely short on conviction. They are bound by something upstream
                that the reformer never sees. The board approved a burn rate months ago. The fee pays
                for hours, not outcomes. The contract rewards whoever guards the schedule, not whoever
                improves it.
              </p>
              <p style={bodyParaStyle}>
                I never lacked evidence. On the contractor side, the coordination problems I found when
                I first touched a project were the same ones every time. More proof would not have
                moved anyone. You can win the argument and still lose, because the argument was never
                what stood in the way.
              </p>
            </div>
          </div>

          {/* What actually moved */}
          <div style={{ marginTop: "56px" }}>
            <h2 style={h2Style}>What actually moved</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "680px" }}>
              <p style={bodyParaStyle}>
                I once ran a planning effort where the trades built the schedule together, backward
                from each milestone, weeks before the work started. Nobody wanted it. I got weeks of
                eye rolls, and we kept adjusting the format to make it fit. Then a junior engineer told
                me it was finally making a difference. Everyone had rehearsed the work six weeks ahead,
                so the week itself held no surprises.
              </p>
              <p style={bodyParaStyle}>
                I did not talk anyone into that. The team committed up front to running it, and the
                result made the case I could not have made in a meeting.
              </p>
              <p style={bodyParaStyle}>
                The owner side works the same way. I watched collaborative delivery succeed on a job
                because the owner held the team accountable and kept pushing it to improve. I watched
                the same approach, run the same way, fall flat without that owner. The method was
                identical. What changed was who carried the pressure.
              </p>
            </div>
          </div>

          {/* Go after the constraint */}
          <div style={{ marginTop: "56px" }}>
            <h2 style={h2Style}>Go after the constraint</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "680px" }}>
              <p style={bodyParaStyle}>
                The changes I have seen stick did not come from converting a skeptic. They came from
                working on what the skeptic was bound by. That can mean choosing an owner who is
                already ready instead of spending a year on one who isn&apos;t. It can mean proving the
                idea on something small enough that failure costs nothing, the way those planning
                sessions did. When the constraint is the contract, it means writing the incentive into
                the structure, so the party paying for the change is also the one who gets the benefit.
              </p>
              <p style={bodyParaStyle}>
                None of that requires anyone to change their mind. It changes what they can afford to
                say yes to.
              </p>
              <p style={bodyParaStyle}>
                So before the next meeting, set the pitch aside and start with a different question.
              </p>
              <p style={bodyParaStyle}>
                <em>
                  What is the person you&apos;re trying to convince already on the hook for?
                </em>
              </p>
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

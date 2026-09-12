import Link from "next/link";
import PageShell from "@/components/layout/PageShell";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "The Staff Is a Library",
  description:
    "What happens when you run a solo practice through a book about removing yourself from your business — and discover most of the work was already written down.",
  path: "/notes/the-staff-is-a-library",
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

const sceneStyle = {
  display: "flex",
  flexDirection: "column" as const,
  gap: "20px",
  maxWidth: "680px",
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

export default function TheStaffIsALibraryPage() {
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
            Notes · 09
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
            The Staff Is a Library
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
          <div style={sceneStyle}>
            <p style={bodyParaStyle}>
              I finished <em>Systemology</em> recently, David Jenyns&apos; book on removing yourself from
              your own business. Define one client journey. Put a name on every department. Pull the
              procedure out of whoever&apos;s doing the work and write it down, so someone else can run it
              without you.
            </p>
            <p style={bodyParaStyle}>Standard advice. Good advice, for a business with people in it.</p>
            <p style={bodyParaStyle}>
              I don&apos;t have people in it. I have myself, and a library of instructions I hand to an AI
              instead of a hire.
            </p>
            <p style={bodyParaStyle}>
              I ran the book through my practice anyway, and watched where it fit.
            </p>
          </div>

          {/* What Fit */}
          <div style={{ marginTop: "56px" }}>
            <h2 style={h2Style}>What Fit</h2>
            <div style={sceneStyle}>
              <p style={bodyParaStyle}>
                Naming the one client journey fit without a seam. A client doesn&apos;t care who, or what, is
                doing the work behind the curtain. The trigger is still a trigger. The gap is still a gap. I
                mapped three live engagements against the same shape and they lined up, cleanly, on the first
                pass.
              </p>
            </div>
          </div>

          {/* What Didn't */}
          <div style={{ marginTop: "56px" }}>
            <h2 style={h2Style}>What Didn&apos;t</h2>
            <div style={sceneStyle}>
              <p style={bodyParaStyle}>
                The next step didn&apos;t fit as cleanly. The book says the owner shouldn&apos;t write the
                procedure. Have the person doing the work talk through it, and let someone else write it down.
                Solo, that splits strangely: I do the work and narrate it, the AI writes it down. That part
                actually held.
              </p>
              <p style={bodyParaStyle}>
                What broke was somewhere else. Hand a person a written procedure, and partway through
                they&apos;ll notice the situation in front of them doesn&apos;t match the page. They&apos;ll
                pause. Hand a skill the same procedure and it runs straight through, situation or no
                situation. Noticing isn&apos;t in its job description.
              </p>
              <p style={bodyParaStyle}>
                There&apos;s no chapter for that. I built a layer of approval gates instead, sitting between
                whatever the skill produces and whatever gets treated as real. Nothing touches a client or a
                record without clearing one. That&apos;s the tax for hiring something that can&apos;t tell you
                when it&apos;s wrong.
              </p>
            </div>
          </div>

          {/* The One Question */}
          <div style={{ marginTop: "56px" }}>
            <h2 style={h2Style}>The One Question</h2>
            <div style={sceneStyle}>
              <p style={bodyParaStyle}>
                One question ended up doing more work than the rest of the framework combined. For every task,
                every hour: is this judgment, or is this production? Judgment is the read on a client, the call
                on what to recommend, the relationship. Production is the draft, the summary, the thing that
                gets typed. Judgment stays with me. It&apos;s the part clients are actually paying for.
              </p>
              <p style={bodyParaStyle}>
                Running that question against everything I do turned up a number I didn&apos;t expect.
                Somewhere around eighty percent of my own delivery process was already written down, in code
                instead of a binder, because a library of instructions already is a written procedure. I
                hadn&apos;t done that on purpose. I&apos;d just been building tools instead of buying software
                for two years, and it turns out that&apos;s the same thing the book was asking of me.
              </p>
              <p style={bodyParaStyle}>
                The other fifth stayed unwritten, once I looked at it straight, on purpose. It&apos;s the read,
                the call, the relationship. Writing it down wouldn&apos;t organize it. It would sell it, and
                the business gets smaller the day that happens.
              </p>
              <p style={bodyParaStyle}>
                So here&apos;s the question the book left me with, more than any of its own:
              </p>
            </div>
          </div>

          {/* Closing */}
          <div style={{ marginTop: "56px" }}>
            <div style={sceneStyle}>
              <p style={bodyParaStyle}>
                <em>
                  Which fifth of what you do would be worth less the day you finally wrote it all down?
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

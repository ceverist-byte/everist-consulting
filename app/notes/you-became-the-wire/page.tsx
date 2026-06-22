import Link from "next/link";
import type { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "You Became the Wire — Everist Consulting",
  description:
    "Run more than two or three LLM chats at once and you become the integration layer — the wire shuttling context between sessions that can't see each other. The fix isn't a bigger tool.",
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

export default function YouBecameTheWirePage() {
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
            Notes · 06
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
            You Became the Wire
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
              If you run more than two or three LLM chats at once, you already know this feeling.
              You&apos;re not in one conversation. You&apos;re in five, and you&apos;re the thing
              connecting them.
            </p>
            <p style={bodyParaStyle}>
              One chat is drafting. Another is holding the plan. A third is tracking what&apos;s done
              and what&apos;s left. Each one is doing real work, and none of them can see the others. So
              you do the seeing. You copy an answer out of one chat and paste it into the next. You
              switch tabs to remind a second chat what the first one decided. You carry the thread from
              window to window because the windows can&apos;t carry it themselves.
            </p>
            <p style={bodyParaStyle}>
              This is the part nobody warns you about. A chat has no memory of the chat beside it. Every
              conversation is sealed. So the moment your work outgrows a single thread, you become the
              integration layer — the wire that shuttles context between sessions that have no idea the
              others exist.
            </p>
            <p style={bodyParaStyle}>
              For a while it works. You hold the project in your head and you move the pieces. Then it
              stops working, and it stops working in a specific way.
            </p>
            <p style={bodyParaStyle}>
              A chat fills up. The context window expires. Whatever that conversation knew is gone, and
              you rebuild it from memory into a fresh thread. You&apos;re pasting the same background into
              the same kinds of chats over and over, because the source files live in one project and the
              chat that needs them lives in another, and nothing crosses that line but you. By the
              afternoon you&apos;ve become a very expensive router, and the routing is the whole job. The
              thinking was supposed to be the job.
            </p>
            <p style={bodyParaStyle}>
              I did this for months. I assumed the fix was tooling — a connector between chats, an
              orchestration layer, some way to make the sessions talk to each other so I could stop being
              the cable. I went looking for the better machine.
            </p>
            <p style={bodyParaStyle}>
              The fix wasn&apos;t a machine. It was three decisions, and they cost almost nothing.
            </p>
            <p style={bodyParaStyle}>
              The first: I named one home for each fact. This document is the source of truth for the
              plan. This file holds the spec. This database holds the live status. Each chat reads from
              the home instead of from me. The instruction was one line — <em>this lives here, don&apos;t
              recreate it</em> — and a question that used to take five rounds to settle now took one. The
              chats stopped asking me to carry the answer. They went and read it.
            </p>
            <p style={bodyParaStyle}>
              That&apos;s when I understood what had actually been wrong. I wasn&apos;t moving information
              because the work was complex. I was moving it because the same fact lived in five chats at
              once, each copy drifting from the others. I&apos;d been treating a storage problem like a
              delivery problem. The carrying was the symptom. The scatter was the disease.
            </p>
            <p style={bodyParaStyle}>
              The second decision: I wrote down which chat talks to which, and what&apos;s allowed to move
              between them. Not &ldquo;these coordinate&rdquo; — this chat sends that, the other returns
              this, only when this happens. Once every conversation had a short brief telling it what to
              read, what to hand back, and what to leave alone, the thing I carried shrank. I wasn&apos;t
              moving context anymore. I was moving a decision.
            </p>
            <p style={bodyParaStyle}>
              The third: I separated what never changes from what always changes. The standing rules — how
              things are done, what the boundaries are — went into one document every chat reads on open.
              The live status — what&apos;s done, what&apos;s waiting, what&apos;s next — went into a
              database. I&apos;d been holding both in my head and losing both whenever a window closed. Now
              the rules survive a session ending. The status doesn&apos;t need that session to survive,
              because it never lived there.
            </p>
            <p style={bodyParaStyle}>
              None of this is automation, and that&apos;s the point most people miss. What it bought me
              wasn&apos;t a system that does the work. It was a clear enough view of the work to see which
              handoffs were worth automating and which weren&apos;t. Some carry judgment, and judgment
              doesn&apos;t travel down a wire — keep those by hand. Some are purely mechanical, and a
              person doing them by hand is just a slow machine — those are where automation earns its
              cost. Until the structure existed, every handoff looked identical. After it, the difference
              was obvious.
            </p>
            <p style={bodyParaStyle}>
              This is the job almost everyone gets wrong when they bring AI into real work. They reach for
              a bigger tool. The tool is rarely the constraint. The constraint is that nobody decided what
              lives where, or which chat is allowed to say what to whom. Solve that and most of the
              orchestration you were about to build stops being necessary.
            </p>
            <p style={bodyParaStyle}>
              That decision — what lives where, who talks to whom, what&apos;s a rule and what&apos;s a
              state — is the work I do. It&apos;s not a tool I sell you. It&apos;s the structure underneath
              whatever tools you already have, the thing that decides whether your AI investment compounds
              or just multiplies the number of windows you&apos;re keeping alive at once.
            </p>
            <p style={bodyParaStyle}>
              If you&apos;ve felt the exhaustion of being the wire, that&apos;s the signal. Not that you
              need more capability. That you need the structure that makes capability worth something.
            </p>
            <blockquote
              style={{
                borderLeft: "3px solid var(--accent)",
                paddingLeft: "24px",
                margin: "8px 0",
                fontStyle: "italic",
                color: "var(--text-secondary)",
                fontSize: "1.0625rem",
                lineHeight: 1.7,
              }}
            >
              Who owns the structure your AI work runs on — and what happens when the chat holding it
              expires?
            </blockquote>
            <p style={bodyParaStyle}>
              A bigger tool never answered that. Structure does. It only has to live somewhere the next
              session can find it.
            </p>
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

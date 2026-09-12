import Link from "next/link";
import PageShell from "@/components/layout/PageShell";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "The Questions Nobody Routed",
  description:
    "A model surfaces questions. Whether any of them bind depends on a job nobody staffed.",
  path: "/notes/the-questions-nobody-routed",
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

const inlineLinkStyle = {
  color: "var(--accent)",
  textDecoration: "none",
  borderBottom: "1px solid var(--rule)",
};

export default function TheQuestionsNobodyRoutedPage() {
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
            Notes · 10
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
            The Questions Nobody Routed
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
              For twenty years I believed the model was the thing.
            </p>
            <p style={bodyParaStyle}>
              Build it well enough and the problems surface. Surface them early enough and they get
              fixed while fixing is cheap. That was the argument. I made it in conference rooms, in
              trailers, in at least one parking lot. I believed it the whole time, which is the part
              I want you to hold onto.
            </p>
            <p style={bodyParaStyle}>
              A model doesn&apos;t decide anything. It asks questions. Hundreds of them, on a normal
              job. A few matter — a condition that will stop a trade cold in eleven weeks. Most
              don&apos;t. Two objects clashing that will never, in any version of this universe, be
              installed within a foot of each other. The model flags both with the same cheerful
              urgency. It was built to see everything and understand nothing, and it does both
              perfectly.
            </p>
          </div>

          {/* The job I actually had */}
          <div style={{ marginTop: "56px" }}>
            <h2 style={h2Style}>The job I actually had</h2>
            <div style={sceneStyle}>
              <p style={bodyParaStyle}>
                Somebody had to read what came out of the machine, throw most of it away, and walk
                the few that counted over to a person who could still do something. Early enough that
                doing something was cheap. Gently enough that the question landed as a question and
                not an ambush.
              </p>
              <p style={bodyParaStyle}>
                That was my job. It had no name. It was in no scope I ever signed. It lived on no org
                chart, which meant that when budgets tightened, it was free, and things that are free
                are eventually treated as worthless, which is a sentence you can build a whole career
                on without noticing you&apos;re inside it.
              </p>
              <p style={bodyParaStyle}>
                Everyone could see the model. Nobody could see this. So the model got the credit, and
                I looked like overhead. Friendly overhead. Overhead you were glad to see coming. But
                overhead.
              </p>
            </div>
          </div>

          {/* Dead questions */}
          <div style={{ marginTop: "56px" }}>
            <h2 style={h2Style}>Dead questions</h2>
            <div style={sceneStyle}>
              <p style={bodyParaStyle}>
                Here&apos;s the part I understated for years, mostly to myself.
              </p>
              <p style={bodyParaStyle}>
                Sorting live questions is the easy half. The hard half is knowing when a question has
                died.
              </p>
              <p style={bodyParaStyle}>
                A finding can be traced to the right sheet, dimensioned to the sixteenth, sourced like
                a dissertation — and be fiction. Somewhere a route moved. A scope shifted. A decision
                got made in a room the model never saw, by people who never told it. The question was
                real on Tuesday and dead by the following Tuesday, and nothing anywhere registers the
                change. The finding just sits there, confident, wrong, beautifully formatted.
              </p>
              <p style={bodyParaStyle}>
                You don&apos;t catch that with a better model. You catch it because you were carrying
                the decision history around in your head like a man carrying soup, and you felt the
                ground move.
              </p>
            </div>
          </div>

          {/* It isn't just the model */}
          <div style={{ marginTop: "56px" }}>
            <h2 style={h2Style}>It isn&apos;t just the model</h2>
            <div style={sceneStyle}>
              <p style={bodyParaStyle}>Swap the instrument. Same story.</p>
              <p style={bodyParaStyle}>
                The estimate surfaces variances nobody reconciles. The schedule surfaces slipping
                float that nobody escalates until the float is a memory. The handover package arrives
                at the facilities office like a foreign language dictionary — here are a thousand
                answers to questions you have never asked and cannot pronounce. This industry has
                spent decades building better ways to see problems early, and almost no time deciding
                whose job it is to act on what gets seen.
              </p>
              <p style={bodyParaStyle}>
                Almost. There&apos;s one exception, and the industry&apos;s relationship with it tells
                you everything.
              </p>
              <p style={bodyParaStyle}>
                Production planning got this right. A constraint log with a name next to every line. A
                promise with a date on it. Someone runs the board, retires what&apos;s dead, walks
                what&apos;s alive over to the person who has to commit. Nobody calls that overhead.
                It&apos;s the whole reason it works.
              </p>
              <p style={bodyParaStyle}>
                And so naturally, half the industry avoids it like a summons. The other half performs
                it. The meeting occurs. The board is populated. The stickies go up, and everyone
                stands, because standing means lean. Nothing binds. Ask about it afterward and you get
                the same answer everywhere, delivered kindly, by good people:{" "}
                <em>we basically already do this, our own way.</em> They don&apos;t. But the sentence
                isn&apos;t a lie exactly. It&apos;s a kindness they&apos;re doing themselves, because
                saying yes out loud would mean admitting what everything else has been.
              </p>
              <p style={bodyParaStyle}>
                We&apos;d rather tell the story about the superintendent who held it all together
                because he was that good.{" "}
                <Link href="/notes/we-said-modernize-nothing-moved" style={inlineLinkStyle}>
                  I wrote about him already.
                </Link>{" "}
                He was that good. That&apos;s the tender part. He was that good, and he should never
                have had to be.
              </p>
            </div>
          </div>

          {/* The uncomfortable part */}
          <div style={{ marginTop: "56px" }}>
            <h2 style={h2Style}>The uncomfortable part</h2>
            <div style={sceneStyle}>
              <p style={bodyParaStyle}>
                If the sorting and the walking-over is the asset, then the tooling isn&apos;t. Neither
                is the department built around the tooling.
              </p>
              <p style={bodyParaStyle}>
                I would have fought that sentence for most of my career, politely, in meetings, with
                slides. It threatened the seat I was sitting in. When your paycheck rides on
                production hours flowing through your team, defending the craft and defending your
                position feel exactly alike from the inside. There is no inner instrument that tells
                you which one you&apos;re doing. I checked. There isn&apos;t.
              </p>
              <p style={bodyParaStyle}>
                I got clear on it after the seat was gone, which is the only time anyone gets clear on
                anything.
              </p>
              <p style={bodyParaStyle}>
                Some shops never had this argument at all. Their model feeds a machine — a spool
                drawing runs a cutting table, and the table doesn&apos;t attend meetings. Nothing
                argues with the thing that feeds the shop. Where the output feeds a meeting instead,
                the same capability spent twenty years being advisory. A meeting can be declined. A
                meeting can be rescheduled forever. A meeting can nod.
              </p>
            </div>
          </div>

          {/* The question */}
          <div style={{ marginTop: "56px" }}>
            <h2 style={h2Style}>The question</h2>
            <div style={sceneStyle}>
              <p style={bodyParaStyle}>
                Your model surfaces questions. So does your schedule. So does your estimate. AI is
                about to make all of them louder, faster, and more confident.
              </p>
              <p style={bodyParaStyle}>
                Who decides which questions matter? Who retires the ones that quietly died? Who makes
                sure the right person is expecting the rest — expecting them, not bracing for them?
              </p>
              <p style={bodyParaStyle}>
                Most programs can&apos;t put a name to that. Almost all of them could. It has to be
                somebody&apos;s job before it can be somebody&apos;s name.
              </p>
              <p style={bodyParaStyle}>
                Until then the instruments keep getting better. And somewhere on every job there&apos;s
                a person doing this work anyway, unnamed, unfunded, carrying the soup — and the whole
                thing quietly rests on whether they stay.
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

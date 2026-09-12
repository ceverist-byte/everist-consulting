import Link from "next/link";
import PageShell from "@/components/layout/PageShell";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "We Said Modernize. Nothing Moved.",
  description:
    "Governance is whether the decision survives the room it was made in. A field note on why declarations don't move work, why authority rarely travels with the ask, and why the hero on the hard job is the symptom, not the save.",
  path: "/notes/we-said-modernize-nothing-moved",
});

const dek =
  "A field note on governance, and why the people who live inside it can't always name it.";

const beforeQuoteParagraphs = [
  "A friend asked me what governance was the other morning. He's retired now, thirty years in the field, the kind of guy who has built things you've stood inside. He wasn't being difficult. He just didn't have the word, and he wanted it.",
  "I reached for the clean definition and it didn't come. I gave him three sentences that were technically correct and meant nothing. We let it go and ordered more coffee.",
  "It bothered me the rest of the day. Not because I couldn't define it. Because he couldn't, and he's spent his whole life inside the thing that's missing.",
  "So here is the honest version. The one I should have said over breakfast.",
];

const pullQuote = "Governance is whether the decision survives the room it was made in.";

const afterQuoteParagraphs = [
  "Watch how it usually goes. Leadership decides to change how projects get delivered. They say the word in a meeting. Modernize. Coordinate earlier. Catch it in the model, not in the field. Everyone nods. It feels like something happened.",
  "A year later the same project runs the same way. The declaration is still true. Nothing followed it.",
  "That gap, between the thing that was said and the thing that moved, is the first place governance lives. Or doesn't.",
  "Then there's the person they put in charge of the change. Give them a title. Coordination lead. Make them responsible for the new way happening. Now ask one question: can they require it? When a trade or a foreman or a project team decides to do it the old way, can the responsible person make them stop?",
  "Usually no. They can ask. They can escalate and wait. They can send the email again. But the field can decline, and often does, and the responsible person is left holding a bag they were never given the authority to carry.",
  "Watch what happens when it goes wrong. The new way didn't take. Something hit the field that should have been caught months earlier. Someone gets the call. And it is almost never the person who actually had the power to prevent it. The blame lands on the one who was responsible. The authority sat somewhere else, untouched, with no reason to have acted.",
  "Now look at the knowledge itself. The coordination standard, the way the model gets built, the sequence that actually works. Where does it live? On most jobs, in one person's head. They're good. They hold it. And the day they leave, or the project closes and the team scatters, it leaves with them. The next job starts from nothing. The company has done this a hundred times and learned it zero.",
  "And the risk. On every project there is a moment, early, where someone could surface the thing that's going to be expensive later and retire it while it's still cheap to fix. The question is whether that moment is built into the work, or whether it depends on someone happening to catch it. And if they catch it, whether anyone will stop the train long enough to deal with it.",
  "When those things are missing, what's missing is governance. Not a binder. Not a meeting. Not a software seat. Governance is whether authority travels with the ask, whether the right person is accountable for the right thing, and whether the structure outlives the people who happened to be standing there.",
  "So why don't we have it.",
  "I think the gap is cultural before it's anything else. This industry, this country, runs on free agency. We like the individual who figures it out. We tell stories about the superintendent who saved the job through sheer force of will, who knew where every line went, who held it all together because he was that good. We promote him. We build the whole operation around him.",
  "We call him the hero. He's the symptom.",
  "Because a job that needs a hero is a job with no structure underneath it. The heroics are the receipt for the governance that was never there. And we love the heroics so much that we never notice the bill.",
  "Here's the bill. The hero retires. He has breakfast with a friend who asks him a simple question, and neither of them can answer it, because the thing they spent their lives doing was never written down, never owned, never made into something the company could keep. The capability walks out the door with the man. The next project starts over. The work keeps getting more complex, the buildings keep getting harder, and the knowledge keeps leaving faster than anyone can replace it.",
  "That's what's at risk. Not a project. The ability to get better at all.",
  "I don't have a tidy ending for this. I'm still learning to say it out loud myself, which is part of why I'm writing it down.",
  "But here's the test I keep coming back to. Pick a real change leadership asked for, on a real project. Not the slogan. The actual thing. Then ask whether anything moved because they said it. Whether the person you put in charge of it could require it, or only ask. Whether the standard still exists now that the project is over.",
  "For most projects, the answers don't come easily. They come slow, or they don't come at all.",
  "That silence, the pause where the answer should be, is the most honest thing on the whole job. It's worth sitting in for a minute. It's usually telling you exactly where the structure isn't.",
];

const closeLeadParagraph =
  "If you want to run that test on a real program, that's the conversation I have.";

const bodyParaStyle = {
  fontSize: "1rem",
  color: "var(--text-primary)",
  lineHeight: 1.75,
};

const accentLinkStyle = {
  color: "var(--accent)",
  textDecoration: "none",
  borderBottom: "1px solid var(--rule)",
  paddingBottom: "2px",
  display: "inline-block",
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

export default function WeSaidModernizeNothingMovedPage() {
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
            Notes · 03
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
            We Said Modernize. Nothing Moved.
          </h1>
          <div style={{ maxWidth: "680px" }}>
            <p
              style={{
                fontStyle: "italic",
                color: "var(--text-secondary)",
                fontSize: "1.0625rem",
                lineHeight: 1.7,
              }}
            >
              {dek}
            </p>
          </div>
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
            {beforeQuoteParagraphs.map((para, idx) => (
              <p key={`before-${idx}`} style={bodyParaStyle}>
                {para}
              </p>
            ))}

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
              {pullQuote}
            </blockquote>

            {afterQuoteParagraphs.map((para, idx) => (
              <p key={`after-${idx}`} style={bodyParaStyle}>
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

      {/* Quiet close */}
      <section
        style={{
          background: "var(--bg)",
          padding: "80px 24px 96px",
        }}
      >
        <PageShell>
          <p
            style={{
              ...bodyParaStyle,
              maxWidth: "680px",
              marginBottom: "24px",
            }}
          >
            {closeLeadParagraph}
          </p>
          <a
            href="https://cal.com/chriseverist/vdc-structural-diagnostic"
            target="_blank"
            rel="noopener noreferrer"
            style={accentLinkStyle}
          >
            the 30-minute structural diagnostic
          </a>
          <div style={{ marginTop: "24px" }}>
            <Link href="/notes" style={footerLinkStyle}>
              ← <span style={{ color: "var(--accent)" }}>Notes</span>
            </Link>
          </div>
        </PageShell>
      </section>
    </>
  );
}

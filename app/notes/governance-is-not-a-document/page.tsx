import Link from "next/link";
import type { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "Governance Is Not a Document — Everist Consulting",
  description:
    "A coordination plan can name every risk and still change nothing. Governance isn't the plan — it's who can make the field answer when the plan and the field disagree.",
};

const epigraphQuote =
  "\"Questions are places in your mind where answers fit. If you haven't asked the question, the answer has nowhere to go.\"";

const epigraphAttribution = "— Clayton M. Christensen";

const introParagraphs = [
  "A coordination plan can be flawless and change nothing. I've held the pen on one.",
  "It did everything a good plan does. I rated two risks High impact, High probability — the kind you're supposed to kill before they cost you. I named the owners. I drew the gates and set the dates. On paper it was finished.",
  "Then, near the back, in the section that lists who hands off what and when, a line of template text nobody had filled in: consult with the team to develop. The plan even described its own condition. Ready to execute, it said, when organizational pull exists.",
  "It's still waiting.",
  "Naming a risk doesn't retire it. Putting a name beside it doesn't give that person the power to act. A plan can say who should move without changing who can. That gap — between the name on the page and the authority to make the field move — is where the work quietly dies. Not because anyone slacked. The work was good. It died because a document can't hand itself the one thing it needs.",
  "So here's the question I ask first, before any model or any schedule. Most plans never put it in writing:",
];

const afterQuoteParagraphs = [
  "If the honest answer is \"we'd escalate,\" or \"we'd have a conversation,\" or \"it depends,\" you don't have a coordination schedule. You have a coordination wish. The owner can publish the plan, run the meeting, flag the risk every week — and still not be able to force the decision that ends it. So the risk sits. Rated, named, alive. Waiting for a pull that rarely comes.",
  "There's a way to break that, and it isn't a better document.",
];

const linkParagraphPrefix =
  "You put the question somewhere it can't be avoided. Model the real condition — the actual bays, the actual conflict — and set it down as a decision that has to happen before anyone builds. Now the meeting can't move past it. The person who could be ignored becomes a question that needs an answer. One case is written up in ";
const inlineLinkText = "the overhead MEP sectional study";
const linkParagraphSuffix =
  ". The model was never the point. The point was that it made someone answer.";

const closingProseParagraphs = [
  "Governance is not the plan. Governance is who can make the field answer when the plan and the field disagree.",
  "Most capital programs have plans. Good ones. What they're missing is the authority to turn a named risk into a closed one — and that's not about tools and not about talent. The people are good. The software works. It's about who's allowed to decide. That, you can fix, once you can see it.",
  "The unasked question is the governance question. If no one has asked it on your program, the answer — the stall, the drift, the field deciding for itself — has had nowhere to go but into your schedule.",
];

const ctaLeadParagraph =
  "I run a 30-minute structural diagnostic that maps where authority breaks on a capital program. No deck and no pitch — we map the gap, and you keep the map.";

const bodyParaStyle = {
  fontSize: "1rem",
  color: "var(--text-primary)",
  lineHeight: 1.75,
};

const primaryCtaStyle = {
  background: "var(--fg)",
  border: "1px solid var(--fg)",
  borderRadius: "3px",
  color: "var(--bg)",
  display: "inline-block",
  fontSize: "0.875rem",
  fontWeight: 700,
  letterSpacing: "0.02em",
  lineHeight: 1,
  padding: "14px 22px",
  textDecoration: "none",
  textTransform: "uppercase" as const,
};

export default function GovernanceNotADocumentPage() {
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
            Notes · 02
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
            Governance Is Not a Document
          </h1>
          <div style={{ maxWidth: "680px" }}>
            <p
              style={{
                fontStyle: "italic",
                color: "var(--text-secondary)",
                fontSize: "1.0625rem",
                lineHeight: 1.7,
                marginBottom: "8px",
              }}
            >
              {epigraphQuote}
            </p>
            <p
              style={{
                fontStyle: "italic",
                color: "var(--text-secondary)",
                fontSize: "0.9375rem",
                lineHeight: 1.5,
              }}
            >
              {epigraphAttribution}
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
            {introParagraphs.map((para, idx) => (
              <p key={`intro-${idx}`} style={bodyParaStyle}>
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
              &ldquo;Who owns the coordination schedule, and what happens to the project if they miss it?&rdquo;
            </blockquote>

            {afterQuoteParagraphs.map((para, idx) => (
              <p key={`after-${idx}`} style={bodyParaStyle}>
                {para}
              </p>
            ))}

            <p style={bodyParaStyle}>
              {linkParagraphPrefix}
              <Link
                href="/work/overhead-mep-sectional-study"
                style={{
                  color: "var(--text-primary)",
                  textDecoration: "none",
                  borderBottom: "1px solid var(--rule)",
                  paddingBottom: "2px",
                }}
              >
                <span style={{ color: "var(--accent)" }}>{inlineLinkText}</span>
              </Link>
              {linkParagraphSuffix}
            </p>

            {closingProseParagraphs.map((para, idx) => (
              <p key={`close-${idx}`} style={bodyParaStyle}>
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

      {/* Closing CTA */}
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
            {ctaLeadParagraph}
          </p>
          <a
            href="https://cal.com/chriseverist/vdc-structural-diagnostic"
            target="_blank"
            rel="noopener noreferrer"
            style={primaryCtaStyle}
          >
            Book the diagnostic
          </a>
          <div style={{ marginTop: "24px" }}>
            <Link
              href="/notes"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.9375rem",
                fontWeight: 600,
                color: "var(--text-primary)",
                textDecoration: "none",
                borderBottom: "1px solid var(--rule)",
                paddingBottom: "2px",
                display: "inline-block",
              }}
            >
              ← <span style={{ color: "var(--accent)" }}>Notes</span>
            </Link>
          </div>
        </PageShell>
      </section>
    </>
  );
}

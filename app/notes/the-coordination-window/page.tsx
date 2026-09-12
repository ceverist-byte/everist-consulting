import Link from "next/link";
import PageShell from "@/components/layout/PageShell";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "The Coordination Window",
  description:
    "The coordination window is the period before installation when changes are still cheap to make. Why no one is watching it, what protected looks like, and the diagnostic question to take into your next preconstruction meeting.",
  path: "/notes/the-coordination-window",
});

const heroLead =
  "There is a window in most capital projects that the project's advisors are not watching — and it closes before anyone names it.";

const introParagraphs = [
  "It opens before construction starts. It closes well before most owners realize it was ever there. Inside it sits the difference between the building you contracted for and the building you eventually take possession of.",
  "Your architect protects design intent. Your GC protects budget. Your CM protects schedule. None of them protect this window by design. Each is structured to protect a different thing, and the coordination window falls between all of them.",
];

const sections = [
  {
    heading: "What the window actually is",
    paragraphs: [
      "Coordination decisions made before installation are roughly a dollar decision. The same decisions made during installation cost ten to a hundred times that — through rework, trade conflicts, schedule impact, and the change orders that follow.",
      "The dollar-to-hundred-dollar cost asymmetry is well understood in construction. What's less understood is that the window during which you can act on it has a duration, and there is no notice when it ends.",
      "You aren't buying BIM. You aren't buying coordination software or modeling services. You're buying the right to change design before it's built — and that right has an expiration that doesn't announce itself.",
    ],
  },
  {
    heading: "Why no one is watching it",
    paragraphs: [
      "Each of the project's advisors is protecting something real. The architect is protecting the integrity of the design. The GC is protecting the budget. The CM is protecting the schedule. These are legitimate protections.",
      "But none of them are structured to protect the coordination window, because the coordination window isn't a single discipline's problem. It lives at the boundary between design and installation — between what was specified and what can actually be built in the sequence and geometry the trades will encounter in the field. No single advisor owns that boundary by default.",
      "The result is that coordination decisions migrate into the field, where they're resolved by whoever discovers them first, under time pressure, without the dimensioned evidence the engineering teams would need to respond with confidence. The window doesn't reopen.",
    ],
  },
  {
    heading: "What protected looks like",
    paragraphs: [
      "Projects where the coordination window is governed don't talk about software. They talk about predictable schedule variance, RFI counts that decrease as construction advances rather than rise, and change orders measured in single digits over a project's life. The teams make installation decisions before steel is in the air. The building they receive is the building they specified.",
      "The difference between those projects and the ones that don't land that way is not the quality of the advisors, the technology stack, or the size of the VDC budget. It's structural: whether the coordination window has a governance layer watching it — someone with the authority to force a decision, the evidence to force it on, and the timing to force it before installation forecloses the options.",
    ],
  },
];

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

export default function CoordinationWindowPage() {
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
            Notes · 01
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
            The Coordination Window
          </h1>
          <p
            style={{
              fontSize: "1.0625rem",
              color: "var(--text-primary)",
              lineHeight: 1.75,
              maxWidth: "680px",
            }}
          >
            {heroLead}
          </p>
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
              <p key={idx} style={bodyParaStyle}>
                {para}
              </p>
            ))}
          </div>

          {sections.map((section) => (
            <div key={section.heading} style={{ marginTop: "56px" }}>
              <h2 style={h2Style}>{section.heading}</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "680px" }}>
                {section.paragraphs.map((para, idx) => (
                  <p key={idx} style={bodyParaStyle}>
                    {para}
                  </p>
                ))}
              </div>
            </div>
          ))}

          {/* The diagnostic question */}
          <div style={{ marginTop: "56px" }}>
            <h2 style={h2Style}>The diagnostic question</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "24px", maxWidth: "680px" }}>
              <p style={bodyParaStyle}>
                Before your next preconstruction meeting, ask your GC or CM:
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
                &ldquo;Who owns the coordination schedule, and what happens to the project if they miss it?&rdquo;
              </blockquote>
              <p style={bodyParaStyle}>
                If your GC or CM cannot answer that in one sentence, your window is already closing. A confident answer means coordination is governed. The absence of one is the signal.
              </p>
            </div>
          </div>
        </PageShell>
      </section>

      {/* Divider */}
      <PageShell>
        <div style={{ height: "1px", background: "var(--rule)" }} />
      </PageShell>

      {/* Navigation footer */}
      <section
        style={{
          background: "var(--bg)",
          padding: "0 24px 96px",
          paddingTop: "80px",
        }}
      >
        <PageShell>
          <Link href="/notes" style={footerLinkStyle}>
            ← <span style={{ color: "var(--accent)" }}>Notes</span>
          </Link>
          <span style={{ color: "var(--text-secondary)", padding: "0 12px" }}>·</span>
          <Link href="/contact" style={footerLinkStyle}>
            <span style={{ color: "var(--accent)" }}>Book a Discovery Call</span>{" "}
            →
          </Link>
        </PageShell>
      </section>
    </>
  );
}

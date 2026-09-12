import Link from "next/link";
import PageShell from "@/components/layout/PageShell";
import HeroMonogram from "@/components/HeroMonogram";
import QuoteRotator from "@/components/QuoteRotator";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Everist Consulting — VDC Operating Model Design",
  description:
    "VDC operating model design and AI advisory for general contractors and owner-side capital programs. Based in San Diego.",
  path: "/",
});

const pageBg = "var(--bg)";
const pageFg = "var(--fg)";
const pageText = "var(--text-primary)";
const pageMuted = "var(--text-secondary)";
const pageRule = "var(--rule)";
const pageRuleStrong = "var(--rule-strong)";
const pageAccent = "var(--accent)";

const sectionStyle = {
  background: pageBg,
  borderTop: `1px solid ${pageRuleStrong}`,
  padding: "72px 0",
};

const contentWrapStyle = {
  maxWidth: "1120px",
  margin: "0 auto",
};

const eyebrowStyle = {
  color: pageAccent,
  fontSize: "0.75rem",
  fontWeight: 700,
  letterSpacing: "0.08em",
  lineHeight: 1,
  marginBottom: "18px",
  textTransform: "uppercase" as const,
};

const h2Style = {
  color: pageText,
  fontFamily: "var(--font-sans)",
  fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
  fontWeight: 700,
  letterSpacing: "-0.025em",
  lineHeight: 1.12,
};

const bodyTextStyle = {
  color: pageText,
  fontSize: "1rem",
  fontWeight: 400,
  lineHeight: 1.65,
};

const primaryCtaStyle = {
  background: pageFg,
  border: `1px solid ${pageFg}`,
  borderRadius: "3px",
  color: pageBg,
  display: "inline-block",
  fontSize: "0.875rem",
  fontWeight: 700,
  letterSpacing: "0.02em",
  lineHeight: 1,
  padding: "14px 22px",
  textDecoration: "none",
  textTransform: "uppercase" as const,
};

const secondaryCtaStyle = {
  background: "transparent",
  border: `1px solid ${pageFg}`,
  borderRadius: "3px",
  color: pageText,
  display: "inline-block",
  fontSize: "0.875rem",
  fontWeight: 700,
  letterSpacing: "0.02em",
  lineHeight: 1,
  padding: "14px 22px",
  textDecoration: "none",
  textTransform: "uppercase" as const,
};

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section
        style={{
          background: pageBg,
          borderBottom: `1px solid ${pageRuleStrong}`,
          display: "flex",
          alignItems: "center",
          position: "relative",
          minHeight: "78vh",
          padding: "120px 0 64px",
        }}
      >
        <PageShell className="relative w-full">
          <div style={contentWrapStyle}>
            <div className="flex items-center gap-3" style={eyebrowStyle}>
              VDC Operating Model Design · AI Advisory
              <span
                style={{
                  width: "40px",
                  height: "1px",
                  background: pageRuleStrong,
                  display: "inline-block",
                }}
              />
            </div>
            <div style={{ marginBottom: "32px" }}>
              <HeroMonogram size={100} />
            </div>
            <h1
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                fontWeight: 700,
                lineHeight: 0.98,
                letterSpacing: "-0.03em",
                color: pageText,
                maxWidth: "820px",
                marginBottom: "32px",
              }}
            >
              By the time a conflict shows up on a report, it already cost you the cheap&nbsp;fix.
            </h1>
            <div style={{ maxWidth: "640px" }}>
              <p style={{ ...bodyTextStyle, fontSize: "1.0625rem", marginBottom: "16px" }}>
                A room decides. What matters is whether that decision survives the walk back to the trailer, or gets quietly overridden before anyone notices it slipped. Most capital projects are advised by people who each protect one thing. The architect protects design intent. The GC protects budget. The CM protects schedule. None of them own the room where the call gets made while it&apos;s still cheap to make.
              </p>
              <p style={{ ...bodyTextStyle, fontSize: "1.0625rem" }}>
                Who owns that room on your project, and what happens if they miss it?
              </p>
            </div>
          </div>
        </PageShell>
      </section>

      {/* Quote rotator */}
      <QuoteRotator />

      {/* From the Notes */}
      <section style={sectionStyle}>
        <PageShell>
          <div style={contentWrapStyle}>
            <div style={eyebrowStyle}>From the Notes</div>
            <h2 style={{ ...h2Style, marginBottom: "36px", maxWidth: "820px" }}>
              Published thinking.
            </h2>
            <div style={{ maxWidth: "820px" }}>
              {[
                {
                  num: "Note 12",
                  title: "The Same Ledger",
                  opener:
                    "Constructability review and value engineering are the same discipline, run as two separate exercises, both too late.",
                  href: "/notes/the-same-ledger",
                },
                {
                  num: "Note 11",
                  title: "Seeing Is Not Standing",
                  opener:
                    "Why the people who see a problem first are rarely the people with the standing to fix it.",
                  href: "/notes/seeing-is-not-standing",
                },
                {
                  num: "Note 10",
                  title: "The Questions Nobody Routed",
                  opener:
                    "A model surfaces questions. Whether any of them bind depends on a job nobody staffed.",
                  href: "/notes/the-questions-nobody-routed",
                },
              ].map((note, i) => (
                <Link
                  key={note.href}
                  href={note.href}
                  style={{
                    display: "block",
                    textDecoration: "none",
                    padding: i === 0 ? "0 0 24px" : "24px 0",
                    borderTop: i === 0 ? "none" : `1px solid ${pageRule}`,
                  }}
                >
                  <div
                    style={{
                      ...eyebrowStyle,
                      marginBottom: "10px",
                    }}
                  >
                    {note.num}
                  </div>
                  <div
                    style={{
                      color: pageText,
                      fontFamily: "var(--font-sans)",
                      fontSize: "clamp(1.25rem, 2vw, 1.5rem)",
                      fontWeight: 700,
                      letterSpacing: "-0.02em",
                      lineHeight: 1.2,
                      marginBottom: "8px",
                    }}
                  >
                    {note.title}
                  </div>
                  <p style={{ ...bodyTextStyle, maxWidth: "640px" }}>
                    {note.opener}
                  </p>
                </Link>
              ))}
            </div>
            <div style={{ marginTop: "8px" }}>
              <Link
                href="/notes"
                style={{
                  color: pageText,
                  fontSize: "0.9375rem",
                  fontWeight: 600,
                  textDecoration: "none",
                  borderBottom: `1px solid ${pageRule}`,
                  paddingBottom: "2px",
                  display: "inline-block",
                }}
              >
                <span style={{ color: pageAccent }}>All notes</span> →
              </Link>
            </div>
          </div>
        </PageShell>
      </section>

      {/* The practice */}
      <section style={sectionStyle}>
        <PageShell>
          <div style={contentWrapStyle}>
            <div style={eyebrowStyle}>The practice</div>
            <h2 style={{ ...h2Style, marginBottom: "24px", maxWidth: "820px" }}>
              The governance layer above coordination.
            </h2>
            <div style={{ maxWidth: "720px" }}>
              <p style={{ ...bodyTextStyle, marginBottom: "16px" }}>
                Everist Consulting is an independent VDC operating model consultancy and AI advisory practice founded by Christopher Everist in San Diego. The work designs the structure that determines whether VDC investment produces the outcomes the owner contracted for — operating model design for organizations rebuilding internal capability, and AI advisory for leaders deciding what to absorb and what to defer. Not a vendor of software, modeling, or staffing. The deliverable is structural clarity.
              </p>
              <p style={{ ...bodyTextStyle, marginBottom: "28px" }}>
                Three groups get the most from this work: general contractors rebuilding VDC capability into something durable; hospital systems and university capital programs where coordination governance affects accreditation and opening dates; and CM and Owner&apos;s Rep principals advising owners before GC selection.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/services" style={secondaryCtaStyle}>
                  Services
                </Link>
                <Link href="/ai-automation" style={secondaryCtaStyle}>
                  AI &amp; Automation Advisory
                </Link>
              </div>
            </div>
          </div>
        </PageShell>
      </section>

      {/* Selected Work */}
      <section style={sectionStyle}>
        <PageShell>
          <div style={contentWrapStyle}>
            <div style={eyebrowStyle}>Selected Work</div>
            <h2 style={{ ...h2Style, marginBottom: "20px", maxWidth: "820px" }}>
              Engagements in practice.
            </h2>
            <div style={{ maxWidth: "640px" }}>
              <p style={{ ...bodyTextStyle, marginBottom: "24px" }}>
                A four-level hotel renovation, scanned to as-built accuracy in two days where no coordination model existed. A swim-lane exhibit routed every finding to a documented decision before modeling began. A constraint log shipped seven days before rough-in, every open item carrying a name inside the client&apos;s own organization.
              </p>
              <Link
                href="/work/scan-anchored-overhead-coordination"
                style={{
                  color: pageText,
                  fontSize: "0.9375rem",
                  fontWeight: 600,
                  textDecoration: "none",
                  borderBottom: `1px solid ${pageRule}`,
                  paddingBottom: "2px",
                  display: "inline-block",
                  marginBottom: "32px",
                }}
              >
                <span style={{ color: pageAccent }}>Read the engagement</span> →
              </Link>
              <p style={{ ...bodyTextStyle, marginBottom: "24px" }}>
                The first engagement is documented. Six weeks of overhead MEP coordination on an active hotel renovation — five conditions that would have failed at installation, converted into engineering decisions before the window closed.
              </p>
              <Link
                href="/work"
                style={{
                  color: pageText,
                  fontSize: "0.9375rem",
                  fontWeight: 600,
                  textDecoration: "none",
                  borderBottom: `1px solid ${pageRule}`,
                  paddingBottom: "2px",
                  display: "inline-block",
                }}
              >
                <span style={{ color: pageAccent }}>Read the first engagement</span> →
              </Link>
            </div>
          </div>
        </PageShell>
      </section>

      {/* Section 5: Background */}
      <section style={sectionStyle}>
        <PageShell>
          <div style={contentWrapStyle}>
            <div style={eyebrowStyle}>Background</div>
            <h2 style={{ ...h2Style, marginBottom: "20px", maxWidth: "820px" }}>
              Twenty years inside the problem.
            </h2>
            <div style={{ maxWidth: "820px" }}>
              <p style={{ ...bodyTextStyle, fontSize: "1.0625rem", marginBottom: "28px" }}>
                Chris Everist has spent over twenty years inside the construction technology layer of buildings — five years at Turner Construction with international VDC and lean instruction work, then an extended tenure leading VDC practice at a West Coast general contractor. Co-author, <em>BIM with the End in Mind</em> (USIBD, 2021).
              </p>
              <Link
                href="/about"
                style={{
                  color: pageText,
                  fontSize: "0.9375rem",
                  fontWeight: 600,
                  textDecoration: "underline",
                  textDecorationColor: pageRule,
                  textUnderlineOffset: "4px",
                }}
              >
                Full background →
              </Link>
            </div>
          </div>
        </PageShell>
      </section>

      {/* Section 6: Notes by email */}
      <section style={sectionStyle}>
        <PageShell>
          <div style={contentWrapStyle}>
            <div style={eyebrowStyle}>Notes by Email</div>
            <h2 style={{ ...h2Style, marginBottom: "12px", maxWidth: "820px" }}>
              New notes when they publish.
            </h2>
            <p style={{ ...bodyTextStyle, marginBottom: "24px", maxWidth: "560px" }}>
              Notes on VDC operating model design, governance, and the structural layer most construction firms skip.
            </p>
            <form
              action="https://buttondown.com/api/emails/embed-subscribe/EveristConsulting"
              method="post"
              style={{ maxWidth: "480px" }}
            >
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                <input
                  type="email"
                  name="email"
                  id="bd-email"
                  placeholder="your@email.com"
                  required
                  style={{
                    flex: 1,
                    minWidth: "200px",
                    background: pageBg,
                    border: `1px solid ${pageRuleStrong}`,
                    borderRadius: "3px",
                    color: pageText,
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.9375rem",
                    padding: "12px 14px",
                    outline: "none",
                  }}
                />
                <button
                  type="submit"
                  style={{
                    background: pageFg,
                    border: `1px solid ${pageFg}`,
                    borderRadius: "3px",
                    color: pageBg,
                    cursor: "pointer",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.875rem",
                    fontWeight: 700,
                    letterSpacing: "0.02em",
                    lineHeight: 1,
                    padding: "12px 20px",
                    textTransform: "uppercase" as const,
                    whiteSpace: "nowrap" as const,
                  }}
                >
                  Subscribe
                </button>
              </div>
              <p style={{ marginTop: "10px", fontSize: "0.75rem", color: pageMuted }}>
                <a
                  href="https://buttondown.com/refer/EveristConsulting"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: pageMuted, textDecoration: "none" }}
                >
                  Powered by Buttondown
                </a>
              </p>
            </form>
          </div>
        </PageShell>
      </section>

      {/* Section 7: CTA */}
      <section style={{ ...sectionStyle, paddingBottom: "96px" }}>
        <PageShell>
          <div style={contentWrapStyle}>
            <div style={eyebrowStyle}>The Diagnostic Question</div>
            <p
              style={{
                ...bodyTextStyle,
                fontSize: "1.0625rem",
                marginBottom: "32px",
                maxWidth: "640px",
              }}
            >
              A confident answer means coordination is governed. The absence of one is the signal.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/contact" style={primaryCtaStyle}>
                Book a Discovery Call
              </Link>
              <a
                href="mailto:chris@everistconsulting.com"
                style={{
                  fontSize: "1rem",
                  color: pageAccent,
                  textDecoration: "none",
                  fontWeight: 600,
                  borderBottom: `1px solid ${pageAccent}`,
                  paddingBottom: "2px",
                }}
              >
                chris@everistconsulting.com
              </a>
            </div>
          </div>
        </PageShell>
      </section>
    </>
  );
}

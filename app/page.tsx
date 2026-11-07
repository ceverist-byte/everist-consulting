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
              You can win the argument with leadership and still lose, because the argument was never what stood in the&nbsp;way.
            </h1>
            <div style={{ maxWidth: "640px" }}>
              <p style={{ ...bodyTextStyle, fontSize: "1.0625rem", marginBottom: "16px" }}>
                People who push for better delivery spend years trying to convince owners and executives. The executive usually believes them already. What blocks the change sits upstream: a burn rate already approved, a fee that pays for hours, a contract that rewards guarding the schedule.
              </p>
              <p style={{ ...bodyTextStyle, fontSize: "1.0625rem" }}>
                What is the person you&apos;re trying to convince already on the hook for?
              </p>
              <div style={{ marginTop: "24px" }}>
                <Link
                  href="/notes/stop-trying-to-convince-the-owner"
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
                  <span style={{ color: pageAccent }}>Read Note 14</span> →
                </Link>
              </div>
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
                  num: "Note 14",
                  title: "Stop Trying to Convince the Owner",
                  opener:
                    "Leadership that won't change usually believes you already. It is bound by a constraint upstream, and that constraint is what to work on.",
                  href: "/notes/stop-trying-to-convince-the-owner",
                },
                {
                  num: "Note 13",
                  title: "Whose Decision Is It, Actually",
                  opener:
                    "When a contractor punts its own means-and-methods decision to the owner, the delay isn't caution — it's a conviction nobody has formed yet.",
                  href: "/notes/whose-decision-is-it-actually",
                },
                {
                  num: "Note 12",
                  title: "The Same Ledger",
                  opener:
                    "Constructability review and value engineering are the same discipline, run as two separate exercises, both too late.",
                  href: "/notes/the-same-ledger",
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
              <p style={{ ...bodyTextStyle, marginBottom: "28px" }}>
                Everist Consulting is the independent practice of Christopher Everist, based in San Diego. The work sits on the layer most capital projects leave unowned: who makes the call while it is still cheap to make, and whether that call holds once the meeting ends. That means designing how VDC and AI programs are governed for general contractors, health systems, university capital programs, and CM and owner&apos;s rep principals. It is not software, modeling, or staffing.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/services" style={secondaryCtaStyle}>
                  Services
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
                More than twenty years in construction technology, most of it leading VDC programs from inside general contractors. That includes five years at Turner Construction on international VDC and lean work, and more than a decade leading VDC at a West Coast general contractor. Co-author of <em>BIM with the End in Mind</em> (USIBD, 2021).
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
                Get in touch
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

import Link from "next/link";
import type { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "Everist Consulting — VDC Operating Model Design",
  description:
    "VDC operating model design and AI advisory for general contractors and owner-side capital programs. Based in San Diego.",
};

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
      {/* HERO — Section 1: Opening frame */}
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

            <h1
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                fontWeight: 700,
                lineHeight: 0.98,
                letterSpacing: "-0.03em",
                color: pageText,
                maxWidth: "880px",
                marginBottom: "32px",
              }}
            >
              Most capital projects are advised by people who each protect one thing.
            </h1>

            <div style={{ maxWidth: "640px" }}>
              <p style={{ ...bodyTextStyle, fontSize: "1.0625rem", marginBottom: "16px" }}>
                The architect protects design intent. The GC protects budget. The CM protects schedule.
              </p>
              <p style={{ ...bodyTextStyle, fontSize: "1.0625rem" }}>
                None of them protect the coordination window — the period before installation when changes are still cheap to make. It opens before construction. It closes well before most owners notice it was there.
              </p>
            </div>
          </div>
        </PageShell>
      </section>

      {/* Section 2: The reframe */}
      <section style={sectionStyle}>
        <PageShell>
          <div style={contentWrapStyle}>
            <div style={eyebrowStyle}>The reframe</div>
            <h2 style={{ ...h2Style, marginBottom: "20px", maxWidth: "820px" }}>
              The right to change design before it&apos;s built has a price.
            </h2>
            <div style={{ maxWidth: "720px" }}>
              <p style={{ ...bodyTextStyle, marginBottom: "16px" }}>
                Made before installation, those changes cost roughly a dollar. Made during installation, the same changes cost ten to a hundred times that — through rework, trade conflicts, schedule impact, and the change orders that follow.
              </p>
              <p style={{ ...bodyTextStyle }}>
                You aren&apos;t buying coordination software or modeling services. You&apos;re buying the right to change design before it&apos;s built. That right has a duration, and there is no notice when it ends.
              </p>
            </div>
          </div>
        </PageShell>
      </section>

      {/* Section 3: Who this is for */}
      <section style={sectionStyle}>
        <PageShell>
          <div style={contentWrapStyle}>
            <div style={eyebrowStyle}>Who this is for</div>
            <div style={{ maxWidth: "820px" }}>
              <p style={{ ...bodyTextStyle, fontSize: "1.0625rem" }}>
                Three groups consistently benefit from this work: general contractors rebuilding VDC capability into something operationally durable; hospital systems and university capital programs running healthcare, research, and institutional projects where coordination governance affects accreditation, opening dates, and patient care; and CM and Owner&apos;s Rep principals advising owners on project readiness before GC selection.
              </p>
            </div>
          </div>
        </PageShell>
      </section>

      {/* Section 4: What Everist Consulting does */}
      <section style={sectionStyle}>
        <PageShell>
          <div style={contentWrapStyle}>
            <div style={eyebrowStyle}>What Everist Consulting does</div>
            <h2 style={{ ...h2Style, marginBottom: "24px", maxWidth: "820px" }}>
              The governance layer above coordination.
            </h2>
            <div style={{ maxWidth: "720px" }}>
              <p style={{ ...bodyTextStyle, marginBottom: "16px" }}>
                Everist Consulting designs the structure that determines whether VDC investment produces the outcomes the owner contracted for. The work spans operating model design for organizations rebuilding internal capability and AI and automation advisory for leaders deciding what to absorb and what to defer.
              </p>
              <p style={{ ...bodyTextStyle, marginBottom: "28px" }}>
                Everist Consulting is not a vendor of software, modeling, or staffing. The deliverable is structural clarity.
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

      {/* Selected Work — proof slot */}
      <section style={sectionStyle}>
        <PageShell>
          <div style={contentWrapStyle}>
            <div style={eyebrowStyle}>Selected Work</div>
            <h2 style={{ ...h2Style, marginBottom: "20px", maxWidth: "820px" }}>
              Engagements in practice.
            </h2>
            <div style={{ maxWidth: "640px" }}>
              <p style={{ ...bodyTextStyle, marginBottom: "24px" }}>
                The first engagement is in its final phase. A case study — what the diagnosis surfaced, the intervention introduced, and the change the client retained — will be published following project close.
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
                <span style={{ color: pageAccent }}>See what gets shown</span> →
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
            <div style={{ maxWidth: "820px" }}>
              <p style={{ ...bodyTextStyle, fontSize: "1.0625rem", marginBottom: "16px" }}>
                Chris Everist has spent over twenty years inside the construction technology layer of buildings — including five years at Turner Construction with international VDC and lean instruction work, followed by an extended tenure leading VDC practice at a West Coast general contractor.
              </p>
              <p style={{ ...bodyTextStyle, fontSize: "1.0625rem", marginBottom: "28px" }}>
                He co-authored <em>BIM with the End in Mind</em> (USIBD, 2021) and co-presented the inaugural Agentic AI in Construction webinar with Datagrid in March 2025.
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

      {/* Section 6: CTA — The diagnostic question */}
      <section style={{ ...sectionStyle, paddingBottom: "96px" }}>
        <PageShell>
          <div style={contentWrapStyle}>
            <div style={eyebrowStyle}>The Diagnostic Question</div>
            <p style={{ ...bodyTextStyle, marginBottom: "16px", maxWidth: "640px" }}>
              Before your next preconstruction meeting, ask your GC or CM:
            </p>
            <blockquote
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "clamp(1.375rem, 2.5vw, 1.75rem)",
                fontWeight: 600,
                lineHeight: 1.3,
                letterSpacing: "-0.02em",
                color: pageAccent,
                borderLeft: `2px solid ${pageAccent}`,
                paddingLeft: "20px",
                margin: "0 0 24px",
                maxWidth: "780px",
              }}
            >
              &ldquo;Who owns the coordination schedule, and what happens to the project if they miss it?&rdquo;
            </blockquote>
            <p style={{ ...bodyTextStyle, marginBottom: "32px", maxWidth: "640px" }}>
              If your GC or CM cannot answer that in one sentence, your window is already closing. A confident answer means coordination is governed. The absence of one is the signal.
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
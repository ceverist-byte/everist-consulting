import Link from "next/link";
import type { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "Selected Work — Everist Consulting",
  description: "Engagement case studies in VDC operating model design.",
};

export default function WorkPage() {
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
            Selected Work
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
            Engagements in practice.
          </h1>
          <p
            style={{
              fontSize: "1.0625rem",
              color: "var(--text-primary)",
              lineHeight: 1.75,
              maxWidth: "680px",
            }}
          >
            Each engagement begins the same way — with a structural diagnosis of how coordination decisions get made, who owns them, and what happens when they don&apos;t get made in time. The case studies below describe what that diagnosis surfaced, the intervention that followed, and the structural change the client retained. Method stays internal. Outcomes are the record.
          </p>
        </PageShell>
      </section>

      {/* Divider */}
      <PageShell>
        <div style={{ height: "1px", background: "var(--rule)" }} />
      </PageShell>

      {/* Case study listing */}
      <section
        style={{
          background: "var(--bg)",
          padding: "80px 24px",
        }}
      >
        <PageShell>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "24px",
              alignItems: "start",
            }}
            className="md:[grid-template-columns:200px_1fr] md:gap-16"
          >
            <div
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.6875rem",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--text-secondary)",
                paddingTop: "6px",
              }}
            >
              Engagement 01
            </div>
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "clamp(1.5rem, 2.4vw, 1.875rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.25,
                  color: "var(--text-primary)",
                  marginBottom: "20px",
                  maxWidth: "640px",
                }}
              >
                Forcing engineering decisions before installation foreclosed them.
              </h2>
              <p
                style={{
                  fontSize: "1rem",
                  color: "var(--text-primary)",
                  lineHeight: 1.75,
                  maxWidth: "640px",
                  marginBottom: "24px",
                }}
              >
                Six weeks. Three floors of overhead MEP rough-in. Mechanical fabrication already cutting at engagement start; steel install six days from rough-in. Five conditions that would have failed at installation, converted into engineering decisions documented in time to matter — at a precision the available 2D drawing tools could not generate.
              </p>
              <Link
                href="/work/overhead-mep-sectional-study"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.9375rem",
                  fontWeight: 600,
                  letterSpacing: "-0.005em",
                  color: "var(--text-primary)",
                  textDecoration: "none",
                  borderBottom: "1px solid var(--rule)",
                  paddingBottom: "2px",
                  display: "inline-block",
                }}
              >
                <span style={{ color: "var(--accent)" }}>Read the engagement</span>{" "}
                →
              </Link>
            </div>
          </div>
        </PageShell>
      </section>

      {/* Footer link */}
      <section
        style={{
          background: "var(--bg)",
          padding: "0 24px 96px",
        }}
      >
        <PageShell>
          <Link
            href="/contact"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.9375rem",
              fontWeight: 600,
              letterSpacing: "-0.005em",
              color: "var(--text-primary)",
              textDecoration: "none",
              borderBottom: "1px solid var(--rule)",
              paddingBottom: "2px",
              display: "inline-block",
            }}
          >
            <span style={{ color: "var(--accent)" }}>Discuss your engagement</span>{" "}
            →
          </Link>
        </PageShell>
      </section>
    </>
  );
}

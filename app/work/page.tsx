import Link from "next/link";
import type { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "Selected Work — Everist Consulting",
  description: "Engagement case studies in VDC operating model design.",
};

const frame = [
  {
    label: "Situation",
    detail:
      "The engagement context — client type, project scale, and the coordination problem that prompted the work.",
  },
  {
    label: "Intervention",
    detail:
      "The structural diagnosis and the operating model change introduced.",
  },
  {
    label: "Change",
    detail:
      "What the client now owns differently — and how that shows up in their next project.",
  },
];

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

      {/* Holding state */}
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
              Status
            </div>
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "clamp(1.5rem, 2.2vw, 1.75rem)",
                  fontWeight: 400,
                  letterSpacing: "-0.015em",
                  lineHeight: 1.25,
                  color: "var(--text-primary)",
                  marginBottom: "20px",
                  maxWidth: "640px",
                }}
              >
                First engagement closing — case study in preparation.
              </h2>
              <p
                style={{
                  fontSize: "0.9375rem",
                  color: "var(--text-primary)",
                  lineHeight: 1.75,
                  maxWidth: "640px",
                }}
              >
                Everist Consulting&apos;s first engagement is in its final phase. A case study describing the structural gap identified, the operating model intervention, and the change the client retained will be published here following project close. Available shortly.
              </p>
            </div>
          </div>
        </PageShell>
      </section>

      {/* Divider */}
      <PageShell>
        <div style={{ height: "1px", background: "var(--rule)" }} />
      </PageShell>

      {/* Frame preview */}
      <section
        style={{
          background: "var(--bg)",
          padding: "80px 24px",
        }}
      >
        <PageShell>
          <h2
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(1.5rem, 2.4vw, 1.875rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
              color: "var(--text-primary)",
              marginBottom: "48px",
              maxWidth: "560px",
            }}
          >
            What you&apos;ll read here.
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            {frame.map((row) => (
              <div
                key={row.label}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: "12px",
                  alignItems: "start",
                }}
                className="md:[grid-template-columns:200px_1fr] md:gap-16"
              >
                <div className="eyebrow">{row.label}</div>
                <p
                  style={{
                    fontSize: "1rem",
                    color: "var(--text-primary)",
                    lineHeight: 1.75,
                    maxWidth: "640px",
                  }}
                >
                  {row.detail}
                </p>
              </div>
            ))}
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

import Link from "next/link";
import PageShell from "@/components/layout/PageShell";
import KeelholdMark from "@/components/KeelholdMark";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Keelhold™",
  description:
    "Owner conditions for satisfaction, set before design and held into construction.",
  path: "/keelhold",
});

const sections = [
  {
    heading: "Who it's for",
    body: (
      <>
        Design-build teams at the start of a project, and the owners whose
        satisfaction the project exists to meet. For the team, it sets and
        holds the first of the{" "}
        <Link
          href="/design-management"
          style={{
            color: "var(--text-primary)",
            fontWeight: 700,
            textDecoration: "underline",
            textDecorationColor: "var(--rule)",
            textUnderlineOffset: "3px",
          }}
        >
          six functions of Design Management
        </Link>
        , the one the other five are built on. It works inside a single
        organization too, applied to a decision instead of a project.
      </>
    ),
  },
  {
    heading: "What you keep",
    body: "The conditions, the gates, and the record of which ones closed belong to the owner. If the team changes, the owner keeps all of it.",
  },
  {
    heading: "How it ends",
    body: "I set it up with the team and coach it until they hold it on their own. The engagement is built to end there, and I close it myself rather than letting it run on.",
  },
];

export default function KeelholdPage() {
  return (
    <>
      <section
        style={{
          background: "var(--bg)",
          paddingTop: "120px",
          paddingBottom: "64px",
          paddingLeft: "24px",
          paddingRight: "24px",
          borderBottom: "1px solid var(--rule-strong)",
        }}
      >
        <PageShell>
          <h1
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(2.2rem, 5vw, 4rem)",
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              color: "var(--text-primary)",
              marginBottom: "12px",
            }}
          >
            Keelhold&trade;
          </h1>
          <p
            style={{
              fontSize: "0.9375rem",
              fontWeight: 500,
              color: "var(--text-secondary)",
              marginBottom: "40px",
            }}
          >
            <a
              href="https://www.everist-labs.com"
              style={{
                color: "var(--text-secondary)",
                textDecoration: "underline",
                textDecorationColor: "var(--rule)",
                textUnderlineOffset: "3px",
              }}
            >
              by Everist-Labs
            </a>
          </p>

          <div style={{ marginBottom: "40px" }}>
            <KeelholdMark />
          </div>

          <p
            style={{
              fontSize: "1.0625rem",
              fontWeight: 400,
              color: "var(--text-primary)",
              lineHeight: 1.75,
              maxWidth: "760px",
            }}
          >
            Before anyone designs anything, the owner&apos;s conditions for
            satisfaction go on paper, each written so it can be answered yes
            or no. A gate closes when every condition it carries is checked,
            not when the calendar says so, and the design can&apos;t pass it
            until then. The same conditions carry across the handoff into
            construction.
          </p>
        </PageShell>
      </section>

      <section style={{ background: "var(--bg)", padding: "88px 24px" }}>
        <PageShell>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "48px",
              maxWidth: "760px",
            }}
          >
            {sections.map((s) => (
              <div key={s.heading}>
                <h2
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.8125rem",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "var(--text-secondary)",
                    marginBottom: "12px",
                  }}
                >
                  {s.heading}
                </h2>
                <p
                  style={{
                    fontSize: "1rem",
                    color: "var(--text-primary)",
                    lineHeight: 1.75,
                  }}
                >
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </PageShell>
      </section>

      <section
        style={{
          background: "var(--bg)",
          padding: "80px 24px 104px",
          borderTop: "1px solid var(--rule-strong)",
          textAlign: "center",
        }}
      >
        <div className="max-w-xl mx-auto">
          <a
            href="https://cal.com/chriseverist/vdc-structural-diagnostic"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.8125rem",
              fontWeight: 700,
              letterSpacing: "0.07em",
              textTransform: "uppercase",
              padding: "15px 32px",
              background: "var(--fg)",
              color: "var(--bg)",
              borderRadius: "2px",
              border: "1px solid var(--fg)",
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            Start with a diagnostic conversation
          </a>
        </div>
      </section>
    </>
  );
}

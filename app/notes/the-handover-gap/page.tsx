import Link from "next/link";
import PageShell from "@/components/layout/PageShell";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "The Handover Gap",
  description:
    "Why building data expires after handover — and what the organizations that avoid it do differently.",
  path: "/notes/the-handover-gap",
});

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

export default function TheHandoverGapPage() {
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
            Notes · 07
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
            The Handover Gap
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
          <div style={sceneStyle}>
            <p style={bodyParaStyle}>
              The files landed on a Thursday afternoon. Drawings, schedules, equipment records. A model
              of the building as it was built. Someone from the project team walked the facilities
              director through the folder structure. The meeting lasted forty-five minutes.
            </p>
            <p style={bodyParaStyle}>
              Then everyone went back to work, and nobody was quite sure what to do with what they&apos;d
              received.
            </p>
            <p style={bodyParaStyle}>
              I&apos;ve been in that room. Not always on Thursday. But the meeting is always the same.
              Delivery is on schedule. The project is marked complete. And the model starts drifting from
              the building the moment the door closes.
            </p>
          </div>

          <div style={{ marginTop: "56px" }}>
            <div style={sceneStyle}>
              <p style={bodyParaStyle}>
                The pharmaceutical facility was different. I was part of that one from the beginning, and
                the first thing we did was set aside the specification.
              </p>
              <p style={bodyParaStyle}>Not because it was wrong. Because nobody had explained what it was for.</p>
              <p style={bodyParaStyle}>
                We met twice a week with the facilities leadership team. Not to present. To understand.
                They were overwhelmed by what they&apos;d been handed on previous projects — standards no
                one could maintain, data organized for the people who built the building rather than the
                people who ran it. So we asked a different question: what operational waste are you
                actually trying to eliminate?
              </p>
              <p style={bodyParaStyle}>
                The specification came out of those conversations. It looked different from what
                we&apos;d started with.
              </p>
              <p style={bodyParaStyle}>
                When the project closed, they hired someone to maintain the database. Not because a
                contract required it. Because by that point, ownership was obvious. There was a person, a
                scope, a reason the data existed.
              </p>
              <p style={bodyParaStyle}>The model became part of how the building was managed.</p>
            </div>
          </div>

          <div style={{ marginTop: "56px" }}>
            <div style={sceneStyle}>
              <p style={bodyParaStyle}>I&apos;ve also seen the other version.</p>
              <p style={bodyParaStyle}>
                A global organization. A well-designed, executive-backed specification for exactly the
                same problem. The model was accurate. The effort was genuine.
              </p>
              <p style={bodyParaStyle}>
                The site team hadn&apos;t shaped it. They knew it existed. They weren&apos;t sure what the
                data was actually for. When the project closed and friction appeared, they went back to
                spreadsheets. Not out of resistance. Out of gravity.
              </p>
              <p style={bodyParaStyle}>The enterprise thought deployment was complete.</p>
              <p style={bodyParaStyle}>The site kept working in Excel.</p>
              <p style={bodyParaStyle}>The model sat on a server.</p>
            </div>
          </div>

          <div style={{ marginTop: "56px" }}>
            <div style={sceneStyle}>
              <p style={bodyParaStyle}>
                The difference wasn&apos;t the technology. Both cases had accurate models and executive
                sponsorship.
              </p>
              <p style={bodyParaStyle}>The difference was who owned the record before the files landed.</p>
              <p style={bodyParaStyle}>
                In the first case, that question had been answered explicitly — by the people who would
                have to live with the answer. In the second, it had been implied. Assumed. Left to resolve
                itself at handover.
              </p>
              <p style={bodyParaStyle}>It didn&apos;t.</p>
            </div>
          </div>

          <div style={{ marginTop: "56px" }}>
            <div style={sceneStyle}>
              <p style={bodyParaStyle}>
                This isn&apos;t new. A checklist written for building owners in 2008 named data ownership
                and governance structure as explicit requirements — not recommendations. In 2015, a
                portfolio owner funded a person whose entire job was to maintain the accuracy of their
                building database. Not to operate the facilities. To own the record.
              </p>
              <p style={bodyParaStyle}>
                Both predate most of the platforms currently being sold as solutions.
              </p>
              <p style={bodyParaStyle}>The problem they were pointing at is still the same one.</p>
            </div>
          </div>

          <div style={{ marginTop: "56px" }}>
            <div style={sceneStyle}>
              <blockquote
                style={{
                  borderLeft: "3px solid var(--accent)",
                  paddingLeft: "24px",
                  margin: "8px 0",
                  fontStyle: "italic",
                  color: "var(--text-secondary)",
                  fontSize: "1.0625rem",
                  lineHeight: 1.7,
                }}
              >
                The question worth asking before the files land: who in your organization is responsible
                for this data six months from now?
              </blockquote>
              <p style={bodyParaStyle}>Not who will receive it. Who will own it.</p>
              <p style={bodyParaStyle}>
                If you can&apos;t name that person today, you&apos;re not delivering an asset. You&apos;re
                delivering something that will quietly expire.
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

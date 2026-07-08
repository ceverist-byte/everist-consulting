import Link from "next/link";
import type { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "Products, Not Projects — Everist Consulting",
  description:
    "A serial builder who runs a portfolio as disconnected projects has built a system that cannot improve. Stabilize before you scale.",
};

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

export default function ProductsNotProjectsPage() {
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
            Notes · 08
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
            Products, Not Projects
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
          {/* Intro */}
          <div style={sceneStyle}>
            <p style={bodyParaStyle}>Every serial builder has an ambition that never quite arrives.</p>
            <p style={bodyParaStyle}>
              Prefab at scale. A digital handover that someone actually opens. Buildings that get faster
              instead of starting over. The intent is real. The budget is usually there. And then building
              seven comes in looking a lot like building one — delivered by people relearning what the last
              team already knew.
            </p>
            <p style={bodyParaStyle}>
              Ask why, and you&apos;ll hear about the tools. The market. This particular GC.
            </p>
            <p style={bodyParaStyle}>
              The real reason is quieter. Nothing carries. You run each building as its own project, so
              each building starts from scratch, and a thing that starts from scratch every time cannot get
              better.
            </p>
          </div>

          {/* The weeds */}
          <div style={{ marginTop: "56px" }}>
            <h2 style={h2Style}>The weeds</h2>
            <div style={sceneStyle}>
              <p style={bodyParaStyle}>
                Three things go wrong. They&apos;re the same thing wearing different clothes.
              </p>
              <p style={bodyParaStyle}>
                The lessons don&apos;t stick — every project pays again for what the last one already
                learned. The knowledge dies at the handover — the closeout binder no one opens, the model
                gone stale by spring, the team scattered the week the doors open. And the authority resets —
                new building, new GC, new design team, and everything you&apos;d figured out about how you
                build gets argued from zero all over again.
              </p>
              <p style={bodyParaStyle}>
                That&apos;s the mud. And here&apos;s the part worth sitting with: you don&apos;t get out by
                working harder down in it. You get out by not starting there every time.
              </p>
            </div>
          </div>

          {/* Stabilize before you scale */}
          <div style={{ marginTop: "56px" }}>
            <h2 style={h2Style}>Stabilize before you scale</h2>
            <div style={sceneStyle}>
              <p style={bodyParaStyle}>
                This is a borrowed idea. It comes from the factory floor, and it&apos;s older than any of
                us.
              </p>
              <p style={bodyParaStyle}>
                You can&apos;t scale something that isn&apos;t stable. Push more volume, more speed, more
                sophistication onto a shaky process and you don&apos;t get improvement. You get the same
                breakage, faster and more expensive.
              </p>
              <p style={bodyParaStyle}>
                A portfolio of disconnected projects is shaky by design. There&apos;s no baseline to build
                on, because the baseline gets thrown out and rebuilt every time. So the innovation push
                stalls — not because the ambition was wrong, but because it came in the wrong order. You
                reached for scale before you had anything stable to scale from.
              </p>
              <p style={bodyParaStyle}>
                Product, not project, is just fixing that order. You treat the way you build as the thing
                you&apos;re building. The standard that stays. The requirements that carry forward. The
                accountability that doesn&apos;t evaporate when the next GC signs.
              </p>
              <p style={bodyParaStyle}>
                Then building seven starts on the ground building six left standing. That&apos;s stability.
                Everything you wanted was waiting on the other side of it.
              </p>
            </div>
          </div>

          {/* The empty seat */}
          <div style={{ marginTop: "56px" }}>
            <h2 style={h2Style}>The empty seat</h2>
            <div style={sceneStyle}>
              <p style={bodyParaStyle}>Which leaves one question.</p>
              <p style={bodyParaStyle}>
                Across the whole portfolio — not one job, all of them — who owns the thing that carries what
                works from one building to the next?
              </p>
              <p style={bodyParaStyle}>
                Reach for the answer and watch it slip. The GC owns his project and leaves. The program
                manager owns schedule and budget, not the model. The last consultant owned a deliverable
                that shipped and closed. Every one of them is tied to a project. Every one resets when the
                project ends.
              </p>
              <p style={bodyParaStyle}>
                So no one owns it. Not because anyone dropped it — because the seat was never filled. It
                sits empty by default.
              </p>
              <p style={bodyParaStyle}>
                Leave it empty and you&apos;ve chosen projects over product without ever deciding to. The
                buildings still go up. They just never get any better.
              </p>
            </div>
          </div>

          {/* Closing */}
          <div style={{ marginTop: "56px" }}>
            <div style={sceneStyle}>
              <p style={bodyParaStyle}>
                <em>
                  If you build the same kind of thing more than once, the way you build it is the asset.
                  The only question is who owns it.
                </em>
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

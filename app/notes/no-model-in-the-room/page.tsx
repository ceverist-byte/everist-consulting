import Link from "next/link";
import PageShell from "@/components/layout/PageShell";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "No Model in the Room",
  description:
    "A coordination session with no 3D model — and what the problem-solving that happened anyway revealed about where governance actually lives.",
  path: "/notes/no-model-in-the-room",
});

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

export default function NoModelInTheRoomPage() {
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
            Notes · 05
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
            No Model in the Room
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
          <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "680px" }}>
            <p style={bodyParaStyle}>
              Most of the coordination I do runs on a shared 3D model — one thing the whole team gathers
              around on a set rhythm, where the conflicts surface in coordinated form and get worked in order.
              This session had none of that. The team had chosen not to build one. So the work happened the
              old way: a room, a lot of talking, a 2D markup, a sketch on someone&apos;s phone, an email.
            </p>
            <p style={bodyParaStyle}>
              And I have to be honest about what I watched, because it surprised me. It was potent. The
              problem got solved. The men who install the work knew the building in their hands — one said the
              whole thing was already worked out, in his head, and I believed him without a pause; another,
              about a different snag, said that nothing&apos;s unfixable, it just costs a tiny bit, which was
              the truest sentence anyone said all day. They talked it through, marked it up, and drew the
              option they wanted on a phone.
            </p>
            <p style={bodyParaStyle}>
              What the room didn&apos;t do was narrow. It opened. One way to route it, then a second, then a
              third, and somewhere a fourth nobody had named yet. The options multiplied faster than we closed
              them, and an old feeling came back — the same one I&apos;ve carried since I was young enough to
              stand at a permit counter wondering where the checklist was.{" "}
              <em>Where is governance, when there are this many ways to go?</em>
            </p>
            <p style={bodyParaStyle}>
              It did converge, eventually, though not in the room and not on anyone&apos;s agenda. The sketch
              from the phone got emailed to an engineer who wasn&apos;t there. Days later he wrote back: this
              works, with two conditions. One sized the run so the clearance that had been choking the tight
              corridor stopped governing. The other moved the hard part up onto the roof, under rules that
              have nothing to do with the corridor we&apos;d stared at all day. The problem didn&apos;t
              disappear — it moved to where it could be answered. And the decision that closed weeks of
              deliberation arrived in an email from a man who had never seen the room.
            </p>
            <p style={bodyParaStyle}>
              That is what the day taught me, and it took the missing model to see it. The problem-solving
              was never in the model. It lives in the people — their hands, their talk, a hunch drawn on a
              phone. A model has never solved anything. What a model and its rhythm of meetings actually do is
              govern that solving: surface the options in order, hold the discourse in one place, and keep the
              decision that closes it from depending on the right email reaching the one person who happened
              not to be in the room. Take the model away and the solving was every bit as potent — and far
              harder to govern.
            </p>
            <p style={bodyParaStyle}>
              I&apos;ve spent a career trading one tool for the next and watching the same work outlast every
              one of them. I used to wonder what we were buying when we bought the tool. This is the closest
              I&apos;ve come to an answer. Not the problem-solving — that was never for sale; the people
              already own it. We were buying the structure that governs it. The model is just the most
              legible place to keep that structure. Take it away and the structure doesn&apos;t vanish. It
              scatters — into talk, and sketches, and an email nobody planned.
            </p>
            <p style={bodyParaStyle}>
              A guest will sleep in one of those rooms some night years from now and rest the whole night
              through, because a duct didn&apos;t buzz against a beam at three in the morning. They&apos;ll
              never know it came down to a sketch on a phone and a reply from a man who never saw the room.
              It held this time. Whether it holds every time — and not just when the people are this good —
              is what governance is for.
            </p>
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
              Who owns the coordination schedule, and what happens to the project if they miss it?
            </blockquote>
            <p style={bodyParaStyle}>
              The model never answered that question. A person does. The structure only makes sure you can
              see them.
            </p>
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

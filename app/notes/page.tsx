import Link from "next/link";
import type { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "Notes — Everist Consulting",
  description:
    "Notes on VDC governance, coordination, and operating model design from Christopher Everist and Everist Consulting.",
};

const notes = [
  {
    number: "Note 06",
    title: "You Became the Wire",
    description:
      "Run more than two or three LLM chats at once and you become the integration layer — the wire shuttling context between sessions that can't see each other. The fix isn't a bigger tool.",
    href: "/notes/you-became-the-wire",
  },
  {
    number: "Note 05",
    title: "No Model in the Room",
    description:
      "Most coordination runs on a shared model. This one didn't — and what got solved anyway showed what the model was actually for.",
    href: "/notes/no-model-in-the-room",
  },
  {
    number: "Note 04",
    title: "The Red Pencil",
    description:
      "Blueprints, redlines, and a stamp that never carried my name. The platforms changed for twenty years; the cycles survived every one. What were we buying when we bought the tool?",
    href: "/notes/the-red-pencil",
  },
  {
    number: "Note 03",
    title: "We Said Modernize. Nothing Moved.",
    description:
      "A friend with thirty years in the field asked what governance was, and the clean answer wouldn't come. The honest one — whether the decision survives the room it was made in, and why the hero on the hard job is the symptom, not the save.",
    href: "/notes/we-said-modernize-nothing-moved",
  },
  {
    number: "Note 02",
    title: "Governance Is Not a Document",
    description:
      "A coordination plan can name every risk, assign every owner, and still change nothing. The missing piece isn't a better plan — it's who's allowed to decide.",
    href: "/notes/governance-is-not-a-document",
  },
  {
    number: "Note 01",
    title: "The Coordination Window",
    description:
      "The period before installation when changes are still cheap to make. Why no one is watching it, and what protected looks like.",
    href: "/notes/the-coordination-window",
  },
];

export default function NotesPage() {
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
            Notes
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
            Published thinking.
          </h1>
        </PageShell>
      </section>

      {/* Divider */}
      <PageShell>
        <div style={{ height: "1px", background: "var(--rule)" }} />
      </PageShell>

      {/* Notes listing */}
      <section
        style={{
          background: "var(--bg)",
          padding: "80px 24px",
        }}
      >
        <PageShell>
          {notes.map((note, idx) => (
            <div key={note.href}>
              {idx > 0 && (
                <div
                  style={{
                    height: "1px",
                    background: "var(--rule)",
                    margin: "40px 0",
                  }}
                />
              )}
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
                  {note.number}
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
                    {note.title}
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
                    {note.description}
                  </p>
                  <Link
                    href={note.href}
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
                    <span style={{ color: "var(--accent)" }}>Read the note</span>{" "}
                    →
                  </Link>
                </div>
              </div>
            </div>
          ))}
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
            href="/"
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
            ← <span style={{ color: "var(--accent)" }}>Home</span>
          </Link>
        </PageShell>
      </section>
    </>
  );
}

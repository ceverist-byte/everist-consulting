import Link from "next/link";
import PageShell from "@/components/layout/PageShell";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Notes",
  description:
    "Notes on VDC governance, coordination, and operating model design from Christopher Everist and Everist Consulting.",
  path: "/notes",
});

const notes = [
  {
    number: "Note 11",
    title: "Seeing Is Not Standing",
    description:
      "Why the people who see a problem first are rarely the people with the standing to fix it.",
    href: "/notes/seeing-is-not-standing",
  },
  {
    number: "Note 10",
    title: "The Questions Nobody Routed",
    description:
      "A model surfaces questions. Whether any of them bind depends on a job nobody staffed.",
    href: "/notes/the-questions-nobody-routed",
  },
  {
    number: "Note 09",
    title: "The Staff Is a Library",
    description:
      "What happens when you run a solo practice through a book about removing yourself from your business — and discover most of the work was already written down.",
    href: "/notes/the-staff-is-a-library",
  },
  {
    number: "Note 08",
    title: "Products, Not Projects",
    description:
      "A serial builder who runs a portfolio as disconnected projects has built a system that cannot improve. Stabilize before you scale.",
    href: "/notes/products-not-projects",
  },
  {
    number: "Note 07",
    title: "The Handover Gap",
    description:
      "Why building data expires after handover — and what the organizations that avoid it do differently.",
    href: "/notes/the-handover-gap",
  },
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

      {/* Notes by email */}
      <section
        style={{
          background: "var(--bg)",
          borderTop: "1px solid var(--rule-strong)",
          padding: "80px 24px",
        }}
      >
        <PageShell>
          <div className="eyebrow" style={{ display: "block", marginBottom: "20px" }}>
            Notes by Email
          </div>
          <h2
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              fontWeight: 800,
              letterSpacing: "-0.025em",
              color: "var(--text-primary)",
              marginBottom: "12px",
              lineHeight: 1.15,
              maxWidth: "640px",
            }}
          >
            New notes when they publish.
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: "var(--text-primary)",
              lineHeight: 1.7,
              marginBottom: "24px",
              maxWidth: "560px",
            }}
          >
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
                  background: "var(--bg)",
                  border: "1px solid var(--rule-strong)",
                  borderRadius: "3px",
                  color: "var(--text-primary)",
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.9375rem",
                  padding: "12px 14px",
                  outline: "none",
                }}
              />
              <button
                type="submit"
                style={{
                  background: "var(--fg)",
                  border: "1px solid var(--fg)",
                  borderRadius: "3px",
                  color: "var(--bg)",
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
            <p style={{ marginTop: "10px", fontSize: "0.75rem", color: "var(--text-secondary)" }}>
              <a
                href="https://buttondown.com/refer/EveristConsulting"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--text-secondary)", textDecoration: "none" }}
              >
                Powered by Buttondown
              </a>
            </p>
          </form>
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

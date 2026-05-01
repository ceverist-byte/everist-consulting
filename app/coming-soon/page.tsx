import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Everist Consulting",
  description: "VDC operating model design for general contractors and owner-side capital programs.",
};

export default function ComingSoon() {
  return (
    <main style={{
      background: "#F3F0EA",
      color: "#111111",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "60px 24px",
      fontFamily: "'Inter Tight', 'Inter', 'Helvetica Neue', Arial, sans-serif",
    }}>
      <div style={{ maxWidth: "600px", width: "100%" }}>

        <div style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: "36px",
          height: "36px",
          border: "1px solid #8A642C",
          color: "#8A642C",
          fontSize: "0.6875rem",
          fontWeight: 700,
          letterSpacing: "0.08em",
          marginBottom: "64px",
        }}>EC</div>

        <h1 style={{
          fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
          fontWeight: 800,
          letterSpacing: "-0.04em",
          lineHeight: 1.1,
          color: "#111111",
          marginBottom: "64px",
          maxWidth: "560px",
        }}>
          &ldquo;Who owns the coordination schedule, and what happens to the project if they miss it?&rdquo;
        </h1>

        <p style={{
          fontSize: "1rem",
          color: "#4F4A43",
          lineHeight: 1.75,
          marginBottom: "24px",
          letterSpacing: "-0.01em",
        }}>
          A good answer is immediate. One name, one role, one consequence. If your GC gave you that, you&apos;re governed.
        </p>

        <p style={{
          fontSize: "1rem",
          color: "#4F4A43",
          lineHeight: 1.75,
          marginBottom: "24px",
          letterSpacing: "-0.01em",
        }}>
          If they didn&apos;t, the gap isn&apos;t in their competence. It&apos;s in how the project is structured — and that&apos;s fixable, but only before the window closes.
        </p>

        <p style={{
          fontSize: "1rem",
          color: "#4F4A43",
          lineHeight: 1.75,
          marginBottom: "64px",
          letterSpacing: "-0.01em",
        }}>
          Here&apos;s what the next step looks like: three to five weeks, structured conversations with your project team, a clear map of where decisions are made and where they aren&apos;t. You walk away with something specific enough to act on and plain enough to present to your board.
        </p>

        <div style={{
          borderTop: "1px solid #D8D4CB",
          paddingTop: "40px",
        }}>
          <p style={{
            fontSize: "1rem",
            marginBottom: "16px",
          }}>
            <a href="mailto:chris@everistconsulting.com" style={{
              color: "#8A642C",
              textDecoration: "none",
              fontWeight: 700,
              letterSpacing: "-0.01em",
            }}>chris@everistconsulting.com</a>
          </p>
          <p style={{ fontSize: "0.9375rem", color: "#4F4A43", lineHeight: 1.9, letterSpacing: "-0.01em" }}>
            The conversation is free.<br/>
            The diagnosis takes three weeks.<br/>
            The alternative is finding out during construction.
          </p>
        </div>

      </div>
    </main>
  );
}

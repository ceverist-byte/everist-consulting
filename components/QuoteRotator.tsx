"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const quotes = [
  {
    text: "The platforms changed for twenty years. The cycles didn't.",
    label: "Note 04",
    href: "/notes/the-red-pencil",
  },
  {
    text: "Governance is whether the decision survives the room it was made in.",
    label: "Note 03",
    href: "/notes/we-said-modernize-nothing-moved",
  },
  {
    text: "You're buying the right to change design before it's built. That right expires without notice.",
    label: "Note 01",
    href: "/notes/the-coordination-window",
  },
  {
    text: "If you build the same kind of thing more than once, the way you build it is the asset.",
    label: "Note 08",
    href: "/notes/products-not-projects",
  },
  {
    text: "Who owns this data six months from now? Not who receives it. Who owns it.",
    label: "Note 07",
    href: "/notes/the-handover-gap",
  },
  {
    text: "This industry has spent decades building better ways to see problems early, and almost no time deciding whose job it is to act on what gets seen.",
    label: "Note 10",
    href: "/notes/the-questions-nobody-routed",
  },
];

export default function QuoteRotator() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;
    const id = setInterval(() => {
      setActive((n) => (n + 1) % quotes.length);
    }, 8000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      aria-label="From the notes"
      style={{
        background: "var(--bg)",
        borderTop: "1px solid var(--rule-strong)",
        borderBottom: "1px solid var(--rule-strong)",
        padding: "28px 0",
      }}
    >
      <div style={{ maxWidth: "1120px", margin: "0 auto", padding: "0 24px" }}>
        <div
          style={{
            position: "relative",
            minHeight: "3.4em",
            display: "flex",
            alignItems: "center",
          }}
        >
          {quotes.map((q, i) => (
            <Link
              key={q.href}
              href={q.href}
              aria-hidden={i !== active}
              tabIndex={i === active ? 0 : -1}
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                gap: "12px",
                flexWrap: "wrap",
                textDecoration: "none",
                opacity: i === active ? 1 : 0,
                pointerEvents: i === active ? "auto" : "none",
                transition: "opacity 0.8s ease",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "clamp(1.0625rem, 1.9vw, 1.375rem)",
                  fontWeight: 500,
                  lineHeight: 1.35,
                  letterSpacing: "-0.015em",
                  color: "var(--text-primary)",
                }}
              >
                &ldquo;{q.text}&rdquo;
              </span>
              <span
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  whiteSpace: "nowrap",
                }}
              >
                {q.label} &rarr;
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

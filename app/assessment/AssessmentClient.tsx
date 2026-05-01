"use client";

import { useState } from "react";
import QuizEngine from "@/components/QuizEngine";
import { VDC_QUIZ, AI_QUIZ } from "@/lib/quiz-vdc";

type Track = "vdc" | "ai";

export default function AssessmentClient() {
  const [activeTrack, setActiveTrack] = useState<Track>("vdc");
  const [quizStarted, setQuizStarted] = useState(false);

  // When user switches track, reset quiz state
  function switchTrack(t: Track) {
    if (t === activeTrack) return;
    setActiveTrack(t);
    setQuizStarted(false);
  }

  const tracks = [
    {
      id: "vdc" as Track,
      label: "VDC Archetype Finder",
      description:
        "For GC leaders, VDC directors, and operations executives. Map your organizational structure against the 4-archetype model.",
      questions: 12,
      primary: true,
    },
    {
      id: "ai" as Track,
      label: "AI Adoption Assessment",
      description:
        "For owner-side capital programs, GC innovation leads, and technology executives. Benchmark AI readiness across 5 domains.",
      questions: 15,
      primary: false,
    },
  ];

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", paddingTop: "48px" }}>
      {/* Track selector */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "12px",
          marginBottom: "48px",
        }}
      >
        {tracks.map((t) => (
          <button
            key={t.id}
            onClick={() => switchTrack(t.id)}
            style={{
              background:
                activeTrack === t.id
                  ? "transparent"
                  : "transparent",
              border:
                activeTrack === t.id
                  ? "1px solid var(--fg)"
                  : "1px solid var(--rule)",
              borderRadius: "2px",
              padding: "24px 24px 20px",
              cursor: "pointer",
              textAlign: "left",
              transition: "background 0.15s, border-color 0.15s",
            }}
          >
            {t.primary && (
              <div
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.5625rem",
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  marginBottom: "8px",
                }}
              >
                Primary Track
              </div>
            )}
            <div
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "1rem",
                fontWeight: 700,
                color: activeTrack === t.id ? "var(--text-primary)" : "var(--text-secondary)",
                marginBottom: "8px",
                letterSpacing: "-0.01em",
                transition: "color 0.15s",
              }}
            >
              {t.label}
            </div>
            <p
              style={{
                fontSize: "0.8125rem",
                color: activeTrack === t.id ? "var(--text-secondary)" : "var(--text-secondary)",
                lineHeight: 1.6,
                marginBottom: "12px",
                transition: "color 0.15s",
              }}
            >
              {t.description}
            </p>
            <span
              style={{
                fontSize: "0.75rem",
                color: activeTrack === t.id ? "var(--accent)" : "var(--text-secondary)",
                fontFamily: "var(--font-sans)",
                fontWeight: 600,
                letterSpacing: "0.06em",
                transition: "color 0.15s",
              }}
            >
              {t.questions} questions · 5 min
            </span>
          </button>
        ))}
      </div>

      {/* Active quiz */}
      <QuizEngine
        key={activeTrack} // remount on track switch to reset state
        track={activeTrack === "vdc" ? VDC_QUIZ : AI_QUIZ}
      />

      {/* Framing copy below */}
      <div
        style={{
          marginTop: "64px",
          paddingTop: "48px",
          borderTop: "1px solid var(--rule)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "32px",
        }}
      >
        {[
          {
            label: "Grounded in practice",
            text: "These questions are a structured version of the 30-minute VDC Structural Diagnostic — the same framework used in live discovery calls.",
          },
          {
            label: "No benchmark theater",
            text: "Your result is an archetype identification, not a score compared to anonymous peers. The goal is clarity about structure, not a ranking.",
          },
          {
            label: "What happens next",
            text: "You'll receive a tailored report by email. If the diagnosis resonates, the next step is a 30-minute call to map the structural gap in detail.",
          },
        ].map((c) => (
          <div key={c.label}>
            <div
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.625rem",
                fontWeight: 700,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--accent)",
                marginBottom: "8px",
              }}
            >
              {c.label}
            </div>
            <p
              style={{
                fontSize: "0.875rem",
                color: "var(--text-secondary)",
                lineHeight: 1.7,
              }}
            >
              {c.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

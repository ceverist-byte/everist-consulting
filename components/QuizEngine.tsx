"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { QuizTrack } from "@/lib/quiz-vdc";
import { computeArchetype, ARCHETYPES, ArchetypeId } from "@/lib/archetypes";
import { computeAITier, AI_TIERS } from "@/lib/quiz-vdc";

type QuizState = "intro" | "quiz" | "result";

interface Props {
  track: QuizTrack;
}

const btnPrimary: React.CSSProperties = {
  fontFamily: "var(--font-syne)",
  fontSize: "0.8125rem",
  fontWeight: 700,
  letterSpacing: "0.07em",
  textTransform: "uppercase",
  padding: "14px 28px",
  background: "#c1914b",
  color: "#0f1117",
  borderRadius: "6px",
  border: "none",
  cursor: "pointer",
  display: "inline-block",
  transition: "background 0.15s",
  textDecoration: "none",
};

const btnGhost: React.CSSProperties = {
  fontFamily: "var(--font-dm-sans)",
  fontSize: "0.875rem",
  fontWeight: 400,
  padding: "14px 24px",
  background: "transparent",
  border: "1px solid rgba(240,236,228,0.14)",
  color: "#9a9590",
  borderRadius: "6px",
  cursor: "pointer",
  display: "inline-block",
};

function ProgressBar({ current, total }: { current: number; total: number }) {
  return (
    <div style={{ display: "flex", gap: "3px", marginBottom: "36px" }}>
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className={`progress-segment ${i < current ? "done" : i === current ? "active" : ""}`}
        />
      ))}
    </div>
  );
}

function QuestionCard({
  question, qIndex, total, selected, onSelect, onNext, onBack,
}: {
  question: QuizTrack["questions"][0];
  qIndex: number; total: number;
  selected: string | undefined;
  onSelect: (label: string) => void;
  onNext: () => void; onBack: () => void;
}) {
  return (
    <div>
      <ProgressBar current={qIndex} total={total} />
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
        <span style={{ fontFamily: "var(--font-syne)", fontSize: "0.625rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "#c1914b" }}>
          {question.domain}
        </span>
        <span style={{ fontSize: "0.8125rem", color: "#6b6762" }}>{qIndex + 1} / {total}</span>
      </div>
      <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(1.0625rem, 2.5vw, 1.3125rem)", fontWeight: 700, color: "#f0ece4", lineHeight: 1.35, letterSpacing: "-0.01em", marginBottom: question.subtext ? "10px" : "28px" }}>
        {question.question}
      </h2>
      {question.subtext && (
        <p style={{ fontSize: "0.875rem", color: "#6b6762", lineHeight: 1.6, marginBottom: "24px", fontStyle: "italic" }}>
          {question.subtext}
        </p>
      )}
      <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "32px" }}>
        {question.options.map((opt) => {
          const sel = selected === opt.label;
          return (
            <button key={opt.label} onClick={() => onSelect(opt.label)}
              style={{ display: "flex", alignItems: "flex-start", gap: "14px", padding: "16px 18px", border: sel ? "1px solid rgba(240,236,228,0.4)" : "1px solid rgba(240,236,228,0.08)", borderRadius: "8px", background: sel ? "rgba(240,236,228,0.05)" : "transparent", cursor: "pointer", textAlign: "left", width: "100%", transition: "border-color 0.12s, background 0.12s" }}>
              <span style={{ fontFamily: "var(--font-syne)", fontSize: "0.6875rem", fontWeight: 700, color: sel ? "#c1914b" : "#6b6762", minWidth: "18px", paddingTop: "2px", letterSpacing: "0.06em" }}>{opt.label}</span>
              <span style={{ fontSize: "0.9rem", color: sel ? "#f0ece4" : "#9a9590", lineHeight: 1.55 }}>{opt.text}</span>
            </button>
          );
        })}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <button onClick={onBack} style={{ ...btnGhost, padding: "12px 20px" }} disabled={qIndex === 0}>← Back</button>
        <button onClick={onNext} disabled={!selected}
          style={{ ...btnPrimary, opacity: selected ? 1 : 0.4, cursor: selected ? "pointer" : "not-allowed" }}>
          {qIndex === total - 1 ? "See My Results →" : "Next →"}
        </button>
      </div>
    </div>
  );
}

// Optional post-result email capture — no gate, completely voluntary
function EmailOffer({ resultName, trackId }: { resultName: string; trackId: string }) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "done">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setState("sending");
    try {
      await fetch("/api/quiz-results", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, quizTrack: trackId, resultName }),
      });
    } catch { /* silently succeed */ }
    setState("done");
  }

  if (state === "done") {
    return <p style={{ fontSize: "0.8125rem", color: "#4bc191", textAlign: "center", padding: "12px 0" }}>Done — check your inbox.</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <p style={{ fontSize: "0.8125rem", color: "#6b6762", marginBottom: "12px", textAlign: "center", lineHeight: 1.6 }}>
        Want a copy of your results sent to you?
      </p>
      <div style={{ display: "flex", gap: "8px" }}>
        <input type="email" placeholder="Work email" value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ flex: 1, background: "rgba(240,236,228,0.04)", border: "1px solid rgba(240,236,228,0.12)", borderRadius: "6px", padding: "11px 14px", fontSize: "0.875rem", color: "#f0ece4", outline: "none", fontFamily: "var(--font-dm-sans)" }}
          onFocus={(e) => (e.target.style.borderColor = "rgba(193,145,75,0.5)")}
          onBlur={(e) => (e.target.style.borderColor = "rgba(240,236,228,0.12)")}
        />
        <button type="submit" disabled={state === "sending"}
          style={{ ...btnPrimary, padding: "11px 18px", fontSize: "0.75rem", flexShrink: 0, opacity: state === "sending" ? 0.6 : 1 }}>
          {state === "sending" ? "..." : "Send"}
        </button>
      </div>
    </form>
  );
}

function ResultCard({ accent, badgeText, title, orgPosition, tagline, sections, cta, trackId, resultName }: {
  accent: { bg: string; border: string; text: string };
  badgeText: string; title: string; orgPosition?: string; tagline: string;
  sections: { label: string; content: string | string[]; usAccent?: boolean }[];
  cta: { heading: string; body: string };
  trackId: string; resultName: string;
}) {
  return (
    <div>
      <div style={{ textAlign: "center", marginBottom: "28px" }}>
        <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "7px 16px", background: accent.bg, border: `1px solid ${accent.border}`, borderRadius: "100px", fontFamily: "var(--font-syne)", fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: accent.text }}>
          {badgeText}
        </span>
      </div>
      {orgPosition && (
        <div style={{ fontFamily: "var(--font-syne)", fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#6b6762", textAlign: "center", marginBottom: "8px" }}>
          {orgPosition}
        </div>
      )}
      <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 800, color: "#f0ece4", letterSpacing: "-0.025em", textAlign: "center", marginBottom: "8px", lineHeight: 1.1 }}>
        {title}
      </h2>
      <p style={{ fontSize: "0.9375rem", color: "#9a9590", textAlign: "center", fontStyle: "italic", marginBottom: "36px" }}>{tagline}</p>

      {sections.map((s) => (
        <div key={s.label} style={{ background: s.usAccent ? accent.bg : "rgba(240,236,228,0.03)", border: `1px solid ${s.usAccent ? accent.border : "rgba(240,236,228,0.08)"}`, borderRadius: "10px", padding: "28px", marginBottom: "20px" }}>
          <div style={{ fontFamily: "var(--font-syne)", fontSize: "0.625rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: s.usAccent ? accent.text : "#6b6762", marginBottom: "12px" }}>{s.label}</div>
          {Array.isArray(s.content) ? (
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
              {s.content.map((item) => (
                <li key={item} style={{ fontSize: "0.875rem", color: "#9a9590", lineHeight: 1.6, display: "flex", gap: "10px", alignItems: "flex-start" }}>
                  <span style={{ color: accent.text, flexShrink: 0, fontSize: "0.625rem", paddingTop: "4px" }}>▸</span>
                  {item}
                </li>
              ))}
            </ul>
          ) : (
            <p style={{ fontSize: "0.9375rem", color: "#9a9590", lineHeight: 1.7 }}>{s.content}</p>
          )}
        </div>
      ))}

      {/* Primary CTA */}
      <div style={{ background: "rgba(193,145,75,0.07)", border: "1px solid rgba(193,145,75,0.2)", borderRadius: "10px", padding: "28px", textAlign: "center", marginBottom: "16px" }}>
        <h3 style={{ fontFamily: "var(--font-syne)", fontSize: "1.125rem", fontWeight: 700, color: "#f0ece4", marginBottom: "10px", letterSpacing: "-0.01em" }}>{cta.heading}</h3>
        <p style={{ fontSize: "0.875rem", color: "#9a9590", lineHeight: 1.65, marginBottom: "20px", maxWidth: "380px", margin: "0 auto 20px" }}>{cta.body}</p>
        <Link href="/contact" style={btnPrimary}>Book the Structural Diagnostic →</Link>
      </div>

      {/* Optional email capture — zero friction, shown after results */}
      <div style={{ border: "1px solid rgba(240,236,228,0.06)", borderRadius: "10px", padding: "20px 24px" }}>
        <EmailOffer resultName={resultName} trackId={trackId} />
      </div>
    </div>
  );
}

export default function QuizEngine({ track }: Props) {
  const [state, setQuizState] = useState<QuizState>("intro");
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [vdcArchetype, setVdcArchetype] = useState<ArchetypeId | null>(null);
  const [aiTier, setAiTier] = useState<keyof typeof AI_TIERS | null>(null);

  const questions = track.questions;
  const totalQ = questions.length;
  const currentQuestion = questions[currentQ];

  const handleSelect = useCallback(
    (label: string) => setAnswers((prev) => ({ ...prev, [currentQuestion.id]: label })),
    [currentQuestion.id]
  );

  const handleNext = useCallback(() => {
    if (currentQ < totalQ - 1) {
      setCurrentQ((q) => q + 1);
    } else {
      // Compute and show result immediately — no email gate
      if (track.id === "vdc") setVdcArchetype(computeArchetype(answers));
      else setAiTier(computeAITier(answers));
      setQuizState("result");
    }
  }, [currentQ, totalQ, track.id, answers]);

  const handleBack = useCallback(() => {
    if (currentQ > 0) setCurrentQ((q) => q - 1);
  }, [currentQ]);

  const card = (children: React.ReactNode) => (
    <div style={{ background: "rgba(240,236,228,0.025)", border: "1px solid rgba(240,236,228,0.08)", borderRadius: "16px", padding: "clamp(28px, 5vw, 52px)", maxWidth: "680px", margin: "0 auto", width: "100%" }}>
      {children}
    </div>
  );

  if (state === "intro") {
    return card(
      <div style={{ textAlign: "center" }}>
        <div className="eyebrow" style={{ display: "block", marginBottom: "20px" }}>{track.subtitle}</div>
        <h1 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 800, color: "#f0ece4", letterSpacing: "-0.025em", marginBottom: "16px", lineHeight: 1.15 }}>{track.title}</h1>
        <p style={{ fontSize: "0.9375rem", color: "#9a9590", lineHeight: 1.7, marginBottom: "36px", maxWidth: "440px", margin: "0 auto 36px" }}>{track.description}</p>
        <div style={{ display: "flex", gap: "24px", justifyContent: "center", flexWrap: "wrap", marginBottom: "36px" }}>
          {[{ label: "Questions", value: `${totalQ}` }, { label: "Time", value: "5 min" }, { label: "Result", value: "Instant" }].map((s) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "var(--font-syne)", fontSize: "1.5rem", fontWeight: 800, color: "#c1914b", lineHeight: 1, marginBottom: "4px" }}>{s.value}</div>
              <div style={{ fontSize: "0.75rem", color: "#6b6762" }}>{s.label}</div>
            </div>
          ))}
        </div>
        <button onClick={() => setQuizState("quiz")} style={btnPrimary}>{track.ctaLabel} →</button>
      </div>
    );
  }

  if (state === "quiz") {
    return card(
      <QuestionCard question={currentQuestion} qIndex={currentQ} total={totalQ}
        selected={answers[currentQuestion.id]} onSelect={handleSelect}
        onNext={handleNext} onBack={handleBack} />
    );
  }

  if (state === "result") {
    if (track.id === "vdc" && vdcArchetype) {
      const a = ARCHETYPES[vdcArchetype];
      const accents: Record<ArchetypeId, { bg: string; border: string; text: string }> = {
        "1": { bg: "rgba(193,75,75,0.1)", border: "rgba(193,75,75,0.25)", text: "#e07070" },
        "2": { bg: "rgba(193,145,75,0.1)", border: "rgba(193,145,75,0.25)", text: "#c1914b" },
        "3": { bg: "rgba(75,145,193,0.1)", border: "rgba(75,145,193,0.25)", text: "#4b91c1" },
        "4": { bg: "rgba(75,193,145,0.1)", border: "rgba(75,193,145,0.25)", text: "#4bc191" },
      };
      return card(
        <ResultCard
          accent={accents[vdcArchetype]}
          badgeText={`${a.badgeLabel} · VDC Archetype Finder`}
          title={a.name} orgPosition={a.orgPosition} tagline={a.tagline}
          sections={[
            { label: "What this means", content: a.whatItMeans },
            { label: "Signals in your organization", content: a.signals, usAccent: true },
            { label: "The path forward", content: a.shiftPath },
          ]}
          cta={{ heading: "Ready to diagnose the structural gap?", body: "The 30-minute VDC Structural Diagnostic maps your actual decision authority against your stated expectations." }}
          trackId="vdc" resultName={a.name}
        />
      );
    }

    if (aiTier) {
      const t = AI_TIERS[aiTier];
      const tierAccents: Record<string, { bg: string; border: string; text: string }> = {
        foundational: { bg: "rgba(193,75,75,0.08)", border: "rgba(193,75,75,0.22)", text: "#e07070" },
        developing: { bg: "rgba(193,145,75,0.08)", border: "rgba(193,145,75,0.22)", text: "#c1914b" },
        advanced: { bg: "rgba(75,193,145,0.08)", border: "rgba(75,193,145,0.22)", text: "#4bc191" },
      };
      return card(
        <ResultCard
          accent={tierAccents[aiTier]}
          badgeText={`AI Adoption · ${t.name}`}
          title={t.name} tagline={t.tagline}
          sections={[
            { label: "What this means", content: t.description },
            { label: "Focus areas for your stage", content: t.focusAreas, usAccent: true },
          ]}
          cta={{ heading: "What comes next", body: t.nextStep }}
          trackId="ai" resultName={t.name}
        />
      );
    }
  }

  return null;
}

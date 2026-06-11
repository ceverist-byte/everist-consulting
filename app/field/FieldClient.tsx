"use client";

import { useState } from "react";
import { FIELD_QUESTIONS } from "./questions";

const inputBase: React.CSSProperties = {
  background: "var(--bg)",
  border: "1px solid var(--rule)",
  borderRadius: "2px",
  padding: "14px 15px",
  fontSize: "16px",
  lineHeight: 1.6,
  color: "var(--text-primary)",
  outline: "none",
  width: "100%",
  fontFamily: "var(--font-sans)",
};

const labelStyle: React.CSSProperties = {
  fontFamily: "var(--font-sans)",
  fontSize: "0.875rem",
  color: "var(--text-secondary)",
  letterSpacing: "0.01em",
};

function autoGrow(el: HTMLTextAreaElement) {
  el.style.height = "auto";
  el.style.height = `${el.scrollHeight}px`;
}

export default function FieldClient() {
  const [revealed, setRevealed] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [answers, setAnswers] = useState<string[]>(["", "", "", "", ""]);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [website, setWebsite] = useState(""); // spam control

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/field", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          a1: answers[0],
          a2: answers[1],
          a3: answers[2],
          a4: answers[3],
          a5: answers[4],
          website,
        }),
      });
      const data = await res.json().catch(() => null);
      if (res.ok && data && data.ok === true) {
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div>
      <p
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "clamp(1.6rem, 5.2vw, 2.5rem)",
          fontWeight: 500,
          lineHeight: 1.32,
          letterSpacing: "-0.02em",
          color: "var(--text-primary)",
        }}
      >
        Before a project reaches the field, is there a defined moment where
        someone surfaces and retires the constructability risk, and does that
        person have the authority to stop work until it is resolved?
      </p>

      <p
        style={{
          marginTop: "20px",
          fontSize: "1rem",
          lineHeight: 1.65,
          color: "var(--text-secondary)",
        }}
      >
        If you know the answer, the full assessment maps the structure that
        produced it.
      </p>

      {!revealed && status !== "sent" && (
        <button
          type="button"
          onClick={() => setRevealed(true)}
          style={{
            marginTop: "36px",
            fontFamily: "var(--font-sans)",
            fontSize: "16px",
            fontWeight: 700,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            padding: "16px 26px",
            background: "var(--fg)",
            color: "var(--bg)",
            borderRadius: "2px",
            border: "1px solid var(--fg)",
            cursor: "pointer",
            width: "100%",
          }}
        >
          Take the assessment
        </button>
      )}

      {status === "sent" ? (
        revealed && (
          <p
            style={{
              marginTop: "40px",
              fontSize: "1.0625rem",
              lineHeight: 1.6,
              color: "var(--text-primary)",
            }}
          >
            Received. You&apos;ll hear back if there&apos;s a fit.
          </p>
        )
      ) : (
        revealed && (
          <form onSubmit={handleSubmit} style={{ marginTop: "40px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
              {FIELD_QUESTIONS.map((q, i) => {
                const qid = `q${i + 1}`;
                return (
                  <div key={qid}>
                    <p
                      id={qid}
                      style={{
                        display: "flex",
                        gap: "12px",
                        fontSize: "1.0625rem",
                        lineHeight: 1.55,
                        color: "var(--text-primary)",
                        marginBottom: "12px",
                      }}
                    >
                      <span
                        style={{
                          color: "var(--accent)",
                          fontWeight: 700,
                          flexShrink: 0,
                        }}
                      >
                        {i + 1}.
                      </span>
                      <span>{q}</span>
                    </p>
                    <textarea
                      aria-labelledby={qid}
                      rows={3}
                      value={answers[i]}
                      onChange={(e) => {
                        const next = [...answers];
                        next[i] = e.target.value;
                        setAnswers(next);
                      }}
                      onInput={(e) => autoGrow(e.currentTarget)}
                      style={{ ...inputBase, resize: "none", overflow: "hidden" }}
                      onFocus={(e) => (e.target.style.borderColor = "var(--fg)")}
                      onBlur={(e) => (e.target.style.borderColor = "var(--rule)")}
                    />
                  </div>
                );
              })}

              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <label htmlFor="field-email" style={labelStyle}>
                    Email
                  </label>
                  <input
                    id="field-email"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={inputBase}
                    onFocus={(e) => (e.target.style.borderColor = "var(--fg)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--rule)")}
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <label htmlFor="field-name" style={labelStyle}>
                    Name (optional)
                  </label>
                  <input
                    id="field-name"
                    type="text"
                    autoComplete="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={inputBase}
                    onFocus={(e) => (e.target.style.borderColor = "var(--fg)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--rule)")}
                  />
                </div>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    lineHeight: 1.6,
                    color: "var(--text-secondary)",
                  }}
                >
                  Email required so a reply is possible. Name optional.
                </p>
              </div>

              {/* spam control */}
              <input
                type="text"
                name="website"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                aria-hidden="true"
                tabIndex={-1}
                autoComplete="off"
                style={{
                  position: "absolute",
                  left: "-9999px",
                  width: "1px",
                  height: "1px",
                  overflow: "hidden",
                }}
              />

              {status === "error" && (
                <p
                  style={{
                    fontSize: "0.9375rem",
                    lineHeight: 1.6,
                    color: "var(--text-primary)",
                  }}
                >
                  That didn&apos;t send. Email your answers to{" "}
                  <a
                    href="mailto:readiness@everistconsulting.com"
                    style={{ color: "var(--accent)" }}
                  >
                    readiness@everistconsulting.com
                  </a>
                  .
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "16px",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  padding: "16px 26px",
                  background:
                    status === "sending" ? "var(--text-secondary)" : "var(--fg)",
                  color: "var(--bg)",
                  borderRadius: "2px",
                  border: "1px solid var(--fg)",
                  cursor: status === "sending" ? "not-allowed" : "pointer",
                  width: "100%",
                }}
              >
                Send
              </button>
            </div>
          </form>
        )
      )}
    </div>
  );
}

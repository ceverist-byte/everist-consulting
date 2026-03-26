import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Everist Consulting — VDC Strategy & Operating Model Design",
  description:
    "Transform VDC from coordination function to competitive advantage. Organizational design consulting for GCs and owner-side capital programs. Based in San Diego.",
};

const archetypes = [
  {
    number: "01",
    name: "Coordination Shop",
    description:
      "VDC supports execution. Clash detection, model coordination, field support. Enters after design is locked. The most common structure in the industry.",
    authority: "Low",
    timing: "Late",
    complaint: '"We invested in BIM but nothing really changed."',
    accent: "rgba(193,75,75,0.15)",
    border: "rgba(193,75,75,0.2)",
  },
  {
    number: "02",
    name: "Preconstruction Tool Group",
    description:
      "VDC powers pursuits and estimates. Strong precon contribution — but the field frequently ignores it once the project is won.",
    authority: "Low–Mid",
    timing: "Early",
    complaint: '"We use VDC to win work, but the field doesn\'t carry it through."',
    accent: "rgba(193,145,75,0.12)",
    border: "rgba(193,145,75,0.2)",
  },
  {
    number: "03",
    name: "Execution Engine",
    description:
      "VDC is deeply integrated into operations — logistics, prefab, scheduling. Projects are delivered more efficiently. But VDC still doesn't influence delivery strategy.",
    authority: "High",
    timing: "Late",
    complaint: '"VDC is running well. I\'m not sure what the next level looks like."',
    accent: "rgba(75,145,193,0.12)",
    border: "rgba(75,145,193,0.2)",
  },
  {
    number: "04",
    name: "Strategic Delivery Office",
    description:
      "VDC sits alongside preconstruction and operations in regional leadership. It shapes delivery architecture, owner relationships, and competitive positioning.",
    authority: "High",
    timing: "Early",
    complaint: '"How do we scale this without losing what makes it work?"',
    accent: "rgba(75,193,145,0.12)",
    border: "rgba(75,193,145,0.2)",
    highlight: true,
  },
];

const services = [
  {
    phase: "Phase 1",
    name: "Stakeholder Diagnosis",
    
    description:
      "Map where decisions actually get made. Interview regional leadership, operations, preconstruction, and VDC. Identify your current archetype and quantify the gap between authority and expectations.",
    deliverables: [
      "Current-state authority map",
      "Decision timing diagnosis",
      "Archetype identification",
      "Gap analysis (authority vs. expectations)",
    ],
  },
  {
    phase: "Phase 2",
    name: "Operating Model Design",
    
    description:
      "Design where VDC should sit structurally and what authority it needs to deliver the outcomes leadership expects. Build the governance framework that makes transformation stick — not just while you're watching.",
    deliverables: [
      "Authority & governance framework",
      "Organizational placement recommendation",
      "Stakeholder alignment strategy",
      "Implementation roadmap",
    ],
  },
  {
    phase: "Phase 3",
    name: "Implementation Support",
    
    description:
      "Monthly check-ins to monitor adoption signals, adjust governance as the organization evolves, and ensure the operating model survives personnel changes. The work designed to transfer — you shouldn't need me forever.",
    deliverables: [
      "Monthly governance check-ins",
      "Adoption signal tracking",
      "Course correction as needed",
      "Leadership coaching",
    ],
  },
];

export default function Home() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section
        style={{
          background: "#0f1117",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          paddingTop: "80px",
        }}
      >
        {/* Grid overlay */}
        <div
          className="absolute inset-0 bg-grid"
          style={{ backgroundSize: "48px 48px", opacity: 1 }}
        />
        {/* Radial amber glow */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 70% 40%, rgba(193,145,75,0.13) 0%, transparent 55%)",
          }}
        />

        <div
          className="relative max-w-6xl mx-auto px-6 w-full"
          style={{ paddingTop: "60px", paddingBottom: "80px" }}
        >
          {/* Eyebrow */}
          <div
            className="eyebrow flex items-center gap-3 mb-8"
            style={{ color: "#c1914b" }}
          >
            VDC Strategy & Operating Model Design
            <span
              style={{
                width: "40px",
                height: "1px",
                background: "#c1914b",
                opacity: 0.5,
                display: "inline-block",
              }}
            />
          </div>

          {/* Headline */}
          <h1
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "clamp(2.25rem, 5vw, 4rem)",
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              color: "#f0ece4",
              maxWidth: "700px",
              marginBottom: "28px",
            }}
          >
            Turn VDC capability into{" "}
            <em style={{ fontStyle: "normal", color: "#c1914b" }}>
              competitive advantage.
            </em>
          </h1>

          {/* Subhead */}
          <p
            style={{
              fontSize: "1.0625rem",
              fontWeight: 300,
              color: "#9a9590",
              lineHeight: 1.7,
              maxWidth: "480px",
              marginBottom: "44px",
            }}
          >
            Most GCs have a VDC function. Very few have a VDC capability that
            creates competitive advantage. The gap is structural — not
            technological.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-16">
            <Link
              href="/assessment"
              style={{
                fontFamily: "var(--font-syne)",
                fontSize: "0.8125rem",
                fontWeight: 700,
                letterSpacing: "0.07em",
                textTransform: "uppercase",
                padding: "15px 32px",
                background: "#c1914b",
                color: "#0f1117",
                borderRadius: "6px",
                textDecoration: "none",
                display: "inline-block",
                transition: "background 0.15s",
              }}
            >
              Find Your VDC Archetype →
            </Link>
            <Link
              href="/contact"
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "0.9375rem",
                fontWeight: 400,
                padding: "15px 24px",
                border: "1px solid rgba(240,236,228,0.16)",
                color: "#f0ece4",
                borderRadius: "6px",
                textDecoration: "none",
                display: "inline-block",
                transition: "border-color 0.15s",
              }}
            >
              Book a Discovery Call
            </Link>
          </div>

          {/* Credential tags */}
          <div className="flex flex-wrap gap-2">
            {[
              "VDC Operating Model Design",
              "Last Planner System®",
              "AI/Automation Advisory",
              "San Diego · Remote",
            ].map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: "0.75rem",
                  color: "#6b6762",
                  border: "1px solid rgba(240,236,228,0.08)",
                  borderRadius: "4px",
                  padding: "5px 12px",
                  letterSpacing: "0.03em",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── THESIS ───────────────────────────────────────────────── */}
      <section
        style={{
          background: "#0f1117",
          borderTop: "1px solid rgba(240,236,228,0.06)",
          padding: "96px 24px",
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="eyebrow mb-6">The Core Problem</div>
              <h2
                style={{
                  fontFamily: "var(--font-syne)",
                  fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                  fontWeight: 800,
                  lineHeight: 1.15,
                  letterSpacing: "-0.025em",
                  color: "#f0ece4",
                  marginBottom: "24px",
                }}
              >
                Technology doesn&apos;t fail because of tooling.
              </h2>
              <p
                style={{
                  fontSize: "1rem",
                  color: "#9a9590",
                  lineHeight: 1.75,
                  marginBottom: "20px",
                }}
              >
                It fails because mandate, authority, and incentives are
                misaligned. Most construction firms expect Strategic Delivery
                Office results while operating a Coordination Shop structure.
              </p>
              <p
                style={{
                  fontSize: "1rem",
                  color: "#9a9590",
                  lineHeight: 1.75,
                  marginBottom: "32px",
                }}
              >
                When VDC sits under Operations, it participates after delivery
                strategy is locked. It can improve coordination — but it cannot
                influence prefabrication, design strategy, or competitive
                positioning. That&apos;s not a technology problem. It&apos;s a
                governance problem.
              </p>
              <Link
                href="/services"
                style={{
                  fontFamily: "var(--font-syne)",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#c1914b",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                How I approach this →
              </Link>
            </div>

            {/* Contrast box */}
            <div
              style={{
                background: "rgba(240,236,228,0.03)",
                border: "1px solid rgba(240,236,228,0.08)",
                borderRadius: "12px",
                padding: "36px",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-syne)",
                  fontSize: "0.6875rem",
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#6b6762",
                  marginBottom: "24px",
                }}
              >
                Why transformations stall
              </div>
              <div className="space-y-6">
                {[
                  {
                    label: "Most consultants start here",
                    stack: ["Technology", "Workflow", "Training"],
                    note: "These approaches assume the organizational structure is already correct.",
                    muted: true,
                  },
                  {
                    label: "I start here",
                    stack: [
                      "Authority",
                      "Decision structure",
                      "Operating model",
                      "Technology",
                    ],
                    note: "That order is what makes transformation stick.",
                    muted: false,
                  },
                ].map((block) => (
                  <div key={block.label}>
                    <div
                      style={{
                        fontSize: "0.75rem",
                        color: block.muted ? "#6b6762" : "#c1914b",
                        marginBottom: "10px",
                        fontFamily: "var(--font-syne)",
                        fontWeight: 600,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                      }}
                    >
                      {block.label}
                    </div>
                    <div className="flex flex-wrap gap-2 mb-8px">
                      {block.stack.map((item, i) => (
                        <span key={item}>
                          <span
                            style={{
                              fontSize: "0.9375rem",
                              color: block.muted ? "#6b6762" : "#f0ece4",
                              fontFamily: "var(--font-syne)",
                              fontWeight: block.muted ? 400 : 600,
                            }}
                          >
                            {item}
                          </span>
                          {i < block.stack.length - 1 && (
                            <span style={{ color: "#6b6762", margin: "0 8px" }}>
                              →
                            </span>
                          )}
                        </span>
                      ))}
                    </div>
                    <p
                      style={{
                        fontSize: "0.8125rem",
                        color: "#6b6762",
                        lineHeight: 1.6,
                        marginTop: "10px",
                        fontStyle: "italic",
                      }}
                    >
                      {block.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ARCHETYPE MATRIX ─────────────────────────────────────── */}
      <section
        style={{
          background: "#171923",
          borderTop: "1px solid rgba(240,236,228,0.06)",
          borderBottom: "1px solid rgba(240,236,228,0.06)",
          padding: "96px 24px",
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="eyebrow mb-4 block">The VDC Archetype Matrix</div>
            <h2
              style={{
                fontFamily: "var(--font-syne)",
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: "-0.025em",
                color: "#f0ece4",
                marginBottom: "16px",
              }}
            >
              Where does your VDC capability sit?
            </h2>
            <p
              style={{
                fontSize: "0.9375rem",
                color: "#9a9590",
                maxWidth: "480px",
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              Two axes determine how VDC behaves inside a contractor: when it
              engages, and what authority it has.
            </p>
          </div>

          {/* Matrix axes labels */}
          <div
            className="hidden md:flex justify-between mb-3 px-1"
            style={{ maxWidth: "900px", margin: "0 auto 12px" }}
          >
            <span style={{ fontSize: "0.75rem", color: "#6b6762" }}>
              ← Late engagement
            </span>
            <span style={{ fontSize: "0.75rem", color: "#6b6762" }}>
              Early engagement →
            </span>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            style={{ maxWidth: "900px", margin: "0 auto" }}
          >
            {archetypes.map((a) => (
              <div
                key={a.number}
                style={{
                  background: a.accent,
                  border: `1px solid ${a.border}`,
                  borderRadius: "12px",
                  padding: "28px 28px 24px",
                  position: "relative",
                  ...(a.highlight
                    ? { boxShadow: "0 0 0 1px rgba(75,193,145,0.15)" }
                    : {}),
                }}
              >
                {a.highlight && (
                  <div
                    style={{
                      position: "absolute",
                      top: "-1px",
                      right: "20px",
                      background: "rgba(75,193,145,0.9)",
                      color: "#0f1117",
                      fontSize: "0.625rem",
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      padding: "4px 10px",
                      borderRadius: "0 0 6px 6px",
                      fontFamily: "var(--font-syne)",
                    }}
                  >
                    Target State
                  </div>
                )}
                <div
                  style={{
                    fontFamily: "var(--font-syne)",
                    fontSize: "0.625rem",
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "#6b6762",
                    marginBottom: "10px",
                  }}
                >
                  Archetype {a.number}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-syne)",
                    fontSize: "1.1875rem",
                    fontWeight: 700,
                    color: "#f0ece4",
                    marginBottom: "12px",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {a.name}
                </h3>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "#9a9590",
                    lineHeight: 1.65,
                    marginBottom: "16px",
                  }}
                >
                  {a.description}
                </p>
                <blockquote
                  style={{
                    fontSize: "0.8125rem",
                    color: "#6b6762",
                    fontStyle: "italic",
                    borderLeft: `2px solid ${a.border}`,
                    paddingLeft: "12px",
                    marginBottom: "16px",
                    lineHeight: 1.6,
                  }}
                >
                  {a.complaint}
                </blockquote>
                <div className="flex gap-3">
                  {[
                    { label: "Authority", value: a.authority },
                    { label: "Timing", value: a.timing },
                  ].map((chip) => (
                    <span
                      key={chip.label}
                      style={{
                        fontSize: "0.6875rem",
                        color: "#6b6762",
                        border: "1px solid rgba(240,236,228,0.08)",
                        borderRadius: "4px",
                        padding: "3px 9px",
                      }}
                    >
                      {chip.label}: {chip.value}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/assessment"
              style={{
                fontFamily: "var(--font-syne)",
                fontSize: "0.8125rem",
                fontWeight: 700,
                letterSpacing: "0.07em",
                textTransform: "uppercase",
                padding: "14px 28px",
                background: "rgba(193,145,75,0.12)",
                border: "1px solid rgba(193,145,75,0.3)",
                color: "#c1914b",
                borderRadius: "6px",
                textDecoration: "none",
                display: "inline-block",
                transition: "background 0.15s",
              }}
            >
              Find Your Archetype — Take the Assessment →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─────────────────────────────────────────────── */}
      <section style={{ background: "#0f1117", padding: "96px 24px" }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <div className="eyebrow mb-4 block">The 3-Phase Method</div>
            <h2
              style={{
                fontFamily: "var(--font-syne)",
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: "-0.025em",
                color: "#f0ece4",
                maxWidth: "540px",
              }}
            >
              Organizational governance design. Not another BIM plan.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div
                key={s.phase}
                style={{
                  background: "rgba(240,236,228,0.025)",
                  border: "1px solid rgba(240,236,228,0.07)",
                  borderRadius: "12px",
                  padding: "32px",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "32px",
                    width: "1px",
                    height: "32px",
                    background: "#c1914b",
                    opacity: 0.5,
                  }}
                />
                <div
                  style={{
                    fontFamily: "var(--font-syne)",
                    fontSize: "0.625rem",
                    fontWeight: 700,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "#c1914b",
                    marginBottom: "8px",
                  }}
                >
                  {s.phase}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-syne)",
                    fontSize: "1.125rem",
                    fontWeight: 700,
                    color: "#f0ece4",
                    marginBottom: "6px",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {s.name}
                </h3>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "#9a9590",
                    lineHeight: 1.7,
                    marginBottom: "20px",
                  }}
                >
                  {s.description}
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {s.deliverables.map((d) => (
                    <li
                      key={d}
                      style={{
                        fontSize: "0.8125rem",
                        color: "#6b6762",
                        padding: "5px 0",
                        borderTop: "1px solid rgba(240,236,228,0.05)",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <span style={{ color: "#c1914b", fontSize: "0.625rem" }}>
                        ▸
                      </span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/services"
              style={{
                fontSize: "0.875rem",
                color: "#9a9590",
                textDecoration: "none",
                fontFamily: "var(--font-dm-sans)",
              }}
            >
              Full service details and engagement structure →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CREDENTIALS ──────────────────────────────────────────── */}
      <section
        style={{
          background: "#171923",
          borderTop: "1px solid rgba(240,236,228,0.06)",
          padding: "80px 24px",
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="eyebrow mb-6 block">Who this is for</div>
              <h2
                style={{
                  fontFamily: "var(--font-syne)",
                  fontSize: "clamp(1.5rem, 2.5vw, 2.125rem)",
                  fontWeight: 800,
                  lineHeight: 1.2,
                  letterSpacing: "-0.02em",
                  color: "#f0ece4",
                  marginBottom: "20px",
                }}
              >
                Built from 20+ years inside the problem you&apos;re trying to
                solve.
              </h2>
              <p
                style={{
                  fontSize: "0.9375rem",
                  color: "#9a9590",
                  lineHeight: 1.75,
                  marginBottom: "16px",
                }}
              >
                I've spent 20+ years inside the structural problem I now help organizations solve — across general contracting, owner-side capital programs, and international construction education. I've built VDC capability from scratch, navigated every organizational archetype from the inside, and watched the same authority misalignment produce the same stall in organizations that otherwise had nothing in common. That pattern is the methodology.
              </p>
              <p
                style={{
                  fontSize: "0.9375rem",
                  color: "#9a9590",
                  lineHeight: 1.75,
                  marginBottom: "32px",
                }}
              >
                I work with general contractors redesigning VDC practices after
                growth or leadership transitions, and with owner-side capital
                programs — hospital campuses, universities, data centers — that
                need delivery oversight capability they don&apos;t currently
                have.
              </p>
              <Link
                href="/about"
                style={{
                  fontFamily: "var(--font-syne)",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#c1914b",
                  textDecoration: "none",
                }}
              >
                Full background →
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "20+", label: "Years in construction technology" },
                { value: "10+", label: "Years building a GC VDC practice from zero" },
                { value: "0", label: "Team turnover during that period" },
                {
                  value: "3",
                  label: "Credentials: Architect · LEED AP · Assoc. DBIA",
                },
              ].map((stat) => (
                <div
                  key={stat.label}
                  style={{
                    background: "rgba(240,236,228,0.03)",
                    border: "1px solid rgba(240,236,228,0.07)",
                    borderRadius: "10px",
                    padding: "24px 20px",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-syne)",
                      fontSize: "2rem",
                      fontWeight: 800,
                      color: "#c1914b",
                      lineHeight: 1,
                      marginBottom: "8px",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontSize: "0.8125rem",
                      color: "#6b6762",
                      lineHeight: 1.5,
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── BOTTOM CTA ───────────────────────────────────────────── */}
      <section
        style={{
          background: "#0f1117",
          borderTop: "1px solid rgba(240,236,228,0.06)",
          padding: "96px 24px",
          textAlign: "center",
        }}
      >
        <div className="max-w-2xl mx-auto">
          <div className="eyebrow mb-6 block">Ready to start?</div>
          <h2
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: "-0.025em",
              color: "#f0ece4",
              marginBottom: "20px",
            }}
          >
            Two ways in.
          </h2>
          <p
            style={{
              fontSize: "0.9375rem",
              color: "#9a9590",
              lineHeight: 1.75,
              marginBottom: "48px",
            }}
          >
            Take the assessment to identify your archetype and receive a
            tailored diagnostic. Or book a 30-minute call directly — we&apos;ll
            map your structure and identify the gap in the conversation.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            style={{ maxWidth: "420px", margin: "0 auto" }}
          >
            <Link
              href="/assessment"
              style={{
                fontFamily: "var(--font-syne)",
                fontSize: "0.8125rem",
                fontWeight: 700,
                letterSpacing: "0.07em",
                textTransform: "uppercase",
                padding: "16px 28px",
                background: "#c1914b",
                color: "#0f1117",
                borderRadius: "6px",
                textDecoration: "none",
                display: "block",
                textAlign: "center",
              }}
            >
              Take the Assessment
            </Link>
            <Link
              href="/contact"
              style={{
                fontFamily: "var(--font-syne)",
                fontSize: "0.8125rem",
                fontWeight: 700,
                letterSpacing: "0.07em",
                textTransform: "uppercase",
                padding: "16px 28px",
                border: "1px solid rgba(240,236,228,0.16)",
                color: "#f0ece4",
                borderRadius: "6px",
                textDecoration: "none",
                display: "block",
                textAlign: "center",
              }}
            >
              Book a Call
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

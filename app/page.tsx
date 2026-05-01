import Link from "next/link";
import type { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";

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
    accent: "transparent",
    border: "var(--rule)",
  },
  {
    number: "02",
    name: "Preconstruction Tool Group",
    description:
      "VDC powers pursuits and estimates. Strong precon contribution — but the field frequently ignores it once the project is won.",
    authority: "Low–Mid",
    timing: "Early",
    complaint: '"We use VDC to win work, but the field doesn\'t carry it through."',
    accent: "transparent",
    border: "var(--rule)",
  },
  {
    number: "03",
    name: "Execution Engine",
    description:
      "VDC is deeply integrated into operations — logistics, prefab, scheduling. Projects are delivered more efficiently. But VDC still doesn't influence delivery strategy.",
    authority: "High",
    timing: "Late",
    complaint: '"VDC is running well. I\'m not sure what the next level looks like."',
    accent: "transparent",
    border: "var(--rule)",
  },
  {
    number: "04",
    name: "Strategic Delivery Office",
    description:
      "VDC sits alongside preconstruction and operations in regional leadership. It shapes delivery architecture, owner relationships, and competitive positioning.",
    authority: "High",
    timing: "Early",
    complaint: '"How do we scale this without losing what makes it work?"',
    accent: "transparent",
    border: "var(--rule)",
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

const pageBg = "var(--bg)";
const pageFg = "var(--fg)";
const pageText = "var(--text-primary)";
const pageMuted = "var(--text-secondary)";
const pageRule = "var(--rule)";
const pageRuleStrong = "var(--rule-strong)";
const pageAccent = "var(--accent)";

const sectionStyle = {
  background: pageBg,
  borderTop: `1px solid ${pageRuleStrong}`,
  padding: "72px 0",
};

const contentWrapStyle = {
  maxWidth: "1120px",
  margin: "0 auto",
};

const eyebrowStyle = {
  color: pageAccent,
  fontSize: "0.75rem",
  fontWeight: 700,
  letterSpacing: "0.08em",
  lineHeight: 1,
  marginBottom: "18px",
  textTransform: "uppercase" as const,
};

const h2Style = {
  color: pageText,
  fontFamily: "var(--font-sans)",
  fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
  fontWeight: 700,
  letterSpacing: "-0.025em",
  lineHeight: 1.12,
};

const bodyTextStyle = {
  color: pageText,
  fontSize: "1rem",
  fontWeight: 400,
  lineHeight: 1.65,
};

const primaryCtaStyle = {
  background: pageFg,
  border: `1px solid ${pageFg}`,
  borderRadius: "3px",
  color: pageBg,
  display: "inline-block",
  fontSize: "0.875rem",
  fontWeight: 700,
  letterSpacing: "0.02em",
  lineHeight: 1,
  padding: "14px 22px",
  textDecoration: "none",
  textTransform: "uppercase" as const,
};

const secondaryCtaStyle = {
  background: "transparent",
  border: `1px solid ${pageFg}`,
  borderRadius: "3px",
  color: pageText,
  display: "inline-block",
  fontSize: "0.875rem",
  fontWeight: 700,
  letterSpacing: "0.02em",
  lineHeight: 1,
  padding: "14px 22px",
  textDecoration: "none",
  textTransform: "uppercase" as const,
};

const textLinkStyle = {
  color: pageText,
  fontSize: "0.9375rem",
  fontWeight: 600,
  textDecoration: "underline",
  textDecorationColor: pageRule,
  textUnderlineOffset: "4px",
};

export default function Home() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section
        style={{
          background: pageBg,
          borderBottom: `1px solid ${pageRuleStrong}`,
          display: "flex",
          alignItems: "center",
          position: "relative",
          minHeight: "78vh",
          padding: "120px 0 64px",
        }}
      >
        <PageShell className="relative w-full">
          <div style={contentWrapStyle}>
          {/* Eyebrow */}
          <div
            className="flex items-center gap-3"
            style={eyebrowStyle}
          >
            VDC Strategy & Operating Model Design
            <span
              style={{
                width: "40px",
                height: "1px",
                background: pageRuleStrong,
                display: "inline-block",
              }}
            />
          </div>

          {/* Headline */}
          <h1
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              fontWeight: 700,
              lineHeight: 0.98,
              letterSpacing: "-0.03em",
              color: pageText,
              maxWidth: "760px",
              marginBottom: "24px",
            }}
          >
            Turn VDC capability into{" "}
            <em style={{ fontStyle: "normal", color: pageText }}>
              competitive advantage.
            </em>
          </h1>

          {/* Subhead */}
          <p
            style={{
              ...bodyTextStyle,
              fontSize: "1.125rem",
              maxWidth: "560px",
              marginBottom: "28px",
            }}
          >
            Most GCs have a VDC function. Very few have a VDC capability that
            creates competitive advantage. The gap is structural — not
            technological.
          </p>

          <div style={{ maxWidth: "560px", marginBottom: "28px" }}>
            <p
              style={{
                ...bodyTextStyle,
                fontSize: "0.96875rem",
                marginBottom: "12px",
              }}
            >
              The same pattern shows up in AI and automation work. When
              adoption stalls, the root cause is usually not the tool. It&apos;s
              the same system problem VDC has always exposed.
            </p>
            <Link
              href="/ai-automation"
              style={textLinkStyle}
            >
              Explore AI &amp; Automation Advisory →
            </Link>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3 mb-12">
            <Link
              href="/assessment"
              style={primaryCtaStyle}
            >
              Find Your VDC Archetype →
            </Link>
            <Link
              href="/contact"
              style={secondaryCtaStyle}
            >
              Book a Discovery Call
            </Link>
          </div>

          {/* Credential tags */}
          <div
            className="flex flex-wrap gap-x-4 gap-y-2"
            style={{
              borderTop: `1px solid ${pageRuleStrong}`,
              maxWidth: "720px",
              paddingTop: "18px",
            }}
          >
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
                  color: pageText,
                  letterSpacing: "0.03em",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
          </div>
        </PageShell>
      </section>

      {/* ─── THESIS ───────────────────────────────────────────────── */}
      <section style={sectionStyle}>
        <PageShell>
          <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(320px,440px)] gap-12 items-start" style={contentWrapStyle}>
            <div>
              <div style={eyebrowStyle}>The Core Problem</div>
              <h2
                style={{
                  ...h2Style,
                  marginBottom: "20px",
                }}
              >
                Technology doesn&apos;t fail because of tooling.
              </h2>
              <p
                style={{
                  ...bodyTextStyle,
                  marginBottom: "16px",
                }}
              >
                It fails because mandate, authority, and incentives are
                misaligned. Most construction firms expect Strategic Delivery
                Office results while operating a Coordination Shop structure.
              </p>
              <p
                style={{
                  ...bodyTextStyle,
                  marginBottom: "24px",
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
                style={textLinkStyle}
              >
                How I approach this →
              </Link>
            </div>

            <div
              style={{
                borderTop: `1px solid ${pageRuleStrong}`,
                paddingTop: "20px",
              }}
            >
              <div
                style={{
                  fontSize: "0.6875rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: pageText,
                  marginBottom: "20px",
                }}
              >
                Why transformations stall
              </div>
              <div className="space-y-5">
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
                  <div
                    key={block.label}
                    style={{
                      borderTop: `1px solid ${pageRule}`,
                      paddingTop: "16px",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "0.75rem",
                        color: block.muted ? pageText : pageAccent,
                        marginBottom: "10px",
                        fontWeight: 600,
                        letterSpacing: "0.04em",
                        textTransform: "uppercase",
                      }}
                    >
                      {block.label}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {block.stack.map((item, i) => (
                        <span key={item}>
                          <span
                            style={{
                              fontSize: "0.9375rem",
                              color: pageText,
                              fontWeight: block.muted ? 500 : 600,
                            }}
                          >
                            {item}
                          </span>
                          {i < block.stack.length - 1 && (
                            <span style={{ color: pageText, margin: "0 8px" }}>
                              →
                            </span>
                          )}
                        </span>
                      ))}
                    </div>
                    <p
                      style={{
                        fontSize: "0.8125rem",
                        color: pageMuted,
                        lineHeight: 1.6,
                        marginTop: "10px",
                      }}
                    >
                      {block.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </PageShell>
      </section>

      {/* ─── ARCHETYPE MATRIX ─────────────────────────────────────── */}
      <section
        style={{
          ...sectionStyle,
          background: pageBg,
        }}
      >
        <PageShell>
          <div style={{ ...contentWrapStyle, marginBottom: "40px" }}>
            <div style={eyebrowStyle}>The VDC Archetype Matrix</div>
            <h2
              style={{
                ...h2Style,
                marginBottom: "16px",
              }}
            >
              Where does your VDC capability sit?
            </h2>
            <p
              style={{
                ...bodyTextStyle,
                maxWidth: "560px",
              }}
            >
              Two axes determine how VDC behaves inside a contractor: when it
              engages, and what authority it has.
            </p>
          </div>

          {/* Matrix axes labels */}
          <div
            className="hidden md:flex justify-between mb-3 px-1"
            style={{ ...contentWrapStyle, maxWidth: "900px", marginBottom: "12px" }}
          >
            <span style={{ fontSize: "0.75rem", color: pageMuted }}>
              ← Late engagement
            </span>
            <span style={{ fontSize: "0.75rem", color: pageMuted }}>
              Early engagement →
            </span>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            style={{ ...contentWrapStyle, maxWidth: "900px" }}
          >
            {archetypes.map((a) => (
              <div
                key={a.number}
                style={{
                  borderTop: `1px solid ${pageRuleStrong}`,
                  padding: "24px 0 0",
                  position: "relative",
                }}
              >
                {a.highlight && (
                  <div
                    style={{
                      color: pageAccent,
                      fontSize: "0.625rem",
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      marginBottom: "12px",
                    }}
                  >
                    Target State
                  </div>
                )}
                <div
                  style={{
                    fontSize: "0.625rem",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: pageText,
                    marginBottom: "10px",
                  }}
                >
                  Archetype {a.number}
                </div>
                <h3
                  style={{
                    fontSize: "1.1875rem",
                    fontWeight: 700,
                    color: pageText,
                    marginBottom: "12px",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {a.name}
                </h3>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: pageText,
                    lineHeight: 1.65,
                    marginBottom: "16px",
                  }}
                >
                  {a.description}
                </p>
                <blockquote
                  style={{
                    fontSize: "0.8125rem",
                    color: pageMuted,
                    borderLeft: `2px solid ${pageRuleStrong}`,
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
                        color: pageMuted,
                        letterSpacing: "0.02em",
                      }}
                    >
                      {chip.label}: {chip.value}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{ ...contentWrapStyle, maxWidth: "900px", marginTop: "36px" }}>
            <Link
              href="/assessment"
              style={secondaryCtaStyle}
            >
              Find Your Archetype — Take the Assessment →
            </Link>
          </div>
        </PageShell>
      </section>

      {/* ─── SERVICES ─────────────────────────────────────────────── */}
      <section style={sectionStyle}>
        <PageShell>
          <div style={{ ...contentWrapStyle, marginBottom: "40px" }}>
            <div style={eyebrowStyle}>The 3-Phase Method</div>
            <h2
              style={{
                ...h2Style,
                maxWidth: "540px",
              }}
            >
              Organizational governance design. Not another BIM plan.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" style={contentWrapStyle}>
            {services.map((s, i) => (
              <div
                key={s.phase}
                style={{
                  borderTop: `1px solid ${pageRuleStrong}`,
                  paddingTop: "22px",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    fontSize: "0.625rem",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: pageAccent,
                    marginBottom: "8px",
                  }}
                >
                  {s.phase}
                </div>
                <h3
                  style={{
                    fontSize: "1.125rem",
                    fontWeight: 700,
                    color: pageText,
                    marginBottom: "6px",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {s.name}
                </h3>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: pageText,
                    lineHeight: 1.65,
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
                        color: pageMuted,
                        padding: "7px 0",
                        borderTop: `1px solid ${pageRule}`,
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <span style={{ color: pageAccent, fontSize: "0.625rem" }}>
                        ▸
                      </span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div style={{ ...contentWrapStyle, marginTop: "32px" }}>
            <Link
              href="/services"
              style={textLinkStyle}
            >
              Full service details and engagement structure →
            </Link>
          </div>
        </PageShell>
      </section>

      {/* ─── CREDENTIALS ──────────────────────────────────────────── */}
      <section
        style={{
          ...sectionStyle,
          background: pageBg,
        }}
      >
        <PageShell>
          <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(320px,420px)] gap-12 items-start" style={contentWrapStyle}>
            <div>
              <div style={eyebrowStyle}>Who this is for</div>
              <h2
                style={{
                  ...h2Style,
                  fontSize: "clamp(1.5rem, 2.5vw, 2.125rem)",
                  marginBottom: "20px",
                }}
              >
                Built from 20+ years inside the problem you&apos;re trying to
                solve.
              </h2>
              <p
                style={{
                  ...bodyTextStyle,
                  fontSize: "0.9375rem",
                  marginBottom: "16px",
                }}
              >
                I've spent 20+ years inside the structural problem I now help organizations solve — across general contracting, owner-side capital programs, and international construction education. I've built VDC capability from scratch, navigated every organizational archetype from the inside, and watched the same authority misalignment produce the same stall in organizations that otherwise had nothing in common. That pattern is the methodology.
              </p>
              <p
                style={{
                  ...bodyTextStyle,
                  fontSize: "0.9375rem",
                  marginBottom: "24px",
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
                style={textLinkStyle}
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
                    borderTop: `1px solid ${pageRule}`,
                    paddingTop: "18px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "2rem",
                      fontWeight: 700,
                      color: pageText,
                      lineHeight: 1,
                      marginBottom: "8px",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontSize: "0.8125rem",
                      color: pageMuted,
                      lineHeight: 1.5,
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </PageShell>
      </section>

      {/* ─── BOTTOM CTA ───────────────────────────────────────────── */}
      <section
        style={{
          ...sectionStyle,
          paddingBottom: "80px",
        }}
      >
        <PageShell>
        <div style={{ ...contentWrapStyle, maxWidth: "720px", margin: "0 auto 0 0" }}>
          <div style={eyebrowStyle}>Ready to start?</div>
          <h2
            style={{
              ...h2Style,
              marginBottom: "20px",
            }}
          >
            Two ways in.
          </h2>
          <p
            style={{
              ...bodyTextStyle,
              fontSize: "0.9375rem",
              marginBottom: "28px",
              maxWidth: "620px",
            }}
          >
            Take the assessment to identify your archetype and receive a
            tailored diagnostic. Or book a 30-minute call directly — we&apos;ll
            map your structure and identify the gap in the conversation.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-3"
          >
            <Link
              href="/assessment"
              style={primaryCtaStyle}
            >
              Take the Assessment
            </Link>
            <Link
              href="/contact"
              style={secondaryCtaStyle}
            >
              Book a Call
            </Link>
          </div>
        </div>
        </PageShell>
      </section>
    </>
  );
}

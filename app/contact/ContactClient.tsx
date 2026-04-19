"use client";

import ContentCard from "@/components/layout/ContentCard";
import SplitLayout from "@/components/layout/SplitLayout";
import { useEffect, useState } from "react";

export default function ContactClient() {
  const [formState, setFormState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    message: "",
  });

  useEffect(() => {
    let cancelled = false;

    const mountCalendar = () => {
      if (cancelled) return;

      const container = document.getElementById("cal-booking");
      if (!container || container.dataset.calMounted === "true") return;

      container.dataset.calMounted = "true";
      container.innerHTML = "";

      (function (C: any, A: string, L: string) {
        const p = function (a: any, ar: any) {
          a.q.push(ar);
        };
        const d = C.document;

        C.Cal =
          C.Cal ||
          function () {
            const cal = C.Cal;
            const ar = arguments;

            if (!cal.loaded) {
              cal.ns = {};
              cal.q = cal.q || [];
              d.head.appendChild(d.createElement("script")).src = A;
              cal.loaded = true;
            }

            if (ar[0] === L) {
              const api: any = function () {
                p(api, arguments);
              };
              const namespace = ar[1];
              api.q = api.q || [];

              if (typeof namespace === "string") {
                cal.ns[namespace] = cal.ns[namespace] || api;
                p(cal.ns[namespace], ar);
                p(cal, ["initNamespace", namespace]);
              } else {
                p(cal, ar);
              }
              return;
            }

            p(cal, ar);
          };
      })(window, "https://app.cal.com/embed/embed.js", "init");

      (window as any).Cal("init", "vdc-structural-diagnostic", {
        origin: "https://app.cal.com",
      });

      (window as any).Cal.ns["vdc-structural-diagnostic"]("inline", {
        elementOrSelector: "#cal-booking",
        config: {
          layout: "month_view",
          useSlotsViewOnSmallScreen: true,
        },
        calLink: "chriseverist/vdc-structural-diagnostic",
      });

      (window as any).Cal.ns["vdc-structural-diagnostic"]("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
        styles: { branding: { brandColor: "#c1914b" } },
      });
    };

    mountCalendar();

    return () => {
      cancelled = true;
    };
  }, []);

  async function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormState("sending");

    try {
      const response = await fetch("https://formspree.io/f/xwvrgjje", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setFormState("sent");
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  }

  const whatToExpect = [
    {
      step: "01",
      label: "Before the call",
      detail:
        "No prep required. If you've taken the VDC Archetype assessment, share your result — it gives me useful context. Otherwise, just show up.",
    },
    {
      step: "02",
      label: "During the call",
      detail:
        "I'll ask you to walk me through how a recent major project unfolded — when VDC first engaged, who controls key decisions, what outcomes leadership expects. We'll map the structural picture together.",
    },
    {
      step: "03",
      label: "After the call",
      detail:
        "You'll have a clear picture of your current archetype and the structural gap. If a formal engagement makes sense, I'll scope it specifically for your situation within 48 hours.",
    },
  ];

  return (
    <SplitLayout
      left={
        <div className="flex flex-col gap-12 lg:items-end">
          <div
            id="cal-booking"
            className="h-[980px] w-full overflow-auto rounded-[12px] md:max-w-[480px]"
          />

          <div className="w-full md:max-w-[480px]">
            <div className="eyebrow mb-6 block">What to expect</div>
            <div className="flex flex-col gap-5">
              {whatToExpect.map((w) => (
                <div key={w.step} className="flex gap-4">
                  <div
                    className="min-w-6 pt-[3px] font-display text-[0.625rem] font-bold tracking-[0.12em] text-amber-everist"
                  >
                    {w.step}
                  </div>
                  <div>
                    <div
                      className="mb-1 font-display text-sm font-bold text-cream"
                    >
                      {w.label}
                    </div>
                    <p
                      className="text-sm leading-[1.65] text-faint"
                    >
                      {w.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      }
      right={
        <div className="flex flex-col gap-8">
          <ContentCard className="p-8 md:p-12">
            <div className="eyebrow mb-4 block">Prefer email?</div>
            <h2
              style={{
                fontFamily: "var(--font-syne)",
                fontSize: "1.25rem",
                fontWeight: 700,
                color: "#f0ece4",
                letterSpacing: "-0.01em",
                marginBottom: "8px",
              }}
            >
              Send a note directly.
            </h2>
            <p
              style={{
                fontSize: "0.875rem",
                color: "#9a9590",
                lineHeight: 1.65,
                marginBottom: "28px",
              }}
            >
              I respond to all inquiries within one business day. If you&apos;d
              rather not schedule in advance, just describe your situation and
              I&apos;ll follow up.
            </p>

            {formState === "sent" ? (
              <div
                style={{
                  background: "rgba(75,193,145,0.08)",
                  border: "1px solid rgba(75,193,145,0.2)",
                  borderRadius: "8px",
                  padding: "20px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-syne)",
                    fontSize: "0.875rem",
                    fontWeight: 700,
                    color: "#4bc191",
                    marginBottom: "6px",
                  }}
                >
                  Message received.
                </div>
                <p style={{ fontSize: "0.8125rem", color: "#6b6762" }}>
                  I&apos;ll follow up within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  {[
                    { id: "name", label: "Name *", type: "text", required: true },
                    {
                      id: "email",
                      label: "Work email *",
                      type: "email",
                      required: true,
                    },
                    {
                      id: "company",
                      label: "Company",
                      type: "text",
                      required: false,
                    },
                    {
                      id: "role",
                      label: "Your role",
                      type: "text",
                      required: false,
                    },
                  ].map((f) => (
                    <input
                      key={f.id}
                      type={f.type}
                      placeholder={f.label}
                      required={f.required}
                      value={formData[f.id as keyof typeof formData]}
                      onChange={(e) =>
                        setFormData((d) => ({ ...d, [f.id]: e.target.value }))
                      }
                      style={{
                        background: "rgba(240,236,228,0.04)",
                        border: "1px solid rgba(240,236,228,0.1)",
                        borderRadius: "6px",
                        padding: "13px 14px",
                        fontSize: "0.9rem",
                        color: "#f0ece4",
                        outline: "none",
                        width: "100%",
                        fontFamily: "var(--font-dm-sans)",
                        transition: "border-color 0.15s",
                      }}
                      onFocus={(e) =>
                        (e.target.style.borderColor = "rgba(193,145,75,0.45)")
                      }
                      onBlur={(e) =>
                        (e.target.style.borderColor = "rgba(240,236,228,0.1)")
                      }
                    />
                  ))}

                  <textarea
                    placeholder="Briefly describe your situation or question"
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData((d) => ({ ...d, message: e.target.value }))
                    }
                    style={{
                      background: "rgba(240,236,228,0.04)",
                      border: "1px solid rgba(240,236,228,0.1)",
                      borderRadius: "6px",
                      padding: "13px 14px",
                      fontSize: "0.9rem",
                      color: "#f0ece4",
                      outline: "none",
                      width: "100%",
                      fontFamily: "var(--font-dm-sans)",
                      resize: "vertical",
                      transition: "border-color 0.15s",
                    }}
                    onFocus={(e) =>
                      (e.target.style.borderColor = "rgba(193,145,75,0.45)")
                    }
                    onBlur={(e) =>
                      (e.target.style.borderColor = "rgba(240,236,228,0.1)")
                    }
                  />

                  {formState === "error" && (
                    <p style={{ fontSize: "0.8125rem", color: "#e06060" }}>
                      Something went wrong. Email me directly at
                      chris@everistconsulting.com
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={formState === "sending"}
                    style={{
                      fontFamily: "var(--font-syne)",
                      fontSize: "0.8125rem",
                      fontWeight: 700,
                      letterSpacing: "0.07em",
                      textTransform: "uppercase",
                      padding: "14px 24px",
                      background:
                        formState === "sending"
                          ? "rgba(193,145,75,0.6)"
                          : "#c1914b",
                      color: "#0f1117",
                      borderRadius: "6px",
                      border: "none",
                      cursor:
                        formState === "sending" ? "not-allowed" : "pointer",
                      width: "100%",
                      transition: "background 0.15s",
                    }}
                  >
                    {formState === "sending" ? "Sending…" : "Send Message →"}
                  </button>
                </div>
              </form>
            )}
          </ContentCard>

          <div className="flex flex-col gap-3">
            <div
              className="flex items-center gap-4 rounded-[8px] border border-[rgba(240,236,228,0.06)] bg-[rgba(240,236,228,0.02)] px-5 py-4"
            >
              <div
                className="min-w-12 font-display text-[0.625rem] font-bold uppercase tracking-[0.14em] text-faint"
              >
                Email
              </div>
              <a
                href="mailto:chris@everistconsulting.com"
                style={{
                  fontSize: "0.9rem",
                  color: "#9a9590",
                  textDecoration: "none",
                  transition: "color 0.15s",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "#f0ece4")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = "#9a9590")
                }
              >
                chris@everistconsulting.com
              </a>
            </div>
            <div
              className="flex items-center gap-4 rounded-[8px] border border-[rgba(240,236,228,0.06)] bg-[rgba(240,236,228,0.02)] px-5 py-4"
            >
              <div
                className="min-w-12 font-display text-[0.625rem] font-bold uppercase tracking-[0.14em] text-faint"
              >
                Based
              </div>
              <span style={{ fontSize: "0.9rem", color: "#9a9590" }}>
                San Diego, CA · Remote-first
              </span>
            </div>
          </div>
        </div>
      }
    />
  );
}

'use client'

import PageShell from "@/components/layout/PageShell";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--rule-strong)",
        background: "var(--bg)",
      }}
    >
      <PageShell className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 700,
                fontSize: "1.125rem",
                color: "var(--text-primary)",
                letterSpacing: "-0.02em",
                marginBottom: "12px",
              }}
            >
              Everist Consulting
            </div>
            <p
              style={{
                fontSize: "0.875rem",
                color: "var(--text-secondary)",
                lineHeight: 1.65,
                maxWidth: "240px",
              }}
            >
              The governance layer above coordination. For general
              contractors and owner-side capital programs.
            </p>
            <div
              style={{
                marginTop: "20px",
                fontSize: "0.8125rem",
                color: "var(--text-secondary)",
              }}
            >
              San Diego, CA · Remote
            </div>
          </div>

          {/* Links */}
          <div>
            <div
              className="eyebrow"
              style={{ marginBottom: "16px", display: "block" }}
            >
              Navigation
            </div>
            <div className="flex flex-col gap-2">
              {[
                { href: "/services", label: "Services" },
                { href: "/about", label: "About Chris" },
                { href: "/contact", label: "Book a Call" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                  }}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div
              className="eyebrow"
              style={{ marginBottom: "16px", display: "block" }}
            >
              Get in touch
            </div>
            <Link
              href="/contact"
              style={{
                display: "inline-block",
                fontFamily: "var(--font-sans)",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                padding: "11px 22px",
                background: "var(--fg)",
                border: "1px solid var(--fg)",
                color: "var(--bg)",
                borderRadius: "2px",
                textDecoration: "none",
                marginBottom: "16px",
              }}
            >
              Schedule a Discovery Call
            </Link>
            <div style={{ fontSize: "0.8125rem", color: "var(--text-secondary)" }}>
              <a
                href="mailto:chris@everistconsulting.com"
                style={{ color: "var(--text-secondary)", textDecoration: "none" }}
              >
                chris@everistconsulting.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            paddingTop: "24px",
            borderTop: "1px solid var(--rule-strong)",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "8px",
          }}
        >
          <span style={{ fontSize: "0.8125rem", color: "var(--text-secondary)" }}>
            © {new Date().getFullYear()} Everist Consulting. All rights reserved.
          </span>
        </div>
      </PageShell>
    </footer>
  );
}

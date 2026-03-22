'use client'
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(240,236,228,0.06)",
        background: "#0f1117",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-syne)",
                fontWeight: 800,
                fontSize: "1.125rem",
                color: "#f0ece4",
                letterSpacing: "-0.02em",
                marginBottom: "12px",
              }}
            >
              Everist Consulting
            </div>
            <p
              style={{
                fontSize: "0.875rem",
                color: "#6b6762",
                lineHeight: 1.65,
                maxWidth: "240px",
              }}
            >
              VDC strategy and operating model design for general contractors
              and owner-side capital programs.
            </p>
            <div
              style={{
                marginTop: "20px",
                fontSize: "0.8125rem",
                color: "#6b6762",
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
                { href: "/assessment", label: "VDC Assessment" },
                { href: "/about", label: "About Chris" },
                { href: "/contact", label: "Book a Call" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  style={{
                    fontSize: "0.875rem",
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
                fontFamily: "var(--font-syne)",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                padding: "11px 22px",
                background: "rgba(193,145,75,0.12)",
                border: "1px solid rgba(193,145,75,0.3)",
                color: "#c1914b",
                borderRadius: "6px",
                textDecoration: "none",
                transition: "background 0.15s, border-color 0.15s",
                marginBottom: "16px",
              }}
            >
              Schedule a Discovery Call
            </Link>
            <div style={{ fontSize: "0.8125rem", color: "#6b6762" }}>
              <a
                href="mailto:chris@everistconsulting.com"
                style={{ color: "#9a9590", textDecoration: "none" }}
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
            borderTop: "1px solid rgba(240,236,228,0.06)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "8px",
          }}
        >
          <span style={{ fontSize: "0.8125rem", color: "#6b6762" }}>
            © {new Date().getFullYear()} Everist Consulting LLC. All rights
            reserved.
          </span>
          <span style={{ fontSize: "0.8125rem", color: "#6b6762" }}>
            Licensed Architect · LEED AP · Associate DBIA
          </span>
        </div>
      </div>
    </footer>
  );
}

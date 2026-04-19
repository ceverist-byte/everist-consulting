"use client";

import PageShell from "@/components/layout/PageShell";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/ai-automation", label: "AI & Automation" },
  { href: "/assessment", label: "Assessment" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: "rgba(15, 17, 23, 0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(240,236,228,0.06)",
      }}
    >
      <PageShell className="flex h-16 items-center justify-between">
        {/* Wordmark */}
        <Link href="/" className="flex items-center gap-3 group">
          <div
            className="w-7 h-7 rounded flex items-center justify-center text-xs font-bold"
            style={{
              background: "rgba(193,145,75,0.15)",
              border: "1px solid rgba(193,145,75,0.3)",
              color: "#c1914b",
              fontFamily: "var(--font-syne)",
              letterSpacing: "0.05em",
            }}
          >
            EC
          </div>
          <span
            style={{
              fontFamily: "var(--font-syne)",
              fontWeight: 700,
              fontSize: "0.9375rem",
              color: "#f0ece4",
              letterSpacing: "-0.01em",
            }}
          >
            Everist Consulting
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "0.875rem",
                fontWeight: 400,
                padding: "6px 14px",
                borderRadius: "6px",
                color: pathname === l.href ? "#f0ece4" : "#9a9590",
                background:
                  pathname === l.href
                    ? "rgba(240,236,228,0.07)"
                    : "transparent",
                transition: "color 0.15s, background 0.15s",
              }}
              onMouseEnter={(e) => {
                if (pathname !== l.href) {
                  (e.target as HTMLElement).style.color = "#f0ece4";
                }
              }}
              onMouseLeave={(e) => {
                if (pathname !== l.href) {
                  (e.target as HTMLElement).style.color = "#9a9590";
                }
              }}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <Link
          href="/contact"
          className="hidden md:block"
          style={{
            fontFamily: "var(--font-syne)",
            fontSize: "0.75rem",
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            padding: "9px 20px",
            background: "#c1914b",
            color: "#0f1117",
            borderRadius: "6px",
            transition: "background 0.15s",
          }}
          onMouseEnter={(e) =>
            ((e.target as HTMLElement).style.background = "#d4a45e")
          }
          onMouseLeave={(e) =>
            ((e.target as HTMLElement).style.background = "#c1914b")
          }
        >
          Book a Call
        </Link>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span
            className="block w-5 h-px transition-all duration-200"
            style={{
              background: "#f0ece4",
              transform: open ? "rotate(45deg) translate(3px, 3px)" : "none",
            }}
          />
          <span
            className="block w-5 h-px"
            style={{
              background: "#f0ece4",
              opacity: open ? 0 : 1,
              transition: "opacity 0.2s",
            }}
          />
          <span
            className="block w-5 h-px transition-all duration-200"
            style={{
              background: "#f0ece4",
              transform: open ? "rotate(-45deg) translate(3px, -3px)" : "none",
            }}
          />
        </button>
      </PageShell>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-1"
          style={{ borderTop: "1px solid rgba(240,236,228,0.06)" }}
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "0.9375rem",
                fontWeight: 400,
                padding: "10px 12px",
                borderRadius: "6px",
                color: pathname === l.href ? "#f0ece4" : "#9a9590",
                background:
                  pathname === l.href
                    ? "rgba(240,236,228,0.07)"
                    : "transparent",
              }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              padding: "12px 20px",
              background: "#c1914b",
              color: "#0f1117",
              borderRadius: "6px",
              textAlign: "center",
              marginTop: "8px",
            }}
          >
            Book a Call
          </Link>
        </div>
      )}
    </nav>
  );
}

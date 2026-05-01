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

const logoSvg = `<svg viewBox="0 0 1800 700" xmlns="http://www.w3.org/2000/svg">
  <g transform="translate(70 70) scale(0.56)" fill="#111111">
    <rect x="0" y="0" width="170" height="1000"/>
    <rect x="0" y="830" width="1000" height="170"/>
    <rect x="830" y="300" width="170" height="700"/>
    <rect x="0" y="0" width="700" height="170"/>
    <rect x="280" y="280" width="120" height="440"/>
    <rect x="280" y="280" width="440" height="120"/>
    <rect x="280" y="440" width="280" height="120"/>
    <rect x="280" y="600" width="360" height="120"/>
  </g>
  <g font-family="'Inter Tight','Inter','Helvetica Neue',Arial,sans-serif" fill="#111111">
    <text x="720" y="340" font-size="170" font-weight="700" letter-spacing="-4">EVERIST</text>
    <text x="720" y="470" font-size="96" font-weight="500" letter-spacing="6">CONSULTING</text>
  </g>
</svg>`;

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="fixed left-0 right-0 top-0 z-50"
      style={{
        background: "var(--bg)",
        borderBottom: "1px solid var(--rule-strong)",
      }}
    >
      <PageShell className="flex h-20 items-center justify-between">
        <Link
          href="/"
          aria-label="Everist Consulting home"
          className="flex shrink-0 items-center"
          onClick={() => setOpen(false)}
        >
          <span
            className="block w-[148px] sm:w-[180px] [&>svg]:block [&>svg]:h-auto [&>svg]:w-full"
            dangerouslySetInnerHTML={{ __html: logoSvg }}
          />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  color: active ? "var(--text-primary)" : "var(--text-secondary)",
                  fontSize: "0.875rem",
                  fontWeight: active ? 600 : 500,
                  letterSpacing: "-0.01em",
                  lineHeight: 1,
                  textDecoration: "none",
                }}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            style={{
              color: "var(--accent)",
              fontSize: "0.875rem",
              fontWeight: 600,
              letterSpacing: "-0.01em",
              lineHeight: 1,
              textDecoration: "none",
            }}
          >
            Book a Call
          </Link>
        </div>

        <button
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
          type="button"
          style={{ color: "var(--text-primary)" }}
        >
          <span
            className="block h-px w-5 transition-transform duration-200"
            style={{
              background: "currentColor",
              transform: open ? "rotate(45deg) translate(3px, 3px)" : "none",
            }}
          />
          <span
            className="block h-px w-5"
            style={{
              background: open ? "transparent" : "currentColor",
            }}
          />
          <span
            className="block h-px w-5 transition-transform duration-200"
            style={{
              background: "currentColor",
              transform: open ? "rotate(-45deg) translate(3px, -3px)" : "none",
            }}
          />
        </button>
      </PageShell>

      {open && (
        <div
          className="md:hidden"
          style={{
            background: "var(--bg)",
            borderTop: "1px solid var(--rule-strong)",
          }}
        >
          <PageShell className="flex flex-col gap-5 py-6">
            {links.map((link) => {
              const active = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  style={{
                    color: active ? "var(--text-primary)" : "var(--text-secondary)",
                    fontSize: "1rem",
                    fontWeight: active ? 600 : 500,
                    letterSpacing: "-0.01em",
                    lineHeight: 1,
                    textDecoration: "none",
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              style={{
                color: "var(--accent)",
                fontSize: "1rem",
                fontWeight: 600,
                letterSpacing: "-0.01em",
                lineHeight: 1,
                textDecoration: "none",
              }}
            >
              Book a Call
            </Link>
          </PageShell>
        </div>
      )}
    </nav>
  );
}

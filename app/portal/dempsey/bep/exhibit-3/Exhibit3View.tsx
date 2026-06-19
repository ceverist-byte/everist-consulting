'use client';

import { useState, useEffect, useCallback } from 'react';

// ─── Slide data ───────────────────────────────────────────────────────────────

const SLIDES = [
  {
    label: 'Level 1',
    note: 'Reference level. Origin markers and shaft heads only.',
    src: '/portal/dempsey/exhibit3/exhibit3-L1.png',
    alt: 'Exhibit 3, Level 1, located study map',
  },
  {
    label: 'Level 2',
    note: '',
    src: '/portal/dempsey/exhibit3/exhibit3-L2.png',
    alt: 'Exhibit 3, Level 2, located study map',
  },
  {
    label: 'Level 3',
    note: '',
    src: '/portal/dempsey/exhibit3/exhibit3-L3.png',
    alt: 'Exhibit 3, Level 3, located study map',
  },
  {
    label: 'Level 4',
    note: '',
    src: '/portal/dempsey/exhibit3/exhibit3-L4.png',
    alt: 'Exhibit 3, Level 4, located study map',
  },
  {
    label: 'Roof',
    note: 'Reference level. Origin markers and shaft heads only.',
    src: '/portal/dempsey/exhibit3/exhibit3-roof.png',
    alt: 'Exhibit 3, Roof, located study map',
  },
] as const;

// ─── Legend data ──────────────────────────────────────────────────────────────

const COLOR_KEY = [
  { name: 'Refrigerant',           code: 'RF', stroke: '#0F6E56', fill: '#E1F5EE', text: '#085041' },
  { name: 'Exhaust',               code: 'EX', stroke: '#993C1D', fill: '#FAECE7', text: '#712B13' },
  { name: 'Fan coils',             code: 'FC', stroke: '#3B6D11', fill: '#EAF3DE', text: '#27500A' },
  { name: 'Penetrations',          code: 'PN', stroke: '#534AB7', fill: '#EEEDFE', text: '#3C3489' },
  { name: 'Fire',                  code: 'FR', stroke: '#A32D2D', fill: '#FCEBEB', text: '#791F1F' },
  { name: 'Structure / reference', code: '',   stroke: '#5F5E5A', fill: '#F1EFE8', text: '#2C2C2A' },
] as const;

// Priority bars — longest to shortest, bar color = stroke
const PRIORITY_BARS = [
  { code: 'RF', name: 'Refrigerant',  stroke: '#0F6E56', ratio: 21 },
  { code: 'EX', name: 'Exhaust',      stroke: '#993C1D', ratio: 16 },
  { code: 'FC', name: 'Fan coils',    stroke: '#3B6D11', ratio: 13 },
  { code: 'FR', name: 'Fire',         stroke: '#A32D2D', ratio:  9 },
  { code: 'PN', name: 'Penetrations', stroke: '#534AB7', ratio:  6 },
] as const;

const MAX_RATIO = 21;

// ─── Design tokens ────────────────────────────────────────────────────────────

const MONO = "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Consolas, monospace";
const SANS = "'Inter Tight', 'Inter', 'Helvetica Neue', Arial, sans-serif";
const DIV  = '#D8D4CB';
const TEXT = '#111111';
const SEC  = '#4F4A43';
const MUT  = '#6A6861';
const BRONZE = '#8A642C';

// ─── Legend pane ──────────────────────────────────────────────────────────────

function LegendPane() {
  return (
    <aside
      aria-label="Exhibit 3 legend"
      style={{ fontFamily: SANS, minWidth: 220 }}
    >
      {/* Color key */}
      <p style={{
        fontFamily: MONO, fontSize: 10, letterSpacing: '0.14em',
        textTransform: 'uppercase', color: MUT, margin: '0 0 10px',
      }}>
        Color key
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 7, marginBottom: 28 }}>
        {COLOR_KEY.map(sys => (
          <div key={sys.name} style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
            {/* Color chip */}
            <div
              aria-hidden="true"
              style={{
                width: 22, height: 14, flexShrink: 0, borderRadius: 1,
                background: sys.fill,
                border: `2px solid ${sys.stroke}`,
              }}
            />
            <span style={{ fontSize: 12, color: TEXT, flex: 1, lineHeight: 1.25 }}>
              {sys.name}
            </span>
            {sys.code && (
              <span style={{ fontFamily: MONO, fontSize: 9, color: MUT, flexShrink: 0 }}>
                {sys.code}
              </span>
            )}
          </div>
        ))}

        {/* Constraint key — hatch swatch */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 9, paddingTop: 6, borderTop: `1px solid ${DIV}`, marginTop: 2 }}>
          <svg
            width="22"
            height="14"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            style={{ flexShrink: 0, marginTop: 1 }}
          >
            <defs>
              <pattern
                id="ex3-hatch"
                patternUnits="userSpaceOnUse"
                width="4"
                height="4"
                patternTransform="rotate(45)"
              >
                <line x1="0" y1="0" x2="0" y2="4" stroke="#5F5E5A" strokeWidth="1.2" />
              </pattern>
            </defs>
            <rect width="22" height="14" fill="url(#ex3-hatch)" rx="1" />
          </svg>
          <span style={{ fontSize: 11, color: SEC, lineHeight: 1.35 }}>
            Infilled lightwell, structural constraint
          </span>
        </div>
      </div>

      {/* Priority bars */}
      <p style={{
        fontFamily: MONO, fontSize: 10, letterSpacing: '0.14em',
        textTransform: 'uppercase', color: MUT, margin: '0 0 2px',
      }}>
        Relative priority
      </p>
      <p style={{
        fontFamily: MONO, fontSize: 8.5, letterSpacing: '0.08em',
        textTransform: 'uppercase', color: MUT, margin: '0 0 12px',
      }}>
        Approximate
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {PRIORITY_BARS.map(b => (
          <div key={b.code} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{
              fontFamily: MONO, fontSize: 9.5, color: SEC,
              width: 24, flexShrink: 0, lineHeight: 1,
            }}>
              {b.code}
            </span>
            <div
              role="meter"
              aria-label={`${b.name} relative priority`}
              aria-valuenow={b.ratio}
              aria-valuemin={0}
              aria-valuemax={MAX_RATIO}
              style={{
                height: 8,
                background: b.stroke,
                width: `${(b.ratio / MAX_RATIO) * 100}%`,
                borderRadius: 1,
                minWidth: 4,
              }}
            />
          </div>
        ))}
      </div>
    </aside>
  );
}

// ─── Carousel ─────────────────────────────────────────────────────────────────

export default function Exhibit3View() {
  const [current, setCurrent] = useState(0);
  const total = SLIDES.length;

  const prev = useCallback(
    () => setCurrent(i => Math.max(0, i - 1)),
    []
  );
  const next = useCallback(
    () => setCurrent(i => Math.min(total - 1, i + 1)),
    [total]
  );

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      // Only fire if no input/textarea has focus
      const tag = (e.target as HTMLElement).tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA') return;
      if (e.key === 'ArrowLeft')  prev();
      if (e.key === 'ArrowRight') next();
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [prev, next]);

  const slide = SLIDES[current];

  return (
    <div>
      {/* Screen-reader live region — announces floor label on slide change */}
      <div
        role="status"
        aria-live="polite"
        aria-atomic="true"
        style={{
          position: 'absolute', width: 1, height: 1,
          overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap',
        }}
      >
        {slide.label}, slide {current + 1} of {total}
      </div>

      {/* Responsive grid: single column → two-column at 700px */}
      <div className="ex3-grid">

        {/* — Left: carousel — */}
        <section
          role="region"
          aria-roledescription="carousel"
          aria-label="Floor plan carousel"
        >
          {/* Slide image */}
          <div
            role="group"
            aria-roledescription="slide"
            aria-label={slide.alt}
            style={{
              background: '#FFFFFF',
              border: `1px solid ${DIV}`,
              position: 'relative',
              minHeight: 280,
              lineHeight: 0,
              overflow: 'hidden',
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              key={slide.src}
              src={slide.src}
              alt={slide.alt}
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>

          {/* Controls row */}
          <div style={{
            display: 'flex', alignItems: 'center',
            justifyContent: 'space-between', marginTop: 12, gap: 12,
          }}>
            <button
              onClick={prev}
              aria-label={`Previous floor${current === 0 ? ' (at first floor)' : ''}`}
              aria-disabled={current === 0}
              style={{
                fontFamily: MONO, fontSize: 18, lineHeight: 1,
                color: current === 0 ? DIV : BRONZE,
                background: 'none', border: 'none', cursor: current === 0 ? 'default' : 'pointer',
                padding: '4px 10px',
              }}
            >
              &#8592;
            </button>

            {/* Floor label */}
            <div style={{ textAlign: 'center', flex: 1 }}>
              <div style={{
                fontFamily: SANS, fontSize: 15, fontWeight: 700,
                letterSpacing: '-0.01em', color: TEXT,
              }}>
                {slide.label}
              </div>
              {slide.note && (
                <div style={{
                  fontFamily: MONO, fontSize: 9, letterSpacing: '0.08em',
                  color: MUT, marginTop: 3, textTransform: 'uppercase',
                }}>
                  {slide.note}
                </div>
              )}
            </div>

            <button
              onClick={next}
              aria-label={`Next floor${current === total - 1 ? ' (at last floor)' : ''}`}
              aria-disabled={current === total - 1}
              style={{
                fontFamily: MONO, fontSize: 18, lineHeight: 1,
                color: current === total - 1 ? DIV : BRONZE,
                background: 'none', border: 'none', cursor: current === total - 1 ? 'default' : 'pointer',
                padding: '4px 10px',
              }}
            >
              &#8594;
            </button>
          </div>

          {/* Position indicator */}
          <div
            role="tablist"
            aria-label="Floor selector"
            style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 12 }}
          >
            {SLIDES.map((s, i) => (
              <button
                key={s.label}
                role="tab"
                aria-selected={i === current}
                aria-label={s.label}
                onClick={() => setCurrent(i)}
                style={{
                  width: 8, height: 8, borderRadius: '50%',
                  border: 'none', padding: 0, cursor: 'pointer',
                  background: i === current ? BRONZE : DIV,
                  transition: 'background 0.15s',
                  flexShrink: 0,
                }}
              />
            ))}
          </div>
        </section>

        {/* — Right: legend — */}
        <LegendPane />
      </div>

      {/* Responsive grid style injected via <style> */}
      <style>{`
        .ex3-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
          align-items: start;
        }
        @media (min-width: 700px) {
          .ex3-grid {
            grid-template-columns: minmax(0, 1fr) 260px;
          }
        }
      `}</style>
    </div>
  );
}

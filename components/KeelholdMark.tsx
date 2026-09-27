"use client";

// Keelhold(TM) by Everist-Labs: the binding mark.
// Wordless. Rows carry rings; a ring fills with a bronze disc; when every ring in a
// row is filled, the row binds into one bar. An ink hairline marks the handoff.
// Same geometry and palette as the print masters (keelhold-mark.svg). Fixed palette:
// never recolor.
//
// <KeelholdMark />              animated: plays in view, rests bound, fades, loops,
//                               with a Pause/Play control (WCAG 2.2.2).
// <KeelholdMark animated={false} />   still: the signature frame (two rows bound,
//                               three discs, one open ink ring). Also what animated
//                               mode shows under prefers-reduced-motion.

import { useEffect, useRef, useState } from "react";

const BRONZE = "#8A642C";
const INK = "#111111";
const RULE = "#D8D4CB";

const COLS = [40, 120, 200, 280];
const ROWS = [30, 80, 130, 194, 244];
const HANDOFF_Y = 162;
const W = 320;
const H = 274;
const R = 12;
const SW = 1.5;
const DISC = 9.5;
const BAR_H = 2 * (R + SW / 2) + 1;
const CARRIES = [[0, 1], [0, 1, 3], [0, 1, 2, 3], [1, 2, 3], [0, 2]];
const FIRST_AFTER_HANDOFF = 3;

const STEPS = CARRIES.flatMap((cols, r) => cols.map((c) => ({ r, c })));
const SIGNATURE_N = 8;

const T_START = 600;
const T_STEP = 480;
const T_HOLD = 1500;
const T_NEXT_ROW = 850;
const T_HANDOFF = 1600;
const T_REST = 4000;
const T_FADE = 700;

function delayBefore(n: number): number {
  if (n === 0) return T_START;
  if (n >= STEPS.length) return T_REST;
  const s = STEPS[n];
  const p = STEPS[n - 1];
  if (s.r !== p.r) return s.r === FIRST_AFTER_HANDOFF ? T_HANDOFF : T_NEXT_ROW;
  return s.c === CARRIES[s.r][CARRIES[s.r].length - 1] ? T_HOLD : T_STEP;
}

const css = `
.kh-disc { transform-box: fill-box; transform-origin: center; animation: kh-drop 380ms cubic-bezier(.2,.8,.3,1.2) both; }
@keyframes kh-drop { from { transform: translateY(-18px) scale(.4); opacity: 0; } to { transform: none; opacity: 1; } }
.kh-bar { transform-box: fill-box; transform-origin: left center; transition: transform 520ms cubic-bezier(.3,.7,.2,1); }
.kh-ring { transition: stroke 300ms ease; }
.kh-under { transition: opacity 200ms ease 480ms; }
.kh-field { transition: opacity ${T_FADE}ms ease; }
.kh-still .kh-disc { animation: none; }
.kh-still .kh-bar, .kh-still .kh-ring, .kh-still .kh-under { transition: none; }
.kh-ctl { font: inherit; font-size: 0.8125rem; color: var(--text-secondary); background: none; border: 0; padding: 0; cursor: pointer; text-decoration: underline; text-underline-offset: 3px; }
.kh-ctl:hover { color: var(--text-primary); }
.kh-ctl:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }
@media (prefers-reduced-motion: reduce) {
  .kh-disc { animation: none; }
  .kh-bar, .kh-ring, .kh-field, .kh-under { transition: none; }
}
`;

type Props = { animated?: boolean; maxWidth?: number };

export default function KeelholdMark({ animated = true, maxWidth = 420 }: Props) {
  const [n, setN] = useState(animated ? 0 : SIGNATURE_N);
  const [fading, setFading] = useState(false);
  const [inView, setInView] = useState(false);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const moving = animated && !reduced;

  useEffect(() => {
    if (!animated) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      setReduced(mq.matches);
      if (mq.matches) setN(SIGNATURE_N);
    };
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, [animated]);

  useEffect(() => {
    if (!animated) return;
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, [animated]);

  useEffect(() => {
    if (!moving || paused || !inView) return;
    if (fading) {
      const t = window.setTimeout(() => {
        setN(0);
        setFading(false);
      }, T_FADE);
      return () => window.clearTimeout(t);
    }
    const t = window.setTimeout(() => {
      if (n >= STEPS.length) setFading(true);
      else setN(n + 1);
    }, delayBefore(n));
    return () => window.clearTimeout(t);
  }, [n, fading, inView, paused, moving]);

  const filled = new Set(STEPS.slice(0, n).map((s) => `${s.r}:${s.c}`));
  const bound = (r: number) => CARRIES[r].every((c) => filled.has(`${r}:${c}`));
  const active = CARRIES.findIndex((_, r) => !bound(r));

  return (
    <div ref={rootRef} className={moving ? undefined : "kh-still"} style={{ maxWidth: `${maxWidth}px` }}>
      <style>{css}</style>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        role="img"
        aria-label="Keelhold mark: rows of rings fill and bind into solid bars once every ring in a row is filled, above and below a handoff line."
        style={{ display: "block", width: "100%", height: "auto", overflow: "visible" }}
      >
        <g className="kh-field" style={{ opacity: fading ? 0 : 1 }}>
          {CARRIES.map((cols, r) => {
            const y = ROWS[r];
            const isBound = bound(r);
            const waiting = active !== -1 && r > active;
            const x0 = COLS[cols[0]];
            const x1 = COLS[cols[cols.length - 1]];
            return (
              <g key={r}>
                {cols.map((c) => {
                  const x = COLS[c];
                  const on = filled.has(`${r}:${c}`);
                  const stroke = on ? BRONZE : waiting ? RULE : INK;
                  return (
                    <g key={c} className="kh-under" style={{ opacity: isBound ? 0 : 1 }}>
                      <circle className="kh-ring" cx={x} cy={y} r={R} fill="none" stroke={stroke} strokeWidth={SW} />
                      {on && <circle className="kh-disc" cx={x} cy={y} r={DISC} fill={BRONZE} />}
                    </g>
                  );
                })}
                <rect
                  className="kh-bar"
                  x={x0 - BAR_H / 2}
                  y={y - BAR_H / 2}
                  width={x1 - x0 + BAR_H}
                  height={BAR_H}
                  rx={BAR_H / 2}
                  fill={BRONZE}
                  style={{ transform: isBound ? "scaleX(1)" : "scaleX(0)" }}
                />
              </g>
            );
          })}
        </g>
        <line x1={0} y1={HANDOFF_Y} x2={W} y2={HANDOFF_Y} stroke={INK} strokeWidth={1} />
      </svg>
      {moving && (
        <div style={{ marginTop: "12px" }}>
          <button type="button" className="kh-ctl" aria-pressed={paused} onClick={() => setPaused((p) => !p)}>
            {paused ? "Play" : "Pause"}
          </button>
        </div>
      )}
    </div>
  );
}

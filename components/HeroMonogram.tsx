"use client";

// EC monogram — same rect geometry as the nav/portal mark, rendered at ~100px.
// On load it draws once via a stroke sweep (dasharray/offset, ~1.4s), then the
// fill settles in. Under prefers-reduced-motion it renders static and filled.

const rects = [
  { x: 0, y: 0, width: 170, height: 1000 },
  { x: 0, y: 830, width: 1000, height: 170 },
  { x: 830, y: 300, width: 170, height: 700 },
  { x: 0, y: 0, width: 700, height: 170 },
  { x: 280, y: 280, width: 120, height: 440 },
  { x: 280, y: 280, width: 440, height: 120 },
  { x: 280, y: 440, width: 280, height: 120 },
  { x: 280, y: 600, width: 360, height: 120 },
];

export default function HeroMonogram({ size = 100 }: { size?: number }) {
  return (
    <span
      className="ec-monogram"
      style={{ display: "inline-block", width: size, height: size }}
      aria-hidden="true"
    >
      <style>{`
        .ec-monogram svg { display: block; width: 100%; height: 100%; }
        .ec-monogram rect {
          fill: var(--fg);
          stroke: var(--fg);
          stroke-width: 8;
          fill-opacity: 0;
          stroke-dasharray: 1;
          stroke-dashoffset: 1;
          animation:
            ec-draw 1.4s cubic-bezier(0.65, 0, 0.35, 1) forwards,
            ec-fill 0.5s ease 1.05s forwards;
        }
        @keyframes ec-draw { to { stroke-dashoffset: 0; } }
        @keyframes ec-fill { to { fill-opacity: 1; } }
        @media (prefers-reduced-motion: reduce) {
          .ec-monogram rect {
            animation: none;
            stroke-dashoffset: 0;
            fill-opacity: 1;
          }
        }
      `}</style>
      <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
        {rects.map((r, i) => (
          <rect key={i} {...r} pathLength={1} />
        ))}
      </svg>
    </span>
  );
}

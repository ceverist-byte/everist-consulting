import { ImageResponse } from "next/og";

export const alt = "Everist Consulting";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Same rect geometry as the nav wordmark's EC monogram (components/Nav.tsx)
// — kept identical so the mark reads the same
// everywhere it appears.
const monogramRects = [
  { x: 0, y: 0, width: 170, height: 1000 },
  { x: 0, y: 830, width: 1000, height: 170 },
  { x: 830, y: 300, width: 170, height: 700 },
  { x: 0, y: 0, width: 700, height: 170 },
  { x: 280, y: 280, width: 120, height: 440 },
  { x: 280, y: 280, width: 440, height: 120 },
  { x: 280, y: 440, width: 280, height: 120 },
  { x: 280, y: 600, width: 360, height: 120 },
];

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#F3F0EA",
        }}
      >
        <svg width="150" height="150" viewBox="0 0 1000 1000" fill="#8A642C">
          {monogramRects.map((r, i) => (
            <rect key={i} x={r.x} y={r.y} width={r.width} height={r.height} />
          ))}
        </svg>
        <div
          style={{
            marginTop: 44,
            fontSize: 58,
            fontWeight: 700,
            letterSpacing: "-0.02em",
            color: "#111111",
          }}
        >
          Everist Consulting
        </div>
      </div>
    ),
    { ...size }
  );
}

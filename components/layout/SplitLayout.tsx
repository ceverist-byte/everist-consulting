import type { ReactNode } from "react";

type SplitLayoutProps = {
  left: ReactNode;
  right: ReactNode;
  className?: string;
};

export default function SplitLayout({
  left,
  right,
  className = "",
}: SplitLayoutProps) {
  return (
    <div
      className={`grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,1fr)_480px] lg:gap-16 ${className}`.trim()}
    >
      <div className="min-w-0">{left}</div>
      <div className="min-w-0">{right}</div>
    </div>
  );
}

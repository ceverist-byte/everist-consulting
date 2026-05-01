import type { ReactNode } from "react";

type ContentCardProps = {
  children: ReactNode;
  className?: string;
};

export default function ContentCard({
  children,
  className = "",
}: ContentCardProps) {
  return (
    <div
      className={`rounded-[2px] border border-[var(--rule)] bg-[var(--bg)] p-5 md:p-6 ${className}`.trim()}
    >
      {children}
    </div>
  );
}

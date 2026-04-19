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
      className={`rounded-[12px] border border-[rgba(240,236,228,0.08)] bg-[rgba(240,236,228,0.025)] p-6 md:p-8 ${className}`.trim()}
    >
      {children}
    </div>
  );
}

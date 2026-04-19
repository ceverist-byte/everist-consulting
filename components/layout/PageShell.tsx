import type { ReactNode } from "react";

type PageShellProps = {
  children: ReactNode;
  className?: string;
};

export default function PageShell({
  children,
  className = "",
}: PageShellProps) {
  return (
    <div className={`mx-auto w-full max-w-[1280px] px-6 ${className}`.trim()}>
      {children}
    </div>
  );
}

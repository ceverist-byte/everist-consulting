import type { Metadata } from "next";
import FieldClient from "./FieldClient";

export const metadata: Metadata = {
  title: "Field",
  description:
    "A short set of questions about how your projects reach the field.",
};

export default function FieldPage() {
  return (
    <section className="bg-[var(--bg)] pb-24 pt-32">
      <div className="mx-auto w-full max-w-[720px] px-6">
        <FieldClient />
      </div>
    </section>
  );
}

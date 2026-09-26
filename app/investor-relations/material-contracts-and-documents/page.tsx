import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Material Contracts and Documents",
  description: "Material Contracts and Documents — Sona Selection India Limited.",
};

export default function MaterialContractsAndDocumentsPage() {
  return (
    <main className="bg-[#FFFBF0]">
      <section className="bg-[#022050] py-14 md:py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#FF6333]">
            Investor Relations
          </p>
          <h1 className="max-w-4xl text-4xl font-normal leading-tight text-[#FFFBF0] md:text-5xl">
            Material Contracts and Documents
          </h1>
        </div>
      </section>

    </main>
  );
}

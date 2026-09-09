import type { Metadata } from "next";
import BoardProfiles from "@/components/sections/investor/BoardProfiles";
import { boardMembers } from "@/lib/constants/investor-relations";

export const metadata: Metadata = {
  title: "Board of Directors & KMP",
  description:
    "Meet the Board of Directors and Key Managerial Personnel of Sona Selection India Limited.",
};

export default function BoardAndKmpPage() {
  return (
    <main className="bg-[#FFFBF0]">
      <section className="relative overflow-hidden bg-[#022050] py-16 md:py-20 lg:py-24">
        <div
          aria-hidden="true"
          className="absolute -right-20 -top-32 h-80 w-80 rounded-full border border-[#FF6333]/25"
        />
        <div
          aria-hidden="true"
          className="absolute -right-4 -top-16 h-56 w-56 rounded-full border border-[#FF6333]/20"
        />
        <div className="container relative mx-auto px-6 lg:px-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#FF6333]">
            Corporate Governance
          </p>
          <h1 className="max-w-4xl text-4xl font-normal leading-tight text-[#FFFBF0] sm:text-5xl lg:text-6xl">
            Board of Directors &amp; KMP
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[#FFFBF0]/75 md:text-lg">
            Meet the experienced leaders responsible for our strategic direction,
            governance and operational excellence.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="mb-10 max-w-2xl md:mb-14">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#FF6333]">
              Our Leadership
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#022050] md:text-4xl">
              Board Members &amp; Key Managerial Personnel
            </h2>
          </div>
          <BoardProfiles members={boardMembers} />
        </div>
      </section>
    </main>
  );
}

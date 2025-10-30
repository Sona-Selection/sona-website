import { Button } from "@/components/ui/button";
import { PoliciesSection } from "@/lib/types";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

interface PoliciesProps {
  data: PoliciesSection;
}

/**
 * Policies & Governance Section Component
 * Displays company policies and governance documents
 * @param {PoliciesSection} data - Policies section content
 */
export default function Policies({ data }: PoliciesProps) {
  return (
    <section className="bg-[#FFFBF0] py-12 md:py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#1C140D] mb-8 md:mb-12">
          {data.title}
        </h2>

        {/* Policies List */}
        <div className="flex flex-col gap-2 md:gap-3 mb-8 md:mb-12">
          {data.policies.map((policy, index) => (
            <div key={index}>
              {index === data.policies.length - 1 ? (
                <Link
                  href={policy.href}
                  className="group inline-flex items-center gap-1 text-base md:text-lg text-[#022050] hover:text-[#FF6333] transition-colors"
                >
                  <span className="border-b border-current">
                    {policy.title}
                  </span>
                  <ExternalLink className="w-4 h-4 shrink-0" />
                </Link>
              ) : (
                <p className="text-base md:text-lg text-[#1C140D] leading-relaxed tracking-tight">
                  {policy.title}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <Button asChild variant="navy" size="lg">
          <Link href={data.ctaHref}>{data.ctaLabel}</Link>
        </Button>
      </div>
    </section>
  );
}

import { Button } from "@/components/ui/button";
import { IPOCornerSection } from "@/lib/types";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

interface IPOCornerProps {
  data: IPOCornerSection;
}

/**
 * IPO Corner Section Component
 * Displays IPO-related documents and links
 * @param {IPOCornerSection} data - IPO section content
 */
export default function IPOCorner({ data }: IPOCornerProps) {
  return (
    <section
      className="bg-[#FFFBF0] py-12 md:py-16 lg:py-24"
      data-figma-node="0:414"
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#1C140D] mb-8 md:mb-12">
          {data.title}
        </h2>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">
          {data.documents.map((doc, index) => (
            <div key={index} className="flex flex-col gap-2 md:gap-3">
              <p className="text-base md:text-lg text-[#1C140D] leading-relaxed tracking-tight">
                {doc.title}
              </p>
              <Link
                href={doc.href}
                className="group inline-flex items-center gap-1 text-sm md:text-base text-[#022050] hover:text-[#FF6333] transition-colors w-fit"
              >
                <span className="border-b border-current">
                  {index === 0
                    ? "Download PDF"
                    : index === 1
                    ? "Download PDF"
                    : index === 2
                    ? "View Addenda"
                    : "Download"}
                </span>
                <ExternalLink className="w-4 h-4 shrink-0" />
              </Link>
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

import { Button } from "@/components/ui/button";
import { IPOCornerSection } from "@/lib/types";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

interface GroupCompanyProps {
  data: IPOCornerSection;
}

/**
 * Group Company Disclosures Section Component
 * Displays links to group company information
 * @param {IPOCornerSection} data - Group company section content
 */
export default function GroupCompany({ data }: GroupCompanyProps) {
  return (
    <section className="bg-[#FFFBF0] py-12 md:py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#1C140D] mb-8 md:mb-12">
          {data.title}
        </h2>

        {/* Documents */}
        <div className="flex flex-col gap-3 md:gap-4 mb-8 md:mb-12">
          {data.documents.map((doc, index) => (
            <div key={index} className="flex flex-col gap-2">
              <p className="text-base md:text-lg text-[#1C140D] leading-relaxed tracking-tight">
                {doc.title}
              </p>
              <Link
                href={doc.href}
                className="group inline-flex items-center gap-1 text-sm md:text-base text-[#022050] hover:text-[#FF6333] transition-colors w-fit"
              >
                <span className="border-b border-current">
                  Explore {doc.title}
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

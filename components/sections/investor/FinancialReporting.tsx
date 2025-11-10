"use client";

import { Button } from "@/components/ui/button";
import { FinancialReportingSection } from "@/lib/types";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { colors } from "@/lib/theme/colors";

interface FinancialReportingProps {
  data: FinancialReportingSection;
}

/**
 * Financial Reporting Section Component
 * Displays financial documents and reports organized by category
 * @param {FinancialReportingSection} data - Financial reporting section content
 */
export default function FinancialReporting({ data }: FinancialReportingProps) {
  return (
    <section className="py-12 md:py-16 lg:py-24" style={{ backgroundColor: colors.cream }}>
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 md:mb-12" style={{ color: colors.textBlack }}>
          {data.title}
        </h2>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">
          {data.categories.map((category, catIndex) => (
            <div key={catIndex} className="flex flex-col gap-3 md:gap-4">
              <h3 className="text-base md:text-lg leading-relaxed tracking-tight font-normal" style={{ color: colors.textBlack }}>
                {category.title}
              </h3>
              <div className="flex flex-col gap-2">
                {category.documents.map((doc, docIndex) => (
                  <Link
                    key={docIndex}
                    href={doc.href}
                    className="group inline-flex items-center gap-1 text-sm md:text-base transition-colors w-fit"
                    style={{ color: colors.navy }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = colors.primary)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = colors.navy)}
                  >
                    <span className="border-b border-current">{doc.title}</span>
                    <ExternalLink className="w-4 h-4 shrink-0" />
                  </Link>
                ))}
              </div>
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

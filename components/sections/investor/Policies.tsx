"use client";

import { Button } from "@/components/ui/button";
import { PoliciesSection } from "@/lib/types";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { colors } from "@/lib/theme/colors";

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
    <section className="py-12 md:py-16 lg:py-24" style={{ backgroundColor: colors.cream }}>
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 md:mb-12" style={{ color: colors.textBlack }}>
          {data.title}
        </h2>

        {/* Policies List */}
        <div className="flex flex-col gap-2 md:gap-3 mb-8 md:mb-12">
          {data.policies.map((policy, index) => (
            <div key={index}>
              {index === data.policies.length - 1 ? (
                <Link
                  href={policy.href}
                  className="group inline-flex items-center gap-1 text-base md:text-lg transition-colors"
                  style={{ color: colors.navy }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = colors.primary)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = colors.navy)}
                >
                  <span className="border-b border-current">
                    {policy.title}
                  </span>
                  <ExternalLink className="w-4 h-4 shrink-0" />
                </Link>
              ) : (
                <p className="text-base md:text-lg leading-relaxed tracking-tight" style={{ color: colors.textBlack }}>
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

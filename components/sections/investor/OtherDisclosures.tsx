import { Button } from "@/components/ui/button";
import Link from "next/link";
import { OtherDisclosuresSection } from "@/lib/types";

interface OtherDisclosuresProps {
  data: OtherDisclosuresSection;
}

/**
 * Other Disclosures Section Component
 * Displays miscellaneous investor disclosures and information
 * @param {OtherDisclosuresSection} data - Other disclosures section content
 */
export default function OtherDisclosures({ data }: OtherDisclosuresProps) {
  return (
    <section className="bg-[#FFFBF0] py-12 md:py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start md:items-end">
          {/* Left Side - Title and Badge */}
          <div className="flex-1 max-w-2xl">
            <div className="flex flex-col gap-4 md:gap-6">
              <h2 className="text-2xl sm:text-3xl md:text-3xl font-semibold text-black">
                {data.title}
              </h2>
              {data.badge && (
                <p className="text-base md:text-lg text-black leading-relaxed tracking-tight">
                  {data.badge}
                </p>
              )}
            </div>
            {/* CTA */}
            <div className="mt-8 md:mt-12">
              <Button asChild variant="navy" size="lg" className="w-fit">
                <Link href={data.ctaHref}>{data.ctaLabel}</Link>
              </Button>
            </div>
          </div>

          {/* Right Side - Items List */}
          <div className="flex-1 md:text-right">
            <div className="flex flex-col gap-2 md:gap-3 md:items-end">
              {data.items.map((item, index) => (
                <p
                  key={index}
                  className="text-base md:text-lg text-black leading-relaxed tracking-tight"
                >
                  {item.title}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

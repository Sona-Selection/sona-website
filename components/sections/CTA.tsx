import { Button } from "@/components/ui/button";
import { CTASection } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

interface CTAProps {
  data: CTASection;
}

/**
 * CTA Section Component
 * Full-width call-to-action with background image
 * @param {CTASection} data - CTA section content
 */
export default function CTA({ data }: CTAProps) {
  return (
    <section
      className="relative h-[500px] md:h-[669px] flex items-center justify-center overflow-hidden bg-[#FFFCF4]"
      data-figma-node="0:319"
    >
      {/* Background Image */}
      {data.backgroundImage && (
        <div className="absolute inset-0">
          <Image
            src={data.backgroundImage}
            alt=""
            fill
            className="object-cover"
            priority
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40" />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        <div className="flex flex-col items-center text-center gap-8 md:gap-12 max-w-[664px] mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-[64px] text-[#FFFCF4] leading-tight tracking-tight font-serif">
            {data.title}
          </h2>
          <Button asChild size="lg" className="px-8">
            <Link href={data.ctaHref}>{data.ctaLabel}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CapabilitiesSection } from "@/lib/types";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface CapabilitiesProps {
  data: CapabilitiesSection;
}

/**
 * Capabilities Section Component
 * Displays company capabilities in a 3-column grid
 * @param {CapabilitiesSection} data - Capabilities section content
 */
export default function Capabilities({ data }: CapabilitiesProps) {
  return (
    <section
      className="bg-[#FFFBF0] py-16 md:py-24"
      data-figma-node="0:91"
      id="capabilities"
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-6 md:gap-8 mb-12 md:mb-20">
          <Badge variant="section">{data.badge}</Badge>
          {/* <div className="flex flex-col items-center gap-4">
            <h2 className="text-4xl md:text-[64px] text-[#02244A] leading-tight tracking-tight font-serif">
              {data.title}
            </h2>
            <p className="text-base md:text-lg text-[#02244A] max-w-[669px] leading-relaxed tracking-tight">
              {data.description}
            </p>
          </div> */}
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-6 mb-12 md:mb-16">
          {data.capabilities.map((capability, index) => (
            <div key={index} className="flex flex-col gap-6">
              {/* Image Card */}
              <Card className="relative h-[350px] md:h-[588px] overflow-hidden rounded-xl border-0 shadow-none">
                <Image
                  src={capability.image}
                  alt={capability.title}
                  fill
                  className="object-cover"
                />
              </Card>

              {/* Text Content */}
              <div className="flex flex-col gap-3">
                <h3 className="text-2xl md:text-4xl text-[#1C140D] leading-tight">
                  {capability.title}
                </h3>
                <p className="text-base md:text-lg text-black leading-relaxed">
                  {capability.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Button asChild size="lg" className="px-8">
            <Link href={data.ctaHref}>{data.ctaLabel}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

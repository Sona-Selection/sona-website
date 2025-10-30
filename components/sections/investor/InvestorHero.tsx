import { Button } from "@/components/ui/button";
import Image from "next/image";
import { InvestorHeroSection } from "@/lib/types";
import Link from "next/link";

interface InvestorHeroProps {
  data: InvestorHeroSection;
}

/**
 * Investor Hero Section Component
 * Hero section for Investor Relations page with background image and CTAs
 * @param {InvestorHeroSection} data - Hero section content
 */
export default function InvestorHero({ data }: InvestorHeroProps) {
  return (
    <section
      className="relative min-h-[500px] md:min-h-[700px] lg:min-h-[772px] flex items-center justify-center overflow-hidden bg-[#022050]"
      data-figma-node="0:383"
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
      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-16 md:py-20">
        <div className="flex flex-col items-start max-w-[964px] gap-8 md:gap-[42px]">
          {/* Title and Subtitle */}
          <div className="flex flex-col gap-4 md:gap-[19px] text-[#FFFBF0]">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-normal leading-tight whitespace-pre-line">
              {data.title}
            </h1>
            <p className="text-sm md:text-base lg:text-lg max-w-[561px] leading-relaxed tracking-tight">
              {data.subtitle}
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-8 items-center w-full sm:w-auto">
            <Button
              asChild
              variant="cream"
              size="xl"
              className="w-full sm:w-auto"
            >
              <Link href={data.primaryCTA.href}>{data.primaryCTA.label}</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="xl"
              className="w-full sm:w-auto border-[#FBFBEF] text-[#FBFBEF] hover:bg-[#FBFBEF]/10"
            >
              <Link href={data.secondaryCTA.href}>
                {data.secondaryCTA.label}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

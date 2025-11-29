import { Button } from "@/components/ui/button";
import { HeroSection } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

interface HeroProps {
  data: HeroSection;
}

/**
 * Hero Section Component
 * Full-screen hero with background image, centered title, subtitle, and CTAs
 * @param {HeroSection} data - Hero section content and configuration
 */
export default function Hero({ data }: HeroProps) {
  return (
    <section
      className="relative min-h-[97vh] flex items-center justify-center overflow-hidden bg-[#FFFBF0]"
      data-figma-node="0:4"
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
          {/* Overlay texture */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
          {/* Blur effect for focus */}
          <div className="absolute inset-0 backdrop-blur-[2px]" />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-20">
        <div className="flex flex-col items-center text-center max-w-[964px] mx-auto gap-10 md:gap-[42px]">
          {/* Title and Subtitle */}
          <div className="flex flex-col items-center gap-4 md:gap-[19px] text-[#FFFBF0]">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal leading-tight whitespace-pre-line">
              {data.title}
            </h1>
            <p className="mt-4 md:mt-0 text-base md:text-lg max-w-[561px] leading-relaxed">
              {data.subtitle}
            </p>
          </div>

          {/* CTAs */}
          {(data.primaryCTA || data.secondaryCTA) && (
            <div className="flex flex-col sm:flex-row gap-4 md:gap-8 items-center w-full sm:w-auto">
              {data.primaryCTA && (
                <Button
                  asChild
                  variant="default"
                  size="xl"
                  className="w-full sm:w-auto"
                >
                  <Link href={data.primaryCTA.href}>
                    {data.primaryCTA.label}
                  </Link>
                </Button>
              )}
              {/* {data.secondaryCTA && (
                <Button
                  asChild
                  variant="outline"
                  size="xl"
                  className="w-full sm:w-auto"
                >
                  <Link href={data.secondaryCTA.href}>
                    {data.secondaryCTA.label}
                  </Link>
                </Button>
              )} */}
            </div>
          )}

          {/* Video Link */}
          {/* {data.videoLink && (
            <div className="mt-4">
              <Link
                href={data.videoLink}
                className="text-[#FF6333] hover:text-[#E55A3A] transition-colors text-sm md:text-[15px] tracking-tight"
              >
                Watch 1-min Intro Video
              </Link>
            </div>
          )} */}
        </div>
      </div>
    </section>
  );
}

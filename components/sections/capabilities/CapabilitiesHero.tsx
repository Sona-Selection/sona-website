import { Button } from "@/components/ui/button";
import { CapabilitiesHeroSection } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import { colors } from "@/lib/theme/colors";

interface CapabilitiesHeroProps {
  data: CapabilitiesHeroSection;
}

/**
 * Capabilities Hero Section Component
 * Hero section with background image, capacity cards, quality lab info, and facility partners
 * @param {CapabilitiesHeroSection} data - Hero section content
 */
export default function CapabilitiesHero({ data }: CapabilitiesHeroProps) {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image for Entire Section */}
      <div className="absolute inset-0">
        <Image
          src="/images/capabilties/hero/cover.png"
          alt="Manufacturing & Capabilities"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Text */}
        <div className="pt-20 md:pt-24 lg:pt-40 pb-24 md:pb-32 lg:pb-40">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-serif leading-tight mb-4"
              style={{ color: colors.navy }}
            >
              {data.title}
            </h1>
            <p
              className="text-base md:text-lg max-w-3xl mx-auto leading-relaxed"
              style={{ color: colors.navy }}
            >
              {data.description}
            </p>
          </div>
        </div>

        {/* Capacity Cards */}
        <div className="container mx-auto px-6 lg:px-12 relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-20 md:mb-24 lg:mb-28">
            {data.capacityCards.map((card, index) => (
              <div
                key={index}
                className="relative h-[280px] md:h-[320px] rounded-xl overflow-hidden group"
              >
                {/* Card Background Image */}
                <Image
                  src={card.image}
                  alt={card.label}
                  fill
                  className="object-cover"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />

                {/* Card Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <p className="text-white text-xs md:text-sm font-medium tracking-wider uppercase mb-2 opacity-90">
                    {card.label}
                  </p>
                  <h3 className="text-white text-2xl md:text-3xl font-semibold">
                    {card.value}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Quality Control Lab Section */}
          <div className="mb-8 md:mb-10 lg:mb-12">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              {/* Left: Badge, Title, Description */}
              <div className="flex-1">
                <p
                  className="text-xs md:text-sm font-semibold tracking-wider uppercase mb-3"
                  style={{ color: colors.navy }}
                >
                  {data.qualityLab.badge}
                </p>
                <h2
                  className="text-3xl md:text-4xl lg:text-4xl font-sans leading-tight mb-4 font-medium"
                  style={{ color: colors.navy }}
                >
                  {data.qualityLab.title}
                </h2>
                <div className="space-y-1">
                  {data.qualityLab.description.map((line, index) => (
                    <p
                      key={index}
                      className="text-base md:text-lg leading-relaxed"
                      style={{ color: colors.navy }}
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>

              {/* Right: CTA Button */}
              <div className="flex md:items-start md:pt-12">
                <Button
                  asChild
                  variant="navy"
                  size="lg"
                  className="font-semibold"
                >
                  <Link href={data.qualityLab.ctaHref}>
                    {data.qualityLab.ctaLabel}
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Facilities Section */}
          <div
            className="rounded-2xl p-8 md:p-12 lg:p-16"
            style={{ backgroundColor: "rgba(255, 224, 204, 0.6)" }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
              {data.facilities.map((facility, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center"
                >
                  {/* Facility Logo */}
                  <div className="relative w-full h-[80px] md:h-[100px] mb-4">
                    <Image
                      src={facility.logo}
                      alt={facility.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  {/* Facility Name and Country */}
                  <p
                    className="text-base md:text-lg font-medium"
                    style={{ color: colors.navy }}
                  >
                    {facility.country}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Padding */}
        <div className="pb-16 md:pb-20 lg:pb-24"></div>
      </div>
    </section>
  );
}

import { AboutUsHeroSection } from "@/lib/types";
import Image from "next/image";
import { colors } from "@/lib/theme/colors";

interface AboutUsHeroProps {
  data: AboutUsHeroSection;
}

/**
 * About Us Hero Section Component
 * Features split background (navy top, cream bottom) with overlapping hero image
 * @param {AboutUsHeroSection} data - Hero section content
 */
export default function AboutUsHero({ data }: AboutUsHeroProps) {
  return (
    <section className="relative overflow-hidden">
      {/* Right Image - Absolute positioned to match Figma design */}
      {/* Figma: left-[716px] top-[302px] w-[651px] h-[327px] on 1421px wide frame */}
      <div className="hidden lg:block absolute bg-white h-[327px] left-[50.4%] overflow-hidden rounded-[12px] top-[230px] w-[651px] z-[40]">
        <Image
          src={data.image}
          alt="Sona textile products"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Left Content - Stacked Sections */}
      <div className="relative z-10">
        {/* Navy Section - Title and Subtitle */}
        <div
          className="py-12 md:py-16 lg:py-26 relative overflow-hidden"
          style={{ backgroundColor: colors.navyDark }}
        >
          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="lg:w-1/2 lg:pr-12">
              <h1
                className="text-lg md:text-xl font-normal mb-2"
                style={{ color: colors.primary }}
              >
                {data.title}
              </h1>
              <p
                className="text-2xl md:text-3xl lg:text-[40px] font-light leading-tight mb-4 lg:whitespace-nowrap"
                style={{ color: colors.cream }}
              >
                {data.subtitle}
              </p>
              <p
                className="text-sm md:text-base"
                style={{ color: colors.cream }}
              >
                {data.foundingInfo}
              </p>
            </div>
          </div>
        </div>

        {/* Cream Section - Description */}
        <div
          className="py-12 md:py-16 lg:py-20"
          style={{ backgroundColor: colors.cream }}
        >
          <div className="container mx-auto px-6 lg:px-12">
            <div className="lg:w-1/2 lg:pr-12">
              {data.description.split('\n\n').map((paragraph, index) => (
                <p
                  key={index}
                  className="text-base md:text-lg leading-relaxed mb-6 last:mb-0"
                  style={{ color: colors.primary }}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Image - Below content on mobile */}
      <div className="lg:hidden relative h-[300px] md:h-[400px]">
        <Image
          src={data.image}
          alt="Sona textile products"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}

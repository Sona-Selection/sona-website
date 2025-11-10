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
      <div className="hidden lg:block absolute bg-white h-[327px] left-[50.4%] overflow-clip rounded-[12px] top-[230px] w-[651px] z-[40]">
        {/* Inner image wrapper with negative offsets for zoomed/cropped effect */}
        <div className="absolute h-[625.887px] left-[-148.5px] top-[-87.39px] w-[937px]">
          <Image
            src={data.image}
            alt="Sona textile products"
            fill
            className="object-cover object-[50%_50%]"
            priority
          />
        </div>
      </div>

      {/* Left Content - Stacked Sections */}
      <div className="relative z-10">
        {/* Navy Section - Title and Subtitle */}
        <div
          className="py-12 md:py-16 lg:py-26 relative overflow-hidden"
          style={{ backgroundColor: colors.navyDark }}
        >
          {/* Texture Overlay */}
          {data.textureImage && (
            <div className="absolute inset-0 opacity-70 mix-blend-overlay pointer-events-none">
              <div className="absolute left-0 top-0 h-full w-[601px] rotate-90 origin-center">
                <Image
                  src={data.textureImage}
                  alt=""
                  fill
                  className="object-cover"
                  aria-hidden="true"
                />
              </div>
            </div>
          )}
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
              <p
                className="text-base md:text-lg leading-relaxed"
                style={{ color: colors.primary }}
              >
                {data.description}
              </p>
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

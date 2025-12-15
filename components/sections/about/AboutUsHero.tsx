import { AboutUsHeroSection } from "@/lib/types";
import Image from "next/image";
import { colors } from "@/lib/theme/colors";
import { assets } from "@/lib/constants/assets";

interface AboutUsHeroProps {
  data: AboutUsHeroSection;
}

/**
 * About Us Hero Section Component
 * Features split background (navy top, cream bottom) with overlapping hero images
 * @param {AboutUsHeroSection} data - Hero section content
 */
export default function AboutUsHero({ data }: AboutUsHeroProps) {
  return (
    <section className="relative overflow-hidden">
      {/* Factory Image - Top right */}
      <div className="hidden lg:block absolute bg-white h-[327px] left-[50.4%] overflow-hidden rounded-[12px] top-[230px] w-[651px] z-[50]">
        <Image
          src={data.factoryImage || assets.aboutUs.factoryImage}
          alt="Sona Factory"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Hero Image - Below factory image with 40px gap */}
      <div className="hidden lg:block absolute bg-white h-[327px] left-[50.4%] overflow-hidden rounded-[12px] top-[597px] w-[651px] z-[40]">
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

      {/* Mobile Images - Both stacked below content */}
      <div className="lg:hidden space-y-4 px-6">
        {/* Factory Image */}
        <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
          <Image
            src={data.factoryImage || assets.aboutUs.factoryImage}
            alt="Sona Factory"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Hero Image */}
        <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
          <Image
            src={data.image}
            alt="Sona textile products"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}

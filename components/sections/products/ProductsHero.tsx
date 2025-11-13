import { Badge } from "@/components/ui/badge";
import { ProductsHeroSection } from "@/lib/types";
import { colors } from "@/lib/theme/colors";
import Image from "next/image";

interface ProductsHeroProps {
  data: ProductsHeroSection;
}

/**
 * Products Hero Section Component
 * Full-width hero with text content on left and product image on right
 * @param {ProductsHeroSection} data - Hero section content
 */
export default function ProductsHero({ data }: ProductsHeroProps) {
  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: colors.cream }}
    >
      <div className="container mx-auto px-6 lg:px-12 py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Left Content - Text */}
          <div className="lg:col-span-3 flex flex-col gap-8">
            {/* Badge */}
            <Badge variant="section" className="w-fit">
              {data.badge}
            </Badge>

            {/* Heading - Two lines with different colors */}
            <div className="flex flex-col gap-2">
              <h1
                className="text-4xl md:text-[52px] leading-tight tracking-tight font-serif"
                style={{ color: colors.primary }}
              >
                {data.title}
              </h1>
              <h2
                className="text-4xl md:text-[52px] leading-tight tracking-tight font-serif"
                style={{ color: colors.navy }}
              >
                {data.subtitle}
              </h2>
            </div>

            {/* Body Paragraphs */}
            <div className="flex flex-col gap-6">
              {data.paragraphs.map((paragraph, index) => {
                // Special handling for the third paragraph with bold text
                if (index === 2) {
                  return (
                    <p
                      key={index}
                      className="text-base md:text-lg leading-relaxed tracking-tight"
                      style={{ color: colors.navy }}
                    >
                      Our commitment to sustainability is reflected in our range
                      of health and eco-friendly fabrics, including those made
                      from{" "}
                      <strong className="font-semibold">
                        Better Cotton Initiative (BCI)
                      </strong>{" "}
                      and{" "}
                      <strong className="font-semibold">organic cotton</strong>.
                      These fabrics promote responsible cotton production and
                      environmental stewardship.
                    </p>
                  );
                }
                return (
                  <p
                    key={index}
                    className="text-base md:text-lg leading-relaxed tracking-tight"
                    style={{ color: colors.navy }}
                  >
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </div>

          {/* Right Image - Desktop only, hidden on mobile */}
          <div className="hidden lg:block lg:col-span-2 relative h-[500px] xl:h-[600px]">
            <Image
              src={data.image}
              alt="Sona textile products - stacked colorful fabrics"
              fill
              className="object-contain object-center"
              priority
            />
          </div>
        </div>

        {/* Mobile Image - Below content on mobile only */}
        <div className="lg:hidden relative h-[400px] mt-8">
          <Image
            src={data.image}
            alt="Sona textile products - stacked colorful fabrics"
            fill
            className="object-contain object-center"
            priority
          />
        </div>
      </div>

      {/* Orange Horizontal Divider Line */}
      <div className="container mx-auto px-6 lg:px-12">
        <div
          className="h-[2px] w-full"
          style={{ backgroundColor: colors.primary }}
        />
      </div>
    </section>
  );
}

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ProductsSection } from "@/lib/types";
import { colors } from "@/lib/theme/colors";

interface ProductsProps {
  data: ProductsSection;
}

/**
 * Products Section Component
 * Displays product categories with static list and overlapping image
 * @param {ProductsSection} data - Products section content
 */
export default function Products({ data }: ProductsProps) {
  return (
    <section
      className="py-16 md:py-24 relative overflow-hidden"
      style={{ backgroundColor: colors.navyDeep }}
      data-figma-node="0:194"
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* Inner Cream Container */}
        <div
          className="relative rounded-[5px] overflow-hidden"
          style={{ backgroundColor: colors.cream }}
        >
          {/* Header */}
          <div className="relative z-20 flex flex-col items-center text-center gap-4 md:gap-6 pt-16 md:pt-24 pb-8 md:pb-12 px-6 lg:px-12">
            <Badge variant="section">{data.badge}</Badge>
            <div className="flex flex-col items-center gap-4 max-w-[1031px]">
              <h2
                className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] leading-tight tracking-tight font-serif"
                style={{ color: colors.navyDark }}
              >
                {data.title}
              </h2>
              <p
                className="text-base md:text-lg max-w-[669px] leading-relaxed tracking-tight"
                style={{ color: colors.navyDark }}
              >
                {data.description}
              </p>
            </div>
          </div>

          {/* Content Area with Overlapping Image */}
          <div className="relative">
            {/* Product Image - Overlaps from Left */}
            <div className="absolute left-0 top-0 w-full lg:w-[891px] h-[400px] md:h-[600px] lg:h-[891px] z-10">
              <Image
                src={data.mainImage}
                alt="Products"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Categories List - Right Side */}
            <div className="relative z-20 pt-[420px] md:pt-[620px] lg:pt-0 lg:pl-[520px] xl:pl-[560px] px-6 lg:pr-12">
              <div className="space-y-8 md:space-y-12 lg:space-y-16 lg:pt-[180px]">
                {data.categories.map((category, index) => (
                  <div key={index} className="flex gap-6">
                    {/* Horizontal Line Separator */}
                    <div className="hidden lg:block flex-none w-[230px] pt-3">
                      <div
                        className="h-[1px] w-full"
                        style={{ backgroundColor: colors.navyDark }}
                      />
                    </div>

                    {/* Category Content */}
                    <div className="flex-1 max-w-[489px] space-y-1">
                      <h3
                        className="text-base md:text-lg uppercase tracking-[2.52px] font-normal"
                        style={{ color: colors.navyDark }}
                      >
                        {category.name}
                      </h3>
                      <p
                        className="text-sm md:text-lg leading-relaxed tracking-tight"
                        style={{ color: colors.navyDark, opacity: 0.9 }}
                      >
                        {category.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Button - Aligned with Content */}
              <div className="mt-12 md:mt-16 lg:mt-18 pb-12 md:pb-16 flex lg:pl-[230px] lg:gap-6 lg:ml-6">
                <div className="flex justify-center lg:justify-start flex-1 max-w-[480px]">
                  <Button
                    asChild
                    size="lg"
                    className="px-8 capitalize"
                    style={{
                      backgroundColor: colors.creamAlt,
                      color: colors.navy,
                    }}
                  >
                    <Link href={data.ctaHref}>{data.ctaLabel}</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Bottom Gradient Overlay */}
            <div
              className="absolute bottom-0 left-0 right-0 h-[400px] md:h-[500px] lg:h-[581px] pointer-events-none z-15"
              style={{
                background: `linear-gradient(to bottom, rgba(255, 99, 51, 0) 10%, ${colors.primary} 77%)`,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

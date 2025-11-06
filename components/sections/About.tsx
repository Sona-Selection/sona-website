import { AboutSection } from "@/lib/types";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { colors } from "@/lib/theme/colors";

interface AboutProps {
  data: AboutSection;
}

/**
 * About Section Component
 * Displays company description with image cards
 * @param {AboutSection} data - About section content
 */
export default function About({ data }: AboutProps) {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: colors.cream }} data-figma-node="0:38">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start mb-12 md:mb-16">
          {/* Left: Heading */}
          <div>
            <h2 className="text-4xl md:text-[52px] leading-tight tracking-tight font-serif" style={{ color: colors.primary }}>
              {data.heading}
            </h2>
          </div>

          {/* Right: Body and CTA */}
          <div className="flex flex-col gap-8 md:gap-10">
            <p className="text-base md:text-lg leading-relaxed tracking-tight" style={{ color: colors.navyDark }}>
              {data.body}
            </p>
            <Button asChild variant="secondary" size="lg" className="w-fit">
              <Link href={data.ctaHref}>{data.ctaLabel}</Link>
            </Button>
          </div>
        </div>

        {/* Image Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.cards.map((card, index) => (
            <div
              key={index}
              className="relative h-[300px] md:h-[416px] rounded-xl overflow-hidden group"
            >
              {/* Image */}
              <Image
                src={card.image}
                alt={card.text}
                fill
                className="object-cover"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/70" />

              {/* Text Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <p className="text-2xl md:text-4xl leading-snug font-light" style={{ color: colors.creamLight }}>
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

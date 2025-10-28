import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ProductsSection } from "@/lib/types";

interface ProductsProps {
  data: ProductsSection;
}

/**
 * Products Section Component
 * Displays product categories with expandable accordion
 * @param {ProductsSection} data - Products section content
 */
export default function Products({ data }: ProductsProps) {
  return (
    <section
      className="bg-[#021F40] py-16 md:py-24 relative overflow-hidden"
      data-figma-node="0:194"
    >
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-70 mix-blend-overlay">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FF6333]/0 via-[#FF6333]/10 to-[#FF6333]/30" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-6 md:gap-8 mb-12 md:mb-16">
          <Badge variant="section">{data.badge}</Badge>
          <div className="flex flex-col items-center gap-4 max-w-[1031px]">
            <h2 className="text-4xl md:text-[64px] text-[#02244A] leading-tight tracking-tight font-serif">
              {data.title}
            </h2>
            <p className="text-base md:text-lg text-[#02244A] max-w-[669px] leading-relaxed tracking-tight">
              {data.description}
            </p>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start mb-12 md:mb-16">
          {/* Left: Product Image */}
          <div className="relative h-[400px] md:h-[600px] lg:h-[891px] rounded-lg overflow-hidden order-2 lg:order-1">
            <Image
              src={data.mainImage}
              alt="Products"
              fill
              className="object-cover"
            />
          </div>

          {/* Right: Categories Accordion */}
          <div className="order-1 lg:order-2">
            <Accordion type="single" collapsible className="w-full space-y-6">
              {data.categories.map((category, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-none"
                >
                  <AccordionTrigger className="text-left text-lg md:text-xl text-[#02244A] hover:text-[#FF6333] transition-colors border-b border-[#02244A]/20 pb-4 uppercase tracking-wide">
                    {category.name}
                  </AccordionTrigger>
                  <AccordionContent className="pt-4 text-base md:text-lg text-[#02244A]/80 leading-relaxed">
                    {category.description}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Button asChild variant="cream" size="lg" className="px-8">
            <Link href={data.ctaHref}>{data.ctaLabel}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

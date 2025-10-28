"use client";

import { Brand } from "@/lib/types";
import Image from "next/image";

interface TrustedBrandsProps {
  brands: Brand[];
}

/**
 * Trusted Brands Section Component
 * Displays a horizontal scrolling list of brand logos
 * @param {Brand[]} brands - Array of brand logos to display
 */
export default function TrustedBrands({ brands }: TrustedBrandsProps) {
  return (
    <section
      className="bg-[#FFFBF0] py-12 md:py-16 overflow-hidden"
      data-figma-node="0:60"
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-2 mb-8 md:mb-12">
          <h2 className="text-2xl md:text-[28px] text-[#FF6333] leading-relaxed tracking-tight">
            Trusted by Top Consumer Brands
          </h2>
          <p className="text-xs text-[#FF6333]/30 tracking-tight">
            supported by our garmenting partners
          </p>
        </div>

        {/* Brands Carousel - Horizontal Scroll on Mobile, Grid on Desktop */}
        <div className="relative">
          {/* Mobile: Horizontal Scroll */}
          <div className="flex md:hidden gap-8 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="flex-shrink-0 snap-center flex items-center justify-center w-32 h-24"
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={120}
                  height={80}
                  className="object-contain max-w-full max-h-full opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>

          {/* Desktop: Grid Layout */}
          <div className="hidden md:flex flex-wrap items-center justify-center gap-8 lg:gap-16">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="flex items-center justify-center h-24"
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={150}
                  height={90}
                  className="object-contain max-w-full max-h-full opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}

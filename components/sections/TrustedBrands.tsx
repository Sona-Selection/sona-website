"use client";

import { Brand } from "@/lib/types";
import Image from "next/image";

interface TrustedBrandsProps {
  brands: Brand[];
}

/**
 * Trusted Brands Section Component
 * Displays an infinite auto-scrolling marquee of brand logos
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

        {/* Infinite Marquee */}
        <div className="relative w-full">
          <div className="flex animate-marquee" style={{ width: 'max-content' }}>
            {/* First set of brands */}
            {brands.map((brand, index) => (
              <div
                key={`set1-${index}`}
                className="flex-shrink-0 flex items-center justify-center h-20 md:h-24 w-32 md:w-40 mx-5 md:mx-7"
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={140}
                  height={90}
                  className="object-contain max-w-full max-h-full opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
            {/* Second set of brands for seamless loop */}
            {brands.map((brand, index) => (
              <div
                key={`set2-${index}`}
                className="flex-shrink-0 flex items-center justify-center h-20 md:h-24 w-32 md:w-40 mx-5 md:mx-7"
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={140}
                  height={90}
                  className="object-contain max-w-full max-h-full opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 18s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }

        @media (max-width: 768px) {
          .animate-marquee {
            animation-duration: 22s;
          }
        }
      `}</style>
    </section>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { SustainabilitySection } from "@/lib/types";
import { colors } from "@/lib/theme/colors";

interface SustainabilityProps {
  data: SustainabilitySection;
}

const MAX_VISIBLE_ITEMS = 4;
const AUTO_ADVANCE_INTERVAL = 4500; // 4.5 seconds
const ITEM_HEIGHT = 137.5; // Approximate height of each feature item in pixels

/**
 * Sustainability Section Component
 * Auto-sliding carousel that cycles through sustainability features
 * Automatically centers the highlighted item in the viewport
 * @param {SustainabilitySection} data - Sustainability section content
 */
export default function Sustainability({ data }: SustainabilityProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Calculate scroll position to center the active item
  const getScrollPosition = (index: number) => {
    // Try to center the item, but clamp to valid range
    const centerOffset = Math.floor((MAX_VISIBLE_ITEMS - 1) / 2);
    let targetStart = index - centerOffset;

    // Clamp to valid range
    const maxStart = Math.max(0, data.features.length - MAX_VISIBLE_ITEMS);
    targetStart = Math.max(0, Math.min(targetStart, maxStart));

    return targetStart * ITEM_HEIGHT;
  };

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % data.features.length);
    }, AUTO_ADVANCE_INTERVAL);

    return () => clearInterval(timer);
  }, [data.features.length]);

  return (
    <section
      style={{ backgroundColor: colors.creamAlt }}
      className="py-16 md:py-24"
      data-figma-node="0:222"
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-6 md:gap-8 mb-12 md:mb-16">
          <p
            className="text-base md:text-lg uppercase tracking-[2.52px]"
            style={{ color: colors.navyDark }}
          >
            {data.badge}
          </p>
          <h2
            className="text-4xl md:text-[64px] leading-tight tracking-tight font-serif max-w-[1031px]"
            style={{ color: colors.navyDark }}
          >
            {data.title}
          </h2>
        </div>

        {/* Features Carousel Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-20">
          {/* Left: Scrolling Features List */}
          <div
            ref={containerRef}
            className="relative overflow-hidden order-2 lg:order-1"
            style={{ height: "518px" }}
          >
            <div
              className="transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateY(-${getScrollPosition(activeIndex)}px)`,
              }}
            >
              {data.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex gap-6 md:gap-8 items-start mb-8 md:mb-10 transition-all duration-500"
                >
                  {/* Vertical Line */}
                  <div className="hidden md:block w-1 h-24 relative shrink-0">
                    {activeIndex === index && (
                      <div
                        className="absolute inset-0 bg-gradient-to-b from-transparent via-current to-transparent"
                        style={{ color: colors.primary }}
                      />
                    )}
                  </div>

                  {/* Feature Content */}
                  <div className="flex flex-col gap-1 transition-opacity duration-500">
                    <h3
                      className="text-2xl md:text-4xl leading-tight capitalize transition-colors duration-500"
                      style={{
                        color:
                          activeIndex === index
                            ? colors.navyDark
                            : colors.textGray,
                      }}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className="text-base md:text-lg leading-relaxed tracking-tight max-w-[396px] transition-opacity duration-500"
                      style={{
                        color: colors.navyDark,
                        opacity: activeIndex === index ? 0.9 : 0.6,
                      }}
                    >
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Dynamic Image */}
          <Card className="relative h-[350px] md:h-[518px] overflow-hidden rounded-xl border-0 shadow-none order-1 lg:order-2">
            <Image
              key={activeIndex}
              src={data.features[activeIndex].image}
              alt={data.features[activeIndex].title}
              fill
              className="object-cover transition-opacity duration-500"
              priority
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60" />
          </Card>
        </div>

        {/* Certifications */}
        <Card
          className="p-8 md:p-12 rounded-2xl border-0 shadow-none relative overflow-hidden"
          style={{ backgroundColor: colors.navyDark }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(to bottom right, ${colors.primary}33, transparent)`,
              }}
            />
          </div>

          <div className="relative z-10 flex flex-col gap-8 md:gap-10">
            {/* Certification Header */}
            <div className="flex flex-col md:flex-col gap-6 items-start md:items-start">
              {/* Certification Logos */}
              <div className="flex gap-4 flex-wrap">
                {data.certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="w-14 h-14 rounded-full bg-white/10 p-2 flex items-center justify-center"
                  >
                    {cert.image && (
                      <Image
                        src={cert.image}
                        alt={cert.name}
                        width={32}
                        height={32}
                        className="object-contain"
                      />
                    )}
                  </div>
                ))}
              </div>

              {/* Text */}
              <div className="flex flex-col gap-2">
                <h3
                  className="text-2xl md:text-4xl leading-tight"
                  style={{ color: colors.creamAlt }}
                >
                  Certified to Global Standards
                </h3>
                <p
                  className="text-base md:text-lg opacity-90 leading-normal"
                  style={{ color: colors.creamAlt }}
                >
                  We uphold the highest benchmarks in textile safety,
                  sustainability, and traceability
                </p>
              </div>
            </div>

            <Separator className="bg-white/10" />

            {/* Certification Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {data.certifications.map((cert, index) => (
                <div key={index} className="flex flex-col gap-1">
                  <p
                    className="text-xs md:text-sm uppercase font-semibold tracking-wide"
                    style={{ color: colors.primary }}
                  >
                    Scope Certificate
                  </p>
                  <p
                    className="text-sm md:text-base leading-relaxed"
                    style={{ color: colors.creamAlt }}
                  >
                    {cert.name}
                    {cert.description && (
                      <>
                        <br />
                        <span className="opacity-70">{cert.description}</span>
                      </>
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}

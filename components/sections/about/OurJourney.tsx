"use client";

import { JourneySection } from "@/lib/types";
import Image from "next/image";
import { colors } from "@/lib/theme/colors";
import { Badge } from "@/components/ui/badge";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface OurJourneyProps {
  data: JourneySection;
}

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Our Journey Timeline Component
 * Displays company journey milestones in a vertical timeline with alternating layout
 * Features GSAP ScrollTrigger animations
 * @param {JourneySection} data - Journey section content
 */
export default function OurJourney({ data }: OurJourneyProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const milestoneRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Animate each milestone card as it enters the viewport
      milestoneRefs.current.forEach((milestone) => {
        if (!milestone) return;

        gsap.from(milestone, {
          opacity: 0,
          y: 50,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: milestone,
            start: "top bottom-=100",
            end: "top center",
            toggleActions: "play none none reverse",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [data.milestones.length]);

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 relative"
      style={{ backgroundColor: colors.creamAlt }}
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-12 md:mb-16 flex flex-col items-center text-center gap-4">
          <Badge
            variant="section"
            className="text-sm md:text-base uppercase tracking-wider"
          >
            {data.badge}
          </Badge>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-normal leading-tight"
            style={{ color: colors.navyDark }}
          >
            {data.title}
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical centerline - hidden on mobile, shown from lg breakpoint */}
          <div
            className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2"
            style={{ backgroundColor: colors.primary }}
          />

          {/* Mobile left edge line - shown on mobile, hidden from lg breakpoint */}
          <div
            className="lg:hidden absolute left-6 top-0 bottom-0 w-0.5"
            style={{ backgroundColor: colors.primary }}
          />

          {/* Milestones */}
          <div className="space-y-12 md:space-y-20">
            {data.milestones.map((milestone, index) => {
              const isEven = index % 2 === 0;
              const imageOnLeft = isEven;

              return (
                <div
                  key={index}
                  ref={(el) => {
                    milestoneRefs.current[index] = el;
                  }}
                  className="relative"
                >
                  {/* Desktop Layout - Alternating */}
                  <div
                    className={`hidden lg:grid grid-cols-2 gap-8 items-center ${
                      !imageOnLeft ? "grid-flow-dense" : ""
                    }`}
                  >
                    {/* Image */}
                    <div
                      className={`relative h-[400px] rounded-lg overflow-hidden shadow-lg ${
                        !imageOnLeft ? "col-start-2" : ""
                      }`}
                    >
                      <Image
                        src={milestone.image}
                        alt={milestone.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div
                      className={`flex flex-col gap-4 ${
                        !imageOnLeft
                          ? "col-start-1 row-start-1 pr-12"
                          : "pl-12"
                      }`}
                    >
                      <p
                        className="text-4xl md:text-5xl font-bold"
                        style={{ color: colors.primary }}
                      >
                        {milestone.year}
                      </p>
                      <h3
                        className="text-2xl md:text-3xl font-semibold"
                        style={{ color: colors.navyDark }}
                      >
                        {milestone.title}
                      </h3>
                      <p
                        className="text-base md:text-lg leading-relaxed"
                        style={{ color: colors.textBlack }}
                      >
                        {milestone.description}
                      </p>
                    </div>

                    {/* Year Badge on Timeline - Desktop */}
                    <div
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full flex items-center justify-center shadow-lg z-10"
                      style={{
                        backgroundColor: colors.primary,
                        boxShadow: "0 0 0 8px rgba(255, 251, 240, 1)",
                      }}
                    >
                      <span className="text-sm font-bold text-white">
                        {milestone.year}
                      </span>
                    </div>
                  </div>

                  {/* Mobile Layout - Stacked */}
                  <div className="lg:hidden flex gap-6">
                    {/* Year Badge on Left Timeline - Mobile */}
                    <div className="relative flex-shrink-0">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
                        style={{
                          backgroundColor: colors.primary,
                          boxShadow: "0 0 0 6px rgba(255, 251, 240, 1)",
                        }}
                      >
                        <span className="text-xs font-bold text-white">
                          {milestone.year}
                        </span>
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className="flex-1 flex flex-col gap-4 pb-8">
                      {/* Image */}
                      <div className="relative h-[250px] md:h-[350px] rounded-lg overflow-hidden shadow-lg">
                        <Image
                          src={milestone.image}
                          alt={milestone.title}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Content */}
                      <div className="flex flex-col gap-3">
                        <h3
                          className="text-xl md:text-2xl font-semibold"
                          style={{ color: colors.navyDark }}
                        >
                          {milestone.title}
                        </h3>
                        <p
                          className="text-sm md:text-base leading-relaxed"
                          style={{ color: colors.textBlack }}
                        >
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

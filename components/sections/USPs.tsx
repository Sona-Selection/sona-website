"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { USPsSection } from "@/lib/types";
import { useEffect, useState } from "react";

interface USPsProps {
  data: USPsSection;
}

/**
 * USPs Section Component
 * Displays unique selling points in a carousel
 * @param {USPsSection} data - USPs section content
 */
export default function USPs({ data }: USPsProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);

    // Cleanup event listener
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  // Auto-scroll effect
  useEffect(() => {
    if (!api) {
      return;
    }

    const intervalId = setInterval(() => {
      api.scrollNext();
    }, 5000); // Change slide every 5 seconds

    // Cleanup interval
    return () => clearInterval(intervalId);
  }, [api]);

  return (
    <section className="bg-[#FFFBF0] py-16 md:py-24" data-figma-node="0:141">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col items-start gap-6 md:gap-8 mb-12 md:mb-16 max-w-[1031px]">
          <Badge variant="section">{data.badge}</Badge>
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl md:text-[64px] text-[#02244A] leading-tight tracking-tight font-serif">
              {data.title}
            </h2>
            <p className="text-base md:text-lg text-[#02244A] max-w-[775px] leading-relaxed tracking-tight">
              {data.description}
            </p>
          </div>
        </div>

        {/* Carousel */}
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
            duration: 30,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-6">
            {data.usps.map((usp, index) => (
              <CarouselItem key={index} className="pl-6 md:basis-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  {/* Image */}
                  <Card className="relative h-[300px] md:h-[352px] overflow-hidden rounded-xl border-0 shadow-none">
                    <Image
                      src={usp.image}
                      alt={usp.title}
                      fill
                      className="object-cover"
                    />
                  </Card>

                  {/* Content */}
                  <div className="flex flex-col gap-8 md:gap-9">
                    <div className="flex flex-col gap-8 md:gap-10">
                      <h3 className="text-3xl md:text-4xl text-[#1C140D] leading-tight">
                        {usp.title}
                      </h3>
                      <p className="text-base md:text-lg text-[#1C140D] leading-relaxed tracking-tight">
                        {usp.description}
                      </p>
                    </div>

                    {/* Learn More Link */}
                    {usp.link && (
                      <Link
                        href={usp.link}
                        className="text-[#FF6333] text-lg tracking-tight hover:text-[#E55A3A] transition-colors inline-flex items-center gap-2 border-b border-[#FF6333] pb-px w-fit"
                      >
                        Learn More ↗
                      </Link>
                    )}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8 md:mt-12">
          {data.usps.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                current === index
                  ? "bg-[#02244A]"
                  : "border border-[#02244A] hover:bg-[#02244A]/20"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

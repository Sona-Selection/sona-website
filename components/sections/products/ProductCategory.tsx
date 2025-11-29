"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import type { CarouselApi } from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { ProductCategorySection } from "@/lib/types";
import { colors } from "@/lib/theme/colors";

interface ProductCategoryProps {
  data: ProductCategorySection;
}

/**
 * Product Category Section Component
 * Reusable section for displaying product categories (Woven Fabrics, Speciality Weaves, etc.)
 * Features side-by-side layout: text on left, carousel on right
 * @param {ProductCategorySection} data - Product category content and configuration
 */
export default function ProductCategory({ data }: ProductCategoryProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!api) return;

    const updateScrollState = () => {
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    };

    updateScrollState();
    api.on("select", updateScrollState);

    return () => {
      api.off("select", updateScrollState);
    };
  }, [api]);
  return (
    <section
      className="py-16 md:py-18 lg:py-18"
      style={{ backgroundColor: colors.cream }}
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* Grid Layout: Text Left, Carousel Right */}
        <div className="grid grid-cols-1 lg:grid-cols-8 gap-8 lg:gap-12 items-start">
          {/* Left Column - Text Content */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Title */}
            <h2
              className="text-3xl md:text-4xl leading-tight tracking-tight font-normal"
              style={{ color: colors.navy }}
            >
              {data.title}
            </h2>

            {/* Description */}
            <p
              className="text-base md:text-lg leading-relaxed tracking-tight"
              style={{ color: colors.navy }}
            >
              {data.description}
            </p>

            {/* View All Button - Conditional */}
            {/* {data.showViewAll && (
              <Button
                asChild
                variant="secondary"
                size="lg"
                className="w-fit mt-2"
              >
                <Link href={data.viewAllHref || "/"}>View All</Link>
              </Button>
            )} */}
          </div>

          {/* Right Column - Products Carousel */}
          <div className="lg:col-span-6 relative flex flex-col">
            <Carousel
              setApi={setApi}
              opts={{
                align: "start",
                loop: false,
              }}
              className="w-full h-full"
            >
              <CarouselContent className="-ml-4 md:-ml-6">
                {data.products.map((product, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-4 md:pl-6 basis-[280px] md:basis-[300px]"
                  >
                    {/* Product Card */}
                    <div className="relative group cursor-pointer">
                      {/* Image Container */}
                      <div className="relative h-[280px] md:h-[350px] rounded-xl overflow-hidden">
                        <Image
                          src={product.image}
                          alt={product.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                        {/* Text Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between gap-4">
                          <h3
                            className="text-lg md:text-xl font-normal leading-tight"
                            style={{ color: colors.white }}
                          >
                            {product.title}
                          </h3>

                          {/* VIEW Link */}
                          {/* <Link
                            href="/"
                            className="text-sm font-medium tracking-wider transition-opacity hover:opacity-80 underline"
                            style={{ color: colors.white }}
                          >
                            VIEW
                          </Link> */}
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* Arrow Navigation - Conditional, positioned bottom right */}
              {data.showArrowNav && (
                <div className="absolute -bottom-16 right-0 flex gap-3 justify-end">
                  {canScrollPrev && (
                    <CarouselPrevious
                      className="static translate-y-0 rounded-full w-10 h-10 border-0"
                      style={{
                        backgroundColor: colors.primary,
                        color: colors.navy,
                      }}
                    >
                      <ArrowLeft className="w-8 h-8" />
                    </CarouselPrevious>
                  )}
                  {canScrollNext && (
                    <CarouselNext
                      className="static translate-y-0 rounded-full w-10 h-10 border-0"
                      style={{
                        backgroundColor: colors.primary,
                        color: colors.navy,
                      }}
                    >
                      <ArrowRight className="w-8 h-8" />
                    </CarouselNext>
                  )}
                </div>
              )}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}

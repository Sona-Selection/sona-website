"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";
import { ProductRangeSection } from "@/lib/types";
import { colors } from "@/lib/theme/colors";
import { cn } from "@/lib/utils";

interface ProductRangeProps {
  data: ProductRangeSection;
}

export default function ProductRange({ data }: ProductRangeProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  const expandedItem = data.items.find((item) => item.id === expandedId);

  return (
    <section
      id="product-range"
      className="py-16 md:py-20"
      style={{ backgroundColor: colors.cream }}
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Title */}
        <h2
          className="text-3xl md:text-[40px] leading-tight font-serif mb-10"
          style={{ color: colors.primary }}
        >
          {data.title}
        </h2>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.items.map((item) => {
            const isExpanded = expandedId === item.id;
            return (
              <div
                key={item.id}
                className="relative group h-[300px] rounded-lg overflow-hidden cursor-pointer"
                onClick={() => toggleExpand(item.id)}
              >
                {/* Background Image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlays */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end h-full">
                  <div className="flex items-end justify-between">
                    <h3
                      className="text-xl md:text-2xl font-medium leading-tight max-w-[70%]"
                      style={{ color: colors.white }}
                    >
                      {item.title}
                    </h3>

                    {/* Toggle Button Icon */}
                    <button
                      className="text-white hover:scale-110 transition-transform"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleExpand(item.id);
                      }}
                    >
                      {isExpanded ? (
                        <Minus className="w-8 h-8 md:w-10 md:h-10 text-primary" strokeWidth={3} style={{ color: colors.primary }} />
                      ) : (
                        <Plus className="w-8 h-8 md:w-10 md:h-10 text-primary" strokeWidth={3} style={{ color: colors.primary }} />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Expanded Details Section */}
        {expandedItem && (
          <div
            className="mt-8 rounded-xl overflow-hidden animate-in fade-in slide-in-from-top-4 duration-500"
            style={{ backgroundColor: "#FFCBAD" }} // Matching the peach color from design
          >
            <div className="p-8 md:p-12 lg:p-16">
              <h3
                className="text-3xl md:text-4xl font-serif mb-6"
                style={{ color: colors.navyDeep }}
              >
                {expandedItem.detailTitle}
              </h3>
              
              <p
                className="text-base md:text-lg leading-relaxed max-w-4xl mb-12"
                style={{ color: colors.textDark }}
              >
                {expandedItem.detailDescription}
              </p>

              {/* Detail Images Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {expandedItem.detailImages.map((img, idx) => (
                  <div key={idx} className="relative h-64 md:h-80 rounded-lg overflow-hidden bg-white/20">
                    <Image
                      src={img}
                      alt={`${expandedItem.title} detail ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

import { AdvancedFinishesSection } from "@/lib/types";
import Image from "next/image";
import { colors } from "@/lib/theme/colors";

interface AdvancedFinishesProps {
  data: AdvancedFinishesSection;
}

/**
 * Advanced Finishes Section Component
 * Displays 6 specialty fabric finishes in a grid layout
 * @param {AdvancedFinishesSection} data - Advanced finishes section content
 */
export default function AdvancedFinishes({ data }: AdvancedFinishesProps) {
  return (
    <section
      className="py-16 md:py-18 lg:py-18"
      style={{ backgroundColor: colors.cream }}
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <div className="flex flex-col gap-6 mb-12 md:mb-16 max-w-[900px]">
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
        </div>

        {/* Finishes Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {data.finishes.map((finish, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              {/* Icon Image */}
              <div
                className="relative w-full aspect-square border-2 overflow-hidden"
                style={{ borderColor: colors.primary }}
              >
                <Image
                  src={finish.image}
                  alt={finish.label}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Label */}
              <p
                className="text-xs md:text-xs text-center leading-snug font-bold"
                style={{ color: colors.primary }}
              >
                {finish.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

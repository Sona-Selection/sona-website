import { Award, Heart, Lightbulb, Scale } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { ValuesSection } from "@/lib/types";
import { colors } from "@/lib/theme/colors";

interface ValuesProps {
  data: ValuesSection;
}

// Map icon names to lucide-react components
const iconMap = {
  Lightbulb,
  Heart,
  Award,
  Scale,
};

/**
 * Values Section Component
 * Displays company values in a grid with icons
 * @param {ValuesSection} data - Values section content
 */
export default function Values({ data }: ValuesProps) {
  return (
    <section
      className="py-16 md:py-24"
      style={{ backgroundColor: colors.primary }}
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header - */}
        <div className="mb-12 md:mb-16 flex flex-col items-center text-center gap-6">
          <Badge
            variant="section"
            className="text-sm md:text-base px-4 py-2"
            style={{
              backgroundColor: "rgba(255, 251, 240, 0.12)",
              color: colors.cream,
              boxShadow:
                "0px 0px 80px 20px rgba(255, 251, 240, 0.5), 0px 0px 120px 40px rgba(255, 251, 240, 0.3)",
            }}
          >
            {data.badge}
          </Badge>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-normal leading-tight"
            style={{ color: colors.cream }}
          >
            {data.title}
          </h2>
        </div>

        {/* Values Grid - 4 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.values.map((value, index) => {
            const IconComponent =
              iconMap[value.icon as keyof typeof iconMap] || Lightbulb;

            return (
              <div
                key={index}
                className="flex flex-col items-center text-center gap-4 p-6 md:p-8 bg-white rounded-lg"
              >
                {/* Icon */}
                <IconComponent
                  className="w-12 h-12"
                  style={{ color: colors.navyDark }}
                  strokeWidth={1.5}
                />

                {/* Title */}
                <h3
                  className="text-lg md:text-xl font-semibold leading-tight"
                  style={{ color: colors.textBlack }}
                >
                  {value.title}
                </h3>

                {/* Description */}
                <p
                  className="text-sm md:text-base leading-relaxed"
                  style={{ color: colors.textBlack }}
                >
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

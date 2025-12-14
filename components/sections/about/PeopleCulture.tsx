import Image from "next/image";
import { PeopleCultureSection } from "@/lib/types";
import { colors } from "@/lib/theme/colors";

interface PeopleCultureProps {
  data: PeopleCultureSection;
}

/**
 * People & Culture Section Component
 * Displays company culture message with supporting image
 * @param {PeopleCultureSection} data - People & culture content
 */
export default function PeopleCulture({ data }: PeopleCultureProps) {
  return (
    <section
      className="py-16 md:py-24"
      style={{ backgroundColor: colors.cream }}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left: Image */}
          {/* <div className="relative h-[300px] md:h-[400px] lg:h-[400px] rounded-lg overflow-hidden order-2 lg:order-1">
            <Image
              src={data.image}
              alt="Sona factory and team"
              fill
              className="object-cover"
            />
          </div> */}

          {/* Right: Content */}
          <div className="flex flex-col gap-6 md:gap-8 order-1 lg:order-2">
            <h2
              className="text-2xl md:text-3xl font-normal leading-tight"
              style={{ color: colors.textBlack }}
            >
              {data.heading}
            </h2>
            <div
              className="text-base md:text-lg leading-relaxed space-y-4"
              style={{ color: colors.textBlack }}
            >
              {data.description.split('\n\n').map((paragraph, index) => (
                <p key={index}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

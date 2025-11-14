import { FacilitiesGallerySection } from "@/lib/types";
import Image from "next/image";
import { colors } from "@/lib/theme/colors";

interface FacilitiesGalleryProps {
  data: FacilitiesGallerySection;
}

/**
 * Facilities Gallery Section Component
 * Reusable component for displaying a grid of facility images with labels
 * @param {FacilitiesGallerySection} data - Gallery section content with heading and images
 */
export default function FacilitiesGallery({ data }: FacilitiesGalleryProps) {
  return (
    <section
      className="relative py-12 md:py-12 lg:py-12"
      style={{ backgroundColor: colors.cream }}
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Heading */}
        <h2
          className="text-xs md:text-base font-semibold tracking-wider uppercase mb-12 md:mb-12"
          style={{ color: colors.navy }}
        >
          {data.heading}
        </h2>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {data.images.map((item, index) => (
            <div key={index} className="flex flex-col gap-4">
              {/* Image */}
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src={item.image}
                  alt={item.label}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Label */}
              <p
                className="text-xs md:text-sm font-semibold tracking-wide uppercase leading-tight"
                style={{ color: colors.navy }}
              >
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { LeadershipSection } from "@/lib/types";
import Image from "next/image";
import { colors } from "@/lib/theme/colors";
import { Badge } from "@/components/ui/badge";
import { Linkedin } from "lucide-react";
import Link from "next/link";
import { assets } from "@/lib/constants/assets";

interface AboutUsLeadershipProps {
  data: LeadershipSection;
}

/**
 * About Us Leadership Section Component
 * Displays team members in an alternating zigzag layout
 * @param {LeadershipSection} data - Leadership section content
 */
export default function AboutUsLeadership({ data }: AboutUsLeadershipProps) {
  const backgroundBlurImage = assets.aboutUs.leadership.backgroundBlur;

  return (
    <section
      className="py-16 md:py-24"
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

        {/* Team Members - Alternating Layout */}
        <div className="space-y-12 md:space-y-20">
          {data.team.map((member, index) => {
            const isEven = index % 2 === 0;
            const imageOnLeft = isEven;

            return (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center ${
                  !imageOnLeft ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Image */}
                <div
                  className={`relative h-[400px] md:h-[500px] rounded-lg overflow-hidden ${
                    !imageOnLeft ? "lg:col-start-2" : ""
                  }`}
                >
                  {/* Background Blur Image */}
                  <div className="absolute inset-0 blur-[2.75px]">
                    <Image
                      src={backgroundBlurImage}
                      alt=""
                      fill
                      className="object-cover"
                      aria-hidden="true"
                    />
                  </div>
                  {/* Main Member Image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-full h-full max-w-[487px] max-h-[454px]">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  {/* Gradient Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 h-[284px] bg-gradient-to-b from-transparent via-transparent to-black opacity-75" />
                </div>

                {/* Content */}
                <div
                  className={`flex flex-col gap-4 md:gap-6 ${
                    !imageOnLeft ? "lg:col-start-1 lg:row-start-1" : ""
                  }`}
                >
                  {/* Name */}
                  <h3
                    className="text-2xl md:text-3xl font-semibold"
                    style={{ color: colors.navyDark }}
                  >
                    {member.name}
                  </h3>

                  {/* Role */}
                  <p
                    className="text-lg md:text-xl font-medium"
                    style={{ color: colors.primary }}
                  >
                    {member.role}
                  </p>

                  {/* Description */}
                  {member.description && (
                    <p
                      className="text-base md:text-lg leading-relaxed"
                      style={{ color: colors.textBlack }}
                    >
                      {member.description}
                    </p>
                  )}

                  {/* LinkedIn Link */}
                  {member.linkedinUrl && (
                    <Link
                      href={member.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm hover:opacity-80 transition-opacity w-fit"
                      style={{ color: colors.navyDark }}
                    >
                      <Linkedin className="w-5 h-5" />
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { LeadershipSection } from "@/lib/types";
import Link from "next/link";
import { Linkedin } from "lucide-react";
import { colors } from "@/lib/theme/colors";

interface ExecutionTeamLeadershipProps {
  data: LeadershipSection;
}

/**
 * Execution Team Leadership Section Component
 * Displays management team members in an alternating zigzag layout
 * @param {LeadershipSection} data - Leadership section content
 */
export default function ExecutionTeamLeadership({
  data,
}: ExecutionTeamLeadershipProps) {
  return (
    <section
      className="py-16 md:py-24"
      style={{ backgroundColor: colors.creamAlt }}
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-4 md:mb-8 lg:mb-10 flex flex-col items-center text-center gap-2 md:gap-4 lg:gap-6">
          <Badge
            variant="section"
            className="text-sm md:text-base uppercase tracking-wider"
          >
            {data.badge}
          </Badge>
          <div className="flex flex-col gap-1.5 md:gap-3 lg:gap-4">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-normal leading-tight"
              style={{ color: colors.navyDark }}
            >
              {data.title}
            </h2>
            {data.subtitle && (
              <p
                className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
                style={{ color: colors.textBlack }}
              >
                {data.subtitle}
              </p>
            )}
          </div>
        </div>

        {/* Team Members - Alternating Layout */}
        <div className="space-y-4 md:space-y-8 lg:space-y-12">
          {data.team.map((member, index) => {
            const isEven = index % 2 === 0;
            const imageOnLeft = isEven;

            return (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-8 lg:gap-10 items-center ${
                  !imageOnLeft ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Image */}
                <div
                  className={`relative h-[400px] md:h-[500px] rounded-lg overflow-hidden ${
                    !imageOnLeft ? "lg:col-start-2" : ""
                  }`}
                >
                  {/* Main Member Image */}
                  <div className="absolute inset-0 flex items-end justify-center">
                    <div className="relative w-full h-full max-w-[487px] max-h-[454px]">
                      <Image
                        src={member.aboutImage}
                        alt={member.name}
                        fill
                        className="object-contain object-bottom"
                        priority={index === 0}
                        quality={90}
                      />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`flex flex-col gap-1 md:gap-2 lg:gap-3 ${
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

        {/* Bottom Paragraph */}
        {data.bottomParagraph && (
          <div className="mt-8 md:mt-12 lg:mt-16">
            <p
              className="text-base md:text-lg leading-relaxed max-w-4xl mx-auto text-center"
              style={{ color: colors.textBlack }}
            >
              {data.bottomParagraph}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

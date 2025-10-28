import { Card } from "@/components/ui/card";
import Image from "next/image";
import { LeadershipSection } from "@/lib/types";

interface LeadershipProps {
  data: LeadershipSection;
}

/**
 * Leadership Section Component
 * Displays team members with their profiles
 * @param {LeadershipSection} data - Leadership section content
 */
export default function Leadership({ data }: LeadershipProps) {
  return (
    <section className="bg-[#FFFCF4] py-16 md:py-24" data-figma-node="0:284">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-6 md:gap-8 mb-12 md:mb-16">
          <p className="text-base md:text-lg text-[#02244A] uppercase tracking-[2.52px]">
            {data.badge}
          </p>
          <h2 className="text-4xl md:text-[64px] text-[#02244A] leading-tight tracking-tight font-serif">
            {data.title}
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-9">
          {data.team.map((member, index) => (
            <Card
              key={index}
              className="bg-[#FFFBF0] relative h-[450px] md:h-[518px] overflow-hidden rounded-xl border-0 shadow-md group"
            >
              {/* Background Image with Blur */}
              <div className="absolute inset-0 blur-sm">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Sharp Image Overlay */}
              <div className="absolute inset-0">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#FF6333]/0 via-black/30 to-black/90" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex flex-col gap-3">
                {/* Name and Role */}
                <div className="flex flex-col gap-1">
                  <h3 className="text-2xl md:text-4xl text-white leading-tight font-semibold">
                    {member.name}
                  </h3>
                  <p className="text-base md:text-xl text-[#FF6333] uppercase tracking-wide font-semibold">
                    {member.role}
                  </p>
                </div>

                {/* Description (if available) */}
                {member.description && (
                  <p className="text-sm md:text-base text-[#FFFCF4]/90 leading-relaxed line-clamp-3">
                    {member.description}
                  </p>
                )}

                {/* Company Logo (if available) */}
                {member.logo && (
                  <div className="mt-2 w-16 h-auto opacity-80">
                    <Image
                      src={member.logo}
                      alt="Company Logo"
                      width={64}
                      height={32}
                      className="object-contain mix-blend-lighten"
                    />
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

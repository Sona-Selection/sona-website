import { LeadershipSection } from "@/lib/types";
import TeamCard from "@/components/common/team-card";

interface LeadershipProps {
  data: LeadershipSection;
}

/**
 * Leadership Section Component
 * Displays team members with their profiles using reusable TeamCard component
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
            <TeamCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}

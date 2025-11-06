import { Button } from "@/components/ui/button";
import TeamCard from "@/components/common/team-card";
import { BoardSection as BoardSectionType } from "@/lib/types";
import Link from "next/link";
import { colors } from "@/lib/theme/colors";

interface BoardSectionProps {
  data: BoardSectionType;
}

/**
 * Board Section Component
 * Displays Board of Directors and Committees using TeamCard component
 * @param {BoardSectionType} data - Board section content
 */
export default function BoardSection({ data }: BoardSectionProps) {
  return (
    <section
      className="py-12 md:py-16 lg:py-24"
      style={{ backgroundColor: colors.cream }}
      data-figma-node="0:442"
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold" style={{ color: colors.textBlack }}>
            {data.title}
          </h2>
          {data.board.downloadLabel && (
            <Button asChild variant="navy" size="lg" className="w-fit">
              <Link href={data.board.downloadHref || "#"}>
                {data.board.downloadLabel}
              </Link>
            </Button>
          )}
        </div>

        {/* Board Members */}
        <div className="space-y-12 md:space-y-16">
          {/* Meet the Board */}
          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-black mb-8 md:mb-12">
              {data.board.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {data.board.members.map((member, index) => (
                <TeamCard key={index} member={member} />
              ))}
            </div>
          </div>

          {/* Board Committees */}
          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-black mb-4 md:mb-6">
              {data.committees.title}
            </h3>
            {data.committees.subtitle && (
              <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-black mb-8 md:mb-12">
                {data.committees.subtitle}
              </p>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {data.committees.members.map((member, index) => (
                <TeamCard key={index} member={member} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

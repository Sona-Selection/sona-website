"use client";

import Image from "next/image";
import Link from "next/link";
import { Linkedin } from "lucide-react";
import { TeamMember } from "@/lib/types";
import { cn } from "@/lib/utils";
import { colors } from "@/lib/theme/colors";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";

interface TeamCardProps {
  member: TeamMember;
  className?: string;
}

/**
 * TeamCard Component
 * Reusable card component that displays team member information with flip animation
 * - Front side: Shows photo with name and role
 * - Back side: Shows name, role, description, and LinkedIn link
 * - Hover to flip on desktop, tap to flip on mobile
 *
 * @param {TeamMember} member - Team member data
 * @param {string} className - Optional additional classes
 */
export default function TeamCard({ member, className }: TeamCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const isMobile = useIsMobile();

  const handleClick = () => {
    if (isMobile) {
      setIsFlipped(!isFlipped);
    }
  };

  return (
    <div
      className={cn(
        "[perspective:1000px] h-[450px] md:h-[518px] cursor-pointer group",
        className
      )}
      onClick={handleClick}
    >
      {/* Card Inner Container with 3D Transform */}
      <div
        className={cn(
          "relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d]",
          // Flip on hover for desktop
          "md:group-hover:[transform:rotateY(180deg)]",
          // Flip based on state for mobile
          isMobile && isFlipped && "[transform:rotateY(180deg)]"
        )}
      >
        {/* Front Side - Image with Name and Role */}
        <div className="absolute inset-0 [backface-visibility:hidden] rounded-xl overflow-hidden shadow-md">
          {/* Background Pattern */}
          {/* <div className="absolute inset-0">
            <Image
              src="/images/home/leadership/bg.png"
              alt=""
              fill
              className="object-cover"
            />
          </div> */}

          {/* Member Image */}
          <div className="absolute inset-0">
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/90" />

          {/* Content - Name and Role */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex flex-col gap-2">
            <h3 className="text-2xl md:text-4xl text-white leading-tight font-semibold">
              {member.name}
            </h3>
            <p
              className="text-base md:text-xl uppercase tracking-wide font-semibold"
              style={{ color: colors.primary }}
            >
              {member.role}
            </p>
          </div>

          {/* Tap Indicator for Mobile */}
          {isMobile && (
            <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2v20M17 7l-5-5-5 5" />
                <path d="M17 17l-5 5-5-5" />
              </svg>
            </div>
          )}
        </div>

        {/* Back Side - Details with Description and LinkedIn */}
        <div
          className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-xl overflow-hidden shadow-md"
          style={{ backgroundColor: colors.primary }}
        >
          <div className="w-full h-full flex flex-col p-6 md:p-8 relative">
            {/* Name and Role - Top Left */}
            <div className="flex flex-col gap-2 mb-6">
              <h3 className="text-2xl md:text-3xl text-white leading-tight font-semibold">
                {member.name}
              </h3>
              <p className="text-sm md:text-base text-white/90 uppercase tracking-wide font-semibold">
                {member.role}
              </p>
            </div>

            {/* Description */}
            {member.description && (
              <p className="text-sm md:text-base text-white/90 leading-relaxed">
                {member.description}
              </p>
            )}

            {/* LinkedIn Icon Link - Bottom Left */}
            {member.linkedinUrl && (
              <div className="mt-auto">
                <Link
                  href={member.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center text-white hover:text-white/80 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Linkedin className="w-6 h-6" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

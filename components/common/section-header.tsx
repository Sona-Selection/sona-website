import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  alignment?: "left" | "center";
  className?: string;
}

/**
 * Section Header Component
 * Reusable header component for page sections
 * @param {string} badge - Optional badge text
 * @param {string} title - Section title
 * @param {string} subtitle - Optional subtitle
 * @param {'left' | 'center'} alignment - Content alignment
 * @param {string} className - Additional CSS classes
 */
export default function SectionHeader({
  badge,
  title,
  subtitle,
  alignment = "left",
  className,
}: SectionHeaderProps) {
  const alignmentClasses =
    alignment === "center" ? "items-center text-center" : "items-start";

  return (
    <div
      className={cn(
        "flex flex-col gap-4 md:gap-6",
        alignmentClasses,
        className
      )}
    >
      {badge && (
        <Badge variant="section" className="text-sm md:text-base">
          {badge}
        </Badge>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[52px] text-[#1C140D] leading-tight tracking-tight font-semibold">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base md:text-lg text-[#1C140D] leading-relaxed tracking-tight max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}

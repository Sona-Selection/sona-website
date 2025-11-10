import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { colors } from "@/lib/theme/colors";

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
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[52px] leading-tight tracking-tight font-semibold" style={{ color: colors.textBlack }}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-base md:text-lg leading-relaxed tracking-tight max-w-2xl" style={{ color: colors.textBlack }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

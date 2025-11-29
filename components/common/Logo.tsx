import Image from "next/image";
import Link from "next/link";
import { companyInfo } from "@/lib/constants/company";

type LogoSize = "sm" | "md" | "lg";
type IconVariant = "default" | "white" | "orange";

interface LogoProps {
  size?: LogoSize;
  showText?: boolean;
  className?: string;
  href?: string;
  iconVariant?: IconVariant;
}

const sizeConfig = {
  sm: {
    icon: { width: 24, height: 24 },
    text: "text-xl", // ~20px
    overlap: "-ml-1", // Overlap amount
  },
  md: {
    icon: { width: 32, height: 32 },
    text: "text-2xl", // ~24px
    overlap: "-ml-2", // Overlap amount
  },
  lg: {
    icon: { width: 48, height: 48 },
    text: "text-4xl", // ~36px
    overlap: "-ml-3", // Overlap amount
  },
} as const;

// Map icon variants to logo files
const iconSources: Record<IconVariant, string> = {
  default: "/Icons/logo-white.svg",
  white: "/Icons/logo-white.svg",
  orange: "/Icons/logo-orange.svg",
};

export default function Logo({
  size = "md",
  showText = true,
  className = "",
  href = "/",
  iconVariant = "default",
}: LogoProps) {
  const config = sizeConfig[size];
  const iconSrc = iconSources[iconVariant] || iconSources.default;

  const LogoContent = () => (
    <div className={`flex items-end relative ${className}`}>
      <Image
        src={iconSrc}
        alt={`${companyInfo.name} Logo`}
        width={config.icon.width}
        height={config.icon.height}
        className="object-contain relative z-10"
        priority
      />
      {showText && (
        <span
          className={`${config.text} font-semibold ${config.overlap} relative z-0 leading-none`}
          style={{ fontFamily: "var(--font-logo)" }}
        >
          {companyInfo.name}
        </span>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="flex items-center">
        <LogoContent />
      </Link>
    );
  }

  return <LogoContent />;
}

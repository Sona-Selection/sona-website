import Image from "next/image";
import Link from "next/link";
import { companyInfo } from "@/lib/constants/company";

type LogoSize = "sm" | "md" | "lg";

interface LogoProps {
  size?: LogoSize;
  className?: string;
  href?: string;
}

const logoHeights: Record<LogoSize, number> = {
  sm: 40,
  md: 56,
  lg: 96,
};

export default function Logo({
  size = "md",
  className = "",
  href = "/",
}: LogoProps) {
  const height = logoHeights[size];
  const width = Math.round((height * 855) / 1032);
  const logo = (
    <Image
      src="/Icons/sona-logo.webp"
      alt={`${companyInfo.name} logo`}
      width={855}
      height={1032}
      style={{ width, height: "auto" }}
      className={`block shrink-0 object-contain ${className}`}
      unoptimized
      priority
    />
  );

  return href ? (
    <Link href={href} className="flex shrink-0 items-center">
      {logo}
    </Link>
  ) : logo;
}

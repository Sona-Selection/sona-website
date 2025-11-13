"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Logo from "@/components/common/Logo";
import { Menu } from "lucide-react";
import { navigationItems } from "@/lib/constants/navigation";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { colors } from "@/lib/theme/colors";

type NavbarVariant = "default" | "cream";

interface NavbarProps {
  variant?: NavbarVariant;
}

/**
 * Navbar Component
 * Site-wide navigation header with variant support
 * @param {NavbarVariant} variant - "default" (orange) or "cream" background
 */
export default function Navbar({ variant = "default" }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Variant-specific styles
  const bgColor = variant === "cream" ? colors.cream : colors.primary;
  const logoTextColor = variant === "cream" ? colors.primary : colors.white;
  const logoIconVariant = variant === "cream" ? "orange" : "white";
  const menuIconColor = variant === "cream" ? colors.navy : colors.white;
  const mobileSheetBg = variant === "cream" ? colors.cream : colors.primary;

  return (
    <header className="sticky top-0 z-50 w-full" style={{ backgroundColor: bgColor }}>
      <nav className="container mx-auto flex h-[72px] items-center justify-between px-6 lg:px-12">
        {/* Logo */}
        <div style={{ color: logoTextColor }}>
          <Logo
            size="md"
            className="transition-colors"
            iconVariant={logoIconVariant}
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-12">
          {navigationItems.map((item) => {
            const isActive = pathname === item.href;
            const linkColor =
              variant === "cream"
                ? isActive
                  ? colors.primary
                  : colors.navy
                : isActive
                ? colors.white
                : colors.black;
            const hoverColor = variant === "cream" ? colors.primary : colors.white;

            return (
              <Link
                key={item.href}
                href={item.href}
                className="text-base font-normal transition-colors"
                style={{ color: linkColor }}
                onMouseEnter={(e) => (e.currentTarget.style.color = hoverColor)}
                onMouseLeave={(e) => (e.currentTarget.style.color = linkColor)}
              >
                {item.label}
              </Link>
            );
          })}
          <Button
            asChild
            className="rounded-md px-6 py-2.5 font-medium"
            style={{
              backgroundColor: colors.navy,
              color: colors.white
            }}
          >
            <Link href="/contact-us">CONTACT US</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-black/10"
                style={{ color: menuIconColor }}
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[400px]"
              style={{ backgroundColor: mobileSheetBg }}
            >
              <nav className="flex flex-col space-y-6 mt-8">
                {navigationItems.map((item) => {
                  const isActive = pathname === item.href;
                  const mobileLinkColor =
                    variant === "cream"
                      ? isActive
                        ? colors.primary
                        : colors.navy
                      : isActive
                      ? colors.black
                      : colors.white;
                  const mobileHoverColor = variant === "cream" ? colors.primary : colors.black;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-lg font-medium transition-colors"
                      style={{ color: mobileLinkColor }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = mobileHoverColor)}
                      onMouseLeave={(e) => (e.currentTarget.style.color = mobileLinkColor)}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  );
                })}
                <Button
                  asChild
                  className="rounded-md"
                  style={{
                    backgroundColor: colors.navy,
                    color: colors.white
                  }}
                  onClick={() => setIsOpen(false)}
                >
                  <Link href="/contact-us">CONTACT US</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}

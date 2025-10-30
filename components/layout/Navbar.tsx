"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Logo from "@/components/common/Logo";
import { Menu } from "lucide-react";
import { navigationItems } from "@/lib/constants/navigation";
import { usePathname } from "next/navigation";
import { useState } from "react";

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
  const bgColor = variant === "cream" ? "bg-[#FFFBF0]" : "bg-[#FF6333]";
  const logoTextColor = variant === "cream" ? "text-[#FF6333]" : "text-white";
  const logoIconVariant = variant === "cream" ? "orange" : "white";
  const menuIconColor = variant === "cream" ? "text-[#022050]" : "text-white";
  const mobileSheetBg = variant === "cream" ? "bg-[#FFFBF0]" : "bg-[#FF6333]";

  return (
    <header className={`sticky top-0 z-50 w-full ${bgColor}`}>
      <nav className="container mx-auto flex h-[72px] items-center justify-between px-6 lg:px-12">
        {/* Logo */}
        <Logo
          size="md"
          className={logoTextColor}
          iconVariant={logoIconVariant}
        />

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-12">
          {navigationItems.map((item) => {
            const isActive = pathname === item.href;
            const linkColor =
              variant === "cream"
                ? isActive
                  ? "text-[#FF6333]"
                  : "text-[#022050] hover:text-[#FF6333]"
                : "text-black hover:text-white";

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-base font-normal transition-colors ${linkColor}`}
              >
                {item.label}
              </Link>
            );
          })}
          <Button
            asChild
            className="bg-[#022050] hover:bg-[#033070] text-white rounded-md px-6 py-2.5 font-medium"
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
                className={`${menuIconColor} hover:bg-black/10`}
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className={`w-[300px] sm:w-[400px] ${mobileSheetBg}`}
            >
              <nav className="flex flex-col space-y-6 mt-8">
                {navigationItems.map((item) => {
                  const isActive = pathname === item.href;
                  const mobileLinkColor =
                    variant === "cream"
                      ? isActive
                        ? "text-[#FF6333]"
                        : "text-[#022050] hover:text-[#FF6333]"
                      : "text-white hover:text-black";

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`text-lg font-medium transition-colors ${mobileLinkColor}`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  );
                })}
                <Button
                  asChild
                  className="bg-[#022050] hover:bg-[#033070] text-white rounded-md"
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

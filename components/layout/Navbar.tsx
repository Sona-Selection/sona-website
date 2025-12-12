"use client";

import { ChevronDown, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Logo from "@/components/common/Logo";
import { VisuallyHidden } from "@/components/ui/visually-hidden";
import { colors } from "@/lib/theme/colors";
import { navigationItems } from "@/lib/constants/navigation";
import { usePathname } from "next/navigation";
import { useState } from "react";
import DropdownItem from "./DropdownItem";
import MobileDropdownItem from "./MobileDropdownItem";

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
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpenItems, setMobileOpenItems] = useState<string[]>([]);
  const pathname = usePathname();

  // Variant-specific styles
  const bgColor = variant === "cream" ? colors.cream : colors.primary;
  const logoTextColor = variant === "cream" ? colors.primary : colors.white;
  const logoIconVariant = variant === "cream" ? "orange" : "white";
  const menuIconColor = variant === "cream" ? colors.navy : colors.white;
  const mobileSheetBg = variant === "cream" ? colors.cream : colors.primary;

  return (
    <header
      className="sticky top-0 z-50 w-full"
      style={{ backgroundColor: bgColor }}
    >
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
            // Check if this item or any of its subitems are active
            const isActive = item.href
              ? pathname === item.href
              : item.items?.some((subItem) => pathname === subItem.href);

            const linkColor =
              variant === "cream"
                ? isActive
                  ? colors.primary
                  : colors.navy
                : isActive
                ? colors.white
                : colors.black;
            const hoverColor =
              variant === "cream" ? colors.primary : colors.white;

            // If item has dropdown
            if (item.items) {
              return (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="text-base font-normal transition-colors flex items-center gap-1 py-2"
                      style={{ color: linkColor }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = hoverColor)
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = linkColor)
                      }
                    >
                      {item.label}
                      <ChevronDown className="h-4 w-4" />
                    </Link>
                  ) : (
                    <button
                      className="text-base font-normal transition-colors flex items-center gap-1 py-2"
                      style={{ color: linkColor }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = hoverColor)
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = linkColor)
                      }
                    >
                      {item.label}
                      <ChevronDown className="h-4 w-4" />
                    </button>
                  )}

                  {/* Dropdown Menu - Recursive */}
                  {openDropdown === item.label && (
                    <div className="absolute top-full left-0 pt-2">
                      <div
                        className="min-w-[240px] rounded-lg shadow-lg py-2"
                        style={{
                          backgroundColor: colors.white,
                          border: `1px solid ${colors.cream}`,
                        }}
                      >
                        {item.items.map((subItem) => (
                          <DropdownItem
                            key={subItem.href || subItem.label}
                            item={subItem}
                            variant={variant}
                            level={0}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            // Regular link without dropdown
            return (
              <Link
                key={item.href}
                href={item.href || "#"}
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
              color: colors.white,
            }}
          >
            <a href="mailto:info@sonaselection.com">CONTACT US</a>
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
              className="w-[85vw] sm:w-[400px] p-0 flex flex-col"
              style={{ backgroundColor: mobileSheetBg }}
              closeIconColor={colors.black}
            >
              <SheetHeader className="p-6 pb-4">
                <VisuallyHidden>
                  <SheetTitle>Navigation Menu</SheetTitle>
                </VisuallyHidden>
                <div style={{ color: logoTextColor }}>
                  <Logo
                    size="md"
                    className="transition-colors"
                    iconVariant={logoIconVariant}
                  />
                </div>
              </SheetHeader>

              {/* Divider */}
              <div
                className="h-px mx-6"
                style={{
                  backgroundColor:
                    variant === "cream"
                      ? "rgba(33, 38, 73, 0.1)"
                      : "rgba(255, 255, 255, 0.1)",
                }}
              />

              <nav className="flex flex-col flex-1 px-6 py-8 overflow-y-auto scrollbar-hide">
                <div className="flex flex-col space-y-1 mb-8">
                  {navigationItems.map((item) => {
                    // Check if this item or any of its subitems are active
                    const isActive = item.href
                      ? pathname === item.href
                      : item.items?.some((subItem) => pathname === subItem.href);

                    const mobileLinkColor =
                      variant === "cream"
                        ? isActive
                          ? colors.primary
                          : colors.navy
                        : isActive
                        ? colors.white
                        : "rgba(255, 255, 255, 0.8)";
                    const mobileHoverColor =
                      variant === "cream" ? colors.primary : colors.white;

                    // If item has dropdown - use recursive component
                    if (item.items) {
                      const isDropdownOpen = mobileOpenItems.includes(item.label);
                      return (
                        <div key={item.label} className="space-y-1">
                          {item.href ? (
                            <Link
                              href={item.href}
                              className="w-full text-base font-medium py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-between"
                              style={{
                                color: mobileLinkColor,
                                backgroundColor: isActive
                                  ? variant === "cream"
                                    ? "rgba(33, 38, 73, 0.05)"
                                    : "rgba(255, 255, 255, 0.1)"
                                  : "transparent",
                              }}
                              onClick={(e) => {
                                if (!isDropdownOpen) {
                                  e.preventDefault();
                                  setMobileOpenItems([...mobileOpenItems, item.label]);
                                } else {
                                  setIsOpen(false);
                                  setMobileOpenItems([]);
                                }
                              }}
                            >
                              {item.label}
                              <ChevronDown
                                className={`h-4 w-4 transition-transform ${
                                  isDropdownOpen ? "rotate-180" : ""
                                }`}
                              />
                            </Link>
                          ) : (
                            <button
                              className="w-full text-base font-medium py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-between"
                              style={{
                                color: mobileLinkColor,
                                backgroundColor: isActive
                                  ? variant === "cream"
                                    ? "rgba(33, 38, 73, 0.05)"
                                    : "rgba(255, 255, 255, 0.1)"
                                  : "transparent",
                              }}
                              onClick={() => {
                                if (isDropdownOpen) {
                                  setMobileOpenItems(
                                    mobileOpenItems.filter((label) => label !== item.label)
                                  );
                                } else {
                                  setMobileOpenItems([...mobileOpenItems, item.label]);
                                }
                              }}
                            >
                              {item.label}
                              <ChevronDown
                                className={`h-4 w-4 transition-transform ${
                                  isDropdownOpen ? "rotate-180" : ""
                                }`}
                              />
                            </button>
                          )}

                          {/* Mobile Dropdown Items - Recursive */}
                          {isDropdownOpen && (
                            <div className="space-y-1">
                              {item.items.map((subItem) => (
                                <MobileDropdownItem
                                  key={subItem.href || subItem.label}
                                  item={subItem}
                                  variant={variant}
                                  level={0}
                                  openItems={mobileOpenItems}
                                  onToggle={(label) => {
                                    if (mobileOpenItems.includes(label)) {
                                      setMobileOpenItems(
                                        mobileOpenItems.filter((l) => l !== label)
                                      );
                                    } else {
                                      setMobileOpenItems([...mobileOpenItems, label]);
                                    }
                                  }}
                                  onNavigate={() => {
                                    setIsOpen(false);
                                    setMobileOpenItems([]);
                                  }}
                                />
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    }

                    // Regular link without dropdown
                    return (
                      <Link
                        key={item.href}
                        href={item.href || "#"}
                        className="text-base font-medium py-3 px-4 rounded-lg transition-all duration-200"
                        style={{
                          color: mobileLinkColor,
                          backgroundColor: isActive
                            ? variant === "cream"
                              ? "rgba(33, 38, 73, 0.05)"
                              : "rgba(255, 255, 255, 0.1)"
                            : "transparent",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = mobileHoverColor;
                          if (!isActive) {
                            e.currentTarget.style.backgroundColor =
                              variant === "cream"
                                ? "rgba(33, 38, 73, 0.05)"
                                : "rgba(255, 255, 255, 0.05)";
                          }
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = mobileLinkColor;
                          if (!isActive) {
                            e.currentTarget.style.backgroundColor = "transparent";
                          }
                        }}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </div>

                <div className="mt-auto">
                  <Button
                    asChild
                    className="w-full rounded-lg font-semibold h-12 text-base"
                    style={{
                      backgroundColor: colors.navy,
                      color: colors.white,
                    }}
                    onClick={() => setIsOpen(false)}
                  >
                    <Link href="mailto:info@sonaselection.com">CONTACT US</Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}

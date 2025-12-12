"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { colors } from "@/lib/theme/colors";
import { NavItem } from "@/lib/types";

interface DropdownItemProps {
  item: NavItem;
  variant?: "default" | "cream";
  level?: number;
}

/**
 * Recursive dropdown item component for desktop navigation
 * Handles infinite levels of nesting
 */
export default function DropdownItem({
  item,
  variant = "default",
  level = 0,
}: DropdownItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = item.href ? pathname === item.href : false;

  // If item has nested items, render with submenu
  if (item.items && item.items.length > 0) {
    return (
      <div
        className="relative"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <div
          className="px-4 py-2.5 text-sm font-normal transition-colors flex items-center justify-between cursor-pointer"
          style={{
            color: isActive ? colors.primary : colors.navy,
            backgroundColor: isActive || isOpen ? colors.cream : "transparent",
          }}
        >
          {item.label}
          <ChevronRight className="h-4 w-4" />
        </div>

        {/* Nested Dropdown - appears to the left */}
        {isOpen && (
          <div className="absolute top-0 right-full mr-1">
            <div
              className="min-w-[280px] rounded-lg shadow-lg py-2"
              style={{
                backgroundColor: colors.white,
                border: `1px solid ${colors.cream}`,
              }}
            >
              {item.items.map((nestedItem) => (
                <DropdownItem
                  key={nestedItem.href || nestedItem.label}
                  item={nestedItem}
                  variant={variant}
                  level={level + 1}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  // Regular link item without nested items
  return (
    <Link
      href={item.href || "#"}
      className="block px-4 py-2.5 text-sm font-normal transition-colors"
      style={{
        color: isActive ? colors.primary : colors.navy,
        backgroundColor: isActive ? colors.cream : "transparent",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = colors.cream;
        e.currentTarget.style.color = colors.primary;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = isActive
          ? colors.cream
          : "transparent";
        e.currentTarget.style.color = isActive ? colors.primary : colors.navy;
      }}
    >
      {item.label}
    </Link>
  );
}

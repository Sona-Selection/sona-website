"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { colors } from "@/lib/theme/colors";
import { NavItem } from "@/lib/types";

interface MobileDropdownItemProps {
  item: NavItem;
  variant?: "default" | "cream";
  level?: number;
  openItems: string[];
  onToggle: (label: string) => void;
  onNavigate: () => void;
}

/**
 * Recursive mobile dropdown item component
 * Handles infinite levels of nesting with click-to-expand
 */
export default function MobileDropdownItem({
  item,
  variant = "default",
  level = 0,
  openItems,
  onToggle,
  onNavigate,
}: MobileDropdownItemProps) {
  const pathname = usePathname();
  const isActive = item.href ? pathname === item.href : false;
  const isOpen = openItems.includes(item.label);

  // Calculate padding based on nesting level
  const paddingLeft = `${(level + 1) * 16}px`;

  const linkColor =
    variant === "cream"
      ? isActive
        ? colors.primary
        : colors.navy
      : isActive
      ? colors.white
      : "rgba(255, 255, 255, 0.8)";

  // If item has nested items, render with expand/collapse
  if (item.items && item.items.length > 0) {
    return (
      <div className="space-y-1">
        <button
          className="w-full text-sm font-normal py-2.5 px-4 rounded-lg transition-all duration-200 flex items-center justify-between"
          style={{
            color: linkColor,
            backgroundColor:
              isActive || isOpen
                ? variant === "cream"
                  ? "rgba(33, 38, 73, 0.05)"
                  : "rgba(255, 255, 255, 0.1)"
                : "transparent",
            paddingLeft,
          }}
          onClick={() => onToggle(item.label)}
        >
          {item.label}
          <ChevronDown
            className={`h-4 w-4 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Nested Items */}
        {isOpen && (
          <div className="space-y-1">
            {item.items.map((nestedItem) => (
              <MobileDropdownItem
                key={nestedItem.href || nestedItem.label}
                item={nestedItem}
                variant={variant}
                level={level + 1}
                openItems={openItems}
                onToggle={onToggle}
                onNavigate={onNavigate}
              />
            ))}
          </div>
        )}
      </div>
    );
  }

  // Regular link item without nested items
  return (
    <Link
      href={item.href || "#"}
      className="block text-sm font-normal py-2.5 px-4 rounded-lg transition-all duration-200"
      style={{
        color: linkColor,
        backgroundColor: isActive
          ? variant === "cream"
            ? "rgba(33, 38, 73, 0.05)"
            : "rgba(255, 255, 255, 0.1)"
          : "transparent",
        paddingLeft,
      }}
      onClick={onNavigate}
    >
      {item.label}
    </Link>
  );
}

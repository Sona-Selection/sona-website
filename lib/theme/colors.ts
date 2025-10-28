/**
 * Color utilities for easy access to theme colors
 * Extracted from Figma design
 */

export const colors = {
  // Brand
  primary: "#FF6333",

  // Backgrounds
  cream: "#FFFBF0",
  creamLight: "#FBFBEF",
  creamAlt: "#FFFCF4",
  white: "#FFFFFF",
  black: "#000000",

  // Navy variants
  navy: "#022050",
  navyDark: "#02244A",
  navyDeep: "#021F40",

  // Text colors
  textBlack: "#1C140D",
  textDark: "#310D02",
  textGray: "#818181",
  textGrayMid: "#6D6D6D",

  // Opacity variants (for overlays)
  blackOverlay: "rgba(0, 0, 0, 0.77)",
  orangeOverlay: "rgba(255, 99, 51, 0.38)",
  navyOverlay: "rgba(2, 55, 80, 0.15)",
} as const;

export type ColorName = keyof typeof colors;

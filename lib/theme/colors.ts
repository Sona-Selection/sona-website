/**
 * Color utilities for easy access to theme colors
 */

export const colors = {
  // Brand
  primary: '#FF6333',

  // Backgrounds
  cream: '#FFFBF0',
  black: '#000000',
  navy: '#022050',
  white: '#FFFFFF',
} as const;

export type ColorName = keyof typeof colors;

/**
 * Font Configuration Guide
 *
 * This file documents all fonts used in the Sona website.
 * Update this file when you add the actual font files.
 *
 * FONTS NEEDED:
 *
 * 1. PP Mori - Main body font
 *    - Used for: Body text, paragraphs, navigation links, general content
 *    - Weights needed: 400 (Regular), 500 (Medium), 600 (Semi-bold)
 *
 * 2. DIN Next W1G - Logo font
 *    - Used for: "Sona" logo text
 *    - Weights needed: 700 (Bold)
 *
 * 3. Rufina - Display/Heading font
 *    - Used for: Large headings (h1, hero titles)
 *    - Weights needed: 400 (Regular), 700 (Bold)
 *
 * 4. Dagny Pro - Button font
 *    - Used for: Buttons (especially Contact Us button)
 *    - Weights needed: 500 (Medium), 600 (Semi-bold)
 *
 * HOW TO ADD FONTS:
 *
 * Option 1 - Local Fonts:
 * 1. Place font files in: /public/fonts/
 * 2. Import in app/layout.tsx using next/font/local
 * 3. Example:
 *    const ppMori = localFont({
 *      src: [
 *        { path: '../public/fonts/PPMori-Regular.woff2', weight: '400' },
 *        { path: '../public/fonts/PPMori-Medium.woff2', weight: '500' },
 *      ],
 *      variable: '--font-pp-mori',
 *    });
 *
 * Option 2 - Google Fonts (if available):
 * 1. Import in app/layout.tsx using next/font/google
 * 2. Example for Rufina:
 *    import { Rufina } from 'next/font/google';
 *    const rufina = Rufina({
 *      weight: ['400', '700'],
 *      variable: '--font-rufina',
 *      subsets: ['latin']
 *    });
 */

// Placeholder exports for TypeScript
export const fontVariables = {
  ppMori: '--font-pp-mori',
  dinNext: '--font-din-next',
  rufina: '--font-rufina',
  dagnyPro: '--font-dagny-pro',
} as const;

export type FontVariable = typeof fontVariables[keyof typeof fontVariables];

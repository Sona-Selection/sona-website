/**
 * Theme Configuration
 *
 * Central theme file for all design tokens.
 * Update values here as Figma design evolves.
 */

export const theme = {
  colors: {
    // Brand Colors (from Figma)
    primary: {
      main: '#FF6333',
      foreground: '#FFFFFF',
    },

    // Background Colors (from Figma)
    background: {
      cream: '#FFFBF0',       // Light cream background
      black: '#000000',       // Black
      navy: '#022050',        // Dark navy blue
      white: '#FFFFFF',       // White
    },

    // Text Colors (will be expanded as you provide more)
    text: {
      white: '#FFFFFF',
      black: '#000000',
      primary: '#FF6333',
      // Add more text colors as provided
    },

    // Borders
    border: {
      primary: '#FF6333',
      light: 'rgba(255, 99, 51, 0.2)',
    },
  },

  typography: {
    // Font Families
    fontFamily: {
      // Main body font - PP Mori (most content)
      sans: 'var(--font-pp-mori)',

      // Logo font - DIN Next W1G
      logo: 'var(--font-din-next)',

      // Headings font - Rufina (big headings)
      heading: 'var(--font-rufina)',

      // Button font - Dagny Pro (Contact Us and similar buttons)
      button: 'var(--font-dagny-pro)',

      // Fallback
      mono: 'var(--font-geist-mono)',
    },

    // Font Usage Guide:
    // - PP Mori: Body text, paragraphs, general content, nav links
    // - DIN Next W1G: Logo text "Sona"
    // - Rufina: Large headings (h1, hero titles)
    // - Dagny Pro: Buttons (especially Contact Us button)

    // Font Sizes (will update as you provide specific values)
    fontSize: {
      hero: '4rem',           // 64px - Rufina
      'hero-mobile': '2.5rem', // 40px
      h1: '3rem',             // 48px - Rufina
      h2: '2.25rem',          // 36px - Rufina
      h3: '1.875rem',         // 30px
      h4: '1.5rem',           // 24px
      base: '1rem',           // 16px - PP Mori
      lg: '1.125rem',         // 18px
      sm: '0.875rem',         // 14px
      nav: '1rem',            // 16px - PP Mori
      button: '1rem',         // 16px - Dagny Pro
      logo: '1.5rem',         // 24px - DIN Next W1G
    },

    // Font Weights
    fontWeight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },

    // Line Heights
    lineHeight: {
      tight: '1.2',
      normal: '1.5',
      relaxed: '1.75',
    },
  },

  spacing: {
    // Base spacing scale
    0: '0',
    1: '0.25rem',   // 4px
    2: '0.5rem',    // 8px
    3: '0.75rem',   // 12px
    4: '1rem',      // 16px
    5: '1.25rem',   // 20px
    6: '1.5rem',    // 24px
    8: '2rem',      // 32px
    10: '2.5rem',   // 40px
    12: '3rem',     // 48px
    16: '4rem',     // 64px
    20: '5rem',     // 80px
    24: '6rem',     // 96px
    32: '8rem',     // 128px

    // Section spacing
    section: {
      sm: '3rem',
      md: '5rem',
      lg: '8rem',
    },

    // Container
    container: {
      padding: '1.5rem',
      maxWidth: '1280px',
    },
  },

  borderRadius: {
    none: '0',
    sm: '0.25rem',
    md: '0.5rem',
    lg: '0.625rem',
    xl: '1rem',
    full: '9999px',
  },

  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
  },

  transitions: {
    fast: '150ms ease',
    normal: '250ms ease',
    slow: '350ms ease',
  },

  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },

  // Component-specific tokens
  components: {
    navbar: {
      height: '72px',
      background: '#FF6333',
      padding: '1.5rem 3rem',
      logo: {
        fontSize: '1.5rem',
        color: '#FFFFFF',
      },
      link: {
        color: '#000000',
        hoverColor: '#FFFFFF',
        fontSize: '1rem',
      },
    },

    button: {
      // Button Type 1: Contact Us (Navy blue filled)
      contactUs: {
        background: '#022050',
        hoverBackground: '#033070',
        color: '#FFFFFF',
        fontFamily: 'var(--font-dagny-pro)',
        borderRadius: '0.375rem',
        padding: '0.625rem 1.5rem',
        fontSize: '1rem',
        fontWeight: '500',
        border: 'none',
      },

      // Button Type 2: Explore Our Capabilities (Orange filled)
      primary: {
        background: '#FF6333',
        hoverBackground: '#E55A3A',
        color: '#FFFFFF',
        fontFamily: 'var(--font-pp-mori)',
        borderRadius: '0.5rem',
        padding: '1.5rem 2rem',
        fontSize: '1rem',
        fontWeight: '400',
        border: 'none',
      },

      // Button Type 3: Connect With Us (Transparent with orange text + arrow)
      secondary: {
        background: 'transparent',
        hoverBackground: 'rgba(255, 99, 51, 0.1)',
        color: '#FF6333',
        fontFamily: 'var(--font-pp-mori)',
        border: '1px solid #FF6333',
        borderRadius: '0.5rem',
        padding: '1.5rem 2rem',
        fontSize: '1rem',
        fontWeight: '400',
        withIcon: true, // Indicates this button should have an arrow icon
      },

      // Placeholder for additional button variants
      // Add more as you identify them in Figma
      variant4: {
        // Will be populated as you provide more button styles
      },
      variant5: {
        // Will be populated as you provide more button styles
      },
    },

    hero: {
      background: '#000000',
      titleColor: '#FFFFFF',
      subtitleColor: 'rgba(255, 255, 255, 0.9)',
      minHeight: 'calc(100vh - 72px)',
    },
  },
} as const;

// Type exports for TypeScript autocompletion
export type Theme = typeof theme;
export type ThemeColors = typeof theme.colors;
export type ThemeTypography = typeof theme.typography;
export type ThemeSpacing = typeof theme.spacing;

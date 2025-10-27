export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon?: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  email: string;
  phone: string;
  address: string;
}

export interface HeroSection {
  title: string;
  subtitle: string;
  description?: string;
  primaryCTA?: {
    label: string;
    href: string;
  };
  secondaryCTA?: {
    label: string;
    href: string;
  };
  imageUrl?: string;
}

export interface Feature {
  title: string;
  description: string;
  icon?: string;
  imageUrl?: string;
}

export interface ContentBlock {
  title: string;
  description: string;
  imageUrl?: string;
  imagePosition?: 'left' | 'right';
  cta?: {
    label: string;
    href: string;
  };
}

export interface Stat {
  label: string;
  value: string;
  suffix?: string;
  prefix?: string;
}

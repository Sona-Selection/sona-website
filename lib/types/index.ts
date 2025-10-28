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
  videoLink?: string;
  backgroundImage?: string;
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
  imagePosition?: "left" | "right";
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

// New types for home page sections

export interface Brand {
  name: string;
  logo: string;
}

export interface AboutCard {
  image: string;
  text: string;
}

export interface AboutSection {
  badge?: string;
  heading: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
  cards: AboutCard[];
}

export interface Capability {
  image: string;
  title: string;
  description: string;
}

export interface CapabilitiesSection {
  badge: string;
  title: string;
  description: string;
  capabilities: Capability[];
  ctaLabel: string;
  ctaHref: string;
}

export interface USP {
  image: string;
  title: string;
  description: string;
  link?: string;
}

export interface USPsSection {
  badge: string;
  title: string;
  description: string;
  usps: USP[];
}

export interface ProductCategory {
  name: string;
  description: string;
}

export interface ProductsSection {
  badge: string;
  title: string;
  description: string;
  mainImage: string;
  categories: ProductCategory[];
  ctaLabel: string;
  ctaHref: string;
}

export interface SustainabilityFeature {
  title: string;
  description: string;
  highlighted?: boolean;
}

export interface Certification {
  name: string;
  description?: string;
  image?: string;
}

export interface SustainabilitySection {
  badge: string;
  title: string;
  mainImage: string;
  features: SustainabilityFeature[];
  certifications: Certification[];
}

export interface TeamMember {
  name: string;
  role: string;
  description?: string;
  image: string;
  logo?: string;
  linkedinUrl?: string;
}

export interface LeadershipSection {
  badge: string;
  title: string;
  team: TeamMember[];
}

export interface CTASection {
  title: string;
  ctaLabel: string;
  ctaHref: string;
  backgroundImage: string;
}

export interface NavItem {
  label: string;
  href?: string;
  items?: NavItem[];
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
  image: string;
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

// Investor Relations Types

export interface InvestorDocument {
  title: string;
  href: string;
  date?: string;
  type?: string;
}

export interface InvestorDocumentCategory {
  title: string;
  documents: InvestorDocument[];
}

export interface InvestorHeroSection {
  title: string;
  subtitle: string;
  primaryCTA: {
    label: string;
    href: string;
  };
  secondaryCTA: {
    label: string;
    href: string;
  };
  backgroundImage: string;
}

export interface IPOCornerSection {
  title: string;
  badge?: string;
  documents: InvestorDocument[];
  ctaLabel: string;
  ctaHref: string;
}

export interface BoardMemberSection {
  title: string;
  badge?: string;
  subtitle?: string;
  members: TeamMember[];
  downloadLabel?: string;
  downloadHref?: string;
}

export interface BoardSection {
  title: string;
  badge?: string;
  board: BoardMemberSection;
  committees: BoardMemberSection;
}

export interface FinancialReportingSection {
  title: string;
  badge?: string;
  categories: InvestorDocumentCategory[];
  ctaLabel: string;
  ctaHref: string;
}

export interface PoliciesSection {
  title: string;
  badge?: string;
  policies: InvestorDocument[];
  ctaLabel: string;
  ctaHref: string;
}

export interface ShareholderSection {
  title: string;
  badge?: string;
  categories: InvestorDocumentCategory[];
  ctaLabel: string;
  ctaHref: string;
}

export interface OtherDisclosuresSection {
  title: string;
  badge?: string;
  items: InvestorDocument[];
  ctaLabel: string;
  ctaHref: string;
}

export interface InvestorRelationsContent {
  hero: InvestorHeroSection;
  ipoCorner: IPOCornerSection;
  board: BoardSection;
  financialReporting: FinancialReportingSection;
  policies: PoliciesSection;
  shareholder: ShareholderSection;
  otherDisclosures: OtherDisclosuresSection;
}

// About Us Page Types

export interface AboutUsHeroSection {
  title: string;
  subtitle: string;
  foundingInfo: string;
  description: string;
  image: string;
  backgroundImage?: string;
  textureImage?: string;
}

export interface ValueCard {
  icon: string; // lucide-react icon name
  title: string;
  description: string;
}

export interface ValuesSection {
  badge: string;
  title: string;
  values: ValueCard[];
}

export interface PeopleCultureSection {
  heading: string;
  description: string;
  image: string;
}

export interface JourneyMilestone {
  year: string;
  title: string;
  description: string;
  image: string;
}

export interface JourneySection {
  badge: string;
  title: string;
  milestones: JourneyMilestone[];
}

export interface AboutUsPage {
  hero: AboutUsHeroSection;
  peopleCulture: PeopleCultureSection;
  values: ValuesSection;
  leadership: LeadershipSection;
  cta: CTASection;
}

// Products Page Types

export interface ProductsHeroSection {
  badge: string;
  title: string;
  subtitle: string;
  paragraphs: string[];
  image: string;
}

export interface ProductItem {
  image: string;
  title: string;
}

export interface ProductCategorySection {
  title: string;
  description: string;
  products: ProductItem[];
  showViewAll?: boolean;
  showArrowNav?: boolean;
  viewAllHref?: string;
}

export interface AdvancedFinish {
  image: string;
  label: string;
}

export interface AdvancedFinishesSection {
  title: string;
  description: string;
  finishes: AdvancedFinish[];
}

// Capabilities Page Types

export interface CapacityCard {
  label: string;
  value: string;
  image: string;
}

export interface FacilityPartner {
  name: string;
  country: string;
  logo: string;
}

export interface CapabilitiesHeroSection {
  title: string;
  description: string;
  backgroundImage: string;
  capacityCards: CapacityCard[];
  qualityLab: {
    badge: string;
    title: string;
    description: string[];
    ctaLabel: string;
    ctaHref: string;
  };
  facilities: FacilityPartner[];
}

export interface FacilityImage {
  image: string;
  label: string;
}

export interface FacilitiesGallerySection {
  heading: string;
  images: FacilityImage[];
}

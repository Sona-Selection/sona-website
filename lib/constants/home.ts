import {
  AboutSection,
  Brand,
  CTASection,
  CapabilitiesSection,
  HeroSection,
  LeadershipSection,
  ProductsSection,
  SustainabilitySection,
  USPsSection,
} from "@/lib/types";

import { figmaAssets } from "./assets";

/**
 * Hero Section Data
 */
export const homeHero: HeroSection = {
  title: "Crafting fabric, reimagining fashion\nMastering speed.",
  subtitle:
    "Legacy backed modern textile manufacturer offering fast, sustainable fabric & garment solutions in India",
  primaryCTA: {
    label: "Explore Our Capabilities",
    href: "#capabilities",
  },
  secondaryCTA: {
    label: "Connect With Us ↗",
    href: "/contact-us",
  },
  videoLink: "#intro-video",
  backgroundImage: figmaAssets.hero.background,
};

/**
 * Trusted Brands Section Data
 */
export const trustedBrands: Brand[] = [
  { name: "Brand 1", logo: figmaAssets.brands.brand1 },
  { name: "Brand 2", logo: figmaAssets.brands.brand2 },
  { name: "Brand 3", logo: figmaAssets.brands.brand3 },
  { name: "Brand 4", logo: figmaAssets.brands.brand4 },
  { name: "Brand 5", logo: figmaAssets.brands.brand5 },
  { name: "Brand 6", logo: figmaAssets.brands.brand6 },
  { name: "Brand 7", logo: figmaAssets.brands.brand7 },
  { name: "Brand 8", logo: figmaAssets.brands.brand8 },
  { name: "Brand 9", logo: figmaAssets.brands.brand9 },
  { name: "Brand 10", logo: figmaAssets.brands.brand10 },
  { name: "Brand 11", logo: figmaAssets.brands.brand11 },
];

/**
 * About Section Data
 */
export const aboutSection: AboutSection = {
  heading: "Redefining Modern Textile Manufacturing",
  body: "Sona Selections is a future-ready textile manufacturer that owns its entire supply chain — from sourcing yarn to delivering finished garments. Headquartered in Bhilwara, Rajasthan, our innovation-led, zero-waste approach ensures faster turnarounds, flexible MOQs, and uncompromising quality. We are cut from a different cloth — built on precision, purpose, and progress.",
  ctaLabel: "Learn more",
  ctaHref: "/about-us",
  cards: [
    {
      image: figmaAssets.about.card1,
      text: "future-ready textile manufacturer that owns its entire supply chain.",
    },
    {
      image: figmaAssets.about.card2,
      text: "Built on precision, purpose, and progress.",
    },
  ],
};

/**
 * Capabilities Section Data
 */
export const capabilitiesSection: CapabilitiesSection = {
  badge: "Our Capabilities",
  title: "From Spool to Stitch:",
  description:
    "Our capabilities cover the full spectrum of textile manufacturing delivering agility, precision, and quality at every stage.",
  capabilities: [
    {
      image: figmaAssets.capabilities.card1,
      title: "Yarn to Fabric",
      description:
        "We transform raw materials into high-quality fabrics, utilizing advanced weaving and knitting technologies to create a wide range of textiles.",
    },
    {
      image: figmaAssets.capabilities.card2,
      title: "Aggregated Garmenting",
      description:
        "Our garmenting services encompass cutting, sewing, and finishing, ensuring precise construction and attention to detail in every garment.",
    },
    {
      image: figmaAssets.capabilities.card3,
      title: "Quality, R&D & Sampling",
      description:
        "We maintain rigorous quality control standards throughout the production process, with dedicated R&D and sampling teams to ensure product excellence and innovation.",
    },
  ],
  ctaLabel: "Explore Full Capabilities",
  ctaHref: "/capabilities",
};

/**
 * USPs Section Data
 */
export const uspsSection: USPsSection = {
  badge: "Our USP",
  title: "Why Choose Sona",
  description:
    "At Sona, we own the entire supply chain, from yarn sourcing to finished garments. We deliver faster turnarounds, smaller MOQs, and sustainable innovation for the fashion industry.",
  usps: [
    {
      image: figmaAssets.about.card1,
      title: "Faster MOQs",
      description:
        "At Sona, we own the entire supply chain, from yarn sourcing to finished garments. We deliver faster turnarounds, smaller MOQs, and sustainable innovation for the fashion industry. At Sona, we own the entire supply chain, from yarn sourcing to finished garments. We deliver faster turnarounds, smaller MOQs, and sustainable innovation for the fashion industry.",
      link: "#",
    },
    {
      image: figmaAssets.about.card2,
      title: "End-to-End Supply Chain",
      description:
        "Complete control from raw materials to finished products, ensuring quality at every step of the manufacturing process.",
      link: "#",
    },
    {
      image: figmaAssets.capabilities.card1,
      title: "Sustainable Innovation",
      description:
        "Zero-waste approach with eco-friendly processes and certifications, contributing to a greener future for fashion.",
      link: "#",
    },
  ],
};

/**
 * Products Section Data
 */
export const productsSection: ProductsSection = {
  badge: "Product Range",
  title: "Textile Solutions Built to Perform",
  description:
    "Our textile catalog spans versatile categories suitable for every application, from fashion to industrial use.",
  mainImage: figmaAssets.products.mainImage,
  categories: [
    {
      name: "Woven Fabrics ↗",
      description:
        "At Sona, we own the entire supply chain, from yarn sourcing to finished garments. We deliver faster",
    },
    {
      name: "finished Fabrics ↗",
      description:
        "At Sona, we own the entire supply chain, from yarn sourcing to finished garments. We deliver faster turnarounds, smaller MOQs, and sustainable innovation for the fashion industry.",
    },
    {
      name: "Custom applications ↗",
      description:
        "At Sona, we own the entire supply chain, from yarn sourcing to finished garments. We deliver faster turnarounds, smaller MOQs, and sustainable innovation for the fashion industry.",
    },
  ],
  ctaLabel: "Explore All products",
  ctaHref: "/products",
};

/**
 * Sustainability Section Data
 */
export const sustainabilitySection: SustainabilitySection = {
  badge: "cut from a different cloth",
  title: "Strong Commitment to Sustainability",
  mainImage: figmaAssets.sustainability.mainImage,
  features: [
    {
      title: "Zero Liquid Discharge (ZLD)",
      description:
        "All water used is treated and recycled on-site, with no liquid waste leaving the facility.",
    },
    {
      title: "Renewable Energy",
      description:
        "90% of electricity is generated in-house through solar power and steam turbines.",
      highlighted: true,
    },
    {
      title: "Emission Control",
      description:
        "Electrostatic Precipitators are used to control and reduce emissions.",
    },
    {
      title: "Sustainable Materials",
      description:
        "Product portfolio includes eco-conscious fabrics made from Better Cotton Initiative and Organic Cotton",
    },
  ],
  certifications: [
    {
      name: "Global Organic Textile Standard (GOTS)",
      description: "Scope Certificate - Version 7.0",
      image: figmaAssets.sustainability.cert1,
    },
    {
      name: "Regenagri Chain of Custody",
      description: "Scope Certificate - Textiles Version 1.0",
      image: figmaAssets.sustainability.cert2,
    },
    {
      name: "Organic & Recycled Standards",
      description: "OCS (Version 3.0), GRS (Version 4.0), RCS (Version 2.0)",
      image: figmaAssets.sustainability.cert3,
    },
    {
      name: "OEKO-TEX'",
      description: "standard 100 Certification",
      image: figmaAssets.sustainability.cert4,
    },
  ],
};

/**
 * Leadership Section Data
 */
export const leadershipSection: LeadershipSection = {
  badge: "cut from a different cloth",
  title: "Meet Our Leadership",
  team: [
    {
      name: "Subhash Nuwal",
      role: "Chairman",
      description:
        "Seasoned entrepreneur with over 35 years of experience in the textile industry. As Chairman of Sona Group, he oversees one of India's largest textile processing capacities, currently 12 million meters per month",
      image: figmaAssets.leadership.member1,
      logo: figmaAssets.leadership.companyLogo,
    },
    {
      name: "Harshil Nuwal",
      role: "Founder and MD",
      image: figmaAssets.leadership.member2,
    },
    {
      name: "Deepank Bhandari",
      role: "Founder and MD",
      image: figmaAssets.leadership.member3,
    },
  ],
};

/**
 * CTA Section Data
 */
export const ctaSection: CTASection = {
  title: "Let's build the future of fabric together",
  ctaLabel: "Contact us",
  ctaHref: "/contact-us",
  backgroundImage: figmaAssets.cta.background,
};

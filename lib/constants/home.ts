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

import { assets } from "./assets";

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
  backgroundImage: assets.hero.background,
};

/**
 * Trusted Brands Section Data
 */
export const trustedBrands: Brand[] = [
  { name: "Brand 1", logo: assets.brands.brand1 },
  { name: "Brand 2", logo: assets.brands.brand2 },
  { name: "Brand 3", logo: assets.brands.brand3 },
  { name: "Brand 4", logo: assets.brands.brand4 },
  { name: "Brand 5", logo: assets.brands.brand5 },
  { name: "Brand 6", logo: assets.brands.brand6 },
  { name: "Brand 7", logo: assets.brands.brand7 },
  { name: "Brand 8", logo: assets.brands.brand8 },
  { name: "Brand 9", logo: assets.brands.brand9 },
  { name: "Brand 10", logo: assets.brands.brand10 },
  { name: "Brand 11", logo: assets.brands.brand11 },
  { name: "Brand 12", logo: assets.brands.brand12 },
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
      image: assets.about.card1,
      text: "3000 units an hour:\nManufacturing Capabilities.",
    },
    {
      image: assets.about.card2,
      text: "Faster Turnaround:\nIn-House Testing and Automation",
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
      image: assets.capabilities.card1,
      title: "Yarn to Fabric",
      description:
        "We transform raw materials into high-quality fabrics, utilizing advanced weaving and knitting technologies to create a wide range of textiles.",
    },
    {
      image: assets.capabilities.card2,
      title: "Aggregated Garmenting",
      description:
        "Our garmenting services encompass cutting, sewing, and finishing, ensuring precise construction and attention to detail in every garment.",
    },
    {
      image: assets.capabilities.card3,
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
      image: assets.usp.card1,
      title: "Consistent Premium Quality & Reliability",
      description:
        "At Sona, we maintain uncompromising quality through rigorous testing, controlled processes, and precise craftsmanship. Every fabric is produced with consistency, durability, and reliability in mind, ensuring that brands receive materials that meet global standards and uphold customer trust.",
    },
    {
      image: assets.usp.card2,
      title: "On-Time & Efficient Delivery",
      description:
        "At Sona, our tightly coordinated supply chain allows us to deliver every order with exceptional punctuality. From sourcing to finishing, each step is planned for efficiency, enabling faster turnarounds and dependable delivery timelines that support brands in scaling production without delays.",
    },
    {
      image: assets.usp.card3,
      title: "End-to-End Vertically Integrated Manufacturing",
      description:
        "We control the entire manufacturing journey under one roof—yarn sourcing, knitting, dyeing, processing, and finishing. This deep integration ensures superior quality, shorter lead times, and seamless communication, giving brands a reliable and fully optimized production ecosystem.",
    },
    {
      image: assets.usp.card4,
      title: "Experienced & Skilled Workforce",
      description:
        "Our team combines years of technical expertise with modern craftsmanship. Trained professionals oversee every stage of production, ensuring accuracy, consistency, and innovation. Their deep understanding of textiles allows us to maintain high standards and deliver exceptional results at scale.",
    },
    {
      image: assets.usp.card5,
      title: "Global Quality Standards Compliance",
      description:
        "We follow globally recognized certifications and quality protocols across all operations. Our facilities are equipped to meet international testing, safety, and sustainability benchmarks, ensuring every fabric we deliver adheres to strict global requirements and supports responsible sourcing.",
    },
    {
      image: assets.usp.card6,
      title: "Sustainability at Our Core",
      description:
        "Sustainability drives every decision—from responsible raw-material sourcing to energy-efficient processes and waste reduction. We invest in eco-friendly technologies and circular practices, enabling brands to create products that are better for people, better for the planet, and built for the future.",
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
  mainImage: assets.products.mainImage,
  categories: [
    {
      name: "Woven Fabrics",
      description:
        "At Sona, we own the entire supply chain, from yarn sourcing to finished garments. We deliver faster",
    },
    {
      name: "finished Fabrics",
      description:
        "At Sona, we own the entire supply chain, from yarn sourcing to finished garments. We deliver faster turnarounds, smaller MOQs, and sustainable innovation for the fashion industry.",
    },
    {
      name: "Custom applications",
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
  mainImage: assets.sustainability.waterConservation,
  features: [
    {
      title: "Zero Liquid Discharge (ZLD)",
      description:
        "All water used is treated and recycled on-site, with no liquid waste leaving the facility.",
      image: assets.sustainability.waterConservation,
    },
    {
      title: "Renewable Energy",
      description:
        "90% of electricity is generated in-house through solar power and steam turbines.",
      image: assets.sustainability.energyEfficiency,
    },
    {
      title: "Emission Control",
      description:
        "Electrostatic Precipitators are used to control and reduce emissions.",
      image: assets.sustainability.emissionControl,
    },
    {
      title: "Waste Management",
      description:
        "Fabric scrap recycling and reuse to reduce landfill impact with lean manufacturing to minimize process waste.",
      image: assets.sustainability.wasteManagement,
    },
  ],
  certifications: [
    {
      name: "Global Organic Textile Standard (GOTS)",
      description: "Scope Certificate - Version 7.0",
      image: assets.sustainability.cert1,
    },
    {
      name: "Regenagri Chain of Custody",
      description: "Scope Certificate - Textiles Version 1.0",
      image: assets.sustainability.cert2,
    },
    {
      name: "Organic & Recycled Standards",
      description: "OCS (Version 3.0), GRS (Version 4.0), RCS (Version 2.0)",
      image: assets.sustainability.cert3,
    },
    {
      name: "OEKO-TEX'",
      description: "standard 100 Certification",
      image: assets.sustainability.cert4,
    },
    {
      name: "Better Cotton Initiative (BCI)",
      description: "Certified Sustainable Cotton Sourcing",
      image: assets.sustainability.cert5,
    },
    {
      name: "ISO 14001",
      description: "Environmental Management System",
      image: assets.sustainability.cert6,
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
      image: assets.leadership.member1,
      logo: assets.leadership.companyLogo,
      linkedinUrl: "https://www.linkedin.com/in/subhash-nuwal",
    },
    {
      name: "Harshil Nuwal",
      role: "Founder and MD",
      image: assets.leadership.member2,
      linkedinUrl: "https://www.linkedin.com/in/harshil-nuwal",
    },
    {
      name: "Deepank Bhandari",
      role: "Founder and MD",
      image: assets.leadership.member3,
      linkedinUrl: "https://www.linkedin.com/in/deepank-bhandari",
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
  backgroundImage: "/images/common/banner.png",
};

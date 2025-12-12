import {
  PageMetadata,
  SiteMetadata,
  StructuredDataLocalBusiness,
  StructuredDataOrganization,
} from "@/lib/types";
import { companyInfo, socialLinks } from "./company";

/**
 * Site-wide Metadata Configuration
 */
export const siteMetadata: SiteMetadata = {
  siteUrl: "https://sonaselection.com",
  siteName: companyInfo.name,
  locale: "en_IN",
  defaultOgImage: "/og-image.jpg",
};

/**
 * SEO Keywords by Category
 */
export const seoKeywords = {
  general: [
    "textile manufacturing",
    "fabric manufacturer",
    "textile industry",
    "Bhilwara textiles",
    "Rajasthan textiles",
    "Indian textile manufacturer",
    "quality fabrics",
    "textile finishing services",
  ],
  products: [
    "woven fabrics",
    "finished fabrics",
    "specialty weaves",
    "cotton fabrics",
    "polyester fabrics",
    "textile production",
    "PV suitings",
    "cotton blends",
    "polyester blends",
  ],
  capabilities: [
    "textile manufacturing capabilities",
    "fabric processing",
    "yarn to fabric",
    "garment manufacturing",
    "quality control textiles",
    "R&D textiles",
    "textile sampling",
  ],
  sustainability: [
    "sustainable textiles",
    "eco-friendly fabrics",
    "zero liquid discharge",
    "GOTS certified",
    "organic cotton",
    "BCI cotton",
    "renewable energy textiles",
  ],
  company: [
    "Sonaselection India Limited",
    "Sona Group",
    "Subhash Nuwal",
    "textile company Bhilwara",
    "vertically integrated manufacturing",
  ],
};

/**
 * Page-Specific Metadata
 */
export const pageMetadata: Record<string, PageMetadata> = {
  home: {
    title: `${companyInfo.name} - ${companyInfo.tagline}`,
    description: companyInfo.description,
    keywords: [
      ...seoKeywords.general,
      ...seoKeywords.products,
      ...seoKeywords.sustainability,
    ],
    openGraph: {
      type: "website",
      locale: siteMetadata.locale,
      url: siteMetadata.siteUrl,
      siteName: siteMetadata.siteName,
      title: `${companyInfo.name} - ${companyInfo.tagline}`,
      description: companyInfo.description,
      images: [
        {
          url: siteMetadata.defaultOgImage,
          width: 1200,
          height: 630,
          alt: `${companyInfo.name} - ${companyInfo.tagline}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${companyInfo.name} - ${companyInfo.tagline}`,
      description: companyInfo.description,
      images: [siteMetadata.defaultOgImage],
    },
  },
  aboutUs: {
    title: "About Us",
    description:
      "Founded in 1987 by Subhash Nuwal, Sonaselection India Limited is a leading textile manufacturer specializing in PV and polyester suitings, and cotton fabrics. With over 12 million meters production capacity per month, we serve global clientele with excellence in quality and innovation.",
    keywords: [
      ...seoKeywords.company,
      "about Sonaselection",
      "textile company history",
      "Subhash Nuwal founder",
      "textile manufacturing journey",
      "company values",
      "textile leadership",
    ],
    openGraph: {
      type: "website",
      locale: siteMetadata.locale,
      url: `${siteMetadata.siteUrl}/about-us`,
      siteName: siteMetadata.siteName,
      title: `About Us | ${companyInfo.name}`,
      description:
        "Founded in 1987 by Subhash Nuwal, Sonaselection India Limited is a leading textile manufacturer with over 12 million meters production capacity per month.",
      images: [
        {
          url: siteMetadata.defaultOgImage,
          width: 1200,
          height: 630,
          alt: `About ${companyInfo.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `About Us | ${companyInfo.name}`,
      description:
        "Founded in 1987, leading textile manufacturer with over 12 million meters production capacity per month.",
      images: [siteMetadata.defaultOgImage],
    },
  },
  products: {
    title: "Textile Products & Solutions",
    description:
      "Explore our comprehensive range of woven fabrics, finished fabrics, and specialty weaves. From 100% cotton to polyester blends, we manufacture high-quality textiles for fashion, apparel, and workwear industries with advanced finishes and sustainable options.",
    keywords: [
      ...seoKeywords.products,
      "textile products",
      "fabric solutions",
      "woven fabric manufacturer",
      "cotton fabric supplier",
      "polyester fabric manufacturer",
      "specialty textile weaves",
      "finished fabric supplier",
      "RFD fabrics",
      "textile finishes",
    ],
    openGraph: {
      type: "website",
      locale: siteMetadata.locale,
      url: `${siteMetadata.siteUrl}/products`,
      siteName: siteMetadata.siteName,
      title: `Textile Products & Solutions | ${companyInfo.name}`,
      description:
        "Comprehensive range of woven fabrics, finished fabrics, and specialty weaves for fashion, apparel, and workwear industries.",
      images: [
        {
          url: siteMetadata.defaultOgImage,
          width: 1200,
          height: 630,
          alt: `${companyInfo.name} Textile Products`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `Textile Products & Solutions | ${companyInfo.name}`,
      description:
        "Woven fabrics, finished fabrics, and specialty weaves for fashion, apparel, and workwear industries.",
      images: [siteMetadata.defaultOgImage],
    },
  },
  capabilities: {
    title: "Manufacturing Capabilities & Facilities",
    description:
      "State-of-the-art textile manufacturing facilities with end-to-end capabilities from yarn to fabric, aggregated garmenting, and quality R&D. Equipped with advanced machinery, quality lab, and skilled workforce to deliver 3000 units per hour with faster turnarounds.",
    keywords: [
      ...seoKeywords.capabilities,
      "textile manufacturing facilities",
      "yarn to fabric manufacturing",
      "garment production",
      "textile quality lab",
      "textile R&D",
      "manufacturing capacity",
      "textile machinery",
      "production facilities",
    ],
    openGraph: {
      type: "website",
      locale: siteMetadata.locale,
      url: `${siteMetadata.siteUrl}/capabilities`,
      siteName: siteMetadata.siteName,
      title: `Manufacturing Capabilities & Facilities | ${companyInfo.name}`,
      description:
        "State-of-the-art textile manufacturing with end-to-end capabilities from yarn to fabric, garmenting, and quality R&D.",
      images: [
        {
          url: siteMetadata.defaultOgImage,
          width: 1200,
          height: 630,
          alt: `${companyInfo.name} Manufacturing Capabilities`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `Manufacturing Capabilities | ${companyInfo.name}`,
      description:
        "End-to-end textile manufacturing from yarn to fabric, garmenting, and quality R&D.",
      images: [siteMetadata.defaultOgImage],
    },
  },
  investorRelations: {
    title: "Investor Relations",
    description:
      "Welcome to Sonaselection India Limited Investor Relations portal. Access financial documents, disclosures, board information, policies, shareholder communications, and governance updates. CIN: U17299RJ2022PLC079631",
    keywords: [
      ...seoKeywords.company,
      "Sonaselection investor relations",
      "IPO information",
      "financial reporting",
      "shareholder information",
      "board of directors",
      "corporate governance",
      "investor disclosures",
      "financial documents",
      "CIN U17299RJ2022PLC079631",
    ],
    openGraph: {
      type: "website",
      locale: siteMetadata.locale,
      url: `${siteMetadata.siteUrl}/investor-relations`,
      siteName: siteMetadata.siteName,
      title: `Investor Relations | ${companyInfo.name}`,
      description:
        "Access financial documents, disclosures, policies, and governance updates for Sonaselection India Limited.",
      images: [
        {
          url: siteMetadata.defaultOgImage,
          width: 1200,
          height: 630,
          alt: `${companyInfo.name} Investor Relations`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `Investor Relations | ${companyInfo.name}`,
      description:
        "Access financial documents, disclosures, policies, and governance updates.",
      images: [siteMetadata.defaultOgImage],
    },
  },
};

/**
 * Structured Data - Organization Schema
 */
export const structuredDataOrganization: StructuredDataOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: companyInfo.name,
  description: companyInfo.description,
  url: siteMetadata.siteUrl,
  logo: `${siteMetadata.siteUrl}/logo.png`,
  email: companyInfo.email,
  telephone: companyInfo.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: "1 SANGAM TOWER OLD RTO ROAD GANDHI NAGAR",
    addressLocality: "Bhilwara",
    addressRegion: "Rajasthan",
    postalCode: "311001",
    addressCountry: "IN",
  },
  sameAs: socialLinks.map((link) => link.url),
};

/**
 * Structured Data - LocalBusiness Schema
 */
export const structuredDataLocalBusiness: StructuredDataLocalBusiness = {
  ...structuredDataOrganization,
  "@type": "LocalBusiness",
  geo: {
    "@type": "GeoCoordinates",
    latitude: 25.3467,
    longitude: 74.6317,
  },
};

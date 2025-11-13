import {
  BoardSection,
  FinancialReportingSection,
  IPOCornerSection,
  InvestorHeroSection,
  InvestorRelationsContent,
  OtherDisclosuresSection,
  PoliciesSection,
  ShareholderSection,
} from "../types";

import { assets } from "./assets";

/**
 * Investor Relations Page Content
 * All data for the Investor Relations page
 */

export const investorHero: InvestorHeroSection = {
  title: "Investing in the Future of Fabric",
  subtitle:
    "Welcome to the Investor Relations portal of Sona Selections. Here you can access our financial documents, disclosures, policies, and governance updates in one place.",
  primaryCTA: {
    label: "Download Investor Deck",
    href: "#",
  },
  secondaryCTA: {
    label: "Download Investor Deck",
    href: "#",
  },
  backgroundImage: assets.investorRelations.heroBackground,
};

export const ipoCorner: IPOCornerSection = {
  title: "IPO Corner",
  documents: [
    {
      title: "Draft Red Herring Prospectus (DRHP)",
      href: "#",
    },
    {
      title: "Red Herring Prospectus (RHP)",
      href: "#",
    },
    {
      title: "Addendum",
      href: "#",
    },
    {
      title: "Final Prospectus",
      href: "#",
    },
  ],
  ctaLabel: "Access All IPO Documents",
  ctaHref: "#",
};

export const boardSection: BoardSection = {
  title: "Board of Directors & Committees",
  board: {
    title: "Meet the Board",
    members: [
      {
        name: "Subhash Nuwal",
        role: "Chairman",
        description:
          "Seasoned entrepreneur with over 35 years of experience in the textile industry. As Chairman of Sona Group, he oversees one of India's largest textile processing capacities, currently 12 million meters per month",
        image: assets.leadership.member1,
        logo: assets.investorRelations.companyLogo,
        linkedinUrl: "#",
      },
      {
        name: "Harshil Nuwal",
        role: "Founder and MD",
        image: assets.investorRelations.harshilImage,
        linkedinUrl: "#",
      },
      {
        name: "Deepank Bhandari",
        role: "Founder and MD",
        image: assets.investorRelations.deepankImage,
        linkedinUrl: "#",
      },
    ],
    downloadLabel: "Download Corporate Governance Structure",
    downloadHref: "#",
  },
  committees: {
    title: "Board Committees",
    subtitle: "View Committee Details",
    members: [
      {
        name: "Subhash Nuwal",
        role: "Chairman",
        description:
          "Seasoned entrepreneur with over 35 years of experience in the textile industry. As Chairman of Sona Group, he oversees one of India's largest textile processing capacities, currently 12 million meters per month",
        image: assets.leadership.member1,
        logo: assets.investorRelations.companyLogo,
        linkedinUrl: "#",
      },
      {
        name: "Harshil Nuwal",
        role: "Founder and MD",
        image: assets.investorRelations.harshilImage,
        linkedinUrl: "#",
      },
      {
        name: "Deepank Bhandari",
        role: "Founder and MD",
        image: assets.investorRelations.deepankImage,
        linkedinUrl: "#",
      },
    ],
  },
};

export const financialReporting: FinancialReportingSection = {
  title: "Financial Reporting",
  categories: [
    {
      title: "Financial Statements",
      documents: [
        {
          title: "View Quarterly Results",
          href: "#",
        },
        {
          title: "View Annual Report",
          href: "#",
        },
      ],
    },
    {
      title: "Annual Return",
      documents: [
        {
          title: "Download MGT-7",
          href: "#",
        },
      ],
    },
    {
      title: "Auditor's Reports",
      documents: [
        {
          title: "Download Reports",
          href: "#",
        },
      ],
    },
  ],
  ctaLabel: "See All Financial Disclosures",
  ctaHref: "#",
};

export const groupCompany: IPOCornerSection = {
  title: "Group Company Disclosures",
  documents: [
    {
      title: "ABC Limited",
      href: "#",
    },
  ],
  ctaLabel: "View Group Structure",
  ctaHref: "#",
};

export const policies: PoliciesSection = {
  title: "Policies & Governance",
  policies: [
    {
      title: "Code of Conduct",
      href: "#",
    },
    {
      title: "CSR Policy",
      href: "#",
    },
    {
      title: "Insider Trading Policy",
      href: "#",
    },
    {
      title: "Nomination Policy",
      href: "#",
    },
    {
      title: "Download All Policies",
      href: "#",
    },
  ],
  ctaLabel: "View Compliance & Disclosures",
  ctaHref: "#",
};

export const shareholder: ShareholderSection = {
  title: "Shareholder Communication",
  categories: [
    {
      title: "Notices & Outcomes",
      documents: [
        {
          title: "View AGM/EGM Notices",
          href: "#",
        },
      ],
    },
    {
      title: "Voting Results",
      documents: [
        {
          title: "See Voting Reports",
          href: "#",
        },
      ],
    },
    {
      title: "Newspaper Ads",
      documents: [
        {
          title: "View Disclosures in Media",
          href: "#",
        },
      ],
    },
    {
      title: "Shareholder Info",
      documents: [
        {
          title: "Contact RTA",
          href: "#",
        },
        {
          title: "View Demat Instructions",
          href: "#",
        },
      ],
    },
  ],
  ctaLabel: "Stay Updated on Shareholder News",
  ctaHref: "#",
};

export const otherDisclosures: OtherDisclosuresSection = {
  title: "Others",
  badge:
    "Catch-all section for miscellaneous regulatory updates, circulars, or investor messages.",
  items: [
    {
      title: "Investor Grievance Redressal",
      href: "#",
    },
    {
      title: "Download Annual Report",
      href: "#",
    },
    {
      title: "Stock Listing Details (if listed)",
      href: "#",
    },
    {
      title: "Contact Compliance Officer",
      href: "#",
    },
  ],
  ctaLabel: "View Other Disclosures",
  ctaHref: "#",
};

export const investorRelationsContent: InvestorRelationsContent = {
  hero: investorHero,
  ipoCorner,
  board: boardSection,
  financialReporting,
  policies,
  shareholder,
  otherDisclosures,
};

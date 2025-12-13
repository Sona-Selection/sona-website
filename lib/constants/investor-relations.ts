import {
  BoardMember,
  BoardSection,
  Committee,
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
      href: "/docs/investor-relations/DRHP.pdf",
    },
    // {
    //   title: "Red Herring Prospectus (RHP)",
    //   href: "#",
    // },
    // {
    //   title: "Addendum",
    //   href: "#",
    // },
    // {
    //   title: "Final Prospectus",
    //   href: "#",
    // },
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
        image: assets.leadership.subhashImage,
        aboutImage: assets.aboutUs.leadership.aboutSubhashImage,
        logo: assets.investorRelations.companyLogo,
        linkedinUrl: "#",
      },
      {
        name: "Harshil Nuwal",
        role: "Founder and MD",
        description:
          "Under his guidance, Sona Group expanded its capabilities with a state-of-the-art textile weaving unit. With a vision for sustainable expansion, he spearheaded the establishment of a cutting-edge cotton fabrics processing plant, slated for completion in May 2024, positioning us as leaders in cotton fabric processing in India.",
        image: assets.leadership.harshilImage,
        aboutImage: assets.aboutUs.leadership.aboutHarshilImage,
        linkedinUrl: "#",
      },
      {
        name: "Deepank Bhandari",
        role: "Founder",
        description:
          "Garnered over 4 years of comprehensive experience in Trading, Investment Banking and Private Equity across Europe, mastering the intricacies of global financial markets. Demonstrated over 9 years of adeptness in India's e-commerce landscape.",
        image: assets.leadership.deepankImage,
        aboutImage: assets.aboutUs.leadership.aboutDeepankImage,
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
        image: assets.leadership.subhashImage,
        aboutImage: assets.aboutUs.leadership.aboutSubhashImage,
        logo: assets.investorRelations.companyLogo,
        linkedinUrl: "#",
      },
      {
        name: "Harshil Nuwal",
        role: "Founder and MD",
        description:
          "Under his guidance, Sona Group expanded its capabilities with a state-of-the-art textile weaving unit. With a vision for sustainable expansion, he spearheaded the establishment of a cutting-edge cotton fabrics processing plant, slated for completion in May 2024, positioning us as leaders in cotton fabric processing in India.",
        image: assets.leadership.harshilImage,
        aboutImage: assets.aboutUs.leadership.aboutHarshilImage,
        linkedinUrl: "#",
      },
      {
        name: "Deepank Bhandari",
        role: "Founder",
        description:
          "Garnered over 4 years of comprehensive experience in Trading, Investment Banking and Private Equity across Europe, mastering the intricacies of global financial markets. Demonstrated over 9 years of adeptness in India's e-commerce landscape.",
        image: assets.leadership.deepankImage,
        aboutImage: assets.aboutUs.leadership.aboutDeepankImage,
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

export const boardMembers: BoardMember[] = [
  {
    name: "Mr. Harshil Nuwal",
    category: "Managing Director",
  },
];

export const committees: Committee[] = [
  {
    title: "Audit and Compliance Committee",
    members: [
      {
        srNo: 1,
        name: "Kanhaiya Lal Acharya",
        position: "Chairperson",
        designation: "Independent Director",
      },
    ],
  },
  {
    title: "Nomination and Remuneration Committee",
    members: [
      {
        srNo: 1,
        name: "Aditi Kakhani",
        position: "Chairperson",
        designation: "Independent Director",
      },
    ],
  },
  {
    title: "Stakeholders' Relationship Committee",
    members: [],
  },
  {
    title: "Corporate Social Responsibility Committee",
    members: [],
  },
];

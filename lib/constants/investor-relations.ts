import {
  BoardMember,
  BoardSection,
  Committee,
  DisclosureDocument,
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
        linkedinUrl: "https://www.linkedin.com/in/harshil-nuwal-75401321",
      },
      {
        name: "Deepank Bhandari",
        role: "Founder",
        description:
          "Garnered over 4 years of comprehensive experience in Trading, Investment Banking and Private Equity across Europe, mastering the intricacies of global financial markets. Demonstrated over 9 years of adeptness in India's e-commerce landscape.",
        image: assets.leadership.deepankImage,
        aboutImage: assets.aboutUs.leadership.aboutDeepankImage,
        linkedinUrl: "https://www.linkedin.com/in/deepankbhandari",
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
        linkedinUrl: "https://www.linkedin.com/in/harshil-nuwal-75401321",
      },
      {
        name: "Deepank Bhandari",
        role: "Founder",
        description:
          "Garnered over 4 years of comprehensive experience in Trading, Investment Banking and Private Equity across Europe, mastering the intricacies of global financial markets. Demonstrated over 9 years of adeptness in India's e-commerce landscape.",
        image: assets.leadership.deepankImage,
        aboutImage: assets.aboutUs.leadership.aboutDeepankImage,
        linkedinUrl: "https://www.linkedin.com/in/deepankbhandari",
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
  {
    name: "Mr. Subhash Chandra Nuwal",
    category: "Non-executive Director and Chairman",
  },
  {
    name: "Ms. Uma Nuwal",
    category: "Whole-time Director",
  },
  {
    name: "Ms. Aditi Kakhani",
    category: "Independent Director",
  },
  {
    name: "Mr. Kanhaiya Lal Acharya",
    category: "Independent Director",
  },
  {
    name: "Mr. Kamlesh Kumar Choudhary",
    category: "Independent Director",
  },
  {
    name: "Mr. Ramesh Chandra Vyas",
    category: "Chief Financial Officer",
  },
  {
    name: "Mr. Harish Sharma",
    category: "Company Secretary & Compliance Officer",
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
      {
        srNo: 3,
        name: "Aditi Kakhani",
        position: "Member",
        designation: "Independent Director",
      },
      {
        srNo: 3,
        name: "Kamlesh Kumar Choudhary",
        position: "Member",
        designation: "Independent Director",
      },
      {
        srNo: 4,
        name: "Harshil Nuwal",
        position: "Member",
        designation: "Managing Director",
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
      {
        srNo: 2,
        name: "Kanahiya Lal Acharya",
        position: "Member",
        designation: "Independent Director",
      },
      {
        srNo: 3,
        name: "Subhash Chandra Nuwal",
        position: "Member",
        designation: "Non-Executive Director & Non- Independent Director",
      },
    ],
  },
  {
    title: "Stakeholders' Relationship Committee",
    members: [
      {
        srNo: 1,
        name: "Kamlesh Kumar Choudhary",
        position: "Chairperson",
        designation: "Independent Director",
      },
      {
        srNo: 2,
        name: "Aditi Kakhani",
        position: "Member",
        designation: "Independent Director",
      },
      {
        srNo: 3,
        name: "Subhash Chandra Nuwal",
        position: "Member",
        designation: "Non-Executive Director & Non- Independent Director",
      },
      {
        srNo: 4,
        name: "Harshil Nuwal",
        position: "Member",
        designation: "Managing Director",
      },
    ],
  },
  {
    title: "Corporate Social Responsibility Committee",
    members: [
      {
        srNo: 1,
        name: "Uma Nuwal",
        position: "Chairperson",
        designation: "Whole-time Director",
      },
      {
        srNo: 2,
        name: "Harshil Nuwal",
        position: "Member",
        designation: "Managing Director",
      },
      {
        srNo: 3,
        name: "Aditi Kakhani",
        position: "Member",
        designation: "Independent Director",
      },
    ],
  },
];

export const regulation46Disclosures: DisclosureDocument[] = [
  {
    srNo: 1,
    description: "Code of Conduct for Board of Directors and Senior Management",
    fileName:
      "1. Code of conduct for Board of Directors and Senior Management.pdf",
  },
  {
    srNo: 2,
    description:
      "Vigil Mechanism Whistle Blower Policy for Directors and Employees",
    fileName:
      "2. Vigil Mechanism Whistle Blower Policy For Directors And Employees.pdf",
  },
  {
    srNo: 3,
    description: "Familiarization Programme Policy",
    fileName: "3. Familiarization Programme Policy.pdf",
  },
  {
    srNo: 4,
    description: "Dividend Distribution Policy",
    fileName: "4. Dividend Distribution Policy.pdf",
  },
  {
    srNo: 5,
    description: "Policy for Determination of Material Subsidiaries",
    fileName: "5. Policy for Determination of Material Subsidiaries.pdf",
  },
  {
    srNo: 6,
    description: "Related Party Transaction Policy",
    fileName: "6. Policy on RPT.pdf",
  },
  {
    srNo: 7,
    description:
      "Terms and Conditions for Appointment of Independent Directors",
    fileName:
      "7. Terms and conditions for appointment of Independent Directors.pdf",
  },
  {
    srNo: 8,
    description: "CRISIL Rating Report",
    fileName: "8. Rating Rationale CRISIL_Oct28_2025.pdf",
  },
];

export const policiesAndOthers: DisclosureDocument[] = [
  {
    srNo: 1,
    description: "Corporate Social Responsibility Policy",
    fileName: "1. CSR Policy.pdf",
  },
  {
    srNo: 2,
    description: "Nomination and Remuneration Policy",
    fileName: "2. Nomination and Remuneration Policy.pdf",
  },
  {
    srNo: 3,
    description: "Policy on Related Party Transactions",
    fileName: "3. Policy on RPT.pdf",
  },
  {
    srNo: 4,
    description:
      "Vigil Mechanism Whistle Blower Policy for Directors and Employees",
    fileName:
      "4. Vigil Mechanism Whistle Blower Policy For Directors And Employees.pdf",
  },
  {
    srNo: 5,
    description: "Prevention of Sexual Harassment at Workplace",
    fileName: "5. POSH Policy.pdf",
  },
  {
    srNo: 6,
    description: "Code of Conduct for Directors and Senior Management",
    fileName:
      "6. Code of conduct for Board of Directors and Senior Management.pdf",
  },
  {
    srNo: 7,
    description: "Dividend Distribution Policy",
    fileName: "7. Dividend Distribution Policy.pdf",
  },
  {
    srNo: 8,
    description:
      "Code of Conduct to Regulate, Monitor and Report Trading by Insiders",
    fileName:
      "8. CODE OF CONDUCT TO REGULATE, MONITOR AND REPORT TRADING BY INSIDERS.pdf",
  },
  {
    srNo: 9,
    description: "Policy for Determination of Material Events and Disclosure",
    fileName: "10. Policy for determining materiality of events.pdf",
  },
  {
    srNo: 10,
    description: "Policy on Preservation of Documents and Archival Policy",
    fileName: "12. Policy on preservation of documents and archival policy.pdf",
  },
  {
    srNo: 11,
    description: "Policy for Determination of Material Subsidiaries",
    fileName: "15. Policy for Determination of Material Subsidiaries.pdf",
  },
  {
    srNo: 12,
    description: "Policy on Terms of Appointment of Independent Directors",
    fileName:
      "16. Terms and conditions for appointment of Independent Directors.pdf",
  },
  {
    srNo: 13,
    description:
      "Policy on Identification of Material Creditors, Group Companies and Material Litigation",
    fileName:
      "17. SonaMaterialCreditorsGroupCompaniesMaterialLitigation....pdf",
  },
  {
    srNo: 14,
    description: "Familiarization Program for Independent Directors",
    fileName: "18. Familiarization Programme Policy.pdf",
  },
  {
    srNo: 15,
    description: "Risk Management Policy",
    fileName: "19. Risk Management Policy.pdf",
  },
  {
    srNo: 16,
    description: "Criteria for Making Payments to Non-Executive Directors",
    fileName: "20. Criteria for making payments to NEDs.pdf",
  },
];

export const annualReports: DisclosureDocument[] = [
  {
    srNo: 1,
    description: "Annual Report FY 2025",
    fileName: "Final Sonaselection Annual Report 2025.pdf",
  },
  {
    srNo: 2,
    description: "Annual Report FY 2024",
    fileName: "Annual Report FY 2024.pdf",
  },
];

export const materialContractsAndDocuments: DisclosureDocument[] = [
  {
    srNo: 1,
    description: "Industry Report",
    fileName: "Final Textile Report - Sona Selection.pdf",
  },
];

import {
  BoardMember,
  BoardSection,
  Committee,
  DisclosureDocument,
  FinancialReportingSection,
  FinancialYear,
  GroupCompanyData,
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
    label: "View Annual Reports",
    href: "/investor-relations/annual-reports",
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
  ctaLabel: "View DRHP AV",
  ctaHref: "/investor-relations/drhp-av",
};

export const boardSection: BoardSection = {
  title: "Board of Directors & Committees",
  board: {
    title: "Meet the Board",
    members: [
      {
        name: "Subhash Chandra Nuwal",
        role: "Promoter & Chairman",
        description:
          "Seasoned entrepreneur with over 35 years of experience in the textile industry. As Chairman of Sona Group, he oversees one of India's largest textile processing capacities, currently 12 million meters per month",
        image: assets.leadership.subhashImage,
        aboutImage: assets.aboutUs.leadership.aboutSubhashImage,
        logo: assets.investorRelations.companyLogo,
        linkedinUrl: "#",
      },
      {
        name: "Harshil Nuwal",
        role: "Promoter & Managing Director",
        description:
          "Under his guidance, Sona Group expanded its capabilities with a state-of-the-art textile weaving unit. With a vision for sustainable expansion, he spearheaded the establishment of a cutting-edge cotton fabrics processing plant, slated for completion in May 2024, positioning us as leaders in cotton fabric processing in India.",
        image: assets.leadership.harshilImage,
        aboutImage: assets.aboutUs.leadership.aboutHarshilImage,
        linkedinUrl: "https://www.linkedin.com/in/harshil-nuwal-75401321",
      },
      {
        name: "Deepank Bhandari",
        role: "Promoter",
        description:
          "Garnered over 4 years of comprehensive experience in Trading, Investment Banking and Private Equity across Europe, mastering the intricacies of global financial markets. Demonstrated over 9 years of adeptness in India's e-commerce landscape.",
        image: assets.leadership.deepankImage,
        aboutImage: assets.aboutUs.leadership.aboutDeepankImage,
        linkedinUrl: "https://www.linkedin.com/in/deepankbhandari",
      },
    ],
    downloadLabel: "View Board & KMP",
    downloadHref: "/investor-relations/board-and-kmp",
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
      title: "Annual Reports",
      documents: [
        { title: "View Annual Reports", href: "/investor-relations/annual-reports" },
      ],
    },
    {
      title: "Annual Return",
      documents: [
        { title: "Download MGT-7", href: "/investor-relations/annual-return" },
      ],
    },
    {
      title: "CSR Reports",
      documents: [
        { title: "View CSR Reports", href: "/investor-relations/csr-report" },
      ],
    },
  ],
  ctaLabel: "View Annual Reports",
  ctaHref: "/investor-relations/annual-reports",
};

export const groupCompany: IPOCornerSection = {
  title: "Group Company Disclosures",
  documents: [
    { title: "Sona Processors (India) Limited", href: "/investor-relations/group-company" },
    { title: "Sona Styles Limited", href: "/investor-relations/group-company" },
    { title: "SonaTexfab Private Limited", href: "/investor-relations/group-company" },
    { title: "Starnet Real Estate and Projects Limited", href: "/investor-relations/group-company" },
  ],
  ctaLabel: "View Group Structure",
  ctaHref: "/investor-relations/group-company",
};

export const policies: PoliciesSection = {
  title: "Policies & Governance",
  policies: [
    { title: "Code of Conduct", href: "/investor-relations/policies-and-others" },
    { title: "CSR Policy", href: "/investor-relations/policies-and-others" },
    { title: "Insider Trading Policy", href: "/investor-relations/policies-and-others" },
    { title: "Nomination Policy", href: "/investor-relations/policies-and-others" },
    { title: "View All Policies", href: "/investor-relations/policies-and-others" },
  ],
  ctaLabel: "View Compliance & Disclosures",
  ctaHref: "/investor-relations/policies-and-others",
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
    description: "Memorandum of Association",
    fileName: "../MOA and AOA/Memorandum of Association.pdf",
  },
  {
    srNo: 4,
    description: "Articles of Association",
    fileName: "../MOA and AOA/Articles of Association.pdf",
  },
  {
    srNo: 5,
    description: "Familiarization Programme Policy",
    fileName: "3. Familiarization Programme Policy.pdf",
  },
  {
    srNo: 6,
    description: "Dividend Distribution Policy",
    fileName: "4. Dividend Distribution Policy.pdf",
  },
  {
    srNo: 7,
    description: "Policy for Determination of Material Subsidiaries",
    fileName: "5. Policy for Determination of Material Subsidiaries.pdf",
  },
  {
    srNo: 8,
    description: "Related Party Transaction Policy",
    fileName: "6. Policy on RPT.pdf",
  },
  {
    srNo: 9,
    description:
      "Terms and Conditions for Appointment of Independent Directors",
    fileName:
      "7. Terms and conditions for appointment of Independent Directors.pdf",
  },
  {
    srNo: 10,
    description: "CRISIL Rating Report",
    fileName: "8. Rating Rationale CRISIL_Oct28_2025.pdf",
  },
  {
    srNo: 11,
    description: "New name and old name of the entity",
    fileName: "",
    fileLabel: "NA — no change of name since incorporation",
  },
  {
    srNo: 12,
    description: "Employee Benefit Scheme Documents",
    fileName: "",
    fileLabel: "NA",
  },
  {
    srNo: 13,
    description: "Shareholding Pattern",
    fileName: "",
    fileLabel: "To be updated",
  },
  {
    srNo: 14,
    description: "Details of agreements with media companies",
    fileName: "",
    fileLabel: "To be updated",
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
  {
    srNo: 17,
    description:
      "Code of Practices and Procedures for Fair Disclosure of Unpublished Price Sensitive Information",
    fileName: "",
    fileLabel: "To be updated",
  },
  {
    srNo: 18,
    description: "Health, Safety and Environment Policy",
    fileName: "",
    fileLabel: "To be updated",
  },
  {
    srNo: 19,
    description: "Policy on Succession Planning for the Board and Senior Management",
    fileName: "",
    fileLabel: "To be updated",
  },
  {
    srNo: 20,
    description: "Policy on Diversity of the Board",
    fileName: "",
    fileLabel: "To be updated",
  },
];

export const annualReports: DisclosureDocument[] = [
  {
    srNo: 1,
    description: "Annual Report FY 2025",
    fileName: "Annual Report FY 2025.pdf",
  },
  {
    srNo: 2,
    description: "Annual Report FY 2024",
    fileName: "Annual Report FY 2024.pdf",
  },
  {
    srNo: 3,
    description: "Annual Report FY 2023",
    fileName: "Annual Report FY 2023.pdf",
  },
];

export const annualReturns: DisclosureDocument[] = [
  { srNo: 1, description: "Annual Return FY 2024-25", fileName: "Annual Return FY 2024-25.pdf" },
  { srNo: 2, description: "Annual Return FY 2023-24", fileName: "Annual Return FY 2023-24.pdf" },
  { srNo: 3, description: "Annual Return FY 2022-23", fileName: "Annual Return FY 2022-23.pdf" },
];

export const csrReports: DisclosureDocument[] = [
  { srNo: 1, description: "CSR Report FY 2024-25", fileName: "CSR Report FY 2024-25.pdf" },
  { srNo: 2, description: "CSR Report FY 2023-24", fileName: "CSR Report FY 2023-24.pdf" },
];

export const materialContractsAndDocuments: DisclosureDocument[] = [
  {
    srNo: 1,
    description: "Industry Report",
    fileName: "Final Textile Report - Sona Selection.pdf",
  },
];

// Group Company Financial Data
export const financialYears: FinancialYear[] = [
  { label: "FY 2022-23", value: "2022-23" },
  { label: "FY 2023-24", value: "2023-24" },
  { label: "FY 2024-25", value: "2024-25" },
];

export const groupCompanies: GroupCompanyData[] = [
  {
    companyName: "I. Sona Processors (India) Limited",
    tableData: [
      {
        particulars: "Reserves (Excluding Revaluation Reserve)",
        values: {
          "2022-23": "381.42",
          "2023-24": "444.82",
          "2024-25": "457.65",
        },
      },
      {
        particulars: "Sales",
        values: {
          "2022-23": "1,432.15",
          "2023-24": "1,488.18",
          "2024-25": "1,158.97",
        },
      },
      {
        particulars: "Profit / Loss After Tax",
        values: { "2022-23": "12.06", "2023-24": "75.57", "2024-25": "16.28" },
      },
      {
        particulars: "Earnings Per Share (Basic) (Face Value of Rs. 10)",
        values: { "2022-23": "1.38", "2023-24": "8.62", "2024-25": "1.86" },
      },
      {
        particulars: "Net Assets Value",
        values: { "2022-23": "53.53", "2023-24": "60.76", "2024-25": "62.22" },
      },
      {
        particulars: "Equity Capital",
        values: { "2022-23": "87.63", "2023-24": "87.63", "2024-25": "87.63" },
      },
    ],
  },
  {
    companyName: "II. Sona Styles Limited",
    tableData: [
      {
        particulars: "Reserves (Excluding Revaluation Reserve)",
        values: {
          "2022-23": "152.01",
          "2023-24": "235.29",
          "2024-25": "261.36",
        },
      },
      {
        particulars: "Sales",
        values: {
          "2022-23": "876.27",
          "2023-24": "1,671.86",
          "2024-25": "2,133.82",
        },
      },
      {
        particulars: "Profit / Loss After Tax",
        values: { "2022-23": "30.08", "2023-24": "64.31", "2024-25": "27.63" },
      },
      {
        particulars: "Earnings Per Share (Basic) (Face Value of Rs. 10)",
        values: { "2022-23": "9.20", "2023-24": "19.67", "2024-25": "8.45" },
      },
      {
        particulars: "Net Assets Value",
        values: { "2022-23": "56.49", "2023-24": "81.96", "2024-25": "89.93" },
      },
      {
        particulars: "Equity Capital",
        values: { "2022-23": "32.70", "2023-24": "32.70", "2024-25": "32.70" },
      },
    ],
  },
  {
    companyName: "III. SonaTexfab Private Limited",
    tableData: [
      {
        particulars: "Reserves (Excluding Revaluation Reserve)",
        values: { "2022-23": "4.45", "2023-24": "8.18", "2024-25": "8.35" },
      },
      {
        particulars: "Sales",
        values: {
          "2022-23": "79.33",
          "2023-24": "302.60",
          "2024-25": "264.69",
        },
      },
      {
        particulars: "Profit / Loss After Tax",
        values: { "2022-23": "0.38", "2023-24": "3.72", "2024-25": "0.17" },
      },
      {
        particulars: "Earnings Per Share (Basic) (Face Value of Rs. 10)",
        values: { "2022-23": "4.20", "2023-24": "41.39", "2024-25": "1.91" },
      },
      {
        particulars: "Net Assets Value",
        values: {
          "2022-23": "59.48",
          "2023-24": "100.87",
          "2024-25": "102.78",
        },
      },
      {
        particulars: "Equity Capital",
        values: { "2022-23": "0.90", "2023-24": "0.90", "2024-25": "0.90" },
      },
    ],
  },
  {
    companyName: "IV. Starnet Real Estate and Projects Limited",
    tableData: [
      {
        particulars: "Reserves (Excluding Revaluation Reserve)",
        values: {
          "2022-23": "(4.56)",
          "2023-24": "(4.58)",
          "2024-25": "(3.57)",
        },
      },
      {
        particulars: "Sales",
        values: { "2022-23": "-", "2023-24": "-", "2024-25": "4.52" },
      },
      {
        particulars: "Profit / Loss After Tax",
        values: { "2022-23": "(0.05)", "2023-24": "(0.03)", "2024-25": "1.01" },
      },
      {
        particulars: "Earnings Per Share (Basic) (Face Value of Rs. 10)",
        values: {
          "2022-23": "(1.02)",
          "2023-24": "(0.53)",
          "2024-25": "20.27",
        },
      },
      {
        particulars: "Net Assets Value",
        values: {
          "2022-23": "(81.10)",
          "2023-24": "(81.62)",
          "2024-25": "(61.34)",
        },
      },
      {
        particulars: "Equity Capital",
        values: { "2022-23": "0.50", "2023-24": "0.50", "2024-25": "0.50" },
      },
    ],
  },
];

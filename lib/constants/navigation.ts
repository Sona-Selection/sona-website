import { NavItem } from "@/lib/types";

export const navigationItems: NavItem[] = [
  { label: "About Us", href: "/about-us" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "Products", href: "/products" },
  {
    label: "Investor Relations",
    items: [
      {
        label: "Corporate Governance",
        items: [
          { label: "Board & KMP", href: "/investor-relations/board-and-kmp" },
          {
            label: "Independent Directors",
            items: [
              { label: "Code of Conduct of Independent Directors" },
              {
                label: "Terms and conditions for appointment of Independent Directors",
                href: "/docs/investor-relations/Independent Directors/Terms and conditions for appointment of Independent Directors.pdf",
                target: "_blank",
              },
              {
                label: "Familiarization Programme Policy",
                href: "/docs/investor-relations/Independent Directors/Familiarization Programme Policy.pdf",
                target: "_blank",
              },
            ],
          },
          { label: "Committee Compositions", href: "/investor-relations/committee-compositions" },
          {
            label: "Disclosure under Regulation 46 of SEBI (LODR) Regulations, 2015",
            href: "/investor-relations/regulation-46-disclosure",
          },
          { label: "Corporate Governance Report" },
        ],
      },
      {
        label: "Financial Information",
        items: [
          { label: "Financial Results" },
          { label: "Annual Reports", href: "/investor-relations/annual-reports" },
          { label: "Annual Return", href: "/investor-relations/annual-return" },
          { label: "Board Meeting Notices" },
          { label: "Group Company", href: "/investor-relations/group-company" },
          { label: "Subsidiaries" },
        ],
      },
      {
        label: "IPO Documents",
        items: [
          {
            label: "Draft Red Herring Prospectus (DRHP)",
            href: "/docs/investor-relations/DRHP.pdf",
            target: "_blank",
          },
          { label: "DRHP AV", href: "/investor-relations/drhp-av" },
          { label: "RHP" },
          { label: "Abridged Prospectus" },
          { label: "Prospectus" },
        ],
      },
      { label: "Policies & Others", href: "/investor-relations/policies-and-others" },
      {
        label: "Investor Information",
        items: [
          { label: "Changes in Name", href: "/investor-relations/changes-in-name" },
          { label: "General Meeting" },
          { label: "Press Release" },
          { label: "Investor Updates" },
          { label: "Newspaper Publication" },
          { label: "Corporate Announcements" },
        ],
      },
      { label: "CSR Report", href: "/investor-relations/csr-report" },
      {
        label: "Investors Grievances & Contact Details",
        href: "/investor-relations/investors-grievances-and-contact-details",
      },
      {
        label: "Material Contracts & Documents",
        href: "/investor-relations/material-contracts-and-documents",
      },
    ],
  },
];

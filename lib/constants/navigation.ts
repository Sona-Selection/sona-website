import { NavItem } from "@/lib/types";

export const navigationItems: NavItem[] = [
  {
    label: "About Us",
    href: "/about-us",
  },
  {
    label: "Capabilities",
    href: "/capabilities",
  },
  {
    label: "Products",
    href: "/products",
  },
  {
    label: "Investor Relations",
    href: "/investor-relations",
    items: [
      {
        label: "Corporate Governance",
        items: [
          {
            label: "Board & KMP",
            href: "/investor-relations/board-and-kmp",
          },
          {
            label: "Independent Directors",
            items: [
              {
                label: "Code of Conduct of Independent Directors",
                href: "/docs/investor-relations/Independent Directors/CODE FOR INDEPENDENT DIRECTORS.pdf",
                target: "_blank",
              },
              {
                label:
                  "Terms and conditions for appointment of Independent Directors",
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
          {
            label: "Committee Compositions",
            href: "/investor-relations/committee-compositions",
          },
          {
            label:
              "Disclosure under Regulation 46 of SEBI (LODR) Regulations, 2015",
            href: "/investor-relations/regulation-46-disclosure",
          },
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
          {
            label: "DRHP AV",
            href: "/investor-relations#drhp-av",
          },
        ],
      },
      {
        label: "Policies & Others",
        href: "/investor-relations/policies-and-others",
      },
      {
        label: "Investors Information",
        items: [
          {
            label: "Financial Results",
            href: "/investor-relations#financial-results",
          },
          {
            label: "Annual Reports",
            href: "/investor-relations/annual-reports",
          },
          {
            label: "Group Company",
            href: "/investor-relations/group-company",
          },
          {
            label: "Shareholding Pattern",
            href: "/docs/investor-relations/Investor Information/Shareholding Pattern.pdf",
            target: "_blank",
          },
        ],
      },
      {
        label: "Material Contracts & Documents",
        href: "/investor-relations/material-contracts-and-documents",
      },
    ],
  },
];

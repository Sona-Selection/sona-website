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
            href: "/investor-relations#board",
          },
          {
            label: "Independent Directors",
            items: [
              {
                label: "Code of Conduct of Independent Directors",
                href: "/investor-relations#code-of-conduct",
              },
              {
                label:
                  "Terms and conditions for appointment of Independent Directors",
                href: "/investor-relations#terms-conditions",
              },
              {
                label: "Familiarization Programme Policy",
                href: "/investor-relations#familiarization",
              },
            ],
          },
          {
            label: "Committee Compositions",
            href: "/investor-relations#committees",
          },
          {
            label:
              "Disclosure under Regulation 46 of SEBI (LODR) Regulations, 2015",
            href: "/investor-relations#disclosure-regulation-46",
          },
        ],
      },
      {
        label: "IPO Documents",
        items: [
          {
            label: "Draft Red Herring Prospectus (DRHP)",
            href: "/investor-relations#drhp",
          },
          {
            label: "DRHP AV",
            href: "/investor-relations#drhp-av",
          },
        ],
      },
      {
        label: "Policies & Others",
        href: "/investor-relations#policies",
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
            href: "/investor-relations#annual-reports",
          },
          {
            label: "Group Company",
            href: "/investor-relations#group-company",
          },
          {
            label: "Shareholding Pattern",
            href: "/investor-relations#shareholding-pattern",
          },
        ],
      },
      {
        label: "Material Contracts & Documents",
        href: "/investor-relations#material-contracts",
      },
    ],
  },
];

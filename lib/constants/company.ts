import { CompanyInfo, FooterSection, SocialLink } from "@/lib/types";

export const companyInfo: CompanyInfo = {
  name: "Sonaselection India Limited",
  tagline: "Excellence in Textile Manufacturing",
  description:
    "Leading textile and fabric manufacturer based in Bhilwara, Rajasthan. Specializing in high-quality textile production and finishing services with a commitment to innovation and quality.",
  email: "info@sonaselection.com",
  phone: "+91 9461341476",
  address:
    "1 SANGAM TOWER OLD RTO ROAD GANDHI NAGAR , BHILWARA, Rajasthan, India - 311001",
};

export const socialLinks: SocialLink[] = [
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/company/sona-selection",
  },
  // {
  //   platform: "Twitter",
  //   url: "https://twitter.com/sonaselection",
  // },
  // {
  //   platform: "Facebook",
  //   url: "https://facebook.com/sonaselection",
  // },
];

export const footerSections: FooterSection[] = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about-us" },
      { label: "Investor Relations", href: "/investor-relations" },
      { label: "Careers", href: "#" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "Products", href: "/products" },
      { label: "Solutions", href: "#" },
      { label: "Pricing", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "#" },
      { label: "Documentation", href: "#" },
      { label: "Support", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
    ],
  },
];

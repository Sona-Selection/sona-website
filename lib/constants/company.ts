import { CompanyInfo, SocialLink, FooterSection } from '@/lib/types';

export const companyInfo: CompanyInfo = {
  name: 'Sona',
  tagline: 'Your Tagline Here',
  description: 'Brief description of Sona and what the company does.',
  email: 'contact@sona.com',
  phone: '+1 (555) 123-4567',
  address: '123 Business Street, City, State 12345',
};

export const socialLinks: SocialLink[] = [
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/company/sona',
  },
  {
    platform: 'Twitter',
    url: 'https://twitter.com/sona',
  },
  {
    platform: 'Facebook',
    url: 'https://facebook.com/sona',
  },
];

export const footerSections: FooterSection[] = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about-us' },
      { label: 'Investor Relations', href: '/investor-relations' },
      { label: 'Careers', href: '#' },
    ],
  },
  {
    title: 'Products',
    links: [
      { label: 'Products', href: '/products' },
      { label: 'Solutions', href: '#' },
      { label: 'Pricing', href: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog', href: '#' },
      { label: 'Documentation', href: '#' },
      { label: 'Support', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: '#' },
    ],
  },
];

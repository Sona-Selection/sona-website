import { NavItem } from '@/lib/types';

export const navigationItems: NavItem[] = [
  {
    label: 'About Us',
    href: '/about-us',
  },
  {
    label: 'Capabilities',
    href: '/capabilities',
  },
  {
    label: 'Products',
    href: '/products',
  },
  {
    label: 'Investor Relations',
    items: [
      {
        label: 'Corporate Governance',
        href: '/investor-relations/corporate-governance',
      },
      {
        label: 'IPO Documents',
        href: '/investor-relations/ipo-documents',
      },
      {
        label: 'Policies & Others',
        href: '/investor-relations/policies-others',
      },
      {
        label: 'Investors Information',
        href: '/investor-relations/investors-information',
      },
      {
        label: 'Material Contracts & Documents',
        href: '/investor-relations/material-contracts',
      },
    ],
  },
];

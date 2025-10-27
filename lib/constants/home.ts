import { HeroSection, Feature, ContentBlock, Stat } from '@/lib/types';

export const homeHero: HeroSection = {
  title: 'Crafting fabric, reimagining fashion\nMastering speed.',
  subtitle: 'Legacy backed modern textile manufacturer offering fast,\nsustainable fabric & garment solutions in India',
  primaryCTA: {
    label: 'Explore Our Capabilities',
    href: '/capabilities',
  },
  secondaryCTA: {
    label: 'Connect With Us',
    href: '/contact-us',
  },
};

export const homeFeatures: Feature[] = [
  {
    title: 'Feature One',
    description:
      'Description of the first key feature or benefit that Sona provides to customers.',
  },
  {
    title: 'Feature Two',
    description:
      'Description of the second key feature or benefit that Sona provides to customers.',
  },
  {
    title: 'Feature Three',
    description:
      'Description of the third key feature or benefit that Sona provides to customers.',
  },
  {
    title: 'Feature Four',
    description:
      'Description of the fourth key feature or benefit that Sona provides to customers.',
  },
];

export const homeStats: Stat[] = [
  {
    value: '10',
    suffix: 'K+',
    label: 'Happy Customers',
  },
  {
    value: '50',
    suffix: '+',
    label: 'Countries Worldwide',
  },
  {
    value: '99',
    suffix: '%',
    label: 'Customer Satisfaction',
  },
  {
    value: '24',
    suffix: '/7',
    label: 'Support Available',
  },
];

export const homeContentBlock: ContentBlock = {
  title: 'Why Choose Sona',
  description:
    'We combine innovation, expertise, and dedication to deliver exceptional solutions that help businesses thrive in the digital age. Our commitment to excellence and customer success sets us apart.',
  imagePosition: 'right',
  cta: {
    label: 'Discover More',
    href: '/about-us',
  },
};

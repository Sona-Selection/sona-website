import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import Stats from '@/components/sections/Stats';
import ContentBlock from '@/components/sections/ContentBlock';
import CTA from '@/components/sections/CTA';
import { homeHero, homeFeatures, homeStats, homeContentBlock } from '@/lib/constants/home';

export default function Home() {
  return (
    <>
      <Hero data={homeHero} />
      <Features
        title="What We Offer"
        description="Discover the key features that make Sona the perfect choice for your business"
        features={homeFeatures}
        columns={4}
      />
      <Stats stats={homeStats} />
      <ContentBlock data={homeContentBlock} />
      <CTA
        title="Ready to Get Started?"
        description="Join thousands of satisfied customers and transform your business today"
        primaryCTA={{ label: 'Contact Us', href: '/contact-us' }}
        secondaryCTA={{ label: 'View Products', href: '/products' }}
      />
    </>
  );
}

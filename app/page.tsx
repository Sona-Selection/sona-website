import {
  aboutSection,
  capabilitiesSection,
  ctaSection,
  homeHero,
  leadershipSection,
  productsSection,
  sustainabilitySection,
  trustedBrands,
  uspsSection,
} from "@/lib/constants/home";

import About from "@/components/sections/About";
import CTA from "@/components/sections/CTA";
import Capabilities from "@/components/sections/Capabilities";
import Hero from "@/components/sections/Hero";
import Leadership from "@/components/sections/Leadership";
import Products from "@/components/sections/Products";
import Sustainability from "@/components/sections/Sustainability";
import TrustedBrands from "@/components/sections/TrustedBrands";
import USPs from "@/components/sections/USPs";

/**
 * Home Page
 * Main landing page showcasing Sona's capabilities, USPs, and leadership
 */
export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero data={homeHero} />

      {/* Trusted Brands Section */}
      <TrustedBrands brands={trustedBrands} />

      {/* About Section */}
      <About data={aboutSection} />

      {/* Capabilities Section */}
      <Capabilities data={capabilitiesSection} />

      {/* USPs Section */}
      <USPs data={uspsSection} />

      {/* Products Section */}
      <Products data={productsSection} />

      {/* Sustainability Section */}
      <Sustainability data={sustainabilitySection} />

      {/* Leadership Section */}
      <Leadership data={leadershipSection} />

      {/* CTA Section */}
      <CTA data={ctaSection} />
    </>
  );
}

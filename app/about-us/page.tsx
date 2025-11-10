import CTA from "@/components/sections/CTA";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import AboutUsHero from "@/components/sections/about/AboutUsHero";
import PeopleCulture from "@/components/sections/about/PeopleCulture";
import Values from "@/components/sections/about/Values";
import AboutUsLeadership from "@/components/sections/about/AboutUsLeadership";
import {
  aboutUsHero,
  aboutUsPeopleCulture,
  aboutUsValues,
  aboutUsLeadership,
} from "@/lib/constants/about";
import { ctaSection } from "@/lib/constants/home";

/**
 * About Us Page
 * Complete about page showcasing company history, values, and leadership
 * Excludes Journey Timeline section (to be added in next iteration)
 */
export default function AboutUsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <AboutUsHero data={aboutUsHero} />

        {/* People & Culture Section */}
        <PeopleCulture data={aboutUsPeopleCulture} />

        {/* Values Section */}
        <Values data={aboutUsValues} />

        {/* Leadership Section */}
        <AboutUsLeadership data={aboutUsLeadership} />

        {/* CTA Section */}
        <CTA data={ctaSection} />
      </main>
      <Footer />
    </>
  );
}

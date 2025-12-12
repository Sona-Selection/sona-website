import {
  aboutUsHero,
  aboutUsJourney,
  aboutUsLeadership,
  aboutUsPeopleCulture,
  aboutUsValues,
} from "@/lib/constants/about";

import AboutUsHero from "@/components/sections/about/AboutUsHero";
import AboutUsLeadership from "@/components/sections/about/AboutUsLeadership";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import OurJourney from "@/components/sections/about/OurJourney";
import PeopleCulture from "@/components/sections/about/PeopleCulture";
import Values from "@/components/sections/about/Values";
import { ctaSection } from "@/lib/constants/home";
import { pageMetadata } from "@/lib/constants/metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: pageMetadata.aboutUs.title,
  description: pageMetadata.aboutUs.description,
  keywords: pageMetadata.aboutUs.keywords,
  openGraph: {
    ...pageMetadata.aboutUs.openGraph,
  },
  twitter: {
    ...pageMetadata.aboutUs.twitter,
  },
};

/**
 * About Us Page
 * Complete about page showcasing company history, values, and leadership
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

        {/* Journey Section */}
        <OurJourney data={aboutUsJourney} />

        {/* CTA Section */}
        <CTA data={ctaSection} />
      </main>
      <Footer />
    </>
  );
}

import {
  capabilitiesHero,
  sonaProcessorsFacilities,
  sonaSelectionFacilities,
  sonaStylesFacilities,
} from "@/lib/constants/capabilities";

import CTA from "@/components/sections/CTA";
import CapabilitiesHero from "@/components/sections/capabilities/CapabilitiesHero";
import FacilitiesGallery from "@/components/sections/capabilities/FacilitiesGallery";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { ctaSection } from "@/lib/constants/home";

/**
 * Capabilities (Manufacturing and Capabilities) Page
 * Showcasing Sona's manufacturing capabilities and processes
 */
export default function CapabilitiesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <CapabilitiesHero data={capabilitiesHero} />

        <div className="py-10 mb-6">
          {/* SONA Processors Facilities Gallery */}
          <FacilitiesGallery data={sonaProcessorsFacilities} />

          {/* SONA Selection Facilities Gallery */}
          <FacilitiesGallery data={sonaSelectionFacilities} />

          {/* SONA Styles Facilities Gallery */}
          <FacilitiesGallery data={sonaStylesFacilities} />
        </div>

        {/* CTA Section */}
        <CTA data={ctaSection} />
      </main>
      <Footer />
    </>
  );
}

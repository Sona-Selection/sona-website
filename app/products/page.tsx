import CTA from "@/components/sections/CTA";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { ctaSection } from "@/lib/constants/home";

/**
 * Products Page
 */
export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* CTA Section */}
        <CTA data={ctaSection} />
      </main>
      <Footer />
    </>
  );
}

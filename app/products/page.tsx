import CTA from "@/components/sections/CTA";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ProductsHero from "@/components/sections/products/ProductsHero";
import { ctaSection } from "@/lib/constants/home";
import { productsHero } from "@/lib/constants/products";

/**
 * Products Page
 * Showcasing Sona's textile solutions and product range
 */
export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <ProductsHero data={productsHero} />

        {/* CTA Section */}
        <CTA data={ctaSection} />
      </main>
      <Footer />
    </>
  );
}

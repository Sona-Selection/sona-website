import {
  finishedFabrics,
  productApplications,
  productsHero,
  specialityWeaves,
  wovenFabrics,
  advancedFinishes,
} from "@/lib/constants/products";

import CTA from "@/components/sections/CTA";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ProductCategory from "@/components/sections/products/ProductCategory";
import ProductsHero from "@/components/sections/products/ProductsHero";
import AdvancedFinishes from "@/components/sections/products/AdvancedFinishes";
import { colors } from "@/lib/theme/colors";
import { ctaSection } from "@/lib/constants/home";

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

        {/* Orange Horizontal Divider */}
        <div className="relative" style={{ backgroundColor: colors.cream }}>
          <div className="container mx-auto px-6 lg:px-12">
            <div
              className="h-[2px] w-full"
              style={{ backgroundColor: colors.primary }}
            />
          </div>
        </div>

        {/* Woven Fabrics Section */}
        <ProductCategory data={wovenFabrics} />

        {/* Speciality Weaves Section */}
        <ProductCategory data={specialityWeaves} />

        {/* Finished Fabrics Section */}
        <ProductCategory data={finishedFabrics} />

        {/* Product Applications Section */}
        <ProductCategory data={productApplications} />

        {/* Advanced Finishes Section */}
        <AdvancedFinishes data={advancedFinishes} />

        {/* CTA Section */}
        <CTA data={ctaSection} />
      </main>
      <Footer />
    </>
  );
}

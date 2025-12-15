import {
  productsHero,
  // wovenFabrics,
  advancedFinishes,
  productRange,
} from "@/lib/constants/products";

import CTA from "@/components/sections/CTA";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

import ProductsHero from "@/components/sections/products/ProductsHero";
import AdvancedFinishes from "@/components/sections/products/AdvancedFinishes";
import ProductRange from "@/components/sections/products/ProductRange";
import { colors } from "@/lib/theme/colors";
import { ctaSection } from "@/lib/constants/home";
import { pageMetadata } from "@/lib/constants/metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: pageMetadata.products.title,
  description: pageMetadata.products.description,
  keywords: pageMetadata.products.keywords,
  openGraph: {
    ...pageMetadata.products.openGraph,
  },
  twitter: {
    ...pageMetadata.products.twitter,
  },
};

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

        {/* Product Range Section */}
        <ProductRange data={productRange} />



        {/* Advanced Finishes Section */}
        <AdvancedFinishes data={advancedFinishes} />

        {/* CTA Section */}
        <CTA data={ctaSection} />
      </main>
      <Footer />
    </>
  );
}

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

/**
 * Investor Relations Layout
 * Uses cream navbar variant instead of default orange
 */
export default function InvestorRelationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar variant="cream" />
      {children}
      <Footer />
    </>
  );
}

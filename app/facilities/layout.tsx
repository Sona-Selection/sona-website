import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

/**
 * Facilities Layout
 * Uses cream navbar variant for consistency with investor relations pages
 */
export default function FacilitiesLayout({
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

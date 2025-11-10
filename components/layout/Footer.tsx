import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Logo from "@/components/common/Logo";
import { Separator } from "@/components/ui/separator";
import { colors } from "@/lib/theme/colors";

/**
 * Footer Component
 * Main site footer with navigation, newsletter signup, and legal info
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-[#FBFBEF]" style={{ backgroundColor: colors.primary }} data-figma-node="0:325">
      <div className="container mx-auto px-6 lg:px-12 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16">
          {/* Logo */}
          <div className="lg:col-span-3">
            <Logo
              size="lg"
              href="/"
              className="text-[#FBFBEF]"
              iconVariant="white"
            />
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Products */}
            <div>
              <h3 className="text-lg font-medium mb-4">Products</h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Yarn to Fabric
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Garmenting
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Quality & Testing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    R&D + Sampling
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Custom Applications
                  </Link>
                </li>
              </ul>
            </div>

            {/* Capabilities */}
            <div>
              <h3 className="text-lg font-medium mb-4">Capabilities</h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    End-to-End Supply Chain
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Small Batch Production
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Sustainable Processing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Tech-Enabled Manufacturing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    On-Demand Scalability
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-medium mb-4">Company</h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link
                    href="/about-us"
                    className="hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Leadership
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact-us"
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-lg font-medium mb-4">Resources</h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Media Kit
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Terms of Use
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Responsible Manufacturing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/investor-relations"
                    className="hover:text-white transition-colors"
                  >
                    DRHP Filing →
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact & Newsletter */}
          <div className="lg:col-span-3 space-y-6">
            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-medium mb-2">Contact Us</h3>
              <p className="text-sm opacity-80 mb-4" style={{ color: colors.cream }}>
                We'd love to help. Reach out for partnerships, inquiries, or
                support.
              </p>

              {/* Newsletter Form */}
              <div className="flex gap-2 mb-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
                <Button
                  size="icon"
                  className="hover:bg-white shrink-0"
                  style={{ backgroundColor: colors.cream, color: colors.primary }}
                >
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Call Sales */}
            <div>
              <p className="text-sm opacity-80 mb-1" style={{ color: colors.cream }}>Call Sales</p>
              <a
                href="tel:+919876543210"
                className="text-lg font-medium hover:text-white transition-colors"
              >
                +91 9876543210
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <Separator className="my-8 bg-white/10" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p>© {currentYear} Sona Selection. All rights reserved.</p>
          <div className="flex items-center gap-8">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <p className="text-xs">
              Backed by S45 → <br />
              Proudly supported by S45, a venture studio committed to
              sustainable innovation in supply chains.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

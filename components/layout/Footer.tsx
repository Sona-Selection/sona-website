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
    <footer
      className="text-[#FBFBEF]"
      style={{ backgroundColor: colors.primary }}
      data-figma-node="0:325"
    >
      <div className="container mx-auto px-6 lg:px-12 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16">
          {/* Logo & Contact Section */}
          <div className="lg:col-span-3 space-y-6">
            <Logo
              size="lg"
              href="/"
              className="text-[#FBFBEF]"
              iconVariant="white"
            />

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-medium mb-2">
                <a href="mailto:info@sonaselection.com">CONTACT US</a>
              </h3>
              <p
                className="text-sm opacity-80 mb-4"
                style={{ color: colors.cream }}
              >
                We&apos;d love to help. Reach out for partnerships, inquiries,
                or support.
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
                  style={{
                    backgroundColor: colors.cream,
                    color: colors.primary,
                  }}
                >
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Call Sales */}
            <div>
              <p className="text-sm opacity-80" style={{ color: colors.cream }}>
                Call Sales
              </p>
              <a
                href="tel:+919461341476"
                className="text-lg font-medium hover:text-white transition-colors"
              >
                +91 9461341476
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-9 grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Products */}
            <div>
              <h3 className="text-lg font-medium mb-4">Products</h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Woven Fabrics
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Speciality Weaves
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Finished Fabrics
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Product Applications
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Advanced Finishes
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
                    Capacities
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Technology
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Gallery
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
                    Timeline
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Sustainability
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-lg font-medium mb-4">Resources</h3>
              <ul className="space-y-2.5 text-sm">
                {/* <li>
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
                </li> */}
                <li>
                  <div>
                    <Link
                      href="/investor-relations"
                      className="hover:text-white transition-colors"
                    >
                      DRHP Filing
                    </Link>
                    <p className="text-xs italic opacity-70 mt-1">
                      View our Draft Red Herring Prospectus and disclosures for
                      investors. →
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-start lg:justify-end gap-3 mt-0 lg:mt-[-2.5rem]">
          <Link
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
            aria-label="Facebook"
          >
            <div className="w-7 h-7 bg-white rounded flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-3.5 w-3.5"
                style={{ color: colors.primary }}
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </div>
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
            aria-label="LinkedIn"
          >
            <div className="w-7 h-7 bg-white rounded flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-3.5 w-3.5"
                style={{ color: colors.primary }}
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </div>
          </Link>
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
            aria-label="Instagram"
          >
            <div className="w-7 h-7 bg-white rounded flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-3.5 w-3.5"
                style={{ color: colors.primary }}
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </div>
          </Link>
        </div>

        {/* Bottom Bar */}
        <Separator className="my-5 bg-white/50 h-[5px]" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p>© {currentYear} Sona Selection. All rights reserved.</p>
          <div className="flex items-center gap-8">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
          </div>
          <div className="text-xs text-right">
            <p className="font-medium">Backed by S45 →</p>
            <p className="opacity-80">
              Proudly supported by S45, a venture studio committed to
              sustainable innovation in supply chains.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

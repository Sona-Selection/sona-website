'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import Logo from '@/components/common/Logo';
import { navigationItems } from '@/lib/constants/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#FF6333]">
      <nav className="container mx-auto flex h-[72px] items-center justify-between px-6 lg:px-12">
        {/* Logo */}
        <Logo size="md" className="text-white" />

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-12">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-base font-normal text-black transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          <Button
            asChild
            className="bg-[#022050] hover:bg-[#033070] text-white rounded-md px-6 py-2.5 font-medium"
          >
            <Link href="/contact-us">CONTACT US</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-[#FF6333]">
              <nav className="flex flex-col space-y-6 mt-8">
                {navigationItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-lg font-medium text-white transition-colors hover:text-black"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <Button
                  asChild
                  className="bg-[#022050] hover:bg-[#033070] text-white rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  <Link href="/contact-us">CONTACT US</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}

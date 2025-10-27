import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { HeroSection } from '@/lib/types';

interface HeroProps {
  data: HeroSection;
}

export default function Hero({ data }: HeroProps) {
  return (
    <section className="relative min-h-[calc(100vh-72px)] flex items-center justify-center overflow-hidden bg-black">
      {/* Video Background Placeholder - Replace with actual video */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 opacity-90" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-20">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-white leading-tight whitespace-pre-line">
            {data.title}
          </h1>
          <p className="mt-8 text-lg sm:text-xl text-white/90 max-w-3xl whitespace-pre-line">
            {data.subtitle}
          </p>

          {(data.primaryCTA || data.secondaryCTA) && (
            <div className="mt-12 flex flex-col sm:flex-row gap-4 items-center">
              {data.primaryCTA && (
                <Button
                  asChild
                  className="bg-[#FF6333] hover:bg-[#E55A3A] text-white rounded-lg px-8 py-6 text-base font-normal"
                >
                  <Link href={data.primaryCTA.href}>
                    {data.primaryCTA.label}
                  </Link>
                </Button>
              )}
              {data.secondaryCTA && (
                <Button
                  asChild
                  variant="outline"
                  className="border-[#FF6333] text-[#FF6333] hover:bg-[#FF6333]/10 rounded-lg px-8 py-6 text-base font-normal"
                >
                  <Link href={data.secondaryCTA.href} className="flex items-center gap-2">
                    {data.secondaryCTA.label}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              )}
            </div>
          )}

          {/* Video Link */}
          <div className="mt-8">
            <Link
              href="#intro-video"
              className="text-[#FF6333] hover:text-[#E55A3A] transition-colors text-base font-normal"
            >
              Watch 1-min Intro Video
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

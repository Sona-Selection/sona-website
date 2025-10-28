import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { SustainabilitySection } from "@/lib/types";

interface SustainabilityProps {
  data: SustainabilitySection;
}

/**
 * Sustainability Section Component
 * Displays sustainability features and certifications
 * @param {SustainabilitySection} data - Sustainability section content
 */
export default function Sustainability({ data }: SustainabilityProps) {
  return (
    <section className="bg-[#FFFCF4] py-16 md:py-24" data-figma-node="0:222">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-6 md:gap-8 mb-12 md:mb-16">
          <p className="text-base md:text-lg text-[#02244A] uppercase tracking-[2.52px]">
            {data.badge}
          </p>
          <h2 className="text-4xl md:text-[64px] text-[#02244A] leading-tight tracking-tight font-serif max-w-[1031px]">
            {data.title}
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-20">
          {/* Left: Features */}
          <div className="space-y-8 md:space-y-10 order-2 lg:order-1">
            {data.features.map((feature, index) => (
              <div key={index} className="flex gap-6 md:gap-8 items-start">
                {/* Vertical Line for Highlighted Feature */}
                {feature.highlighted && (
                  <div className="hidden md:block w-0.5 h-24 bg-gradient-to-b from-transparent via-[#02244A] to-transparent" />
                )}

                {/* Feature Content */}
                <div className="flex flex-col gap-1">
                  <h3
                    className={`text-2xl md:text-4xl leading-tight ${
                      feature.highlighted ? "text-[#02244A]" : "text-[#818181]"
                    }`}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-base md:text-lg text-[#02244A]/80 leading-relaxed tracking-tight max-w-[396px]">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Main Image */}
          <Card className="relative h-[350px] md:h-[518px] overflow-hidden rounded-xl border-0 shadow-none order-1 lg:order-2">
            <Image
              src={data.mainImage}
              alt="Sustainability"
              fill
              className="object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60" />
          </Card>
        </div>

        {/* Certifications */}
        <Card className="bg-[#02244A] p-8 md:p-12 rounded-2xl border-0 shadow-none relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF6333]/20 to-transparent" />
          </div>

          <div className="relative z-10 flex flex-col gap-8 md:gap-10">
            {/* Certification Header */}
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
              {/* Certification Logos */}
              <div className="flex gap-4 flex-wrap">
                {data.certifications.slice(0, 5).map((cert, index) => (
                  <div
                    key={index}
                    className="w-11 h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center"
                  >
                    {cert.image && (
                      <Image
                        src={cert.image}
                        alt={cert.name}
                        width={32}
                        height={32}
                        className="object-contain"
                      />
                    )}
                  </div>
                ))}
              </div>

              {/* Text */}
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl md:text-4xl text-[#FFFCF4] leading-tight">
                  Certified to Global Standards
                </h3>
                <p className="text-base md:text-lg text-[#FFFCF4]/90 leading-normal">
                  We uphold the highest benchmarks in textile safety,
                  sustainability, and traceability
                </p>
              </div>
            </div>

            <Separator className="bg-white/10" />

            {/* Certification Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {data.certifications.map((cert, index) => (
                <div key={index} className="flex flex-col gap-1">
                  <p className="text-xs md:text-sm text-[#FF6333] uppercase font-semibold tracking-wide">
                    Scope Certificate
                  </p>
                  <p className="text-sm md:text-base text-[#FFFCF4] leading-relaxed">
                    {cert.name}
                    {cert.description && (
                      <>
                        <br />
                        <span className="text-[#FFFCF4]/70">
                          {cert.description}
                        </span>
                      </>
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}

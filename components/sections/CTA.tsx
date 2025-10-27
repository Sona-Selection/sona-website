import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface CTAProps {
  title: string;
  description?: string;
  primaryCTA: {
    label: string;
    href: string;
  };
  secondaryCTA?: {
    label: string;
    href: string;
  };
  backgroundColor?: 'default' | 'muted' | 'primary';
}

export default function CTA({
  title,
  description,
  primaryCTA,
  secondaryCTA,
  backgroundColor = 'muted',
}: CTAProps) {
  const bgClasses = {
    default: '',
    muted: 'bg-muted/50',
    primary: 'bg-primary text-primary-foreground',
  }[backgroundColor];

  return (
    <section className={`${bgClasses} py-16 md:py-24`}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {title}
          </h2>
          {description && (
            <p className="mt-6 text-lg opacity-90">
              {description}
            </p>
          )}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant={backgroundColor === 'primary' ? 'secondary' : 'default'}>
              <Link href={primaryCTA.href}>{primaryCTA.label}</Link>
            </Button>
            {secondaryCTA && (
              <Button asChild size="lg" variant="outline">
                <Link href={secondaryCTA.href}>{secondaryCTA.label}</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ContentBlock as ContentBlockType } from '@/lib/types';

interface ContentBlockProps {
  data: ContentBlockType;
}

export default function ContentBlock({ data }: ContentBlockProps) {
  const isImageRight = data.imagePosition === 'right';

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${isImageRight ? '' : 'md:grid-flow-dense'}`}>
        {/* Text Content */}
        <div className={isImageRight ? '' : 'md:col-start-2'}>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {data.title}
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            {data.description}
          </p>
          {data.cta && (
            <Button asChild size="lg" className="mt-8">
              <Link href={data.cta.href}>{data.cta.label}</Link>
            </Button>
          )}
        </div>

        {/* Image Placeholder */}
        <div className={`${isImageRight ? 'md:col-start-2' : 'md:col-start-1 md:row-start-1'} bg-muted rounded-lg aspect-video flex items-center justify-center`}>
          {data.imageUrl ? (
            <img
              src={data.imageUrl}
              alt={data.title}
              className="w-full h-full object-cover rounded-lg"
            />
          ) : (
            <span className="text-muted-foreground">Image Placeholder</span>
          )}
        </div>
      </div>
    </section>
  );
}

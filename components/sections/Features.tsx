import { Feature } from '@/lib/types';

interface FeaturesProps {
  title?: string;
  description?: string;
  features: Feature[];
  columns?: 2 | 3 | 4;
}

export default function Features({
  title,
  description,
  features,
  columns = 3,
}: FeaturesProps) {
  const gridColsClass = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
  }[columns];

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      {(title || description) && (
        <div className="text-center mb-12 md:mb-16">
          {title && (
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              {title}
            </h2>
          )}
          {description && (
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>
      )}

      <div className={`grid grid-cols-1 ${gridColsClass} gap-8`}>
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-start p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow"
          >
            {feature.icon && (
              <div className="text-4xl mb-4">{feature.icon}</div>
            )}
            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

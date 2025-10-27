import { Stat } from '@/lib/types';

interface StatsProps {
  stats: Stat[];
  title?: string;
  backgroundColor?: 'default' | 'muted';
}

export default function Stats({ stats, title, backgroundColor = 'muted' }: StatsProps) {
  const bgClass = backgroundColor === 'muted' ? 'bg-muted/50' : '';

  return (
    <section className={`${bgClass} py-16 md:py-24`}>
      <div className="container mx-auto px-4">
        {title && (
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12 sm:text-4xl">
            {title}
          </h2>
        )}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold">
                {stat.prefix}
                {stat.value}
                {stat.suffix}
              </div>
              <div className="mt-2 text-sm md:text-base text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

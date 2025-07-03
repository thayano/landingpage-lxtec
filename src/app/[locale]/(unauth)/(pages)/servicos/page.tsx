import { dataService } from '@/data/data';
import { FeatureCard } from '@/features/landing/FeatureCard';
import { Section } from '@/features/landing/Section';
import type { FeatureCardTypes } from '@/types/Data';

export default async function Page() {
  return (
    <Section
      title="Conheça nossos serviços de T.I."
      description="Para cada desafio da sua gestão, uma solução tecnológica sob medida."
    >
      <div className="grid grid-cols-1 gap-x-5 gap-y-8 md:grid-cols-3">
        {dataService.map((item: FeatureCardTypes) => (
          <FeatureCard
            title={item.title}
            subtitle={item.subtitle}
            color={item.color}
            link={item.link}
            key={item.title}
          >
            <article>
              {item.description}
            </article>
          </FeatureCard>
        ))}
      </div>
    </Section>
  );
}

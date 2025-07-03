import { useTranslations } from 'next-intl';

import { dataProduct } from '@/data/data';
import { FeatureCard } from '@/features/landing/FeatureCard';
import { Section } from '@/features/landing/Section';
import type { FeatureCardTypes } from '@/types/Data';

export const Features = () => {
  const t = useTranslations('Features');

  return (
    <Section
      subtitle={t('section_subtitle')}
      title={t('section_title')}
      description=""
    >
      <div className="grid grid-cols-1 gap-x-5 gap-y-8 md:grid-cols-3">
        {dataProduct.map((item: FeatureCardTypes) => (
          item.priority
            ? (
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
              )
            : null
        ))}
      </div>
    </Section>
  );
};

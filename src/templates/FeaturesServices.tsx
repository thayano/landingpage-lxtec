import { useTranslations } from 'next-intl';

import { FeatureCard } from '@/features/landing/FeatureCard';
import { Section } from '@/features/landing/Section';

export const FeaturesServices = () => {
  const t = useTranslations('Features');

  return (
    <Section
      subtitle={t('section_subtitle')}
      title="Serviços de T.I."
      description=""
    >
      <div className="grid grid-cols-1 gap-x-5 gap-y-8 md:grid-cols-3">
        <FeatureCard
          title="Administração de Servidores"
          subtitle="Consultoria de T.I."
          color="cyan"
        >
          <article>
            Monitoramento, manutenção e suporte completo para garantir a alta disponibilidade e segurança dos seus servidores.
          </article>
        </FeatureCard>
        <FeatureCard
          title="Administração de Redes"
          subtitle="Suporte especializado"
          link="/about.js"
          color="darkBlue"

        >
          <article>
            Gestão completa da infraestrutura de redes com foco em segurança, desempenho e conectividade contínua.
          </article>
        </FeatureCard>
        <FeatureCard
          title="Locação de Servidores e Impressoras"
          subtitle="Outsourcing de Hardware"
          color="rose"

        >
          <article>
            Reduza custos com a locação de equipamentos de alta performance, com suporte e manutenção inclusos.
          </article>
        </FeatureCard>
      </div>
    </Section>
  );
};

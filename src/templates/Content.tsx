import { Background } from '@/components/Background';
import { Section } from '@/features/landing/Section';
import { SectionSideBySide } from '@/features/landing/SectionSideBySide';
import nextjs from '@/public/assets/images/nextjs-starter-banner.png';

export const Content = () => {
  // const t = useTranslations('Pricing');

  return (
    <Background>
      <Section>
        <SectionSideBySide
          image={nextjs}
          title="Soluções sob medida que conectam tecnologia, estratégia e processos."
          description="Atendimento especializado, equipe qualificada e infraestrutura eficiente para levar sua empresa ao próximo nível. O próximo passo da sua empresa na tecnologia é com a Lxtec."
        >
        </SectionSideBySide>
      </Section>
    </Background>
  );
};

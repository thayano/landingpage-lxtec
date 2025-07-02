import { Background } from '@/components/Background';
import { SectionSideBySide } from '@/features/landing/SectionSideBySide';
import banner from '@/public/banner_ok 1.png';

export const ADS = () => {
  return (
    <Background>
      <SectionSideBySide image={banner}>
        <div className="flex h-full flex-col items-center justify-center">
          <header>
            <h2 className="text-4xl font-semibold">
              Soluções sob medida que conectam tecnologia, estratégia e processos.
            </h2>
          </header>
          <p className="py-8">
            Atendimento especializado, equipe qualificada e infraestrutura eficiente para levar sua empresa ao próximo nível.
            O próximo passo da sua empresa na tecnologia é com a Lxtec.
          </p>
        </div>
      </SectionSideBySide>
    </Background>
  );
};

import { SectionSideBySide } from '@/features/landing/SectionSideBySide';
import caixa from '@/public/caixa.png';
import visao from '@/public/visao.png';

export const Vision = () => {
  return (
    <>
      <SectionSideBySide image={caixa} order="order-1">
        <section>
          <h2 className="py-4 text-2xl font-semibold">Quem Somos</h2>
          <article className="mt-4 pr-16">
            Há mais de uma década, a LXTEC Informática impulsiona o sucesso de seus clientes com soluções tecnológicas sob medida.
            Nossa equipe, apaixonada por tecnologia, transforma desafios em oportunidades, entregando produtos e serviços inovadores que simplificam a gestão da informação e potencializam negócios.
            Acreditamos que a inovação constante é a chave para construir um futuro mais conectado, eficiente e seguro.
          </article>
        </section>
      </SectionSideBySide>
      <SectionSideBySide image={visao}>
        <section>
          <h2 className="py-4 text-2xl font-semibold">Visão </h2>
          <article>
            Viabilizar as melhores experiências tecnológicas que conectam pessoas, entregando soluções mais eficientes e seguras.
          </article>
          <h2 className="py-4 text-2xl font-semibold">Proposito </h2>
          <article>
            Conectar tecnologia e pessoas com soluções seguras que facilitam, transformam e melhoram o dia a dia de empresas e da sociedade.
          </article>
        </section>
      </SectionSideBySide>
    </>
  );
};

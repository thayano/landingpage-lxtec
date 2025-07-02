import Image from 'next/image';

import { Section } from '@/features/landing/Section';
import aspas from '@/public/aspas-duplas.png';

const avaliacoes = [{
  title: 'Experiência de Compra Incrível!',
  name: 'Ana Silva',
}, {
  title: 'Produtos de Alta Qualidade',
  name: 'Carlos Oliveira',
}, {
  title: 'Atendimento ao Cliente Excepcional',
  name: 'Beatriz Santos',
}, {
  title: 'Entrega Rápida e Eficiente',
  name: 'Ricardo Mendes',
}];

export const Evaluations = () => {
  return (
    <Section
      className="text-white"
      title="Nossas Avaliações"
    >
      <main className="px-3 py-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          {avaliacoes.map(item => (
            <div className="flex flex-col gap-6 rounded-2xl bg-[#2E3238] p-8" key={item.name}>
              <div>
                <Image alt="aspas" src={aspas} width={30} />
              </div>
              <article className="px-4 text-2xl">
                {item.title}
              </article>
              <div>
                <span className="text-yellow-200">
                  &#9733; &#9733;
                  &#9733; &#9733;
                  &#9733;
                </span>
                <div className="text-gray-500 hover:cursor-pointer hover:text-gray-300">
                  <p>{item.name}</p>
                  <span className="text-xs">algumas semanas atras</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </Section>

  );
};

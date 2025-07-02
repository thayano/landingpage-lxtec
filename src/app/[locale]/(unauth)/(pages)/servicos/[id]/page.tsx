import processos from '@/public/processos.png';
import { ADS } from '@/templates/ADS';
import { NotFound } from '@/templates/NotFound';
import { PageTemplate } from '@/templates/PageTemplete';

import type { servicosProps } from '../data';
import { servicos } from '../data';

export default async function Page({ params }: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;

  const servico: servicosProps | undefined = servicos.find(item => item.id === Number(id));
  if (servico === undefined) {
    return <NotFound title="Pagina do servico não encontrada" />;
  }
  return (
    <>
      <PageTemplate image={processos} order="order-1">
        <div className="flex flex-col gap-4">
          <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-sm font-bold uppercase text-transparent">
            {servico.subtitle}
          </div>
          <h2 className="text-4xl font-semibold">{servico.title}</h2>
          <article>
            {servico.descricao}
          </article>
        </div>
      </PageTemplate>
      <PageTemplate image={processos} order="">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-semibold">{servico.title2}</h2>
          <article>
            {servico.description2}
          </article>
        </div>
      </PageTemplate>
      <ADS />
    </>
  );
};

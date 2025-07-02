import processos from '@/public/processos.png';
import { ADSResume } from '@/templates/ADSResume';
import { NotFound } from '@/templates/NotFound';
import { PageTemplate } from '@/templates/PageTemplete';

import type { produtosProps } from '../data';
import { produtos } from '../data';

export default async function Page({ params }: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;

  const produto: produtosProps | undefined = produtos.find(item => item.id === Number(id));
  if (produto === undefined) {
    return <NotFound title="Pagina do produto não encontrada!" />;
  }
  return (
    <>
      <PageTemplate image={processos} order="order-1">
        <div className="flex flex-col gap-4">
          <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-sm font-bold uppercase text-transparent">
            {produto.subtitle}
          </div>
          <h2 className="text-4xl font-semibold">{produto.title}</h2>
          <article>
            {produto.descricao}
          </article>
        </div>
      </PageTemplate>
      <PageTemplate image={processos} order="">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-semibold">{produto.title2}</h2>
          <article>
            {produto.description2}
          </article>
        </div>
      </PageTemplate>
      <ADSResume />
    </>
  );
};

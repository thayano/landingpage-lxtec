import Image from 'next/image';

import { Background } from '@/components/Background';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Section } from '@/features/landing/Section';
import pr_image from '@/public/pr.png';

import { Evaluations } from './Evaluations';

export const RepresentationProgram = () => {
  return (
    <Background className="bg-[#26292E]">
      <Section>
        <main className="rounded-3xl bg-[#2E3238] p-16 shadow-lg">
          <div className="flex gap-16">
            <div className="flex items-center justify-center rounded-3xl bg-amber-50">
              <Image alt="" src={pr_image} width={400} />
            </div>
            <div className="flex flex-col gap-8">
              <div className="text-white">
                <h2 className="py-4 text-4xl font-semibold">Programa de Representação</h2>
                <article className="text-muted">
                  Buscamos parceiros comprometidos em levar nossas soluções ao mercado. Junte-se a nós para representar e negociar nossos softwares com o suporte e a confiança da LXTEC.
                </article>
              </div>
              <div className="flex gap-4">
                <Input type="text" placeholder="Insira seu email" className="rounded-full border-none bg-[#404040] pl-4 text-white"></Input>
                <div className="rounded-full bg-gradient-to-br from-teal-500 via-transparent to-blue-400 p-px">
                  <Button className="rounded-full px-6 uppercase">Entrar em Contato</Button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </Section>
      <Evaluations />
    </Background>
  );
};

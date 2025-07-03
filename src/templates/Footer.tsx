import Link from 'next/link';

import { Background } from '@/components/Background';
import { CenteredFooter } from '@/features/landing/CenteredFooter';
import { LinkList } from '@/features/landing/LinkList';
import { Section } from '@/features/landing/Section';

import { CTA } from './CTA';

type FooterLinks = {
  title: string;
  description?: string;
  src?: string;
  children?: FooterLinks[];
};

const dataFooterLinks: FooterLinks[] = [
  {
    title: 'Lxtec Informática',
    description: 'A Lxtec é a sua parceira estratégica para impulsionar eficiência, crescimento e sustentabilidade. Vamos encontrar juntos a solução certa para sua empresa.',
  },
  {
    title: 'Produtos',
    children: [{
      title: 'LX Processos',
      src: '/produtos/1',
    }, {
      title: 'LX Sign',
      src: '/produtos/2',
    }, {
      title: 'LX Ged',
      src: '/produtos/3',
    }, {
      title: 'LX Control',
      src: '/produtos/4',
    }, {
      title: 'LX Ouvidoria',
      src: '/produtos/5',
    }],
  },
  {
    title: 'Serviços',
    children: [{
      title: 'Administração de Servidores',
      src: '/servicos/1',
    }, {
      title: 'Administração de Redes',
      src: '/servicos/2',
    }, {
      title: 'Locação de Servidores e Impressoras',
      src: '/servicos/3',
    }],
  },
  {
    title: 'Companhia',
    children: [{
      title: 'Sobre Nós',
      src: '/sobre',
    }],
  },
];
export const Footer = () => {
  return (
    <Background className="bg-gradient-to-b from-[#2A3F59] to-black">
      <Section className="py-16">
        <CTA />
        <CenteredFooter
          name="Lxtec Informática"
          legalLinks={(
            <li>
              <Link href="/sign-up">Política de Privacidade</Link>
            </li>
          )}
        >
          <div className="grid grid-cols-1 gap-16 md:grid-cols-4">
            <LinkList links={dataFooterLinks} />
          </div>
        </CenteredFooter>
      </Section>
    </Background>
  );
};

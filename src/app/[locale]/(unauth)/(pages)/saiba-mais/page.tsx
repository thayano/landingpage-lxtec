import { Award, Briefcase, HeartHandshake, Scaling, Shield } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Section } from '@/features/landing/Section';

const features = [
  {
    name: 'Atendimento personalizado e próximo',
    description:
      'Acreditamos em parcerias duradouras. Nossa equipe se dedica a entender suas necessidades para oferecer um suporte ágil e as melhores soluções.',
    icon: HeartHandshake,
  },
  {
    name: 'Equipe altamente qualificada e dedicada',
    description:
      'Contamos com um time de especialistas apaixonados por tecnologia e comprometidos com o sucesso do seu projeto, garantindo entregas de alta qualidade.',
    icon: Award,
  },
  {
    name: 'Infraestrutura robusta, segura e eficiente',
    description:
      'Nossos sistemas rodam em uma infraestrutura de ponta, garantindo alta disponibilidade, proteção total dos seus dados e performance superior.',
    icon: Shield,
  },
  {
    name: 'Experiência comprovada em projetos de diferentes portes',
    description:
      'Já atendemos empresas de todos os tamanhos, de startups a grandes corporações. Nossa vasta experiência garante a entrega de soluções testadas e aprovadas pelo mercado.',
    icon: Briefcase,
  },
  {
    name: 'Soluções flexíveis, escaláveis e sob medida',
    description:
      'Nossas soluções se adaptam perfeitamente às suas necessidades e crescem junto com sua empresa, sem a necessidade de grandes reinvestimentos.',
    icon: Scaling,
  },
];

export function Features() {
  return (
    <section className="container space-y-16 py-24 md:py-32">
      <div className="mx-auto max-w-[58rem] text-center">
        <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">O que nos torna diferentes?</h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
        {features.map(feature => (
          <div key={feature.name} className="relative overflow-hidden rounded-lg border bg-background p-8">
            <div className="flex items-center gap-4">
              <feature.icon className="size-8" />
              <h3 className="font-bold">{feature.name}</h3>
            </div>
            <p className="mt-2 text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function CTA() {
  return (
    <section className="border-t">
      <div className="container flex flex-col items-center gap-4 py-24 text-center md:py-32">
        <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
          Pronto para revolucionar seu negócio?
        </h2>
        <p className="max-w-2xl leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          A LXtec está preparada para ser sua parceira estratégica em tecnologia, contribuindo diretamente com a eficiência operacional e a sustentabilidade do seu negócio.
          Entre em contato com a Lxtec e descubra a solução certa para o seu próximo projeto.
        </p>
        <Button size="lg" className="mt-4">
          Fale conosco
        </Button>
      </div>
    </section>
  );
}

export function Hero() {
  return (
    <section className="container flex min-h-[calc(100vh-3.5rem)] max-w-screen-2xl flex-col items-center justify-center space-y-8 py-24 text-center md:py-32">
      <div className="space-y-10">
        <h1 className="bg-gradient-to-br from-foreground from-30% via-foreground/90 to-foreground/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
          Tecnologia sob medida para transformar desafios em soluções.
          <br />

        </h1>
        <p className="mx-auto max-w-7xl pt-16 leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Na Lxtec, acreditamos que cada empresa tem desafios únicos e merece soluções personalizadas.
          Somos especialistas em desenvolver, implementar e administrar tecnologias que impulsionam eficiência, promovem crescimento sustentável e simplificam processos.Conectamos estratégia, inovação e tecnologia para transformar desafios em oportunidades reais.
        </p>
      </div>
      <div className="flex gap-4">
        <Link href="/produtos"><Button size="lg">Conheça nossos Produtos</Button></Link>
        <Link href="/servicos"><Button variant="outline" size="lg">Conheça nossos Serviços</Button></Link>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="absolute right-0 top-28 size-[500px] bg-blue-500/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 size-[500px] bg-purple-500/10 blur-[100px]" />
      </div>
      <div className="relative z-10">
        <Section>
          <Hero />
          <Features />
          <CTA />
        </Section>
      </div>
    </div>
  );
}

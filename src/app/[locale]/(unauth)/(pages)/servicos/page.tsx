import { FeatureCard } from '@/features/landing/FeatureCard';
import { Section } from '@/features/landing/Section';

export default async function Page() {
  return (
    <Section
      title="Titulo maneiro"
      description="lorem dasdalsjdopasdj asdiuaspod upoaisud pouaspdasiduhiashdio hasidj ajsh diasuhdjashndiuauahsiudh 0h ihsdi hsh"
    >
      <div className="grid grid-cols-1 gap-x-5 gap-y-8 md:grid-cols-3">

        <FeatureCard
          title="GESTAO DE PROCESSOS"
          subtitle="Lx Processos"
          color="red"
        >
          <article>
            Organize, agilize e transforme a gestão de processos com tecnologia eficiente e segura. Menos burocracia, mais resultados.
          </article>
        </FeatureCard>
        <FeatureCard
          title="Gestão Documental"
          subtitle="Lx GED"
          link="/about.js"
          color="blue"

        >
          <article>
            Organize, armazene e acesse seus documentos com agilidade e segurança. Controle total, digitalização simplificada e menos papel.
          </article>
        </FeatureCard>
        <FeatureCard
          title="Assinatura Digital"
          subtitle="LX SIGN"
          color="orange"

        >
          <article>
            Assine documentos com validade jurídica de forma simples, rápida e segura. Mobilidade, agilidade e menos papel no seu dia a dia.
          </article>
        </FeatureCard>
        <FeatureCard
          title="GESTAO DE PROCESSOS"
          subtitle="Lx Processos"
          color="red"
        >
          <article>
            Organize, agilize e transforme a gestão de processos com tecnologia eficiente e segura. Menos burocracia, mais resultados.
          </article>
        </FeatureCard>
        <FeatureCard
          title="Gestão Documental"
          subtitle="Lx GED"
          link="/about.js"
          color="blue"

        >
          <article>
            Organize, armazene e acesse seus documentos com agilidade e segurança. Controle total, digitalização simplificada e menos papel.
          </article>
        </FeatureCard>
        <FeatureCard
          title="Assinatura Digital"
          subtitle="LX SIGN"
          color="orange"

        >
          <article>
            Assine documentos com validade jurídica de forma simples, rápida e segura. Mobilidade, agilidade e menos papel no seu dia a dia.
          </article>
        </FeatureCard>
      </div>
    </Section>
  );
}

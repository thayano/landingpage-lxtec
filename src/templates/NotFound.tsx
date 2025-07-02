import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Section } from '@/features/landing/Section';

export const NotFound = (props: {
  title: string;
}) => {
  return (
    <Section
      subtitle="Algo deu errado!"
      title={props.title}
      description="O produto que voce esta buscando não foi encontado."
    >
      <div className="flex items-center justify-center">
        <Button>
          <Link href="/home">
            Voltar para o inicio
          </Link>
        </Button>
      </div>
    </Section>
  );
};

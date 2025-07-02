import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { CTABanner } from '@/features/landing/CTABanner';
import { Section } from '@/features/landing/Section';
import linkedin from '@/public/linkedin_icon.png';

export const CTA = () => {
  return (
    <Section>
      <CTABanner
        title="Cada desafio tem a solução certa. Vamos encontrar a sua?"
        description=""
        buttons={(
          <div className="flex flex-col items-center justify-center gap-10 text-white">
            <Button
              className="bg-blue-500 hover:bg-blue-600"
            >
              <Link
                href="https://github.com/ixartz/SaaS-Boilerplate"
                className=""
              >
              </Link>
              Entre em contato
            </Button>
            <h3 className="">
              Siga nossas redes sociais
            </h3>
            <Image alt="" src={linkedin} />
          </div>
        )}
      />
    </Section>
  );
};

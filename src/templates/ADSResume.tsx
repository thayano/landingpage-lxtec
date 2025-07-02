import { buttonVariants } from '@/components/ui/buttonVariants';
import { ADSBanner } from '@/features/landing/ADSBanner';
import { Section } from '@/features/landing/Section';

export const ADSResume = () => {
  return (
    <Section>
      <ADSBanner
        title="Ficou com alguma duvida?"
        description="Se precisar de mais alguma informação, é só dar um alô!"
        buttons={(
          <a
            className={buttonVariants({ variant: 'outline', size: 'lg' })}
            href="/home"
          >
            Fale Conosco
          </a>
        )}
      />
    </Section>
  );
};

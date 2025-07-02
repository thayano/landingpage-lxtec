import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { buttonVariants } from '@/components/ui/buttonVariants';
import { CenteredHero } from '@/features/landing/CenteredHero';
import { Section } from '@/features/landing/Section';
import hero_image from '@/public/hero.jpg';

import { Navbar } from './Navbar';

export const Hero = () => {
  const t = useTranslations('Hero');

  return (
    <div>
      <Image
        alt="saassa"
        src={hero_image}
        quality={100}
        priority
        fill
        sizes="100vw"
        style={{
          objectFit: 'cover',
        }}
      />
      <div className="absolute min-h-screen w-full bg-black opacity-35"></div>
      <Navbar className="relative text-white" />
      <Section className=" relative min-h-screen py-36">
        <CenteredHero
          title={t.rich('title', {
            important: chunks => (
              <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                {chunks}
              </span>
            ),
          })}
          description={t('description')}
          buttons={(
            <a
              className={buttonVariants({ variant: 'outline', size: 'lg' })}
              href="https://github.com/ixartz/SaaS-Boilerplate"
            >
              {/* <GitHubLogoIcon className="mr-2 size-5" /> */}
              {t('secondary_button')}
            </a>
          )}
        />
      </Section>

    </div>
  );
};

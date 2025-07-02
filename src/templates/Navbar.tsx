import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { LocaleSwitcher } from '@/components/LocaleSwitcher';
import { CenteredMenu } from '@/features/landing/CenteredMenu';
import { Section } from '@/features/landing/Section';
import { cn } from '@/utils/Helpers';

import { Logo } from './Logo';

export const Navbar = (props: {
  className?: string;
}) => {
  const t = useTranslations('Navbar');

  return (
    <Section className={cn('px-3 py-6', props.className)}>
      <CenteredMenu
        logo={<Logo isTextHidden />}
        rightMenu={(
          <>
            <li data-fade>
              <LocaleSwitcher />
            </li>
            <li className="ml-1 mr-2.5" data-fade>
              <Link href="/sign-in">{t('contact')}</Link>
            </li>
          </>
        )}
      >
        <li>
          <Link href="/">{t('home')}</Link>
        </li>

        <li>
          <Link href="/servicos">{t('services')}</Link>
        </li>

        <li>
          <Link href="/produtos">{t('systems')}</Link>
        </li>

        <li>
          <Link href="/sign-up">{t('service')}</Link>
        </li>
      </CenteredMenu>
    </Section>
  );
};

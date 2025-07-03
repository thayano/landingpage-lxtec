/* eslint-disable react-dom/no-unsafe-target-blank */
import Image from 'next/image';

import { LogoCloud } from '@/features/landing/LogoCloud';

export const SponsorLogos = () => (
  <LogoCloud text="Nossos Parceiros">
    <a
      href="https://clerk.com?utm_source=github&utm_medium=sponsorship&utm_campaign=nextjs-boilerplate"
      target="_blank"
      rel="noopener"
    >
      <Image
        src="/pmcorumba.png"
        alt="Clerk logo dark"
        className="dark:hidden"
        width="128"
        height="37"
      />
      <Image
        src="/pmcorumba.png"
        alt="Clerk logo light"
        className="hidden dark:block"
        width="128"
        height="37"
      />
    </a>

    <a
      href="https://l.crowdin.com/next-js"
      target="_blank"
      rel="noopener"
    >
      <Image
        src="/autobel.png"
        alt="Crowdin logo dark"
        className="dark:hidden"
        width="128"
        height="26"
      />
      <Image
        src="/autobel.png"
        alt="Crowdin logo light"
        className="hidden dark:block"
        width="128"
        height="26"
      />
    </a>

    <a
      href="https://sentry.io/for/nextjs/?utm_source=github&utm_medium=paid-community&utm_campaign=general-fy25q1-nextjs&utm_content=github-banner-nextjsboilerplate-logo"
      target="_blank"
      rel="noopener"
    >
      <Image
        src="/anita.png"
        alt="Sentry logo dark"
        className="dark:hidden"
        width="128"
        height="38"
      />
      <Image
        src="/anita.png"
        alt="Sentry logo light"
        className="hidden dark:block"
        width="128"
        height="38"
      />
    </a>

    <a
      href="https://launch.arcjet.com/Q6eLbRE"
      target="_blank"
      rel="noopener"
    >
      <Image
        src="/9oficio.png"
        alt="Arcjet logo dark"
        className="dark:hidden"
        width="128"
        height="38"
      />
      <Image
        src="/9oficio.png"
        alt="Arcjet logo light"
        className="hidden dark:block"
        width="128"
        height="38"
      />
    </a>

    <a
      href="https://nextjs-boilerplate.com/pro-saas-starter-kit"
      target="_blank"
      rel="noopener"
    >
      <Image
        src="/santa_casa.png"
        alt="Nextjs SaaS Boilerplate"
        width="128"
        height="30"
      />
    </a>
  </LogoCloud>
);

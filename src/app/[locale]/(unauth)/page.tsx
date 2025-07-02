import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import { ADS } from '@/templates/ADS';
import { CEO } from '@/templates/CEO';
import { Features } from '@/templates/Features';
import { FeaturesServices } from '@/templates/FeaturesServices';
import { Footer } from '@/templates/Footer';
import { Hero } from '@/templates/Hero';
import { RepresentationProgram } from '@/templates/RepresentationProgram';
import { Sponsors } from '@/templates/Sponsors';
import { Vision } from '@/templates/Vision';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Index',
  });

  return {
    title: 'Lxtec Informática',
    description: t('meta_description'),
  };
}

const IndexPage = (props: { params: { locale: string } }) => {
  unstable_setRequestLocale(props.params.locale);

  return (
    <>
      <Hero />
      <Features />
      <FeaturesServices />
      <ADS />
      <RepresentationProgram />
      <Sponsors />
      <CEO />
      <Vision />
      <Footer />
    </>
  );
};

export default IndexPage;

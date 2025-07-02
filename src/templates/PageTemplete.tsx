import type { StaticImageData } from 'next/image';
import type React from 'react';

import { SectionSideBySide } from '@/features/landing/SectionSideBySide';

type orderType = 'order-1' | '';
export const PageTemplate = (props: {
  image: StaticImageData;
  children: React.ReactNode;
  order: orderType;
}) => {
  return (
    <SectionSideBySide image={props.image} order={props.order}>
      {props.children}
    </SectionSideBySide>
  );
};

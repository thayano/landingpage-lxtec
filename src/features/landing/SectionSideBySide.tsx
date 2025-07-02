import Image, { type StaticImageData } from 'next/image';

import { cn } from '@/utils/Helpers';

type order = 'order-1' | '';

export const SectionSideBySide = (props: {
  children?: React.ReactNode;
  title?: string;
  description?: string;
  image: StaticImageData;
  order?: order;
}) => {
  return (
    <div className="px-3 py-16">
      <div className="mx-auto max-w-screen-lg">
        <main className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div className={cn('flex', props.order ? `${props.order} justify-end` : '')}>
            <Image alt="" width={350} src={props.image}></Image>
          </div>
          <div>
            {props.title && (
              <div className="mt-1 text-3xl font-bold">{props.title}</div>
            )}
            {props.description && (
              <div className="mt-2 text-lg text-muted-foreground">
                {props.description}
              </div>
            )}
            {props.children && (props.children)}
          </div>
        </main>
      </div>
    </div>
  );
};

import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { colorsCard, type FeatureCardProps } from '@/types/Data';
import { cn } from '@/utils/Helpers';

export const FeatureCard = (props: FeatureCardProps) => {
  const colorClasses = props.color ? colorsCard[props.color] : { text: '', btn: '', border: '' };

  return (
    <div className="flex flex-col justify-between rounded-2xl border border-border bg-card">
      <div className="p-5">
        {props.subtitle && (
          <div className={cn('uppercase font-semibold', colorClasses?.text)}>
            {props.subtitle}
          </div>
        )}

        <div className={cn('mt-2 h-48 py-8 text-3xl font-bold uppercase', colorClasses?.text)}>
          {props.title}
        </div>

        <div className="mt-2 text-muted-foreground">{props.children}</div>
      </div>

      <Button
        className={cn(
          'mt-8 w-full rounded-b-2xl rounded-t-none text-white',
          colorClasses?.btn || 'bg-gray-700 hover:bg-gray-800',
        )}
      >
        <Link href={props.link ?? '/home'} className="block size-full">
          Saiba Mais
        </Link>
      </Button>
    </div>
  );
};

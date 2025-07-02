import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { cn } from '@/utils/Helpers';

type ColorVariants = {
  btn: string;
  text: string;
};

const colorsCard: Record<string, ColorVariants> = {
  red: {
    btn: 'bg-red-400 hover:bg-red-500',
    text: 'text-red-400',
  },
  blue: {
    btn: 'bg-blue-400 hover:bg-blue-500',
    text: 'text-blue-400',
  },
  rose: {
    btn: 'bg-rose-400 hover:bg-rose-500',
    text: 'text-rose-400',
  },
  orange: {
    btn: 'bg-orange-400 hover:bg-orange-500',
    text: 'text-orange-400',
  },
  cyan: {
    btn: 'bg-cyan-400 hover:bg-cyan-500',
    text: 'text-cyan-400',
  },
  darkBlue: {
    btn: 'bg-blue-800 hover:bg-blue-900',
    text: 'text-blue-800',
  },
};

type FeatureCardProps = {
  icon?: React.ReactNode;
  title: string;
  subtitle?: string;
  color: keyof typeof colorsCard;
  link?: string;
  children: React.ReactNode;
};

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

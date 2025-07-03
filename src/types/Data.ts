export const colorsCard: Record<string, ColorVariants> = {
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

type ColorVariants = {
  btn: string;
  text: string;
};

export type FeatureCardTypes = {
  title: string;
  description: string;
  color: keyof typeof colorsCard;
  subtitle: string;
  link: string;
  priority: boolean;
};

export type FeatureCardProps = {
  icon?: React.ReactNode;
  title: string;
  subtitle?: string;
  color: keyof typeof colorsCard;
  link?: string;
  children: React.ReactNode;
};

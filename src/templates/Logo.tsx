import Image from 'next/image';

import logo from '@/public/logo.png';
import { AppConfig } from '@/utils/AppConfig';

export const Logo = (props: {
  isTextHidden?: boolean;
}) => (
  <div className="flex w-32 items-center text-xl font-semibold">
    <Image alt="logo" src={logo} />
    {!props.isTextHidden && AppConfig.name}
  </div>
);

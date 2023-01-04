import Link from 'next/link';
import { routes } from 'routes';
import LogoSite from '../../public/image/logo.png';
import Image from 'next/image';

export const Logo = () => {
  return (
    <Link href={routes.HOME} aria-label="site logo">
      <Image
        src={LogoSite}
        alt="Логотип"
        className="h-11 w-16 xl:h-[58px] xl:w-[86px]"
      />
    </Link>
  );
};

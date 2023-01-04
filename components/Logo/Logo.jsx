import Link from 'next/link';
import { routes } from 'routes';
import LogoSite from '../../public/image/Logo.svg';

export const Logo = () => {
  return (
    <Link href={routes.HOME} aria-label="site logo">
      <LogoSite className="h-11 w-16 xl:h-[58px] xl:w-[86px]" />
    </Link>
  );
};

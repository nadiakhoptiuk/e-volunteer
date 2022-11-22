import Link from 'next/link';
import { routes } from 'routes';
import LogoSite from '../../public/image/Logo.svg';

export const Logo = () => {
  return (
    <Link href={routes.HOME} aria-label="site logo">
      <LogoSite className="w-[64px]" />
    </Link>
  );
};

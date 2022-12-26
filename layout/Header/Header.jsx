import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { useLocalChange } from 'hooks/useLocalChange';
import { useTranslation } from 'next-i18next';
import { useMediaQuery } from 'react-responsive';
import { Container, Logo, Navbar } from '@/components';

const MobileMenu = dynamic(() =>
  import('../../components/MobileMenu/MobileMenu.jsx').then(
    mod => mod.MobileMenu,
  ),
);

export const Header = ({ data }) => {
  const [router, handleLocaleChange] = useLocalChange();
  const { t } = useTranslation('common');
  const [showNavbar, setNavbar] = useState(null);
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });

  useEffect(() => {
    setNavbar(isTablet);
  }, [isTablet]);

  return (
    <header className="bg-blueDark pt-[12px] pb-[12px]">
      <Container className="flex items-center justify-between">
        <Logo />

        {showNavbar ? (
          <Navbar
            linkValue={t('help')}
            locale={router.locale}
            handleLocaleChange={handleLocaleChange}
            articles={data}
          />
        ) : (
          <MobileMenu slugs={data} />
        )}
      </Container>
    </header>
  );
};

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

export const Header = ({ data, onClick }) => {
  const [router, handleLocaleChange] = useLocalChange();
  const { t } = useTranslation('common');
  const [showNavbar, setNavbar] = useState(null);
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });

  useEffect(() => {
    setNavbar(isTablet);
  }, [isTablet]);

  return (
    <header className="bg-blueAccent pt-[19px] pb-[19px]">
      <Container className="flex items-center justify-between">
        <Logo />

        {showNavbar ? (
          <Navbar
            linkValue={t('help')}
            locale={router.locale}
            handleLocaleChange={handleLocaleChange}
            articles={data}
            onClick={onClick}
          />
        ) : (
          <MobileMenu slugs={data} onClick={onClick} />
        )}
      </Container>
    </header>
  );
};

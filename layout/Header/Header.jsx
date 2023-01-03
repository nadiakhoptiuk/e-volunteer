import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { useLocalChange } from 'hooks/useLocalChange';
import { useTranslation } from 'next-i18next';
import { useMediaQuery } from 'react-responsive';
import { Container, Logo, Navbar } from '@/components';
import PropTypes from 'prop-types';
import * as s from './Header.module.css';

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

  const handleClick = evt => {
    evt.target.blur();
  };

  return (
    <header className={s.header}>
      <Container className={s.containerWrap}>
        <Logo />

        {showNavbar ? (
          <Navbar
            linkValue={t('help')}
            locale={router.locale}
            handleLocaleChange={handleLocaleChange}
            articles={data}
            onClick={evt => {
              onClick();
              handleClick(evt);
            }}
          />
        ) : (
          <MobileMenu
            slugs={data}
            onClick={evt => {
              onClick();
              handleClick(evt);
            }}
          />
        )}
      </Container>
    </header>
  );
};

Header.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClick: PropTypes.func.isRequired,
};

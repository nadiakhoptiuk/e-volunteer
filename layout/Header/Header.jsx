import { Container, Logo, Navbar } from '@/components';
import { useLocalChange } from 'hooks/useLocalChange';
import { useTranslation } from 'next-i18next';

export const Header = () => {
  const [router, handleLocaleChange] = useLocalChange();
  const { t } = useTranslation('common');

  return (
    <header className="bg-blueDark pt-[12px] pb-[12px]">
      <Container className="flex items-center justify-between">
        <Logo />

        <Navbar
          linkValue={t('help')}
          locale={router.locale}
          handleLocaleChange={handleLocaleChange}
        />
      </Container>
    </header>
  );
};

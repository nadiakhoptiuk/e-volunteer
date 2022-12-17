import { Container, Logo, Navbar } from '@/components';
import { useLocalChange } from 'hooks/useLocalChange';

export const Header = () => {
  const [router, handleLocaleChange] = useLocalChange();

  return (
    <header>
      <Container>
        <Logo />

        <Navbar
          locale={router.locale}
          handleLocaleChange={handleLocaleChange}
        />
      </Container>
    </header>
  );
};

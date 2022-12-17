import { useRouter } from 'next/router';

export const useLocalChange = () => {
  const router = useRouter();

  const handleLocaleChange = ({ id }) => {
    router.push(router.route, router.asPath, {
      locale: id,
    });
  };

  return [router, handleLocaleChange];
};

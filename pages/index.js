import Centers from 'components/Centers/Centers';
import Help from 'components/Help/Help';
import { Form } from '@/components';
import { Hero, Categories } from 'views';
import { datoCmsRequest } from '@/lib/datoCmsRequests';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getStaticProps = async ({ locale }) => {
  const variables = { locale: locale };

  const data = await datoCmsRequest({ variables });

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      articles: data.allCategories,
      centers: data.center,
      banner: data.banner.content,
      help: data.help,
      footer: data.footer,
    },
  };
};

const Home = ({ articles, centers, help }) => {
  //Необхідно створити запис hero в адмінпанелі структурою як вказано нижче
  const hero = {
    text: 'Электронный волонтёр для помощи беженцам',
    title: 'E-VOLUNTEER',
  };
  return (
    <>
      <Hero hero={hero} />

      <Help title="Ma tahan aidata" button="Vali" EST />

      <Categories articles={articles} />

      <Help help={help} />

      <Centers centers={centers} />

      <Form />
    </>
  );
};

export default Home;

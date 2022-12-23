// import Categories from 'components/Categories/Categories';
// import Centers from 'components/Centers/Centers';
import { Hero } from 'views';
import { Form } from '@/components';
// import { datoCmsRequest } from '@/lib/datoCmsRequests';
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

// export const getStaticProps = async ({ locale }) => {
//   const variables = { locale: locale };

//   const data = await datoCmsRequest({ variables });

//   if (!data) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: {
//       ...(await serverSideTranslations(locale, ['common'])),
//       articles: data.allCategories,
//       centers: data.center,
//       banner: data.banner.content,
//       help: data.help,
//       footer: data.footer,
//     },
//   };
// };

const Home = ({ articles, centers }) => {
  return (
    <>
      <Hero />

      {/* <Categories articles={articles} />

      <Centers centers={centers} /> */}

      <Form />
    </>
  );
};

export default Home;

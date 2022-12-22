// import { datoCmsSimpleRequest, routeRequest } from '@/lib/routeRequest';
// import { categoryRequest } from '@/lib/categoryRequest';
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { routeRequest } from '@/lib/routeRequest';

const CategoryPage = ({ route }) => {
  // const router = useRouter();
  // console.log(router);
  // console.log(article);

  // const { category } = router.query;

  return <p>category {route}</p>;
};

export default CategoryPage;

export async function getStaticPaths() {
  const data = await routeRequest();

  if (!data) {
    return {
      notFound: true,
    };
  }

  const paths = data.allCategories.map(el => ({
    params: { category: el.route },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ locale, params }) {
  const { category } = params;
  console.log(category);
  console.log(locale);

  // const variables = { locale: locale, route: category.toString() };

  // const data = await categoryRequest({ variables });

  // console.log(data);

  // if (!data) {
  //   return {
  //     notFound: true,
  //   };
  // }

  return {
    props: {
      // ...(await serverSideTranslations(locale, ['common'])),
      route: category,
    },
  };
}

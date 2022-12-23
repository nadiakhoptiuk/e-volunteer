import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { categoryRequest, routeRequest } from '@/lib/datoCmsRequests';
// import { useRouter } from 'next/router';

const CategoryPage = props => {
  // const router = useRouter();
  // console.log(router);
  // console.log(article);
  const { category } = props;

  // const { category } = router.query;

  return <p>{category && category.route} </p>;
};

export default CategoryPage;

export async function getStaticPaths() {
  // const variables = { locale: locale };

  const data = await routeRequest();

  if (!data) {
    return {
      notFound: true,
    };
  }

  const paths = data.allCategories.flatMap(el => {
    return el._allRouteLocales.map(({ value }) => ({
      params: { category: value },
    }));
  });

  return { paths, fallback: true };
}

export async function getStaticProps({ locale, params }) {
  const { category } = params;

  const variables = { locale: locale };

  const data = await categoryRequest({ variables });

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      category: data.allCategories.find(el => el.route === category),
      banner: data.banner.content,
      help: data.help,
      footer: data.footer,
    },
  };
}

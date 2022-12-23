import ReactMarkdown from 'react-markdown';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { categoryRequest, routeRequest } from '@/lib/datoCmsRequests';
import { Container } from '@/components';
import { routes } from 'routes';
import Link from 'next/link';

const CategoryPage = props => {
  const { category } = props;

  console.log(category);

  return (
    <>
      {category && (
        <section>
          <Container>
            <div className="flex">
              <Link href={routes.HOME} aria-label="button back home">
                Back
              </Link>

              <h2 className="ml-20">{category.title}</h2>
            </div>

            <ReactMarkdown>{category.cardInfo[0].contentAtPage}</ReactMarkdown>
          </Container>
        </section>
      )}
    </>
  );
};

export default CategoryPage;

export async function getStaticPaths() {
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

  const variables = { locale: locale, category: category };

  const data = await categoryRequest({ variables });

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      category: data.allCategories[0],
      banner: data.banner.content,
      help: data.help,
      footer: data.footer,
    },
  };
}

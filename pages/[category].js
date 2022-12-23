import ReactMarkdown from 'react-markdown';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { categoryRequest, routeRequest } from '@/lib/datoCmsRequests';
import { Container } from '@/components';
import { routes } from 'routes';
import Link from 'next/link';
import { ArrowLongLeftIcon } from '@heroicons/react/20/solid';

const CategoryPage = props => {
  const { category } = props;

  console.log(category);

  return (
    <>
      {category && (
        <section className="pt-[48px] pb-[103px] md:pt-[101px] md:pb-20 xl:pt-10">
          <Container className="xl:w-[1104px]">
            <div className="mb-[132px] flex items-center md:mb-[102px] xl:mb-[107px]">
              <Link
                href={routes.HOME}
                aria-label="button back home"
                className="flex h-[50px] w-[50px] items-center justify-center text-button"
              >
                <ArrowLongLeftIcon className="h-[34px] w-[34px]" />
              </Link>

              <h2 className="ml-10 text-big font-medium text-button md:ml-[65px] md:text-[40px] md:leading-[46px] xl:ml-[67px]">
                {category.title}
              </h2>
            </div>

            <div className="xl:w-630px ml-[14px] w-[366px] md:ml-[20px] md:w-[560px]">
              <ReactMarkdown>
                {category.cardInfo[0].contentAtPage}
              </ReactMarkdown>
            </div>
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

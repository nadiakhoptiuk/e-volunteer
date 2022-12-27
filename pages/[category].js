import ReactMarkdown from 'react-markdown';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { categoryRequest, routeRequest } from '@/lib/datoCmsRequests';
import { Container } from '@/components';
import { routes } from 'routes';
import Link from 'next/link';
import { ArrowLongLeftIcon } from '@heroicons/react/20/solid';

// import img from '../public/image/flower-category.svg'

const CategoryPage = props => {
  const { category } = props;

  return (
    <>
      {category && (
        <section className="pt-[48px] pb-[103px] md:pt-[100px] md:pb-20 xl:pt-10">
          <Container className="">
            <div className="mb-[132px] flex items-center md:mb-[102px] xl:mb-[107px]">
              <Link
                href={routes.HOME}
                aria-label="button back home"
                className="flex h-[50px] w-[50px] items-center justify-center text-blueAccent"
              >
                <ArrowLongLeftIcon className="h-[34px] w-[34px]" />
              </Link>

              <h1 className="ml-10 text-big font-medium text-blueAccent md:ml-[65px] md:text-[40px] md:leading-[46px] xl:ml-[67px]">
                {category.title}
              </h1>
            </div>

            <div className="contentWrapper mx-auto min-h-[532px] bg-[url('/image/flower-category.svg')] bg-right-top bg-no-repeat xl:w-[1032px]">
              <div className="main-prose desktop-prose prose w-[366px] md:w-[560px] xl:w-[612px] xl:pl-[58px]">
                <ReactMarkdown>
                  {category.cardInfo[0].contentAtPage}
                </ReactMarkdown>
              </div>
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
    return el._allRouteLocales.map(({ value, locale }) => ({
      params: { category: value },
      locale: locale,
    }));
  });

  return { paths, fallback: true };
}

export async function getStaticProps({ locale, params: { category } }) {
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
      articles: data.allCategories,
      category: data.allCategories.find(el => el.route === category),
      banner: data.banner.content,
      help: data.help,
      footer: data.footer,
    },
  };
}

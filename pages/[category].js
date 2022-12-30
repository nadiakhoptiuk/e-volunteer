import Head from 'next/head';
import ReactMarkdown from 'react-markdown';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { categoryRequest, routeRequest } from '@/lib/datoCmsRequests';
import { Container } from '@/components';
import { routes } from 'routes';
import Link from 'next/link';
import { ArrowLongLeftIcon } from '@heroicons/react/20/solid';

const CategoryPage = props => {
  const { category } = props;

  return (
    <>
      <Head>
        <title>{category && category.title}</title>
      </Head>

      {category && (
        <section className="relative mx-auto pt-[48px] pb-20 after:absolute after:top-[126px] after:h-1 after:w-full after:shadow-help after:content-[''] sm:after:top-[104px] md:pt-10 md:pb-20 md:after:top-[126px] xl:w-[1032px] xl:bg-[url('/image/flower-category.svg')] xl:bg-[length:60vw_60vh] xl:bg-fixed xl:bg-[90%_30%] xl:bg-no-repeat xl:after:top-[106px]">
          <Container className="">
            <div className="mb-[112px] flex items-center md:mb-[130px] xl:mb-[107px]">
              <Link
                href={routes.HOME}
                aria-label="button back home"
                className="flex h-[50px] w-[50px] items-center justify-center text-blueAccent"
              >
                <ArrowLongLeftIcon className="h-[34px] w-[34px]" />
              </Link>

              <h1 className="text-big font-medium text-blueAccent xs:ml-[48px] md:ml-[65px] md:text-[40px] md:leading-[46px] xl:ml-[59px]">
                {category.title}
              </h1>
            </div>

            <div className="contentWrapper min-h-[420px] xs:ml-auto xs:w-[calc(100%-42px)] sm:mx-auto sm:w-[calc(100%-116px)] md:mr-auto md:ml-0 xl:mx-auto ">
              <div className="main-prose small-mobile-prose big-mobile-prose tablet-prose desktop-prose prose-heading:first:mt-0 prose shrink-0 break-words xs:w-full sm:w-full md:w-[517px] md:pl-[58px] xl:w-[612px]">
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

// xl:bg-[url('/image/flower-category.svg')];

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
      ...(await serverSideTranslations(locale, ['common', 'modal'])),
      articles: data.allCategories,
      category: data.allCategories.find(el => el.route === category),
      banner: data.banner.content,
      help: data.help,
      footer: data.footer,
    },
  };
}

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
        <section className="relative mx-auto pt-[48px] pb-20 after:absolute after:top-[126px] after:h-1 after:w-full after:shadow-help after:content-['']  md:pt-10 md:pb-20 md:after:top-[126px]  xl:after:top-[106px]">
          <Container>
            <div className="mb-[112px] flex items-center md:mb-[130px] xl:mb-[107px]">
              <Link
                href={routes.HOME}
                aria-label="button back home"
                className="flex h-[50px] w-[50px] items-center justify-center text-blueAccent"
              >
                <ArrowLongLeftIcon className="h-[34px] w-[34px]" />
              </Link>

              <h1 className="ml-[48px] text-big font-medium text-blueAccent md:ml-[65px] md:text-[40px] md:leading-[46px] xl:ml-[59px]">
                {category.title}
              </h1>
            </div>

            <div className="contentWrapper ml-auto flex min-h-[420px] w-[calc(100%-42px)] sm:mx-auto sm:w-[calc(100%-116px)] md:mr-auto md:ml-0 xl:mx-auto xl:w-[1032px]">
              <div className="main-prose small-mobile-prose big-mobile-prose tablet-prose desktop-prose prose-heading:first:mt-0 prose shrink-0 basis-full break-words sm:w-full md:w-[517px] md:pl-[58px] xl:w-[612px]">
                <ReactMarkdown>
                  {category.cardInfo[0].contentAtPage}
                </ReactMarkdown>
              </div>

              <div className="min-h-full w-full grow-0">
                <div className="w-full xl:sticky xl:top-[100px] xl:h-[420px] xl:bg-[url('/image/flower-category.svg')] xl:bg-right-top xl:bg-no-repeat"></div>
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

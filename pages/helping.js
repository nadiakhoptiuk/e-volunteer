import Head from 'next/head';
import Link from 'next/link';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ReactMarkdown from 'react-markdown';
import { datoCmsRequest } from '@/lib/datoCmsRequests';
import { routes } from 'routes';
import { Container } from '@/components';
import { ArrowLongLeftIcon } from '@heroicons/react/20/solid';

const Helping = props => {
  const { help } = props;

  return (
    <div>
      <Head>
        <title>{help && help.title}</title>
      </Head>
      {help && (
        <section className=" relative pt-[48px] pb-20  after:absolute after:top-[126px] after:h-1 after:w-full after:shadow-help after:content-[''] sm:after:top-[104px] md:pt-10 md:pb-20 md:after:top-[126px] xl:after:top-[106px]">
          <Container>
            <div className="mb-[132px] flex items-center  md:mb-[122px] xl:mb-[107px]">
              <Link
                href={routes.HOME}
                aria-label="button back home"
                className="flex h-[50px] w-[50px] items-center justify-center text-blueAccent"
              >
                <ArrowLongLeftIcon className="h-[34px] w-[34px]" />
              </Link>
              <h1 className=" ml-12 text-big font-medium text-blueAccent  md:ml-[72px]  md:text-[40px] md:leading-[46px] xl:ml-[75px]">
                {help.title}
              </h1>
            </div>
            <div className="contentWrapper flex justify-between bg-right-top bg-no-repeat xs:ml-auto xs:w-[calc(100%_-_42px)] sm:mx-auto sm:w-[calc(100%-116px)] md:mr-auto md:ml-0 xl:mx-auto  xl:w-[1130px] xl:bg-[url('/image/flower-helping.svg')]">
              <div className="main-prose  small-mobile-prose big-mobile-prose tablet-prose desktop-prose prose-heading:first:mt-0 prose shrink-0 break-words xs:w-full sm:w-full md:w-[517px] md:pl-[58px] xl:w-[612px]">
                <ReactMarkdown>{help && help.content}</ReactMarkdown>
              </div>
            </div>
          </Container>
        </section>
      )}
    </div>
  );
};

export default Helping;

export async function getStaticProps({ locale }) {
  const variables = { locale: locale };

  const data = await datoCmsRequest({ variables });

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'modal'])),
      articles: data.allCategories,
      banner: data.banner.content,
      help: data.help,
      footer: data.footer,
    },
  };
}

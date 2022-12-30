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
    // <div>{help && <ReactMarkdown>{help.content}</ReactMarkdown>}</div>
    <div>
      <Head>
        <title>{help && help.title}</title>
      </Head>
      {help && (
        <section className="pt-[48px] pb-[103px] md:pt-10 md:pb-20">
          <Container>
            <div className="mb-[132px] flex items-center md:mb-[122px] xl:mb-[107px]">
              <Link
                href={routes.HOME}
                aria-label="button back home"
                className="flex h-[50px] w-[50px] items-center justify-center text-blueAccent"
              >
                <ArrowLongLeftIcon className="h-[34px] w-[34px]" />
              </Link>
              <h1 className=" ml-12 text-big font-medium text-blueAccent md:ml-[72px]  md:text-[40px] md:leading-[46px] xl:ml-[75px]">
                {help && help.title}
              </h1>
            </div>
            <div className="main-prose desktop-prose tablet-prose prose w-[366px] md:w-[460px] md:pl-[58px] xl:w-[612px]">
              <ReactMarkdown>{help && help.content}</ReactMarkdown>
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

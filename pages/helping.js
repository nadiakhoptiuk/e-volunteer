import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { datoCmsRequest } from '@/lib/datoCmsRequests';
import ReactMarkdown from 'react-markdown';

const Helping = props => {
  const { help } = props;

  return (
    // <div>{help && <ReactMarkdown>{help.content}</ReactMarkdown>}</div>
    <div>
      <Head>
        <title>{help && help.title}</title>
      </Head>
      <h1>{help && help.title}</h1>
      <ReactMarkdown>{help && help.content}</ReactMarkdown>
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

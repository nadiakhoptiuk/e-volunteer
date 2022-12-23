import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { datoCmsRequest } from '@/lib/datoCmsRequests';
import ReactMarkdown from 'react-markdown';

const Helping = props => {
  const { help } = props;
  console.log(help);
  //   return <h2>Helping Page</h2>;
  return (
    // <div>{help && <ReactMarkdown>{help.content}</ReactMarkdown>}</div>
    <div>
      <ReactMarkdown>{help && help.content}</ReactMarkdown>
    </div>
  );
};

export default Helping;

export async function getStaticProps({ locale }) {
  //   const { help } = params;
  // console.log(category);
  // console.log(locale);

  const variables = { locale: locale };

  const data = await datoCmsRequest({ variables });

  // console.log(data);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      //   category: data.allCategories.find(el => el.route === help),
      banner: data.banner.content,
      help: data.help,
      footer: data.footer,
    },
  };
}

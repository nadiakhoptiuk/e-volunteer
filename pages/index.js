import Head from 'next/head';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
import { Hero, Help } from 'views';
import { datoCmsRequest } from '@/lib/datoCmsRequests';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const DynamicCategories = dynamic(() =>
  import('../views/Categories/Categories').then(mod => mod.Categories),
);
const DynamicCenters = dynamic(() =>
  import('../views/Centers/Centers').then(mod => mod.Centers),
);
const DynamicHelp = dynamic(() =>
  import('../views/Help/Help').then(mod => mod.Help),
);
const DynamicForm = dynamic(() =>
  import('../components/Form/Form').then(mod => mod.Form),
);

const Home = props => {
  const { articles, centers, help, modal } = props;

  return (
    <>
      <Head>
        <title>E-VOLUNTEER</title>
      </Head>
      <Hero />

      <Help
        title="Ma tahan aidata"
        button="Vali"
        EST
        estModal={modal.estModalOpen}
        openModal={modal.openModal}
      />

      <DynamicCategories
        articles={articles.sort((a, b) => a.range - b.range)}
      />

      <DynamicHelp help={help} />

      <DynamicCenters centers={centers} />

      <DynamicForm />
    </>
  );
};

export default Home;

export const getStaticProps = async ({ locale }) => {
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
      centers: data.center,
      banner: data.banner.content,
      help: data.help,
      footer: data.footer,
    },
  };
};

Home.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      cardInfo: PropTypes.arrayOf(
        PropTypes.shape({
          alt: PropTypes.string.isRequired,
          contentAtPage: PropTypes.string.isRequired,
          description: PropTypes.string.isRequired,
          id: PropTypes.string.isRequired,
          image: PropTypes.object.isRequired,
        }).isRequired,
      ).isRequired,
      range: PropTypes.number.isRequired,
      route: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
  banner: PropTypes.string.isRequired,
  centers: PropTypes.shape({
    titleAtPage: PropTypes.string.isRequired,
    receptionCenter: PropTypes.arrayOf(
      PropTypes.shape({
        address: PropTypes.string.isRequired,
        centerTitle: PropTypes.string,
        city: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        phoneNumber: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
  }).isRequired,
  footer: PropTypes.shape({
    additionalInfo: PropTypes.string,
    additionalPhone: PropTypes.string,
    connectText: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    telegram: PropTypes.string.isRequired,
  }).isRequired,
  help: PropTypes.shape({
    content: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  modal: PropTypes.shape({
    closeModal: PropTypes.func.isRequired,
    estModalOpen: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
    openModal: PropTypes.func.isRequired,
  }).isRequired,
};

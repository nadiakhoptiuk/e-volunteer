import PropTypes from 'prop-types';
import { Form } from '@/components';
import { Hero, Categories, Help, Centers } from 'views';
import { datoCmsRequest } from '@/lib/datoCmsRequests';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Home = props => {
  const { articles, centers, help, modal } = props;

  return (
    <>
      <Hero />

      <Help
        title="Ma tahan aidata"
        button="Vali"
        EST
        estModal={modal.estModalOpen}
        openModal={modal.openModal}
      />

      <Categories articles={articles.sort((a, b) => a.range - b.range)} />

      <Help help={help} />

      <Centers centers={centers} />

      <Form />
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
        centerTitle: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        phoneNumber: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
  }).isRequired,
  category: PropTypes.arrayOf(
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
  ),
  footer: PropTypes.shape({
    additionalInfo: PropTypes.string.isRequired,
    additionalPhone: PropTypes.string.isRequired,
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

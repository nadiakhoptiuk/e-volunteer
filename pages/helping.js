import Head from 'next/head';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ReactMarkdown from 'react-markdown';
import { datoCmsRequest } from '@/lib/datoCmsRequests';
import { routes } from 'routes';
import { Container } from '@/components';
import { ArrowLongLeftIcon } from '@heroicons/react/20/solid';
import * as s from 'styles/helping.module.css';

const Helping = props => {
  const { help } = props;

  return (
    <div>
      <Head>
        <title>{help && help.title}</title>
      </Head>

      {help && (
        <section className={s.section}>
          <Container>
            <div className={s.wrap}>
              <Link
                href={routes.HOME}
                aria-label="button back home"
                className={s.buttonBack}
              >
                <ArrowLongLeftIcon className="h-[34px] w-[34px]" />
              </Link>

              <h1 className={s.title}>{help.title}</h1>
            </div>

            <div className={s.contentWrapper}>
              <div className="main-prose  small-mobile-prose big-mobile-prose tablet-prose desktop-prose prose-heading:first:mt-0 xs:w-full prose shrink-0 break-words sm:w-full md:w-[517px] md:pl-[58px] xl:w-[612px]">
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

Helping.propTypes = {
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

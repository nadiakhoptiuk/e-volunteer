import Head from 'next/head';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { categoryRequest, routeRequest } from '@/lib/datoCmsRequests';
import { Container } from '@/components';
import { routes } from 'routes';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';
import { ArrowLongLeftIcon } from '@heroicons/react/20/solid';
import s from 'styles/[category].module.css';

const CategoryPage = props => {
  const { category } = props;
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });

  function LinkRenderer(props) {
    if (props.href.match('http')) {
      return (
        <a href={props.href} target="_blank" rel="nofollow noreferrer noopener">
          {props.children}
        </a>
      );
    }

    return <a href={props.href}>{props.children}</a>;
  }

  return (
    <>
      <Head>
        <title>{category && category.title}</title>
      </Head>

      {category && (
        <section className={s.section}>
          <Container>
            <div className={s.titleWrapper}>
              <Link
                href={routes.HOME}
                aria-label="button back home"
                className={s.linkBackHome}
              >
                <ArrowLongLeftIcon className={s.backHomeIcon} />
              </Link>

              <h1 className={s.pageTitle}>{category.title}</h1>
            </div>

            <div className={s.contentWrapper}>
              <div
                className={`${s.content} main-prose small-mobile-prose big-mobile-prose tablet-prose desktop-prose prose-heading:first:mt-0 prose`}
              >
                <ReactMarkdown components={{ a: LinkRenderer }}>
                  {category.cardInfo[0].contentAtPage}
                </ReactMarkdown>
              </div>

              {isDesktop && (
                <div className={s.flowerWrapper}>
                  <div className={s.flowerBox}></div>
                </div>
              )}
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
      ...(await serverSideTranslations(locale, ['common', 'modal'])),
      articles: data.allCategories,
      category: data.allCategories.find(el => el.route === category),
      banner: data.banner.content,
      help: data.help,
      footer: data.footer,
    },
  };
}

CategoryPage.propTypes = {
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

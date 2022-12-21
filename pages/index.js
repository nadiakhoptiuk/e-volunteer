import Banner from 'components/Banner/Banner';
import Categories from 'components/Categories/Categories';
import Centers from 'components/Centers/Centers';
import Hero from 'views/Hero/Hero';
import { gql } from 'graphql-request';
import { datoCmsRequest } from '@/lib/datocms';

const query = gql`
  query ($locale: SiteLocale) {
    banner {
      content
    }
    allCategories(locale: $locale) {
      title
      route
      range
      cardInfo {
        id
        description
        image {
          alt
          url
        }
      }
    }
    center(locale: $locale) {
      titleAtPage
      receptionCenter {
        city
        phoneNumber
        centerTitle
        address
        id
      }
    }
    footer(locale: $locale) {
      connectText
      additionalInfo {
        value
        links
        blocks
      }
    }
    help(locale: $locale) {
      route
      buttonText
      content {
        links
        blocks
        value
      }
    }
  }
`;

export const getStaticProps = async ({ locale }) => {
  const variables = { locale: locale };

  const data = await datoCmsRequest({ query, variables });

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      articles: data.allCategories,
      centers: data.center,
      banner: data.banner.content,
      help: data.help,
      footer: data.footer,
    },
  };
};

const Home = ({ articles, centers, banner }) => {
  return (
    <>
      <Banner banner={banner} />

      <Hero />

      <Categories articles={articles} />

      <Centers centers={centers} />
    </>
  );
};

export default Home;

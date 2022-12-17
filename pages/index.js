import Banner from 'components/Banner/Banner';
import Categories from 'components/Categories/Categories';
import Centers from 'components/Centers/Centers';
import { gql, GraphQLClient } from 'graphql-request';

const query = gql`
  query ($locale: SiteLocale) {
    banner {
      content
    }
    allArticles(locale: $locale) {
      cardInfo {
        slugRoute
        title
        id
        description
        image {
          alt
          url
        }
      }
    }
    center(locale: $locale) {
      receptionCenter {
        phoneNumber
        id
        city
        centerTitle
        address
      }
      titleAtPage
    }
  }
`;

export const getStaticProps = async ({ locale }) => {
  const variables = { locale: locale };

  const endpoint = 'https://graphql.datocms.com/';

  const client = new GraphQLClient(endpoint);

  const requestHeaders = {
    'Content-Type': 'application/json',
    authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
  };

  const data = await client.request(query, variables, requestHeaders);

  return {
    props: {
      articles: data.allArticles,
      centers: data.center,
      banner: data.banner.content,
    },
  };
};

const Home = ({ articles, centers, banner }) => {
  return (
    <section className="py-20">
      <div className="container">
        <Banner banner={banner} />

        <Categories articles={articles} />

        <Centers centers={centers} />
      </div>
    </section>
  );
};

export default Home;

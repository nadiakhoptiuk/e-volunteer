import { gql, GraphQLClient } from 'graphql-request';
import { useRouter } from 'next/router';

const Home = ({ allBannerHeaders }) => {
  const { locale } = useRouter();

  const bannerData = allBannerHeaders
    .flatMap(el => el._allBannerDescriptionLocales)
    .filter(el => el.locale === locale)
    .flatMap(el => el.value);

  return (
    <section className="py-20">
      <div className="container">
        <h1 className="mb-10 text-center text-3xl font-bold underline">
          Banner text
        </h1>

        <div>
          {bannerData.map(el => {
            return el.displayBanner && <h2 key={el.id}>{el.description}</h2>;
          })}
        </div>
      </div>
    </section>
  );
};

export default Home;

const query = gql`
  query {
    allBannerHeaders {
      _allBannerDescriptionLocales {
        locale
        value {
          id
          displayBanner
          description
        }
      }
    }
  }
`;

export const getStaticProps = async () => {
  const graphQLClient = new GraphQLClient(process.env.DATOCMS_API_URL, {
    headers: {
      'content-type': 'application/json',
      authorization: 'Bearer ' + process.env.DATOCMS_API_KEY,
    },
  });

  const data = await graphQLClient.request(query);

  return {
    props: data,
  };
};

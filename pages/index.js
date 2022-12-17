import { gql, GraphQLClient } from 'graphql-request';

const query = gql`
  query ($locale: SiteLocale) {
    allArticles(locale: $locale) {
      cardInfo {
        slugRoute
        title
        id
        description
        image {
          alt
        }
      }
    }
  }
`;

export const getStaticProps = async ({ locale }) => {
  // console.log(locale);
  const variables = { locale: locale };

  const endpoint = 'https://graphql.datocms.com/';

  const client = new GraphQLClient(endpoint);

  const requestHeaders = {
    'Content-Type': 'application/json',
    authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
  };

  const data = await client.request(query, variables, requestHeaders);
  // console.log(data);

  return {
    props: { articles: data.allArticles },
  };
};

const Home = ({ articles }) => {
  // console.log(articles);

  return (
    <section className="py-20">
      <div className="container">
        <h1 className="mb-10 text-center text-3xl font-bold underline">
          Banner text
        </h1>

        <div>
          {articles?.map(({ cardInfo }) => {
            // console.log(cardInfo[0]);

            const { id, description, slugRoute, title } = cardInfo[0];
            return (
              <div key={id} className="border-red mb-4 border-2">
                {/* <Image src={image} alt={image.alt} /> */}
                <h2>{title}</h2>
                <p>{description}</p>
                <span>route: {slugRoute}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Home;

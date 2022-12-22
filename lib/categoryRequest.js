import { GraphQLClient, gql } from 'graphql-request';

export function categoryRequest({ variables }) {
  const endpoint = 'https://graphql.datocms.com/';

  const query = gql`
    query ($locale: SiteLocale, $route: SlugFilter) {
      allCategories(locale: $locale, filter: { route: $route }) {
        title
        route
        cardInfo {
          description
        }
      }
    }
  `;

  const requestHeaders = {
    'Content-Type': 'application/json',
    authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
  };

  const client = new GraphQLClient(endpoint, { headers: requestHeaders });

  return client.request(query, variables);
}

import { GraphQLClient, gql } from 'graphql-request';

export function routeRequest() {
  const endpoint = 'https://graphql.datocms.com/';

  const query = gql`
    query {
      allCategories {
        route
      }
    }
  `;

  const requestHeaders = {
    'Content-Type': 'application/json',
    authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
  };

  const client = new GraphQLClient(endpoint, { headers: requestHeaders });

  return client.request(query);
}

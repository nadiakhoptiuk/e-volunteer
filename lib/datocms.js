import { GraphQLClient } from 'graphql-request';

export function datoCmsRequest({ query, variables }) {
  const endpoint = 'https://graphql.datocms.com/';

  const requestHeaders = {
    'Content-Type': 'application/json',
    authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
  };

  const client = new GraphQLClient(endpoint);

  return client.request(query, variables, requestHeaders);
}

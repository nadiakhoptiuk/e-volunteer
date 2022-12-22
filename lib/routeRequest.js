import { GraphQLClient } from 'graphql-request';
import { routesQuery } from './queries';

export function routeRequest() {
  const endpoint = 'https://graphql.datocms.com/';

  const requestHeaders = {
    'Content-Type': 'application/json',
    authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
  };

  const client = new GraphQLClient(endpoint, { headers: requestHeaders });

  return client.request(routesQuery);
}

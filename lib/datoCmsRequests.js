import { GraphQLClient } from 'graphql-request';
import { routesQuery, categoryQuery, indexQuery } from './queries';

const endpoint = 'https://graphql.datocms.com/';

const requestHeaders = {
  'Content-Type': 'application/json',
  authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
};

export function datoCmsRequest({ variables }) {
  const client = new GraphQLClient(endpoint, { headers: requestHeaders });

  return client.request(indexQuery, variables);
}

export function routeRequest() {
  const client = new GraphQLClient(endpoint, { headers: requestHeaders });

  return client.request(routesQuery);
}

export function categoryRequest({ variables }) {
  const client = new GraphQLClient(endpoint, { headers: requestHeaders });

  return client.request(categoryQuery, variables);
}

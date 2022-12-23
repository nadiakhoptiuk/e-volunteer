import { gql } from 'graphql-request';

export const indexQuery = gql`
  query ($locale: SiteLocale) {
    banner {
      content
    }
    allCategories(locale: $locale, orderBy: range_ASC) {
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
    }
    help(locale: $locale) {
      content
      title
    }
  }
`;

export const categoryQuery = gql`
  query ($locale: SiteLocale) {
    allCategories(locale: $locale) {
      title
      route
      cardInfo {
        description
      }
    }
    banner {
      content
    }
    footer(locale: $locale) {
      connectText
    }
    help(locale: $locale) {
      content
      title
    }
  }
`;

export const routesQuery = gql`
  query {
    allCategories {
      route
    }
  }
`;

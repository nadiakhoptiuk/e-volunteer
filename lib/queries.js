import { gql } from 'graphql-request';

export const indexQuery = gql`
  query ($locale: SiteLocale) {
    banner(locale: $locale) {
      content
    }
    allCategories(locale: $locale) {
      cardInfo {
        id
        image {
          url
          alt
        }
        description
      }
      range
      route
      title
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
      email
      telegram
      additionalInfo
    }
    help(locale: $locale) {
      content
      title
    }
  }
`;

export const categoryQuery = gql`
  query ($locale: SiteLocale, $category: String) {
    allCategories(locale: $locale, filter: { route: { eq: $category } }) {
      cardInfo {
        image {
          url
          alt
        }
        contentAtPage
      }
      route
      title
    }
    banner(locale: $locale) {
      content
    }
    footer(locale: $locale) {
      connectText
      email
      telegram
      additionalInfo
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
      _allRouteLocales {
        locale
        value
      }
    }
  }
`;

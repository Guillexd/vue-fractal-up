import gql from 'graphql-tag'

export const ALL_COUNTRIES = gql`
  query getCountries($name: String) {
    countries(filter: { name: { regex: $name } }) {
      name
      code
      continent {
        name
      }
    }
  }
`
export const ALL_COUNTRIES_BY_CONTINENT_FILTER = gql`
  query getCountriesByContinentFilter($name: String, $continentCodes: [String!]) {
    countries(filter: { name: { regex: $name }, continent: { in: $continentCodes } }) {
      name
      code
      continent {
        name
      }
    }
  }
`
export const GET_CONTRY_BY_CODE = gql`
  query getCountryByCodeFilter($code: ID!) {
    country(code: $code) {
      name
      capital
      languages {
        name
      }
      currencies
      continent {
        name
      }
      states {
        name
      }
    }
  }
`

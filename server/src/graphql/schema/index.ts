import gql from "graphql-tag";
import { GraphQLJSONObject } from "graphql-type-json";

const typeDefs = gql`
  scalar GraphQLJSONObject

  type CountryName {
    common: String!
    official: String!
  }

  type flags {
    png: String
    svg: String
  }

  type Country {
    name: CountryName!
    population: Int!
    flags: flags!
    capital: [String]
    cca3: String!
    currencies: GraphQLJSONObject
    convertCurrancy: convertCurrancy
  }

  type convertCurrancy {
    success: Boolean!
    date: String!
    timestamp: Int!
    base: String!
    rates: GraphQLJSONObject!
  }

  input inputUser {
    email: String!
    password: String!
  }

  type authUser {
    userId: String!
    firstName: String!
    lastName: String!
    token: String!
    validity: Int!
    message: String!
  }

  type Query {
    country(uriString: String): Country
    searchCountry(uriString: String, countryName: String): [Country]!
    #convertCurrancy(uriString: String): convertCurrancy
    userSignIn(userCredentials: inputUser): authUser
  }
`;

export default typeDefs;

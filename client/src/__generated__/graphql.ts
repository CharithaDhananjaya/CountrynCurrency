/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  GraphQLJSONObject: { input: any; output: any; }
};

export type Country = {
  __typename?: 'Country';
  capital?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  cca3?: Maybe<Scalars['String']['output']>;
  currencies?: Maybe<Scalars['GraphQLJSONObject']['output']>;
  flags?: Maybe<Flags>;
  name?: Maybe<CountryName>;
  population?: Maybe<Scalars['Int']['output']>;
};

export type CountryName = {
  __typename?: 'CountryName';
  common?: Maybe<Scalars['String']['output']>;
  official?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  convertCurrancy?: Maybe<ConvertCurrancy>;
  country?: Maybe<Country>;
  searchCountry: Array<Maybe<Country>>;
  userSignIn?: Maybe<AuthUser>;
};


export type QueryConvertCurrancyArgs = {
  uriString?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCountryArgs = {
  uriString?: InputMaybe<Scalars['String']['input']>;
};


export type QuerySearchCountryArgs = {
  countryName?: InputMaybe<Scalars['String']['input']>;
  uriString?: InputMaybe<Scalars['String']['input']>;
};


export type QueryUserSignInArgs = {
  userCredentials?: InputMaybe<InputUser>;
};

export type AuthUser = {
  __typename?: 'authUser';
  message?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
  validity?: Maybe<Scalars['Int']['output']>;
};

export type ConvertCurrancy = {
  __typename?: 'convertCurrancy';
  base?: Maybe<Scalars['String']['output']>;
  date?: Maybe<Scalars['String']['output']>;
  rates?: Maybe<Scalars['GraphQLJSONObject']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
  timestamp?: Maybe<Scalars['Int']['output']>;
};

export type Flags = {
  __typename?: 'flags';
  png?: Maybe<Scalars['String']['output']>;
  svg?: Maybe<Scalars['String']['output']>;
};

export type InputUser = {
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type GetCountriesQueryVariables = Exact<{
  uriStringCountry?: InputMaybe<Scalars['String']['input']>;
  uriStringCurrency?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetCountriesQuery = { __typename?: 'Query', country?: { __typename?: 'Country', population?: number | null, currencies?: any | null, name?: { __typename?: 'CountryName', common?: string | null } | null } | null, convertCurrancy?: { __typename?: 'convertCurrancy', date?: string | null, base?: string | null, rates?: any | null } | null };

export type SearchCountryQueryVariables = Exact<{
  uriString?: InputMaybe<Scalars['String']['input']>;
  countryName?: InputMaybe<Scalars['String']['input']>;
}>;


export type SearchCountryQuery = { __typename?: 'Query', searchCountry: Array<{ __typename?: 'Country', cca3?: string | null, currencies?: any | null, name?: { __typename?: 'CountryName', common?: string | null, official?: string | null } | null, flags?: { __typename?: 'flags', png?: string | null } | null } | null> };


export const GetCountriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCountries"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"uriStringCountry"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"uriStringCurrency"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"country"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"uriString"},"value":{"kind":"Variable","name":{"kind":"Name","value":"uriStringCountry"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"common"}}]}},{"kind":"Field","name":{"kind":"Name","value":"population"}},{"kind":"Field","name":{"kind":"Name","value":"currencies"}}]}},{"kind":"Field","name":{"kind":"Name","value":"convertCurrancy"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"uriString"},"value":{"kind":"Variable","name":{"kind":"Name","value":"uriStringCountry"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"rates"}}]}}]}}]} as unknown as DocumentNode<GetCountriesQuery, GetCountriesQueryVariables>;
export const SearchCountryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SearchCountry"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"uriString"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"countryName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"searchCountry"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"uriString"},"value":{"kind":"Variable","name":{"kind":"Name","value":"uriString"}}},{"kind":"Argument","name":{"kind":"Name","value":"countryName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"countryName"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"common"}},{"kind":"Field","name":{"kind":"Name","value":"official"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cca3"}},{"kind":"Field","name":{"kind":"Name","value":"currencies"}},{"kind":"Field","name":{"kind":"Name","value":"flags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"png"}}]}}]}}]}}]} as unknown as DocumentNode<SearchCountryQuery, SearchCountryQueryVariables>;
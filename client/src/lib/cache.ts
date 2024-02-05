import { InMemoryCache, makeVar } from "@apollo/client";

export const selectedCountriesVar = makeVar([]);

export const cache = new InMemoryCache({
  typePolicies: {
    Countries: {
      fields: {
        selectedCountries: {
          read() {
            return selectedCountriesVar();
          },
        },
      },
    },
  },
});

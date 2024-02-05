import { gql, useLazyQuery } from "@apollo/client";

const SEARCH_COUNTRIES = gql`
  query SearchCountry($uriString: String, $countryName: String) {
    searchCountry(uriString: $uriString, countryName: $countryName) {
      name {
        common
        official
      }
      cca3
      currencies
    }
  }
`;

export interface Country {
  name: {
    common: string;
    official: string;
  };
  cca3: string;
  currencies: object;
}

export interface CountryInList {
  name: object;
  flags: object;
  capital: [string];
  population: number;
  currencies: object;
}

export const countries = [
  {
    name: {
      common: "United States Virgin Islands",
      official: "Virgin Islands of the United States",
    },
    cca3: "VIR",
    currencies: {
      USD: {
        name: "United States dollar",
        symbol: "$",
      },
    },
  },
  {
    name: {
      common: "Tanzania",
      official: "United Republic of Tanzania",
    },
    cca3: "TZA",
    currencies: {
      TZS: {
        name: "Tanzanian shilling",
        symbol: "Sh",
      },
    },
  },
  {
    name: {
      common: "United States Minor Outlying Islands",
      official: "United States Minor Outlying Islands",
    },
    cca3: "UMI",
    currencies: {
      USD: {
        name: "United States dollar",
        symbol: "$",
      },
    },
  },
  {
    name: {
      common: "United States",
      official: "United States of America",
    },
    cca3: "USA",
    currencies: {
      USD: {
        name: "United States dollar",
        symbol: "$",
      },
    },
  },
  {
    name: {
      common: "United Arab Emirates",
      official: "United Arab Emirates",
    },
    cca3: "ARE",
    currencies: {
      AED: {
        name: "United Arab Emirates dirham",
        symbol: "د.إ",
      },
    },
  },
  {
    name: {
      common: "United Kingdom",
      official: "United Kingdom of Great Britain and Northern Ireland",
    },
    cca3: "GBR",
    currencies: {
      GBP: {
        name: "British pound",
        symbol: "£",
      },
    },
  },
  {
    name: {
      common: "Mexico",
      official: "United Mexican States",
    },
    cca3: "MEX",
    currencies: {
      MXN: {
        name: "Mexican peso",
        symbol: "$",
      },
    },
  },
];

// Fake function mocking an api
export const searchCountry = async (search: string) => {
  const { loading, error, data } = useLazyQuery(SEARCH_COUNTRIES, {
    variables: {
      uriString: ``,
      countryName: `${search}`,
    },
  });
  searchCountries();

  const matches = countries.filter((data) =>
    user.name.common.toLowerCase().includes(search.toLowerCase())
  );
  // if (matches.length == 0) return [{ id: 0, name: "No Matches Found" }];
  return matches;
};

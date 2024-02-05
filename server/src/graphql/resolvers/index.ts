import userResolver from "./users.js";

const resolvers = {
  Query: {
    country: (
      _: any,
      { uriString }: { uriString: string },
      { datasources }: { datasources: any }
    ) => {
      //if (isAuth !== "VALID") throw new Error("UnAuthenticated");

      const data = datasources.countryAPI.getCountryData(uriString);
      return data.then((countries: any) => {
        //console.log("Loaded", countries[0].currencies);
        return countries[0];
      });
    },
    searchCountry: (
      _: any,
      { uriString, countryName }: { uriString: string; countryName: string },
      { datasources }: { datasources: any }
    ) => {
      //if (userId !== "abc") throw new Error("UnAuthenticated");

      console.log("CC", countryName);
      const data = datasources.countryAPI
        .getCountryData(uriString)
        .then((result: any) => {
          const fileterdC = result.filter((country: any) => {
            if (
              country.name.common
                .toLowerCase()
                .includes(countryName.toLowerCase()) ||
              country.name.official
                .toLowerCase()
                .includes(countryName.toLowerCase()) ||
              country.cca3.toLowerCase().includes(countryName.toLowerCase())
            )
              return country;
          });
          if (fileterdC.length === 0)
            return [
              {
                name: { common: "NotFound", official: "NotFound" },
                currencies: {
                  message: "Notfound",
                },
              },
            ];

          return fileterdC;
        });

      return data;
    },

    ...userResolver,
  },
  Country: {
    convertCurrancy: (
      { currencies }: { currencies: string },
      __: any,
      { datasources }: { datasources: any }
    ) => {
      console.log("PRNT", currencies);
      const currencyLiteral = Object.keys(currencies)[0];
      console.log("CLA", `&base=EUR&symbols=SEK,USD,GBP,${currencyLiteral}`);
      const data = datasources.currencyAPI.getCurrencyData(
        `&base=EUR&symbols=SEK,USD,GBP,${currencyLiteral}`
      );
      return data.then((currencyConvertion: any) => {
        return currencyConvertion;
      });
    },
  },
};

export default resolvers;

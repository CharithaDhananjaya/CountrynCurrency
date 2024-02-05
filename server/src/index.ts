import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import jwt from "jsonwebtoken";

import typeDefs from "./graphql/schema/index";
import resolvers from "./graphql/resolvers/index";

import countryAPI from "./datasources/country.apollo";
import currencyAPI from "./datasources/currency.apollo";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  context: async ({ req }) => {
    const token = req.headers.authorization || "";
    //console.log("TOKEN", token);

    // var decoded: any = jwt.verify(token.split(" ")[1], "secret");

    // console.log(decoded.data.message);

    const { cache } = server;

    return {
      datasources: {
        countryAPI: new countryAPI({ cache }),
        currencyAPI: new currencyAPI({ cache }),
      },
    };
  },
});

console.log(`GrapgQL Server is ready at: ${url}`);

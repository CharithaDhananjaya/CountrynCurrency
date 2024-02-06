//import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import { ApolloClient, createHttpLink, ApolloProvider } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import { cache } from "./lib/cache";
import "./index.css";

const httpLink = createHttpLink({
  uri: "http://localhost:4000",
});

const authLink = setContext(() => {
  //const token = JSON.parse(localStorage.getItem("authUser")).token;
  //console.log("JWT", token);

  const token = "abc"; //temp fix for working only

  return {
    headers: {
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: cache,
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

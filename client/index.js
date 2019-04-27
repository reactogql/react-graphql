import React from "react";
import ReactDOM from "react-dom";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import App from "./components/App";

import "bootstrap/dist/css/bootstrap.css";

const link = createHttpLink({
  uri: "/graphql",
  credentials: "same-origin"
});

const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

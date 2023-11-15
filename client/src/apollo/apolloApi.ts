import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://192.168.10.77:4000",
  cache: new InMemoryCache(),
});

export default client;
import { ApolloServer } from "@apollo/server";
import { typeDefs } from "./typeDef";
import { resolvers } from "./resolvers";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

export default server;

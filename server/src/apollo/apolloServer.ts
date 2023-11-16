import {
  ApolloServer,
  GraphQLRequestContext,
  BaseContext,
} from "@apollo/server";
import { typeDefs } from "./typeDef";
import { resolvers } from "./resolvers";
import chalk from "chalk";

const myPlugin = {
  async requestDidStart({ request }: GraphQLRequestContext<BaseContext>) {
    request.http &&
      console.log(
        chalk.cyanBright(
          `[${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}] ${
            request.http.method
          } ${request.query}`
        )
      );
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [myPlugin],
});

export default server;

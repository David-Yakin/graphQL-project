import chalk from "chalk";
import connectToMongoDb from "./dataAccessLayer/mongoDb";
import { startStandaloneServer } from "@apollo/server/standalone";

import server from "./apollo/apolloServer";

startStandaloneServer(server, {
  listen: { port: 4000 },
})
  .then(({ url }) => {
    console.log(chalk.blueBright(`server run on: ${url}`));
    connectToMongoDb()
      .then((message) => {
        console.log(chalk.magentaBright(message));
      })
      .catch((error) =>
        console.log(
          chalk.redBright("Connect to mongoDB Error: ", error.message)
        )
      );
  })
  .catch((error) => console.log(error.message));

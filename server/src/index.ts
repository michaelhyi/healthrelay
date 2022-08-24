import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { ApolloServer } from "apollo-server-express";
import cors from "cors";
import express from "express";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";
import { Notification } from "./entities/Notification";
import { Order } from "./entities/Order";
import { OrderingPhysician } from "./entities/OrderingPhysician";
import { Radiologist } from "./entities/Radiologist";
import { User } from "./entities/User";
import { OrderResolver } from "./resolvers/order";
import { RadiologistResolver } from "./resolvers/radiologist";
import { UserResolver } from "./resolvers/user";

const main = async () => {
  await createConnection({
    type: "postgres",
    database: "healthrelay",
    username: "postgres",
    password: "postgres",
    logging: true,
    synchronize: true,
    entities: [User, Radiologist, OrderingPhysician, Order, Notification],
  });

  const app = express();

  app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
    })
  );

  const apolloServer = new ApolloServer({
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
    schema: await buildSchema({
      resolvers: [UserResolver, OrderResolver, RadiologistResolver],
      validate: false,
    }),
  });

  await apolloServer.start();

  apolloServer.applyMiddleware({
    app,
    cors: false,
  });

  app.listen(4000, () => {
    console.log("Server started on localhost:4000");
  });
};

main().catch((e) => console.error(e));

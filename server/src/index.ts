import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { ApolloServer } from "apollo-server-express";
import cors from "cors";
import "dotenv/config";
import express from "express";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";
import { Contact } from "./entities/Contact";
import { Notification } from "./entities/Notification";
import { Order } from "./entities/Order";
import { RecentContact } from "./entities/RecentContact";
import { User } from "./entities/User";
import { ContactResolver } from "./resolvers/contact";
import { NotificationResolver } from "./resolvers/notification";
import { OrderResolver } from "./resolvers/order";
import { RecentContactResolver } from "./resolvers/recentContact";
import { UserResolver } from "./resolvers/user";

const main = async () => {
  await createConnection({
    type: "postgres",
    database: "healthrelay",
    username: "postgres",
    password: "postgres",
    logging: true,
    synchronize: true,
    entities: [User, Order, Notification, Contact, RecentContact],
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
      resolvers: [
        UserResolver,
        OrderResolver,
        ContactResolver,
        RecentContactResolver,
        NotificationResolver,
      ],
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

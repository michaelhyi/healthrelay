"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_core_1 = require("apollo-server-core");
const apollo_server_express_1 = require("apollo-server-express");
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
require("reflect-metadata");
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const Notification_1 = require("./entities/Notification");
const Order_1 = require("./entities/Order");
const OrderingPhysician_1 = require("./entities/OrderingPhysician");
const Radiologist_1 = require("./entities/Radiologist");
const User_1 = require("./entities/User");
const user_1 = require("./resolvers/user");
const main = async () => {
    await (0, typeorm_1.createConnection)({
        type: "postgres",
        database: "healthrelay",
        username: "postgres",
        password: "postgres",
        logging: true,
        synchronize: true,
        entities: [User_1.User, Radiologist_1.Radiologist, OrderingPhysician_1.OrderingPhysician, Order_1.Order, Notification_1.Notification],
    });
    const app = (0, express_1.default)();
    app.use((0, cors_1.default)({
        origin: "http://localhost:3000",
        credentials: true,
    }));
    const apolloServer = new apollo_server_express_1.ApolloServer({
        plugins: [(0, apollo_server_core_1.ApolloServerPluginLandingPageGraphQLPlayground)()],
        schema: await (0, type_graphql_1.buildSchema)({
            resolvers: [user_1.UserResolver],
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
//# sourceMappingURL=index.js.map
import { createClient, dedupExchange, fetchExchange } from "urql";
import { cacheExchange } from "@urql/exchange-graphcache";
import { IP_ADDRESS } from "@env";
import { DeleteOrderMutationVariables } from "../generated/graphql";

export const client = createClient({
  url: `http://${IP_ADDRESS}:4000/graphql`,
  exchanges: [
    dedupExchange,
    cacheExchange({
      updates: {
        Mutation: {
          createRecentContact: (_result, _args, cache, _info) => {
            const allFields = cache.inspectFields("Query");
            const fieldInfos = allFields.filter(
              (info) => info.fieldName === "readRecentContacts"
            );
            fieldInfos.forEach((fi) => {
              cache.invalidate("Query", fi.fieldName, fi.arguments || {});
            });
          },
          deleteOrder: (_result, args, cache, _info) => {
            const allFields = cache.inspectFields("Query");
            const fieldInfos = allFields.filter(
              (info) => info.fieldName === "readNotifications"
            );
            fieldInfos.forEach((fi) => {
              cache.invalidate("Query", fi.fieldName, fi.arguments || {});
            });

            cache.invalidate({
              __typename: "Order",
              id: (args as DeleteOrderMutationVariables).id,
            });
          },
          updateOrder: (_result, _args, cache, _info) => {
            const allFields = cache.inspectFields("Query");
            const fieldInfos = allFields.filter(
              (info) =>
                info.fieldName === "readOrder" ||
                info.fieldName === "readOrders" ||
                info.fieldName === "readNotifications"
            );
            fieldInfos.forEach((fi) => {
              cache.invalidate("Query", fi.fieldName, fi.arguments || {});
            });
          },
          updateOrderStatus: (_result, _args, cache, _info) => {
            const allFields = cache.inspectFields("Query");
            const fieldInfos = allFields.filter(
              (info) =>
                info.fieldName === "readOrder" ||
                info.fieldName === "readOrders" ||
                info.fieldName === "readNotifications"
            );
            fieldInfos.forEach((fi) => {
              cache.invalidate("Query", fi.fieldName, fi.arguments || {});
            });
          },
          updateUser: (_result, _args, cache, _info) => {
            const allFields = cache.inspectFields("Query");
            const fieldInfos = allFields.filter(
              (info) => info.fieldName === "readUser"
            );
            fieldInfos.forEach((fi) => {
              cache.invalidate("Query", fi.fieldName, fi.arguments || {});
            });
          },
          createOrder: (_result, _args, cache, _info) => {
            const allFields = cache.inspectFields("Query");
            const fieldInfos = allFields.filter(
              (info) =>
                info.fieldName === "readOrder" ||
                info.fieldName === "readOrders" ||
                info.fieldName === "readNotifications"
            );
            fieldInfos.forEach((fi) => {
              cache.invalidate("Query", fi.fieldName, fi.arguments || {});
            });
          },
          createContact: (_result, _args, cache, _info) => {
            const allFields = cache.inspectFields("Query");
            const fieldInfos = allFields.filter(
              (info) => info.fieldName === "readContacts"
            );
            fieldInfos.forEach((fi) => {
              cache.invalidate("Query", fi.fieldName, fi.arguments || {});
            });
          },
        },
      },
    }),
    fetchExchange,
  ],
});

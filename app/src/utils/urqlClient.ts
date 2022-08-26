import { createClient, dedupExchange, fetchExchange } from "urql";
import { cacheExchange } from "@urql/exchange-graphcache";
import { IP_ADDRESS } from "@env";

export const client = createClient({
  url: `http://${IP_ADDRESS}:4000/graphql`,
  exchanges: [
    dedupExchange,
    cacheExchange({
      updates: {
        Mutation: {
          createOrder: (_result, _args, cache, _info) => {
            const allFields = cache.inspectFields("Query");
            const fieldInfos = allFields.filter(
              (info) =>
                info.fieldName === "readOrder" ||
                info.fieldName === "readOrders"
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

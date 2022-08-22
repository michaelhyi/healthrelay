import { createClient, dedupExchange, fetchExchange } from "urql";
import { cacheExchange } from "@urql/exchange-graphcache";
import { IP_ADDRESS } from "@env";

export const client = createClient({
  url: `http://${IP_ADDRESS}:4000/graphql`,
  exchanges: [dedupExchange, cacheExchange(), fetchExchange],
});

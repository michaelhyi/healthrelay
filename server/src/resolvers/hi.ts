import { Query, Resolver } from "type-graphql";

@Resolver()
export class HiResolver {
  @Query()
  hi(): string {
    return "hi";
  }
}

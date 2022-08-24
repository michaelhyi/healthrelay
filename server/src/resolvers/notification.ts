import { Arg, Int, Query, Resolver } from "type-graphql";
import { Notification } from "../entities/Notification";

@Resolver()
export class NotificationResolver {
  // @Query(() => [Notification] or )
  // async readNotifications(
  //   @Arg("uuid") uuid: string,
  //   @Arg("profession") profession: string,
  // ): Promise<Notification | null>;
  // > {
  //   return null;
  // }
}

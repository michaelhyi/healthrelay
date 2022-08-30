import { Arg, Int, Query, Resolver } from "type-graphql";
import { Notification } from "../entities/Notification";

@Resolver()
export class NotificationResolver {
  @Query(() => [Notification])
  async readNotifications(
    @Arg("id", () => Int) id: number
  ): Promise<Notification[]> {
    const notifications = await Notification.find({
      where: {
        recipientId: id,
      },
      order: {
        createdAt: "DESC",
      },
    });

    return notifications;
  }
}

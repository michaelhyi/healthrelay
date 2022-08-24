import { Arg, Query, Resolver } from "type-graphql";
import { Order } from "../entities/Order";

@Resolver()
export class OrderResolver {
  @Query(() => [Order])
  async readOrders(
    @Arg("uuid") uuid: string,
    @Arg("profession") profession: string
  ): Promise<Order[]> {
    let orders;
    if (profession === "Radiologist") {
      orders = await Order.find({ where: { radiologistUuid: uuid } });
    } else {
      orders = await Order.find({ where: { orderingPhysicianUuid: uuid } });
    }

    return orders;
  }
}

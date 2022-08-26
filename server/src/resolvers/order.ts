import { Arg, Int, Mutation, Query, Resolver } from "type-graphql";
import { Order } from "../entities/Order";
import { format } from "date-fns";
import { OrderingPhysician } from "../entities/OrderingPhysician";
import { Radiologist } from "../entities/Radiologist";

@Resolver()
export class OrderResolver {
  @Mutation(() => Boolean)
  async deleteAllOrders(): Promise<boolean> {
    await Order.delete({});
    return true;
  }

  @Query(() => [Order])
  async readAllOrders(): Promise<Order[]> {
    const orders = await Order.find({});
    return orders;
  }

  @Query(() => Order)
  async readOrder(
    @Arg("id", () => Int) id: number
  ): Promise<Order | undefined> {
    const order = await Order.findOne({ where: { id } });
    return order;
  }

  @Mutation(() => Order)
  async createOrder(
    @Arg("mrn") mrn: string,
    @Arg("priority") priority: string,
    @Arg("message") message: string,
    @Arg("radiologistUuid") radiologistUuid: string,
    @Arg("orderingPhysicianUuid") orderingPhysicianUuid: string
  ): Promise<Order> {
    const radiologist = await Radiologist.findOne({
      where: { uuid: radiologistUuid },
    });
    const orderingPhysician = await OrderingPhysician.findOne({
      where: { uuid: orderingPhysicianUuid },
    });

    const order = await Order.create({
      mrn,
      date: format(new Date(), "MMMM do, yyyy"),
      priority,
      status: "Pending",
      message,
      radiologistUuid,
      orderingPhysicianUuid,
      radiologist,
      orderingPhysician,
    }).save();

    return order;
  }

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

import { Arg, Int, Mutation, Query, Resolver } from "type-graphql";
import { Order } from "../entities/Order";
import { format } from "date-fns";

@Resolver()
export class OrderResolver {
  @Query(() => [Order])
  async readAllOrders(): Promise<Order[]> {
    const orders = await Order.find({});
    return orders;
  }

  @Query(() => Order)
  async readOrder(
    @Arg("id", () => Int) id: number
  ): Promise<Order | undefined> {
    const order = await Order.findOne(id);
    return order;
  }

  @Mutation(() => Order)
  async createOrder(
    @Arg("mrn") mrn: string,
    @Arg("priority") priority: string,
    @Arg("message") message: string,
    @Arg("radiologistId", () => Int) radiologistId: number,
    @Arg("orderingPhysicianId", () => Int) orderingPhysicianId: number
  ): Promise<Order> {
    const order = await Order.create({
      mrn,
      date: format(new Date(), "MMMM do, yyyy"),
      priority,
      status: "Pending",
      message,
      radiologistId,
      orderingPhysicianId,
    }).save();

    return order;
  }

  @Query(() => [Order])
  async readOrders(
    @Arg("id", () => Int) id: number,
    @Arg("profession") profession: string,
    @Arg("take", () => Int, { nullable: true }) take: number
  ): Promise<Order[]> {
    let orders;
    if (take) {
      if (profession === "Radiologist") {
        orders = await Order.find({
          where: { radiologistId: id },
          take,
          order: {
            createdAt: "DESC",
          },
        });
      } else {
        orders = await Order.find({
          where: { orderingPhysicianId: id },
          take,
          order: {
            createdAt: "DESC",
          },
        });
      }
    } else {
      if (profession === "Radiologist") {
        orders = await Order.find({ where: { radiologistId: id } });
      } else {
        orders = await Order.find({
          where: { orderingPhysicianId: id },
        });
      }
    }

    return orders;
  }
}

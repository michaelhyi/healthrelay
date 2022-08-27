import { Arg, Int, Mutation, Query, Resolver } from "type-graphql";
import { Order } from "../entities/Order";
import { format } from "date-fns";
import { User } from "../entities/User";
import { OrderResponse } from "../utils/types";
import { getConnection } from "typeorm";

@Resolver()
export class OrderResolver {
  @Mutation(() => Boolean)
  async updateOrderStatus(
    @Arg("id", () => Int) id: number,
    @Arg("status") status: string
  ): Promise<boolean> {
    await getConnection()
      .getRepository(Order)
      .createQueryBuilder()
      .update({ status })
      .where({ id })
      .returning("*")
      .execute();

    return true;
  }

  @Mutation(() => Boolean)
  async deleteOrder(@Arg("id", () => Int) id: number): Promise<boolean> {
    await Order.delete({ id });
    return true;
  }

  @Mutation(() => Boolean)
  async updateOrder(
    @Arg("id", () => Int) id: number,
    @Arg("mrn") mrn: string,
    @Arg("priority") priority: string,
    @Arg("message") message: string,
    @Arg("orderingPhysicianId", () => Int) orderingPhysicianId: number
  ): Promise<boolean> {
    await getConnection()
      .getRepository(Order)
      .createQueryBuilder()
      .update({ mrn, priority, message, orderingPhysicianId })
      .where({ id })
      .returning("*")
      .execute();

    return true;
  }

  @Query(() => [Order])
  async readAllOrders(): Promise<Order[]> {
    const orders = await Order.find({});
    return orders;
  }

  @Mutation(() => OrderResponse)
  async readOrder(@Arg("id", () => Int) id: number): Promise<OrderResponse> {
    const order = await Order.findOne(id);
    const radiologist = await User.findOne({
      where: { id: order?.radiologistId },
    });
    const orderingPhysician = await User.findOne({
      where: { id: order?.orderingPhysicianId },
    });

    return { ...order!, radiologist, orderingPhysician };
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
    @Arg("take", () => Int, { nullable: true }) take: number | null
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

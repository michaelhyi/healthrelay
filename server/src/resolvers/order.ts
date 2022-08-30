import { Arg, Int, Mutation, Query, Resolver } from "type-graphql";
import { Order } from "../entities/Order";
import { format } from "date-fns";
import { User } from "../entities/User";
import { OrderResponse } from "../utils/types";
import { getConnection } from "typeorm";
import { Notification } from "../entities/Notification";

@Resolver()
export class OrderResolver {
  @Mutation(() => Boolean)
  async updateOrderStatus(
    @Arg("id", () => Int) id: number,
    @Arg("status") status: string
  ): Promise<boolean> {
    const order = await Order.findOne({ id });
    const doctor = await User.findOne({
      where: { id: order?.orderingPhysicianId },
    });

    let statusValue;
    if (status === "Pending") statusValue = 0;
    else if (status === "Opened") statusValue = 1;
    else statusValue = 2;

    await getConnection()
      .getRepository(Order)
      .createQueryBuilder()
      .update({ status: statusValue })
      .where({ id })
      .returning("*")
      .execute();

    if (status === "Opened" || status === "Completed") {
      await Notification.create({
        date: format(new Date(), "MMMM do, yyyy"),
        message: `Dr. ${doctor?.firstName} ${
          doctor?.lastName
        } has ${status.toLowerCase()} Order #${id}.`,
        recipientId: order?.radiologistId,
        orderId: id,
      }).save();
    }

    return true;
  }

  @Mutation(() => Boolean)
  async deleteOrder(@Arg("id", () => Int) id: number): Promise<boolean> {
    const order = await Order.findOne({ id });
    const doctor = await User.findOne({ where: { id: order?.radiologistId } });
    await Order.delete({ id });

    await Notification.create({
      date: format(new Date(), "MMMM do, yyyy"),
      message: `Dr. ${doctor?.firstName} ${doctor?.lastName} has cancelled Order #${id}.`,
      recipientId: order?.orderingPhysicianId,
      orderId: id,
    }).save();

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
    let priorityValue;
    if (priority === "Low") priorityValue = 0;
    else if (priority == "Medium") priorityValue = 1;
    else priorityValue = 2;

    await getConnection()
      .getRepository(Order)
      .createQueryBuilder()
      .update({ mrn, priority: priorityValue, message, orderingPhysicianId })
      .where({ id })
      .returning("*")
      .execute();

    const order = await Order.findOne({ id });
    const doctor = await User.findOne({ where: { id: order?.radiologistId } });

    await Notification.create({
      date: format(new Date(), "MMMM do, yyyy"),
      message: `Dr. ${doctor?.firstName} ${doctor?.lastName} has updated Order #${id}.`,
      recipientId: orderingPhysicianId,
      orderId: id,
    }).save();

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
    let priorityValue;
    if (priority === "Low") priorityValue = 0;
    else if (priority == "Medium") priorityValue = 1;
    else priorityValue = 2;

    const order = await Order.create({
      mrn,
      date: format(new Date(), "MMMM do, yyyy"),
      priority: priorityValue,
      status: 0,
      message,
      radiologistId,
      orderingPhysicianId,
    }).save();

    const doctor = await User.findOne({ where: { id: radiologistId } });

    await Notification.create({
      date: format(new Date(), "MMMM do, yyyy"),
      message: `Dr. ${doctor?.firstName} ${doctor?.lastName} has requested a review of Order #${order.id}.`,
      recipientId: orderingPhysicianId,
      orderId: order.id,
    }).save();

    return order;
  }

  @Query(() => [Order])
  async readOrders(
    @Arg("id", () => Int) id: number,
    @Arg("profession") profession: string
  ): Promise<Order[]> {
    let orders;
    if (profession === "Radiologist") {
      orders = await Order.find({ where: { radiologistId: id } });
    } else {
      orders = await Order.find({
        where: { orderingPhysicianId: id },
      });
    }

    return orders;
  }
}

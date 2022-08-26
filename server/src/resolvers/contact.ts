import { Arg, Int, Mutation, Query, Resolver } from "type-graphql";
import { Contact } from "../entities/Contact";
import { User } from "../entities/User";
import { CreateContactResponse } from "../utils/types";

@Resolver()
export class ContactResolver {
  @Query(() => [Contact])
  async readAllContacts(): Promise<Contact[]> {
    const contacts = await Contact.find({});
    return contacts;
  }

  @Query(() => [Contact])
  async readContacts(
    @Arg("id", () => Int) id: number,
    @Arg("take", () => Int, { nullable: true }) take: number
  ): Promise<Contact[]> {
    let contacts;
    if (take) {
      contacts = await Contact.find({
        where: { radiologistId: id },
        take,
        order: {
          createdAt: "DESC",
        },
      });
    } else {
      contacts = await Contact.find({
        where: { radiologistId: id },
      });
    }

    return contacts;
  }

  @Mutation(() => CreateContactResponse)
  async createContact(
    @Arg("radiologistId", () => Int) radiologistId: number,
    @Arg("orderingPhysicianId", () => Int) orderingPhysicianId: number
  ): Promise<CreateContactResponse> {
    const orderingPhysician = await User.findOne({
      where: { id: orderingPhysicianId },
    });

    if (!orderingPhysician) {
      return {
        error: {
          field: "Contact",
          message: "User doesn't exist.",
        },
        success: false,
      };
    }

    if (orderingPhysician.profession === "Radiologist") {
      return {
        error: {
          field: "Contact",
          message: "Contact must be Ordering Physician!",
        },
        success: false,
      };
    }

    await Contact.create({
      radiologistId,
      orderingPhysicianId,
    }).save();

    await Contact.create({
      radiologistId,
      orderingPhysicianId,
    }).save();

    return { success: true };
  }
}

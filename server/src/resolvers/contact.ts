import { Arg, Int, Mutation, Query, Resolver } from "type-graphql";
import { Contact } from "../entities/Contact";
import { RecentContact } from "../entities/RecentContact";
import { User } from "../entities/User";
import { ContactResponse, CreateContactResponse } from "../utils/types";

@Resolver()
export class ContactResolver {
  @Mutation(() => User)
  async readContact(@Arg("id", () => Int) id: number): Promise<User> {
    const user = await User.findOne({ id });
    return user!;
  }

  @Query(() => [Contact])
  async readAllContacts(): Promise<Contact[]> {
    const contacts = await Contact.find({});
    return contacts;
  }

  @Query(() => [ContactResponse])
  async readContacts(
    @Arg("id", () => Int) id: number
  ): Promise<ContactResponse[]> {
    const contacts = await Contact.find({
      where: { radiologistId: id },
    });

    let ret: ContactResponse[] = [];

    for (let i = 0; i < contacts.length; i++) {
      const id = contacts[i].id;
      const radiologistId = contacts[i].radiologistId;
      const orderingPhysicianId = contacts[i].orderingPhysicianId;

      const radiologist = await User.findOne({
        where: { id: radiologistId },
      });
      const orderingPhysician = await User.findOne({
        where: { id: orderingPhysicianId },
      });

      ret.push({
        id,
        radiologistId,
        orderingPhysicianId,
        radiologist,
        orderingPhysician,
      });
    }

    return ret;
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

    const contacts = await Contact.find({ where: { radiologistId } });
    if (
      contacts.filter((v) => v.orderingPhysicianId === orderingPhysicianId)
        .length > 0
    ) {
      return {
        error: {
          field: "Contact",
          message: "You already have this contact added.",
        },
        success: false,
      };
    }

    await Contact.create({
      radiologistId,
      orderingPhysicianId,
    }).save();

    await RecentContact.create({
      radiologistId,
      orderingPhysicianId,
    }).save();

    return { success: true };
  }
}

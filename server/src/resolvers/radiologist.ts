import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { getConnection } from "typeorm";
import { OrderingPhysician } from "../entities/OrderingPhysician";
import { Radiologist } from "../entities/Radiologist";
import { CreateContactResponse } from "../utils/types";

@Resolver()
export class RadiologistResolver {
  @Query(() => [OrderingPhysician])
  async readContacts(@Arg("uuid") uuid: string): Promise<OrderingPhysician[]> {
    const user = await Radiologist.findOne({ where: { uuid } });
    const contacts = user!.contacts;
    return contacts;
  }

  @Mutation(() => CreateContactResponse)
  async createContact(
    @Arg("uuid") uuid: string,
    @Arg("contactUuid") contactUuid: string
  ): Promise<CreateContactResponse> {
    const contact = await OrderingPhysician.findOne({
      where: { uuid: contactUuid },
    });
    if (!contact) {
      return {
        error: {
          field: "Contact",
          message: "User doesn't exist.",
        },
        success: false,
      };
    }

    const radiologist = await Radiologist.findOne({ where: { uuid } });
    let contacts = radiologist?.contacts;
    if (!contacts) contacts = [contact];
    else {
      contacts.push(contact);
    }

    await getConnection()
      .getRepository(Radiologist)
      .createQueryBuilder()
      .update({ contacts })
      .where({ uuid })
      .returning("*")
      .execute();

    return { success: true };
  }
}

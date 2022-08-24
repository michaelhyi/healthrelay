import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Contact } from "../entities/Contact";
import { OrderingPhysician } from "../entities/OrderingPhysician";
import { Radiologist } from "../entities/Radiologist";
import { CreateContactResponse } from "../utils/types";

@Resolver()
export class ContactResolver {
  @Query(() => [Contact])
  async readAllContacts(): Promise<Contact[]> {
    const contacts = await Contact.find({});
    return contacts;
  }

  @Query(() => [Contact])
  async readContacts(@Arg("uuid") uuid: string): Promise<Contact[]> {
    const contacts = await Contact.find({
      where: { primaryUuid: uuid },
    });
    return contacts;
  }

  @Mutation(() => CreateContactResponse)
  async createContact(
    @Arg("uuid") uuid: string,
    @Arg("contactUuid") contactUuid: string
  ): Promise<CreateContactResponse> {
    const primary = await Radiologist.findOne({ where: { uuid } });

    const secondary = await OrderingPhysician.findOne({
      where: { uuid: contactUuid },
    });
    if (!secondary) {
      return {
        error: {
          field: "Contact",
          message: "User doesn't exist.",
        },
        success: false,
      };
    }

    await Contact.create({
      primaryUuid: uuid,
      secondaryUuid: contactUuid,
      firstName: secondary.firstName,
      lastName: secondary.lastName,
      organization: secondary.organization,
      profession: secondary.profession,
    }).save();

    await Contact.create({
      primaryUuid: contactUuid,
      secondaryUuid: uuid,
      firstName: primary!.firstName,
      lastName: primary!.lastName,
      organization: primary!.organization,
      profession: primary!.profession,
    }).save();

    return { success: true };
  }
}

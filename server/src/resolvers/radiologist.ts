import { Arg, Query, Resolver } from "type-graphql";
import { OrderingPhysician } from "../entities/OrderingPhysician";
import { Radiologist } from "../entities/Radiologist";

@Resolver()
export class RadiologistResolver {
  @Query(() => [OrderingPhysician])
  async readContacts(@Arg("uuid") uuid: string): Promise<OrderingPhysician[]> {
    const user = await Radiologist.findOne({ where: { uuid } });
    const contacts = user!.contacts;
    return contacts;
  }
}

import { Arg, Int, Mutation, Query, Resolver } from "type-graphql";
import { RecentContact } from "../entities/RecentContact";
import { User } from "../entities/User";
import { ContactResponse } from "../utils/types";

@Resolver()
export class RecentContactResolver {
  @Mutation(() => Boolean)
  async createRecentContact(
    @Arg("radiologistId", () => Int) radiologistId: number,
    @Arg("orderingPhysicianId", () => Int) orderingPhysicianId: number
  ): Promise<boolean> {
    const recentContact = await RecentContact.findOne({
      where: { radiologistId, orderingPhysicianId },
    });

    if (recentContact) {
      await RecentContact.delete({ id: recentContact.id });
    }

    await RecentContact.create({
      radiologistId,
      orderingPhysicianId,
    }).save();
    return true;
  }

  @Query(() => [ContactResponse])
  async readRecentContacts(
    @Arg("id", () => Int) id: number,
    @Arg("profession") profession: string
  ): Promise<ContactResponse[] | undefined> {
    let recentContacts;

    if (profession === "Radiologist") {
      recentContacts = await RecentContact.find({
        take: 3,
        where: {
          radiologistId: id,
        },
        order: {
          createdAt: "DESC",
        },
      });
    } else {
      recentContacts = await RecentContact.find({
        take: 3,
        where: {
          orderingPhysicianId: id,
        },
        order: {
          createdAt: "DESC",
        },
      });
    }

    let ret: ContactResponse[] = [];

    for (let i = 0; i < recentContacts.length; i++) {
      const id = recentContacts[i].id;
      const radiologistId = recentContacts[i].radiologistId;
      const orderingPhysicianId = recentContacts[i].orderingPhysicianId;

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
}

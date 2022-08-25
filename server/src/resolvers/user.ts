import argon2 from "argon2";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { v4 } from "uuid";
import { OrderingPhysician } from "../entities/OrderingPhysician";
import { Radiologist } from "../entities/Radiologist";
import { User } from "../entities/User";
import { UserQuery, UserResponse } from "../utils/types";

@Resolver()
export class UserResolver {
  @Mutation(() => UserQuery)
  async readContact(@Arg("uuid") uuid: string): Promise<UserQuery | null> {
    const user = await User.findOne({ where: { uuid } });
    if (user) {
      if (user?.profession === "Radiologist") {
        const radiologist = await Radiologist.findOne({ where: { uuid } });
        return { user, doctor: radiologist };
      } else if (user?.profession === "Ordering Physician") {
        const orderingPhysician = await OrderingPhysician.findOne({
          where: { uuid },
        });
        return { user, doctor: orderingPhysician };
      }
    }
    return null;
  }

  @Query(() => [User])
  async readUsers(): Promise<User[]> {
    const users = await User.find();
    return users;
  }

  @Query(() => UserQuery)
  async readUser(@Arg("uuid") uuid: string): Promise<UserQuery | null> {
    const user = await User.findOne({ where: { uuid } });
    if (user) {
      if (user?.profession === "Radiologist") {
        const radiologist = await Radiologist.findOne({ where: { uuid } });
        return { user, doctor: radiologist };
      } else if (user?.profession === "Ordering Physician") {
        const orderingPhysician = await OrderingPhysician.findOne({
          where: { uuid },
        });
        return { user, doctor: orderingPhysician };
      }
    }
    return null;
  }

  @Mutation(() => UserResponse)
  async register(
    @Arg("email") email: string,
    @Arg("password") password: string,
    @Arg("firstName") firstName: string,
    @Arg("lastName") lastName: string,
    @Arg("profession") profession: string,
    @Arg("organization") organization: string,
    @Arg("phone") phone: string
  ): Promise<UserResponse> {
    if (firstName.length === 0) {
      return {
        error: {
          field: "First Name",
          message: "You must enter a first name.",
        },
      };
    }

    if (lastName.length === 0) {
      return {
        error: {
          field: "Last Name",
          message: "You must enter a last name.",
        },
      };
    }
    if (organization.length === 0) {
      return {
        error: {
          field: "Organization",
          message: "You must enter an organization.",
        },
      };
    }
    if (phone.length === 0) {
      return {
        error: {
          field: "Phone",
          message: "You must enter a phone number.",
        },
      };
    }

    const uuid = v4();

    let user;
    try {
      user = await User.create({
        uuid,
        email,
        password: await argon2.hash(password),
        profession,
      }).save();
    } catch (e) {
      if (
        e.detail.includes("already exists") ||
        e.detail.includes("duplicate key")
      ) {
        return {
          error: {
            field: "Email",
            message: "Email already exists.",
          },
        };
      }
    }

    if (profession == "Radiologist") {
      await Radiologist.create({
        uuid,
        firstName,
        lastName,
        organization,
        phone,
        profession,
      }).save();
    } else {
      await OrderingPhysician.create({
        uuid,
        firstName,
        lastName,
        organization,
        phone,
        profession,
      }).save();
    }

    return { user };
  }

  @Mutation(() => UserResponse)
  async login(
    @Arg("email") email: string,
    @Arg("password") password: string
  ): Promise<UserResponse> {
    if (!email.includes("@")) {
      return {
        error: {
          field: "Email",
          message: "Invalid email.",
        },
      };
    }

    const user = await User.findOne({ where: { email } });
    if (!user) {
      return {
        error: { field: "Email", message: "Email does not exist." },
      };
    }

    const valid = await argon2.verify(user.password, password);
    if (!valid) {
      return {
        error: {
          field: "Password",
          message: "Incorrect password.",
        },
      };
    }

    return {
      user,
    };
  }
}

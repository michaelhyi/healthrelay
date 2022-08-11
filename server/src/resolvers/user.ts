import argon2 from "argon2";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { v4 } from "uuid";
import { OrderingPhysician } from "../entities/OrderingPhysician";
import { Radiologist } from "../entities/Radiologist";
import { User } from "../entities/User";
import { UserResponse } from "../utils/types";

@Resolver()
export class UserResolver {
  @Query(() => String)
  hi(): string {
    return "hi";
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
    if (!email.includes("@")) {
      return {
        error: {
          field: "Email",
          message: "Invalid email.",
        },
      };
    }

    if (password.length <= 2) {
      return {
        error: {
          field: "Password",
          message: "Password length must be greater than 2 characters.",
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
      }).save();
    } else {
      await OrderingPhysician.create({
        uuid,
        firstName,
        lastName,
        organization,
        phone,
      }).save();
    }

    return { user };
  }

  @Mutation(() => UserResponse)
  async login(
    @Arg("email") email: string,
    @Arg("password") password: string
  ): Promise<UserResponse> {
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

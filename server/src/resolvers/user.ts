import argon2 from "argon2";
import { Arg, Int, Mutation, Query, Resolver } from "type-graphql";
import { getConnection } from "typeorm";
import { User } from "../entities/User";
import { UserResponse } from "../utils/types";

@Resolver()
export class UserResolver {
  @Mutation(() => Boolean)
  async updateUser(
    @Arg("id", () => Int) id: number,
    @Arg("firstName") firstName: string,
    @Arg("lastName") lastName: string,
    @Arg("organization") organization: string,
    @Arg("email") email: string,
    @Arg("phone") phone: string
  ): Promise<boolean> {
    await getConnection()
      .getRepository(User)
      .createQueryBuilder()
      .update({ firstName, lastName, organization, email, phone })
      .where({ id })
      .returning("*")
      .execute();

    return true;
  }

  @Query(() => User)
  async readUser(@Arg("id", () => Int) id: number): Promise<User> {
    const user = await User.findOne(id);
    return user!;
  }

  @Query(() => [User])
  async readUsers(): Promise<User[]> {
    const users = await User.find();
    return users;
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

    let user;
    try {
      user = await User.create({
        email,
        password: await argon2.hash(password),
        firstName,
        lastName,
        profession,
        organization,
        phone,
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

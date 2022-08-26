import { Field, ObjectType } from "type-graphql";
import { User } from "../entities/User";

@ObjectType()
export class Error {
  @Field()
  field: string;

  @Field()
  message: string;
}

@ObjectType()
export class UserResponse {
  @Field(() => User, { nullable: true })
  user?: User;

  @Field(() => Error, { nullable: true })
  error?: Error;
}

@ObjectType()
export class CreateContactResponse {
  @Field(() => Error, { nullable: true })
  error?: Error;

  @Field(() => Boolean)
  success!: boolean;
}

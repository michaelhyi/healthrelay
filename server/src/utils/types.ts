import { Field, ObjectType } from "type-graphql";
import { User } from "../entities/User";

@ObjectType()
class Error {
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

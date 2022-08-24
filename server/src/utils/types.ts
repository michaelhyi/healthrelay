import { Field, ObjectType } from "type-graphql";
import { OrderingPhysician } from "../entities/OrderingPhysician";
import { Radiologist } from "../entities/Radiologist";
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
export class UserQuery {
  @Field(() => User)
  user: User;

  @Field(() => Radiologist, { nullable: true })
  doctor?: Radiologist | OrderingPhysician;
}

@ObjectType()
export class CreateContactResponse {
  @Field(() => Error, { nullable: true })
  error?: Error;

  @Field(() => Boolean)
  success!: boolean;
}

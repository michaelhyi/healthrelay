import { Field, ObjectType } from "type-graphql";
import { Order } from "../entities/Order";
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

@ObjectType()
export class OrderResponse {
  @Field(() => Order)
  order?: Order;

  @Field(() => User)
  radiologist?: User;

  @Field(() => User)
  orderingPhysician?: User;
}

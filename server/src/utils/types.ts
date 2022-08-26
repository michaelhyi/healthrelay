import { Field, Int, ObjectType } from "type-graphql";
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

@ObjectType()
export class ContactResponse {
  @Field(() => Int)
  id?: number | undefined;

  @Field(() => Int)
  radiologistId?: number | undefined;

  @Field(() => Int)
  orderingPhysicianId?: number | undefined;

  @Field(() => User)
  radiologist?: User | undefined;

  @Field(() => User)
  orderingPhysician?: User | undefined;
}

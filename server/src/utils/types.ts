import { Field, Int, ObjectType } from "type-graphql";
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
  @Field()
  id!: number;

  @Field()
  mrn!: string;

  @Field()
  date!: string;

  @Field()
  priority!: string;

  @Field()
  status!: string;

  @Field()
  message!: string;

  @Field(() => Int)
  radiologistId!: number;

  @Field(() => Int)
  orderingPhysicianId!: number;

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

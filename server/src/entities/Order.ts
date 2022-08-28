import { Field, Int, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@ObjectType()
@Entity()
export class Order extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  mrn!: string;

  @Field()
  @Column()
  date!: string;

  @Field(() => Int)
  @Column()
  priority!: number;

  @Field(() => Int)
  @Column()
  status!: number;

  @Field()
  @Column()
  message!: string;

  @Field(() => Int)
  @Column()
  radiologistId!: number;

  @Field(() => Int)
  @Column()
  orderingPhysicianId!: number;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}

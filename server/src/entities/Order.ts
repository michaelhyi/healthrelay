import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { OrderingPhysician } from "./OrderingPhysician";
import { Radiologist } from "./Radiologist";

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

  @Field()
  @Column()
  priority!: string;

  @Field()
  @Column()
  status!: string;

  @Field()
  @Column()
  message!: string;

  @Field()
  @Column()
  radiologistUuid!: string;

  @Field(() => Radiologist)
  @ManyToOne(() => Radiologist, (radiologist) => radiologist.orders)
  radiologist!: Radiologist;

  @Field()
  @Column()
  orderingPhysicianUuid!: string;

  @Field(() => OrderingPhysician)
  @ManyToOne(
    () => OrderingPhysician,
    (orderingPhysician) => orderingPhysician.orders
  )
  orderingPhysician!: OrderingPhysician;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}

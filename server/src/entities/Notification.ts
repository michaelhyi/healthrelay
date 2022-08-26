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
export class Notification extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  date!: string;

  @Field()
  @Column()
  message!: string;

  @Field()
  @Column()
  radiologistUuid!: string;

  @ManyToOne(() => Radiologist, (radiologist) => radiologist.notifications, {
    lazy: true,
  })
  radiologist!: Radiologist;

  @Field()
  @Column()
  orderingPhysicianUuid!: string;

  @ManyToOne(
    () => OrderingPhysician,
    (orderingPhysician) => orderingPhysician.notifications,
    { lazy: true }
  )
  orderingPhysician!: OrderingPhysician;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}

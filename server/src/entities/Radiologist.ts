import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Notification } from "./Notification";
import { Order } from "./Order";
import { OrderingPhysician } from "./OrderingPhysician";

@ObjectType()
@Entity()
export class Radiologist extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column({ unique: true })
  uuid!: string;

  @Field()
  @Column()
  firstName!: string;

  @Field()
  @Column()
  lastName!: string;

  @Field()
  @Column()
  organization!: string;

  @Field()
  @Column()
  profession!: string;

  @Field()
  @Column()
  phone!: string;

  @Field(() => [Order], { nullable: true })
  @OneToMany(() => Order, (order) => order.radiologist)
  orders!: Order[];

  @Field(() => [Notification])
  @OneToMany(() => Notification, (notification) => notification.radiologist, {
    lazy: true,
    nullable: true,
  })
  notifications!: Notification[];

  @Field(() => [OrderingPhysician], { nullable: true })
  @OneToMany(
    () => OrderingPhysician,
    (orderingPhysician) => orderingPhysician.radiologistContact,
    { lazy: true, nullable: true }
  )
  contacts!: OrderingPhysician[];

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}

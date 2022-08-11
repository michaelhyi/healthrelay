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

@ObjectType()
@Entity()
export class OrderingPhysician extends BaseEntity {
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
  phone!: string;

  @Field(() => [Order])
  @OneToMany(() => Order, (order) => order.radiologist)
  orders!: Order[];

  @Field(() => [Notification])
  @OneToMany(() => Notification, (notification) => notification.radiologist)
  notifications!: Notification[];

  @Field()
  @Column()
  contacts!: string;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}

import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Notification } from "./Notification";
import { Order } from "./Order";
import { Radiologist } from "./Radiologist";

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
  profession!: string;

  @Field()
  @Column()
  phone!: string;

  @Field(() => [Order], { nullable: true })
  @OneToMany(() => Order, (order) => order.radiologist)
  orders!: Order[];

  @Field(() => [Notification], {
    nullable: true,
  })
  @OneToMany(() => Notification, (notification) => notification.radiologist)
  notifications!: Notification[];

  @Field({ nullable: true })
  @ManyToOne(() => Radiologist, (radiologist) => radiologist.contacts)
  radiologistContact!: Radiologist;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}

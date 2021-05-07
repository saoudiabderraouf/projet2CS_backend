import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Generated,
  BaseEntity,
  CreateDateColumn,
} from "typeorm";
import { IsEmail, Length } from "class-validator";

@Entity("users")
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  @Length(1, 255)
  @IsEmail()
  email: string;

  @Column()
  password: string;

  @Column()
  @Generated("uuid")
  uuid: string;

  @CreateDateColumn()
  createdAt: Date;

  toJSON() {
    return { ...this, id: undefined, password: undefined };
  }
}

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Generated,
  BaseEntity,
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
  password: String;

  @Column()
  @Generated("uuid")
  uuid: string;
}

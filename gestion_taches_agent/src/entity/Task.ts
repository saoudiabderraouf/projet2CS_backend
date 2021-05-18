import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany} from "typeorm";
import {Step} from "../entity/Step"; 

@Entity("Task")
export class Task extends BaseEntity {
  @PrimaryGeneratedColumn()
  idTask: number;

  @Column()
  idAgent: number;

  @Column()
  idVehicle: number;

  @Column()
  description: string;

  @Column()
  idTaskState: number;

    @OneToMany(() => Step, step => step.task)
    steps: Step[];

}

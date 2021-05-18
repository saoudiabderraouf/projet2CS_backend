import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, JoinTable} from "typeorm";
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

    @Column()
    idEquipment: number;

    @OneToMany(() => Step, step => step.task)
    // @JoinTable()
    steps: Step[];

}

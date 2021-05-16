import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

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

}

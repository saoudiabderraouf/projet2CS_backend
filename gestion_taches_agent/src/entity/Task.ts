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
    taskTitle: string; 

    @Column()
    description: string;

    @Column()
    idTaskState: number;

    @Column()
    idEquipment: number;

    @Column()
    idTaskModel: number; 

    @Column({ type: 'timestamp' }) 
    assignmentDate: Date;

    @Column({ type: 'timestamp' }) 
    endDate: Date;

}
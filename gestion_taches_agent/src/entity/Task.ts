import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, JoinColumn, OneToOne} from "typeorm";
import {TaskModel} from "./TaskModel"; 

@Entity("Task")
export class Task extends BaseEntity {
    @PrimaryGeneratedColumn()
    idTask: number;

    @Column()
    idAgent: number;

    @Column() 
    idVehicle: number

    @Column()
    taskTitle: string

    @Column()
    description: string;

    @Column()
    idTaskState: number;

    @Column()
    idEquipment: number;

    @OneToOne(() => TaskModel)
    @JoinColumn()
    TaskModel: TaskModel;

    @Column({ type: 'timestamp' }) 
    assignmentDate: Date;

    @Column({ type: 'timestamp' }) 
    endDate: Date;

}
   // @OneToMany(() => Step, step => step.task)
    // @JoinTable()
    // steps: Step[];

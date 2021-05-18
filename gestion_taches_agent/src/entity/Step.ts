import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne} from "typeorm";
import {Task} from "../entity/Task"; 

@Entity("Step")
export class Step extends BaseEntity {

    @PrimaryGeneratedColumn()
    idStep: number;

    // @Column() 
    // idTask: number;

    @ManyToOne(() => Task, task => task.steps, {
        onDelete: 'CASCADE', 
        onUpdate: 'CASCADE'
    })
    task: Task;

    @Column()
    step: string;
}

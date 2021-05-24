import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, JoinColumn, OneToOne} from "typeorm";
import {TaskModel} from "./TaskModel"; 

@Entity("Step")
export class Step extends BaseEntity {

    @PrimaryGeneratedColumn()
    idStep: number;

    @OneToOne(() => TaskModel)
    @JoinColumn()
    taskModel: TaskModel;

    @Column()
    step: string;

    @ManyToOne(() => TaskModel, taskModel => taskModel.steps, {
        onDelete: 'CASCADE', 
        onUpdate: 'CASCADE'
    })
    model: TaskModel;
  
}



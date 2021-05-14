import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, OneToOne, JoinColumn, ManyToMany, JoinTable} from "typeorm";

@Entity("Task")
export class Task extends BaseEntity {

    @PrimaryGeneratedColumn()
    idTask: number;

    @Column() 
    idAgent: number;

    // @ManyToOne(() => Agent, agent => agent.idAgent) agent: Agent; 

    @Column()
    // @OneToOne(() => Vehicle) 
    // @JoinColumn() 
    idVehicle: number;

    @Column()
    description: string;

    @Column()
    // @OneToOne(() => TaskState) 
    // @JoinColumn() 
    idTaskState: number;

    @Column()
    // @ManyToMany(() => Equipment) @JoinTable() 
    idEquipment: number;

}

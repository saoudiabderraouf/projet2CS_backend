import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity("Vehicle_State")
export class Vehicle_State extends BaseEntity {

    @PrimaryGeneratedColumn()
    id_state: number;

    @Column()
    disponibility: string;

    @Column()
    mileage: number;

    @Column()
    temperature: number;

    @Column()
    fuel_level: number;

    @Column()
    id_borne:number;

    @Column()
    id_location:number;

}

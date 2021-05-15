import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity("Tenant")
export class Vehicule extends BaseEntity {

    @PrimaryGeneratedColumn()
    idUser: number;

    @Column()
    accountState: string;

    @Column()
    longitude: number;

    @Column()
    latitude: number;
}

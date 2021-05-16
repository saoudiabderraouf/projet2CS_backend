import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity("AdminAgent")
export class AdminAgent extends BaseEntity {

    @PrimaryGeneratedColumn()
    idAdminAgent: number;

    @Column()
    idUtilisateur: number;

    @Column()
    adresse: string;
}
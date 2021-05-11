import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity("AdminCompte")
export class AdminCompte extends BaseEntity {

    @PrimaryGeneratedColumn()
    idAdminCompte: number;

    @Column()
    idUtilisateur: number;

    @Column()
    adresse: string;
}
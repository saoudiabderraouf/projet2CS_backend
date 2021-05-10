import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity("Agent")
export class Agent extends BaseEntity {

    @PrimaryGeneratedColumn()
    idAgent: number;

    @Column()
    idUtilisateur: number;

    @Column()
    nom: string;

    @Column()
    prenom: string;

    @Column()
    adresse: string;

    @Column()
    photo: string;
}
import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity("Decideur")
export class Decideur extends BaseEntity {

    @PrimaryGeneratedColumn()
    idDecideur: number;

    @Column()
    idUtilisateur: number;

    @Column()
    adresse: string;
}
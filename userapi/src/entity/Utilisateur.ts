import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity("Utilisateur")
export class Utilisateur extends BaseEntity {

    @PrimaryGeneratedColumn()
    idUtilisateur: number;

    @Column()
    idTypeUtilisateur: number;

    @Column()
    nom: string;

    @Column()
    prenom: string;

    @Column()
    numeroTelephone: number
   
}
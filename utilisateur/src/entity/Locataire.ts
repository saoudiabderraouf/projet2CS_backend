import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity("Locataire")
export class Locataire extends BaseEntity {

    @PrimaryGeneratedColumn()
    idLocataire: number;

    @Column()
    idUtilisateur: number;

    @Column()
    nom: string;

    @Column()
    prenom: string;

    @Column()
    adresse: string;

    @Column()
    photoPersonnelle: string;

    @Column()
    photoPermisSelfie: string;

    @Column()
    idTypeAbonnement: number;
}
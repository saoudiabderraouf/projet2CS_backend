import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity("AdminTechnique")
export class AdminTechnique extends BaseEntity {

    @PrimaryGeneratedColumn()
    idAdminTechnique: number;

    @Column()
    idUtilisateur: number;

    @Column()
    adresse: string;
}
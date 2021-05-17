import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity("TypeUtilisateur")
export class TypeUtilisateur extends BaseEntity {

    @PrimaryGeneratedColumn()
    idTypeUtilisateur: number;

    @Column()
    type: string;
}
import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity("TypeAbonnement")
export class TypeAbonnement extends BaseEntity {

    @PrimaryGeneratedColumn()
    idTypeAbonnement: number;

    @Column()
    type: string;
}
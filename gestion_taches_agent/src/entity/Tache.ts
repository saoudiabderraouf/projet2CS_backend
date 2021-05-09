import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity("Taches")
export class Tache extends BaseEntity {

    @PrimaryGeneratedColumn()
    idTache: number;

    @Column()
    idAgent: number;

    @Column()
    idVehicule: number;

    @Column()
    description: string;

    @Column()
    idEtat: number;

    @Column()
    idMateriel: number;

}

import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, Double} from "typeorm";

@Entity("Vehicle")
export class Vehicle extends BaseEntity {

    @PrimaryGeneratedColumn()
    idVehicle: number;

    @Column()
    vehicleType: string;
    
    @Column()
    unitpriceperhour: string;

    @Column()
    unitpriceperday: string;

    @Column()
    vehicleBrand: string;
   
    @Column()
    vehicleModel: string;
   
    @Column()
    idBorne: number;

    @Column()
    availibility:string;
}

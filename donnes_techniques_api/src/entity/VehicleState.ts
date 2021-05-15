import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, Double} from "typeorm";
export enum Availability {
    STOPPED = "stopped",
    ALLOCATED = "allocated",
    AVAILABLE = "available",
    MAINTAINED = "maintained"

}

@Entity("VehicleState")
export class VehicleState extends BaseEntity {

    @PrimaryGeneratedColumn()
    idVehicleState: number;

    @Column()
    idRental:number;

    @Column()
    idBorne:number;

    @Column()
    availability:String;

    @Column()
    kilos:number;

    @Column()
    engineTemp:number;

    @Column()
    fuelLevel:number;

    @Column()
    oilPressure:number;

    @Column()
    batteryCharge:number;

    @Column()
    brakeFuild:number;

    @Column()
    speed:number;

    

}

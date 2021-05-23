import { Request, Response } from "express";
import {VehicleState} from "../entity/VehicleState";
import {Rental,rental_status_enum} from "../entity/Rental";
import {Tenant} from "../entity/Tenant";
import { User } from "../entity/User";
import { Borne } from "../entity/Borne";
import { Signal } from "../entity/Signal";
import { moveMessagePortToContext } from "node:worker_threads";



export const get =  (_req: Request, res: Response) => {
    res.end("Hello there this is my new service.");
}
//CREATE Signal 
export const createSignalRemorque = async (req: Request, res: Response) => {
    try{
    const remorque= Boolean(req.query.remorque)
    const idVehicle=Number(req.query.idVehicle)
    
    if(remorque==true){
        var currdatetime = new Date();
        const signal = Signal.create({
            signalType:"theft",
            message:"Attention la véhicule est remorquée",
            sourceType:"Auto",
            idVehicle:idVehicle,
            sent_at:currdatetime
        })

        await signal.save()
       // res.send(signal)
        return res.status(200).json(signal)
}
 else {
    res.send({message:"succ"})
    return res.status(200)
}
}catch(err){
    console.error()
    return res.status(500).json(err)
}
}

export const createSignalTime = async (req: Request, res: Response) => {
    try{
        const id=Number(req.query.idVehicle)
        var currdatetime = new Date();
        const rental= await Rental.findOneOrFail({idVehicle:id,rentalstate:"active"})

        if(rental.restitutionDate < currdatetime && rental.restitutionTime.getHours() < currdatetime.getHours()){
          
            const signal = Signal.create({
                signalType:"theft",
                message:"Attention la date de location a été dépassée",
                sourceType:"Auto",
                idVehicle:id,
                sent_at:currdatetime
            })
    
            await signal.save()
           // res.send(signal)
            return res.status(200).json(signal)
    
}    
    else {
        res.send({message:"succ"})
        return res.status(200)
    }
    }catch(err){
        console.error()
        return res.status(500).json(err)
    }
}



import { Request, Response } from "express";
import {Vehicle_State} from "../entity/Vehicle_State";

export const get =  (_req: Request, res: Response) => {
    res.end("Hello there this is my new service.");
}
//CREATE
export const createVehicleState = async (req: Request, res: Response) => {
    try{
    const vehicle_state = Vehicle_State.create({
        disponibility: req.body.disponibility,
        mileage: req.body.mileage,
        temperature: req.body.temperature,
        fuel_level:req.body.fuel_level,
        id_borne:req.body.id_borne,
        id_location:req.body.id_location
    })

    await vehicle_state.save()
    res.send(vehicle_state)
    return res.status(201).json(vehicle_state)
}catch(err){
    console.error()
    return res.status(500).json(err)
}
}
//READ
export async function getVehicleState(_req: Request, res: Response) {
    const vehicle_state = await Vehicle_State.find();
    return res.json(vehicle_state)
}
//UPDATE
export async function updateVehicleState(req: Request, res: Response) {
    const id= req.params.id_state
    try {
        const vehicle_state = await Vehicle_State.findOneOrFail(id)
        vehicle_state.disponibility=req.body.disponibility||vehicle_state.disponibility
        vehicle_state.fuel_level=req.body.fuel_level||vehicle_state.fuel_level
        vehicle_state.mileage=req.body.mileage||vehicle_state.mileage
        vehicle_state.temperature=req.body.temperature||vehicle_state.temperature
        vehicle_state.id_borne=req.body.id_borne||vehicle_state.id_borne
        vehicle_state.id_location=req.body.id_location||vehicle_state.id_location

        await vehicle_state.save()
        return res.json(vehicle_state)
    } catch (error) {
        console.error()
        return res.status(500).json(error)
    }
    
}
//DELETE
export async function deleteVehicleState(req: Request, res: Response) {
    const id= req.params.id_state
    try {
        const vehicle_state = await Vehicle_State.findOneOrFail(id)
    
        await vehicle_state.remove()
        return res.json({message:"vehicle state deleted successful"})
    } catch (error) {
        console.error()
        return res.status(500).json({error:"Something went wrong "})
    }
    
}
//FIND
export async function findVehicleState(req: Request, res: Response) {
    const id= req.params.id_state
    try {
        const vehicle_state = await Vehicle_State.findOneOrFail(id)

        return res.json(vehicle_state)
    } catch (error) {
        console.error()
        return res.status(500).json({error:"Something went wrong "})
    }
}
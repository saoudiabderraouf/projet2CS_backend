import { Request, Response } from "express";
import { read } from "node:fs";
import {Task} from "../entity/Task";

export const get =  (_req: Request, res: Response) => {
    res.send("Hello, this is the agent Tasks' management service.");
}

//Create 
export const addTask = async (req: Request, res: Response) => {
    try{ 
        const task = Task.create({
            idAgent : req.body.idAgent,
            idVehicle : req.body.idVehicle, 
            description : req.body.description,
            idTaskState : req.body.idTaskState, 
            idEquipment : req.body.idEquipment 
        }); 
    
        await task.save(); 
        return res.send(task); 
    }catch (err){
        console.log(err); 
        return res.status(500).json(err); 
    }
}

//Read 
export async function getTasks(_req: Request, res: Response) {
    try{
        const Tasks = await Task.find();
        console.log(Tasks); 
        return res.json(Tasks); 
    } catch (err){
        console.log(err); 
        return res.status(500).json(err); 
    }  
}

//Update
export async function updateTask(req: Request, res: Response) {
    const id = req.params.id;
    try {
        const task = await Task.findOneOrFail(id); 
        task.idAgent = req.body.idAgent; 
        task.idVehicle = req.body.idVehicle; 
        task.description = req.body.description;
        task.idTaskState = req.body.idTaskState;  
        task.idEquipment = req.body.idEquipment; 
        await task.save(); 
        return res.json(task); 
    } catch (err){
        console.log(err); 
        return res.status(500).json(err); 
    }
    
}

//Delete
export async function deleteTask(req: Request, res: Response) {
    const id = req.params.id; 
    try {
        const task = await Task.findOneOrFail(id);
        await task.remove(); 
        return res.json({ message: 'Tâche supprimée avec succès' })
    } catch (err){
        console.log(err); 
        return res.status(500).json(err);
    }
    
}

//Find one task by id
export async function getTask(req: Request, res: Response) {
    const id = req.params.id; 
    try {
        const task = await Task.findOneOrFail(id);
        return res.json(task); 
    } catch (err){
        console.log(err); 
        return res.json({ message: 'Tâche introuvable' }); 
    }
    
}


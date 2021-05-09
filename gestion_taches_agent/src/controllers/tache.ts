import { Request, Response } from "express";
import {Tache} from "../entity/Tache";

export const get =  (_req: Request, res: Response) => {
    res.send("Hello, this is the agent Tasks' management service.");
}

//Create 
export const addTache = async (req: Request, res: Response) => {
    try{ 
        const tache = Tache.create({
            idAgent : req.body.idAgent, 
            idVehicule : req.body.idVehicule, 
            description : req.body.description,
            idEtat : req.body.idEtat, 
            idMateriel : req.body.idMateriel, 
        }); 
    
        await tache.save(); 
        return res.send(tache); 
    }catch (err){
        console.log(err); 
        return res.status(500).json(err); 
    }
}

//Read 
export async function getTaches(_req: Request, res: Response) {
    try{
        const Taches = await Tache.find();
        console.log(Taches); 
        return res.json(Taches); 
    } catch (err){
        console.log(err); 
        return res.status(500).json(err); 
    }  
}

//Update
export async function updateTache(req: Request, res: Response) {
    const id = req.params.id;
    try {
        const tache = await Tache.findOneOrFail(id); 
        tache.idAgent = req.body.idAgent; 
        tache.idVehicule = req.body.idVehicule; 
        tache.description = req.body.description;
        tache.idEtat = req.body.idEtat;  
        tache.idMateriel = req.body.idMateriel; 
        await tache.save(); 
        return res.json(tache); 
    } catch (err){
        console.log(err); 
        return res.status(500).json(err); 
    }
    
}

//Delete
export async function deleteTache(req: Request, res: Response) {
    const id = req.params.id; 
    try {
        const tache = await Tache.findOneOrFail(id);
        await tache.remove(); 
        return res.json({ message: 'Tâche supprimée avec succès' })
    } catch (err){
        console.log(err); 
        return res.status(500).json(err);
    }
    
}

//Find one task by id
export async function getTache(req: Request, res: Response) {
    const id = req.params.id; 
    try {
        const tache = await Tache.findOneOrFail(id);
        return res.json(tache); 
    } catch (err){
        console.log(err); 
        return res.json({ message: 'Tâche introuvable' }); 
    }
    
}


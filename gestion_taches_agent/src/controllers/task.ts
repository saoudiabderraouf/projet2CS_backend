import { Request, Response } from "express";
import {getManager} from "typeorm";
import { read } from "node:fs";
import {Task} from "../entity/Task";
import {Step} from "../entity/Step";


export const get =  (_req: Request, res: Response) => {
    res.send("Hello, this is the agent Tasks' management service.");
}

//Create 
export const addTask = async (req: Request, res: Response) => {
//    console.log("szzzzzzzzzzzzzzz", req.body.idAgent); 
    try{ 
        const task = Task.create({
            idAgent : req.body.idAgent,
            idVehicle : req.body.idVehicle, 
            description : req.body.description,
            idTaskState : req.body.idTaskState, 
            idEquipment : req.body.idEquipment, 
            steps : req.body.steps
        }); 
        await task.save(); 

        const array = req.body.steps; 
        await array.forEach(async (element: { step: any; }) => {
            const step = Step.create({
                task : task, 
                step : element.step
            }); 
            await step.save(); 
        });

        return res.send(task); 

    }catch (err){
        console.log(err); 
        return res.status(500).json(err); 
    }
}

//Read 
export async function getTasks(_req: Request, res: Response) {
    try{

        const tasks = await getManager()
            .createQueryBuilder(Task, "task")
            .leftJoinAndSelect("task.steps", "step")
            .getMany();

        console.log(tasks); 
        return res.json(tasks); 

    } catch (err){
        console.log(err); 
        return res.status(500).json(err); 
    }  
}

//Update
// export async function updateTask(req: Request, res: Response) {
//     const id = req.params.id;
    
//     try {
//         const task = await Task.findOneOrFail(id); 
//         task.idAgent = req.body.idAgent; 
//         task.idVehicle = req.body.idVehicle; 
//         task.description = req.body.description;
//         task.idTaskState = req.body.idTaskState;  
//         task.idEquipment = req.body.idEquipment; 
//         task.steps = req.body.steps;

//         await task.save(); 

//         const array = req.body.steps; 
//         await array.forEach(async (element: { step: any; }) => {
//             const step = Step.create({
//                 task : task, 
//                 step : element.step
//             }); 
//             await step.save(); 
//         });

//         return res.json(task); 
//     } catch (err){
//         console.log(err); 
//         return res.status(500).json(err); 
//     }
    
// }

// //Delete
// export async function deleteTask(req: Request, res: Response) {
//     let id = parseInt(req.params.id); 
//     try {
//         console.log(parseInt(req.params.id)); 
//         const task = await Task.findOneOrFail(id);  
//         console.log("ssssssssssssssssssss"); 
        
//         const array = await getManager()
//             .createQueryBuilder(Step, "step")
//             .delete()
//             // .from(Step, "step")
//             .where("step.task.idTask = :t", { t: task.idTask})
//             .execute();

//         // await task.remove(); 
//         return res.json({ message: 'Tâche (avec des étapes) supprimée avec succès' })
//     } catch (err){
//         console.log(err); 
//         return res.status(500).json(err);
//     }
    
// }

//Find one task by id
export async function getTask(req: Request, res: Response) {
    const id =req.params.id; 
    try {
        // const task = await Task.findOneOrFail(id);
        const task = await getManager()
            .createQueryBuilder(Task, "task")
            .leftJoinAndSelect("task.steps", "step")
            .where("task.idTask = :id", { id: id })
            .getOne();
        return res.json(task); 
    } catch (err){
        console.log(err); 
        return res.json({ message: 'Tâche introuvable' }); 
    }
    
}

//Find all the tasks of an Agent 
// export async function getTaskByAgentId(req: Request, res: Response) {
//     const id =  req.query.id; 
//     // console.log('paramatre id = ', id); 
//     try{
//         const tasks = await getManager()
//         .createQueryBuilder(Task, "task")
//         .where("task.idAgent = :id", { id: id })
//         .getMany(); 

//     return res.send(tasks); 
//     } catch(err){
//         console.log(err); 
//         return res.status(500).json(err);
//     }
// }

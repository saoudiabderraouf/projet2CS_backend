import { Request, Response } from "express";
import { getManager } from "typeorm";
import { read } from "node:fs";
import {Task} from "../entity/Task";
import {Step} from "../entity/Step";
import {TaskModel} from "../entity/TaskModel"; 


/**
 * Welcome endpoint for task management service.
 *
 * @remarks
 * This method is for service testing, it returns a welcome message.
 *
 * @param _req - The request to the service
 * @param res - The response to the request
 *
 */
export const get = (_req: Request, res: Response) => {
  res.send("Hello, this is the agent's Tasks management service.");
};

/**
 * Create agent task request.
 *
 * @param _req - The request to the create a task
 * @param res - The response to the request
 *
 */
export const addTask = async (req: Request, res: Response) => {
    try{ 

        const task = Task.create({
            idAgent : req.body.idAgent,
            idVehicle : req.body.idVehicle, 
            description : req.body.description,
            idTaskState : req.body.idTaskState, 
            idEquipment : req.body.idEquipment, 
        }); 
        await task.save(); 

        // const array = req.body.steps; 
        // await array.forEach(async (element: { step: any; }) => {
        //     const step = Step.create({
        //         task : task, 
        //         step : element.step
        //     }); 
        //     await step.save(); 
        // });

        return res.send(task); 

    }catch (err){
        console.log(err); 
        return res.status(500).json(err); 
    }
}


/**
 * Get all tasks request.
 *
 * @param _req - The request to get all tasks.
 * @param res - The response to the request.
 *
 */
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

// Update task without updating its steps
export async function updateTask(req: Request, res: Response) {
    const id = req.params.id;
    
    try {
        const task = await Task.findOneOrFail(id); 
        task.idAgent = req.body.idAgent; 
        task.idVehicle = req.body.idVehicle; 
        task.description = req.body.description;
        task.idTaskState = req.body.idTaskState;  
        task.idEquipment = req.body.idEquipment; 

        // const array = req.body.steps; 
        // await array.forEach(async (element: { step: any; }) => {
        //     // console.log('elemente', element); 
        //     await getManager()
        //         .createQueryBuilder()
        //         .update(Step)
        //         .set({ 
        //             step: element.step,
        //         })
        //         .where("task = :task", { task: task.idTask })
        //         .execute();
        // });

        await task.save(); 
        return res.json(task); 
    } catch (err){
        console.log(err); 
        return res.status(500).json(err); 
    }
    
}

//Delete
export async function deleteTask(req: Request, res: Response) {
    let id = parseInt(req.params.id); 
    try {
        const task = await Task.findOneOrFail(id);  
        await task.remove(); 
        return res.json({ message: 'Tâche (avec des étapes) supprimée avec succès' })
    } catch (err){
        console.log(err); 
        return res.status(500).json(err);
    }
    
}

/**
 * Find a agent task request by id.
 *
 * @param _req - The request to find a task with parameter (TaskID).
 * @param res - The response to the request.
 *
 */
export async function getTask(req: Request, res: Response) {
    const id =req.params.id; 
    try {
        const task = await getManager()
            .createQueryBuilder(Task, "task")
            .leftJoinAndSelect("task.steps", "step")
            .where("task.idTask = :id", { id: id })
            .getOneOrFail();
        return res.json(task); 
    } catch (err){
        console.log(err); 
        return res.json({ message: 'Tâche introuvable' }); 
    }
    
}

// Find all the tasks of an Agent 
export async function getTaskByAgentId(req: Request, res: Response) {
    const id =  req.query.id; 
    console.log('paramatre id = ', id); 
    try{
        const tasks = await getManager()
            .createQueryBuilder(Task, "task")
            .leftJoinAndSelect("task.steps", "step")
            .where("task.idAgent = :id", { id: id })
            .getMany();

    return res.send(tasks); 
    } catch(err){
        console.log(err); 
        return res.status(500).json(err);
    }
}

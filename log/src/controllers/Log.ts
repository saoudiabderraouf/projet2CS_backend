import { Request, Response } from "express";
import {Erreur} from "../entity/Erreur";
import {Application} from "../entity/Application";
import { Log } from "../entity/Log";


export async function getLogs(_req: Request, res: Response) {
    const log = await Log.find({ relations: ["idApp","idErreur"] });

    res.json(log);
}

export const addApp = async (req: Request, res: Response) => {
    const app = Application.create({
     nomApp: req.body.nom,
     tauxUtilisation: req.body.taux 
    })
    await app.save()
    res.send(app)
}



export const addLog = async (req: Request, res: Response) => {
    let erreur;
    if(req.body.erreur) {
        erreur = await Erreur.save(Erreur.create({message : req.body.erreur}))
    }
    const log = Log.create({
        date: req.body.date,
        details : req.body.details,
        idApp : req.body.app,
        idErreur : erreur
    })
    await log.save()
    res.send(log)
}





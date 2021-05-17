import { Request, Response } from "express";
import {AdminAgent} from "../entity/AdminAgent";



export const getAdminAgent =  (req: Request, res: Response) => {

    AdminAgent.findOne({idAdminAgent: parseInt(req.params.adminAgentId)})
    .then(adminAgent => {

        res.send(adminAgent);
    
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "AdminAgent not found with id " + req.params.adminAgentId
            });                
        }
        return res.status(500).send({
            message: "Erreur dans la récupération de l'AdminAgent id " + req.params.adminAgentId
        });
    });
}

export const addAdminAgent = async (req: Request, res: Response) => {
    const adminAgent = AdminAgent.create({
        idUtilisateur: req.body.idUtilisateur,
        adresse: req.body.adresse,
    })

    await adminAgent.save()
    res.send(adminAgent)
}

export async function getAdminAgents(_req: Request, res: Response) {
    const adminAgents = await AdminAgent.find();
    res.json(adminAgents)
}

export const updateAdminAgent = async (req: Request, res: Response) => {
    
    if(!req.body.idUtilisateur && !req.body.adresse) {
        return res.status(400).send({
            message: "Champs vides"
        });
    }

    AdminAgent.update({idAdminAgent: parseInt(req.params.adminAgentId)}, {
        idUtilisateur: req.body.idUtilisateur,
        adresse: req.body.adresse,
    })
    .then(adminAgent => {
        
        res.send(adminAgent);
    
    }).catch(err => {

        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "AdminAgent non trouvé id " + req.params.adminAgentId
            });                
        }

        return res.status(500).send({
            message: "Erreur dans la modification de l'AdminAgent id " + req.params.adminAgentId
        });
    });

    
}

export const deleteAdminAgent = async (req: Request, res: Response) => {
    AdminAgent.delete({idAdminAgent: parseInt(req.params.adminAgentId)})
    .then(() => {
        
        res.send({message: "AdminAgent supprimé avec succés!"});
    
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "AdminAgent non trouvé id " + req.params.adminAgentId
            });                
        }
        return res.status(500).send({
            message: "Erreur serveur " + req.params.adminAgentId
        });
    });
}



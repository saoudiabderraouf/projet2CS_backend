import { Request, Response } from "express";
import {TypeAbonnement} from "../entity/TypeAbonnement";



export const getTypeAbonnement =  (req: Request, res: Response) => {

    TypeAbonnement.findOne({idTypeAbonnement: parseInt(req.params.typeAbonnementId)})
    .then(typeAbonnement => {
        if(!typeAbonnement) {
            return res.status(404).send({
                message: "TypeAbonnement non trouvé id " + req.params.utilisateurId
            });            
        }
        res.send(typeAbonnement);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "TypeAbonnement not found with id " + req.params.typeAbonnementId
            });                
        }
        return res.status(500).send({
            message: "Erreur dans la récupération de l'TypeAbonnement id " + req.params.typeAbonnementId
        });
    });
}

export const addTypeAbonnement = async (req: Request, res: Response) => {
    const typeAbonnement = TypeAbonnement.create({
        type: req.body.type,
    })

    await typeAbonnement.save()
    res.send(typeAbonnement)
}

export async function getTypeAbonnements(_req: Request, res: Response) {
    const typeAbonnements = await TypeAbonnement.find();
    res.json(typeAbonnements)
}

export const updateTypeAbonnement = async (req: Request, res: Response) => {
    
    if(!req.body.type) {
        return res.status(400).send({
            message: "TypeAbonnement content ne doit pas étre vide"
        });
    }

    TypeAbonnement.update({idTypeAbonnement: parseInt(req.params.typeAbonnementId)}, {
        type: req.body.type,
    })
    .then(typeAbonnement => {
        if(!typeAbonnement) {
            return res.status(404).send({
                message: "TypeAbonnement non trouvé id " + req.params.typeAbonnementId
            });
        }
        res.send(typeAbonnement);
    }).catch(err => {

        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "TypeAbonnement non trouvé id " + req.params.typeAbonnementId
            });                
        }

        return res.status(500).send({
            message: "Erreur dans la modification de l'TypeAbonnement id " + req.params.typeAbonnementId
        });
    });

    
}

export const deleteTypeAbonnement = async (req: Request, res: Response) => {
    TypeAbonnement.delete({idTypeAbonnement: parseInt(req.params.typeAbonnementId)})
    .then(typeAbonnement => {
        if(!typeAbonnement) {
            return res.status(404).send({
                message: "TypeAbonnement non trouvé id " + req.params.typeAbonnementId
            });
        }
        res.send({message: "TypeAbonnement supprimé avec succés!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "TypeAbonnement non trouvé id " + req.params.typeAbonnementId
            });                
        }
        return res.status(500).send({
            message: "Supression non effectuée id " + req.params.typeAbonnementId
        });
    });
}



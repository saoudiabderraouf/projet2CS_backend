import { Request, Response } from "express";
import {TypeUtilisateur} from "../entity/TypeUtilisateur";



export const getTypeUtilisateur =  (req: Request, res: Response) => {

    TypeUtilisateur.findOne({idTypeUtilisateur: parseInt(req.params.typeUtilisateurId)})
    .then(typeUtilisateur => {
        res.status(200).send(typeUtilisateur);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "TypeUtilisateur not found with id " + req.params.typeUtilisateurId
            });                
        }
        return res.status(500).send({
            message: "Erreur Serveur"
        });
    });
}

export const addTypeUtilisateur = async (req: Request, res: Response) => {
    const typeUtilisateur = TypeUtilisateur.create({
        type: req.body.type,
    })

    await typeUtilisateur.save()
    res.status(200).send(typeUtilisateur)
}

export async function getTypeUtilisateurs(_req: Request, res: Response) {
    const typeUtilisateurs = await TypeUtilisateur.find();
    res.status(200).json(typeUtilisateurs)
}

export const updateTypeUtilisateur = async (req: Request, res: Response) => {
    
    if(!req.body.type) {
        return res.status(400).send({
            message: "Champs vides"
        });
    }

    TypeUtilisateur.update({idTypeUtilisateur: parseInt(req.params.typeUtilisateurId)}, {
        type: req.body.type,
    })
    .then(typeUtilisateur => {
        res.status(200).send(typeUtilisateur);
    }).catch(err => {

        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "TypeUtilisateur non trouvé"
            });                
        }

        return res.status(500).send({
            message: "Erreur Serveur"
        });
    });

    
}

export const deleteTypeUtilisateur = async (req: Request, res: Response) => {
    TypeUtilisateur.delete({idTypeUtilisateur: parseInt(req.params.typeUtilisateurId)})
    .then(() => {
        res.status(200).send({message: "TypeUtilisateur supprimé avec succés!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "TypeUtilisateur non trouvé id " + req.params.typeUtilisateurId
            });                
        }
        return res.status(500).send({
            message: "Erreur Serveur"
        });
    });
}



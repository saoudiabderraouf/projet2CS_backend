import { Request, Response } from "express";
import {TypeUtilisateur} from "../entity/TypeUtilisateur";



export const getTypeUtilisateur =  (req: Request, res: Response) => {

    TypeUtilisateur.findOne({idTypeUtilisateur: parseInt(req.params.typeUtilisateurId)})
    .then(typeUtilisateur => {
        if(!typeUtilisateur) {
            return res.status(404).send({
                message: "TypeUtilisateur non trouvé id " + req.params.utilisateurId
            });            
        }
        res.send(typeUtilisateur);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "TypeUtilisateur not found with id " + req.params.typeUtilisateurId
            });                
        }
        return res.status(500).send({
            message: "Erreur dans la récupération de l'TypeUtilisateur id " + req.params.typeUtilisateurId
        });
    });
}

export const addTypeUtilisateur = async (req: Request, res: Response) => {
    const typeUtilisateur = TypeUtilisateur.create({
        type: req.body.type,
    })

    await typeUtilisateur.save()
    res.send(typeUtilisateur)
}

export async function getTypeUtilisateurs(_req: Request, res: Response) {
    const typeUtilisateurs = await TypeUtilisateur.find();
    res.json(typeUtilisateurs)
}

export const updateTypeUtilisateur = async (req: Request, res: Response) => {
    
    if(!req.body.type) {
        return res.status(400).send({
            message: "TypeUtilisateur content ne doit pas étre vide"
        });
    }

    TypeUtilisateur.update({idTypeUtilisateur: parseInt(req.params.typeUtilisateurId)}, {
        type: req.body.type,
    })
    .then(typeUtilisateur => {
        if(!typeUtilisateur) {
            return res.status(404).send({
                message: "TypeUtilisateur non trouvé id " + req.params.typeUtilisateurId
            });
        }
        res.send(typeUtilisateur);
    }).catch(err => {

        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "TypeUtilisateur non trouvé id " + req.params.typeUtilisateurId
            });                
        }

        return res.status(500).send({
            message: "Erreur dans la modification de l'TypeUtilisateur id " + req.params.typeUtilisateurId
        });
    });

    
}

export const deleteTypeUtilisateur = async (req: Request, res: Response) => {
    TypeUtilisateur.delete({idTypeUtilisateur: parseInt(req.params.typeUtilisateurId)})
    .then(typeUtilisateur => {
        if(!typeUtilisateur) {
            return res.status(404).send({
                message: "TypeUtilisateur non trouvé id " + req.params.typeUtilisateurId
            });
        }
        res.send({message: "TypeUtilisateur supprimé avec succés!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "TypeUtilisateur non trouvé id " + req.params.typeUtilisateurId
            });                
        }
        return res.status(500).send({
            message: "Supression non effectuée id " + req.params.typeUtilisateurId
        });
    });
}



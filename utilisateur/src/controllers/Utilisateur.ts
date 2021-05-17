import { Request, Response } from "express";
import {Utilisateur} from "../entity/Utilisateur";



export const getUtilisateur =  (req: Request, res: Response) => {

    Utilisateur.findOne({idUtilisateur: parseInt(req.params.utilisateurId)})
    .then(utilisateur => {
        if(!utilisateur) {
            return res.status(404).send({
                message: "Utilisateur non trouvé id " + req.params.utilisateurId
            });            
        }
        res.send(utilisateur);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Utilisateur not found with id " + req.params.utilisateurId
            });                
        }
        return res.status(500).send({
            message: "Erreur dans la récupération de l'utilisateur id " + req.params.utilisateurId
        });
    });
}

export const addUtilisateur = async (req: Request, res: Response) => {
    const user = Utilisateur.create({
        idTypeUtilisateur: req.body.idTypeUtilisateur,
        nom: req.body.nom,
        prenom: req.body.prenom,
        numeroTelephone: req.body.numeroTelephone
    })

    await user.save()
    res.send(user)
}

export async function getUtilisateurs(_req: Request, res: Response) {
    const utilisateurs = await Utilisateur.find();
    res.json(utilisateurs)
}

export const updateUtilisateur = async (req: Request, res: Response) => {
    
    if(!req.body.idTypeUtilisateur || !req.body.nom || !req.body.prenom || !req.body.numeroTelephone) {
        return res.status(400).send({
            message: "Utilisateur content ne doit pas étre vide"
        });
    }

    Utilisateur.update({idUtilisateur: parseInt(req.params.utilisateurId)}, {
        idTypeUtilisateur: req.body.idTypeUtilisateur,
        nom: req.body.nom,
        prenom: req.body.prenom,
        numeroTelephone: req.body.numeroTelephone,
    })
    .then(utilisateur => {
        if(!utilisateur) {
            return res.status(404).send({
                message: "Utilisateur non trouvé id " + req.params.noteId
            });
        }
        res.send(utilisateur);
    }).catch(err => {

        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Utilisateur non trouvé id " + req.params.utilisateurId
            });                
        }

        return res.status(500).send({
            message: "Erreur dans la modification de l'utilisateur id " + req.params.utilisateurId
        });
    });

    
}

export const deleteUtilisateur = async (req: Request, res: Response) => {
    Utilisateur.delete({idUtilisateur: parseInt(req.params.utilisateurId)})
    .then(utilisateur => {
        if(!utilisateur) {
            return res.status(404).send({
                message: "Utilisateur non trouvé id " + req.params.utilisateurId
            });
        }
        res.send({message: "Utilisateur supprimé avec succés!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Utilisateur non trouvé id " + req.params.utilisateurId
            });                
        }
        return res.status(500).send({
            message: "Supression non effectuée id " + req.params.utilisateurId
        });
    });
}



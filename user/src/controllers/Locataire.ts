import { Request, Response } from "express";
import {Locataire} from "../entity/Locataire";



export const getLocataire =  (req: Request, res: Response) => {

    Locataire.findOne({idLocataire: parseInt(req.params.locataireId)})
    .then(locataire => {
        res.send(locataire);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Locataire non trouvé"
            });                
        }
        return res.status(500).send({
            message: "Erreur Serveur"
        });
    });
}

export const addLocataire = async (req: Request, res: Response) => {
    const locataire = Locataire.create({
        idUtilisateur: req.body.idUtilisateur,
        nom: req.body.nom,
        prenom: req.body.prenom,
        adresse: req.body.adresse,
        photoPersonnelle: req.body.photoPersonnelle,
        photoPermisSelfie: req.body.photoPermisSelfie,
        idTypeAbonnement: req.body.idTypeAbonnement,
    })

    await locataire.save()
    res.send(locataire)
}

export async function getLocataires(_req: Request, res: Response) {
    const locataires = await Locataire.find();
    res.json(locataires)
}

export const updateLocataire = async (req: Request, res: Response) => {
    
    if(!req.body.idUtilisateur && !req.body.nom && !req.body.prenom && !req.body.adresse && !req.body.photoPersonnelle && !req.body.photoPermisSelfie && !req.body.idTypeAbonnement) {
        return res.status(400).send({
            message: "Champs vides"
        });
    }

    Locataire.update({idLocataire: parseInt(req.params.locataireId)}, {
        idUtilisateur: req.body.idUtilisateur,
        nom: req.body.nom,
        prenom: req.body.prenom,
        adresse: req.body.adresse,
        photoPersonnelle: req.body.photoPersonnelle,
        photoPermisSelfie: req.body.photoPermisSelfie,
        idTypeAbonnement: req.body.idTypeAbonnement,
    })
    .then(locataire => {
        res.send(locataire);
    }).catch(err => {

        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Locataire non trouvé id " + req.params.locataireId
            });                
        }

        return res.status(500).send({
            message: "Erreur Serveur"
        });
    });

    
}

export const deleteLocataire = async (req: Request, res: Response) => {
    Locataire.delete({idLocataire: parseInt(req.params.locataireId)})
    .then(() => {
        res.send({message: "Locataire supprimé avec succés!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Locataire non trouvé id " + req.params.locataireId
            });                
        }
        return res.status(500).send({
            message: "Erreur Serveur"
        });
    });
}
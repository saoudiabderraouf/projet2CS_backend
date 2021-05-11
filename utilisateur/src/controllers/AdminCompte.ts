import { Request, Response } from "express";
import {AdminCompte} from "../entity/AdminCompte";



export const getAdminCompte =  (req: Request, res: Response) => {

    AdminCompte.findOne({idAdminCompte: parseInt(req.params.adminCompteId)})
    .then(adminCompte => {
        if(!adminCompte) {
            return res.status(404).send({
                message: "AdminCompte non trouvé id " + req.params.adminCompteId
            });            
        }
        res.send(adminCompte);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "AdminCompte not found with id " + req.params.adminCompteId
            });                
        }
        return res.status(500).send({
            message: "Erreur dans la récupération de l'AdminCompte id " + req.params.adminCompteId
        });
    });
}

export const addAdminCompte = async (req: Request, res: Response) => {
    const adminCompte = AdminCompte.create({
        idUtilisateur: req.body.idUtilisateur,
        adresse: req.body.adresse,
    })

    await adminCompte.save()
    res.send(adminCompte)
}

export async function getAdminComptes(_req: Request, res: Response) {
    const adminComptes = await AdminCompte.find();
    res.json(adminComptes)
}

export const updateAdminCompte = async (req: Request, res: Response) => {
    
    if(!req.body.idUtilisateur && !req.body.adresse) {
        return res.status(400).send({
            message: "AdminCompte content ne doit pas étre vide"
        });
    }

    AdminCompte.update({idAdminCompte: parseInt(req.params.adminCompteId)}, {
        idUtilisateur: req.body.idUtilisateur,
        adresse: req.body.adresse,
    })
    .then(adminCompte => {
        if(!adminCompte) {
            return res.status(404).send({
                message: "AdminCompte non trouvé id " + req.params.adminCompteId
            });
        }
        res.send(adminCompte);
    }).catch(err => {

        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "AdminCompte non trouvé id " + req.params.adminCompteId
            });                
        }

        return res.status(500).send({
            message: "Erreur dans la modification de l'AdminCompte id " + req.params.adminCompteId
        });
    });

    
}

export const deleteAdminCompte = async (req: Request, res: Response) => {
    AdminCompte.delete({idAdminCompte: parseInt(req.params.adminCompteId)})
    .then(adminCompte => {
        if(!adminCompte) {
            return res.status(404).send({
                message: "AdminCompte non trouvé id " + req.params.adminCompteId
            });
        }
        res.send({message: "AdminCompte supprimé avec succés!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "AdminCompte non trouvé id " + req.params.adminCompteId
            });                
        }
        return res.status(500).send({
            message: "Supression non effectuée id " + req.params.adminCompteId
        });
    });
}



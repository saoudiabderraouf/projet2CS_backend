import { Request, Response } from "express";
import {AdminCompte} from "../entity/AdminCompte";



export const getAdminCompte =  (req: Request, res: Response) => {

    AdminCompte.findOne({idAdminCompte: parseInt(req.params.adminCompteId)})
    .then(adminCompte => {
        res.send(adminCompte);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "AdminCompte non trouvé id " + req.params.adminCompteId
            });                
        }
        return res.status(500).send({
            message: "Erreur serveur"
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

    AdminCompte.update({idAdminCompte: parseInt(req.params.adminCompteId)}, {
        idUtilisateur: req.body.idUtilisateur,
        adresse: req.body.adresse,
    })
    .then(adminCompte => {
        res.send(adminCompte);
    }).catch(err => {

        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "AdminCompte non trouvé id " + req.params.adminCompteId
            });                
        }

        return res.status(500).send({
            message: "Erreur Serveur"
        });
    });

    
}

export const deleteAdminCompte = async (req: Request, res: Response) => {
    AdminCompte.delete({idAdminCompte: parseInt(req.params.adminCompteId)})
    .then(() => {
        res.send({message: "AdminCompte supprimé avec succés!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "AdminCompte non trouvé id " + req.params.adminCompteId
            });                
        }
        return res.status(500).send({
            message: "Erreur Serveur"
        });
    });
}



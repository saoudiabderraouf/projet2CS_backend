import { Request, Response } from "express";
import {AdminTechnique} from "../entity/AdminTechnique";



export const getAdminTechnique =  (req: Request, res: Response) => {

    AdminTechnique.findOne({idAdminTechnique: parseInt(req.params.adminTechniqueId)})
    .then(adminTechnique => {
        if(!adminTechnique) {
            return res.status(404).send({
                message: "AdminTechnique non trouvé id " + req.params.adminTechniqueId
            });            
        }
        res.send(adminTechnique);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "AdminTechnique not found with id " + req.params.adminTechniqueId
            });                
        }
        return res.status(500).send({
            message: "Erreur dans la récupération de l'AdminTechnique id " + req.params.adminTechniqueId
        });
    });
}

export const addAdminTechnique = async (req: Request, res: Response) => {
    const adminTechnique = AdminTechnique.create({
        idUtilisateur: req.body.idUtilisateur,
        adresse: req.body.adresse,
    })

    await adminTechnique.save()
    res.send(adminTechnique)
}

export async function getAdminTechniques(_req: Request, res: Response) {
    const adminTechniques = await AdminTechnique.find();
    res.json(adminTechniques)
}

export const updateAdminTechnique = async (req: Request, res: Response) => {
    
    if(!req.body.idUtilisateur && !req.body.adresse) {
        return res.status(400).send({
            message: "AdminTechnique content ne doit pas étre vide"
        });
    }

    AdminTechnique.update({idAdminTechnique: parseInt(req.params.adminTechniqueId)}, {
        idUtilisateur: req.body.idUtilisateur,
        adresse: req.body.adresse,
    })
    .then(adminTechnique => {
        if(!adminTechnique) {
            return res.status(404).send({
                message: "AdminTechnique non trouvé id " + req.params.adminTechniqueId
            });
        }
        res.send(adminTechnique);
    }).catch(err => {

        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "AdminTechnique non trouvé id " + req.params.adminTechniqueId
            });                
        }

        return res.status(500).send({
            message: "Erreur dans la modification de l'AdminTechnique id " + req.params.adminTechniqueId
        });
    });

    
}

export const deleteAdminTechnique = async (req: Request, res: Response) => {
    AdminTechnique.delete({idAdminTechnique: parseInt(req.params.adminTechniqueId)})
    .then(adminTechnique => {
        if(!adminTechnique) {
            return res.status(404).send({
                message: "AdminTechnique non trouvé id " + req.params.adminTechniqueId
            });
        }
        res.send({message: "AdminTechnique supprimé avec succés!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "AdminTechnique non trouvé id " + req.params.adminTechniqueId
            });                
        }
        return res.status(500).send({
            message: "Supression non effectuée id " + req.params.adminTechniqueId
        });
    });
}



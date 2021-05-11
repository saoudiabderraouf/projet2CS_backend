import "reflect-metadata";
import { Connection, createConnection } from "typeorm";
import * as express from 'express';
import { Request, Response, json } from "express";
import * as cors from 'cors';
import * as morgan from 'morgan';
import { Router } from 'express';

import { getAdminTechnique, getAdminTechniques, addAdminTechnique, updateAdminTechnique, deleteAdminTechnique } from '../controllers/AdminTechnique'
import { getAgent, getAgents, addAgent, updateAgent, deleteAgent } from '../controllers/Agent'
import { getDecideur, getDecideurs, addDecideur, updateDecideur, deleteDecideur } from '../controllers/Decideur'
import { getLocataire, getLocataires, addLocataire, updateLocataire, deleteLocataire } from '../controllers/Locataire'
import { getAdminCompte, getAdminComptes, addAdminCompte, updateAdminCompte, deleteAdminCompte } from '../controllers/AdminCompte'
import { getUtilisateur, getUtilisateurs, addUtilisateur, updateUtilisateur, deleteUtilisateur } from '../controllers/Utilisateur'
import { getTypeUtilisateur, getTypeUtilisateurs, addTypeUtilisateur, updateTypeUtilisateur, deleteTypeUtilisateur } from '../controllers/TypeUtilisateur'



const app: express.Application = express();

app.use(cors());
app.use(morgan("dev"));


createConnection()
  .then(async (_connection: Connection) => {
    app.listen(8100, () => {
      console.log("server started.");
    });
  })
  .catch((error: Error) => console.log(error));




const router = Router();


router.post('/add-locataire', addLocataire)
router.get('/locataires', getLocataires)
router.get('/locataire/:locataireId', getLocataire)
router.put('/locataire/:locataireId', updateLocataire)
router.delete('/locataire/:locataireId', deleteLocataire)



router.post('/add-decideur', addDecideur)
router.get('/decideurs', getDecideurs)
router.get('/decideur/:decideurId', getDecideur)
router.put('/decideur/:decideurId', updateDecideur)
router.delete('/decideur/:decideurId', deleteDecideur)



router.post('/add-agent', addAgent)
router.get('/agents', getAgents)
router.get('/agent/:agentId', getAgent)
router.put('/agent/:agentId', updateAgent)
router.delete('/agent/:agentId', deleteAgent)




router.post('/add-adminTechnique', addAdminTechnique)
router.get('/adminTechniques', getAdminTechniques)
router.get('/adminTechniques/:adminTechniqueId', getAdminTechnique)
router.put('/adminTechniques/:adminTechniqueId', updateAdminTechnique)
router.delete('/adminTechniques/:adminTechniqueId', deleteAdminTechnique)

  
  
router.post('/add-adminCompte', addAdminCompte)
router.get('/adminComptes', getAdminComptes)
router.get('/adminComptes/:adminCompteId', getAdminCompte)
router.put('/adminComptes/:adminCompteId', updateAdminCompte)
router.delete('/adminComptes/:adminCompteId', deleteAdminCompte)
  




router.post('/add-utilisateur', addUtilisateur)
router.get('/utilisateurs', getUtilisateurs)
router.get('/utilisateurs/:utilisateurId', getUtilisateur)
router.put('/utilisateurs/:utilisateurId', updateUtilisateur)
router.delete('/utilisateurs/:utilisateurId', deleteUtilisateur)






router.post('/add-typeUtilisateur', addTypeUtilisateur)
router.get('/typeUtilisateurs', getTypeUtilisateurs)
router.get('/typeUtilisateur/:typeUtilisateurId', getTypeUtilisateur)
router.put('/typeUtilisateur/:typeUtilisateurId', updateTypeUtilisateur)
router.delete('/typeUtilisateur/:typeUtilisateurId', deleteTypeUtilisateur)



export default router;
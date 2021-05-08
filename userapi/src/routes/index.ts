import { Router } from 'express';
import { getUtilisateur, getUtilisateurs, addUtilisateur, updateUtilisateur, deleteUtilisateur } from '../controllers/Utilisateur'

const router = Router();


router.post('/add-utilisateur', addUtilisateur)
router.get('/utilisateurs', getUtilisateurs)
router.get('/utilisateurs/:utilisateurId', getUtilisateur)
router.put('/utilisateurs/:utilisateurId', updateUtilisateur)
router.delete('/utilisateurs/:utilisateurId', deleteUtilisateur)

export default router;
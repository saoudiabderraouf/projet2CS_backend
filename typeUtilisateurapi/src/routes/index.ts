import { Router } from 'express';
import { getTypeUtilisateur, getTypeUtilisateurs, addTypeUtilisateur, updateTypeUtilisateur, deleteTypeUtilisateur } from '../controllers/TypeUtilisateur'

const router = Router();


router.post('/add-typeUtilisateur', addTypeUtilisateur)
router.get('/typeUtilisateurs', getTypeUtilisateurs)
router.get('/typeUtilisateur/:typeUtilisateurId', getTypeUtilisateur)
router.put('/typeUtilisateur/:typeUtilisateurId', updateTypeUtilisateur)
router.delete('/typeUtilisateur/:typeUtilisateurId', deleteTypeUtilisateur)

export default router;
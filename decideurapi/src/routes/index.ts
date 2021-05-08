import { Router } from 'express';
import { getDecideur, getDecideurs, addDecideur, updateDecideur, deleteDecideur } from '../controllers/Decideur'

const router = Router();


router.post('/add-decideur', addDecideur)
router.get('/decideurs', getDecideurs)
router.get('/decideur/:decideurId', getDecideur)
router.put('/decideur/:decideurId', updateDecideur)
router.delete('/decideur/:decideurId', deleteDecideur)

export default router;
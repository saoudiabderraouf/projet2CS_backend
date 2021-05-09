import { Router } from 'express';
import { getTypeAbonnement, getTypeAbonnements, addTypeAbonnement, updateTypeAbonnement, deleteTypeAbonnement } from '../controllers/TypeAbonnement'

const router = Router();


router.post('/add-typeAbonnement', addTypeAbonnement)
router.get('/typeAbonnements', getTypeAbonnements)
router.get('/typeAbonnements/:typeAbonnementId', getTypeAbonnement)
router.put('/typeAbonnements/:typeAbonnementId', updateTypeAbonnement)
router.delete('/typeAbonnements/:typeAbonnementId', deleteTypeAbonnement)

export default router;
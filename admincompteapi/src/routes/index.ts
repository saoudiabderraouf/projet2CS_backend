import { Router } from 'express';
import { getAdminCompte, getAdminComptes, addAdminCompte, updateAdminCompte, deleteAdminCompte } from '../controllers/AdminCompte'

const router = Router();


router.post('/add-adminCompte', addAdminCompte)
router.get('/adminComptes', getAdminComptes)
router.get('/adminComptes/:adminCompteId', getAdminCompte)
router.put('/adminComptes/:adminCompteId', updateAdminCompte)
router.delete('/adminComptes/:adminCompteId', deleteAdminCompte)

export default router;
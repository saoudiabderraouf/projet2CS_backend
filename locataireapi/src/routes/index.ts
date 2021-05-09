import { Router } from 'express';
import { getLocataire, getLocataires, addLocataire, updateLocataire, deleteLocataire } from '../controllers/Locataire'

const router = Router();


router.post('/add-locataire', addLocataire)
router.get('/locataires', getLocataires)
router.get('/locataire/:locataireId', getLocataire)
router.put('/locataire/:locataireId', updateLocataire)
router.delete('/locataire/:locataireId', deleteLocataire)

export default router;
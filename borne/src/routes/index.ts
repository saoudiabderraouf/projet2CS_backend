import { Router } from 'express';
import { getBorne, getBornes, addBorne, updateBorne, deleteBorne } from '../controllers/borne'

const router = Router();


router.post('/bornes', addBorne)
router.get('/bornes', getBornes)
router.get('/bornes/:idBorne', getBorne)
router.put('/bornes/:idBorne', updateBorne)
router.delete('/bornes/:idBorne', deleteBorne)



export default router;
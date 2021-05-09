import { Router } from 'express';
import { get, addTache, getTaches, updateTache, deleteTache, getTache } from '../controllers/tache';


const router = Router();


router.get('/', get);
router.get('/tache', getTaches);
router.post('/tache', addTache);
router.put('/tache/:id', updateTache); 
router.delete('/tache/:id', deleteTache); 
router.get('/tache/:id', getTache); 



export default router;
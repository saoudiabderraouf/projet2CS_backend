import { Router } from 'express';
import { getAllocatedVehicles,getAvailibleVehicles, get, getV,deleteVehicle, addState,getVehicles } from '../controllers/listVehicles';

const router = Router();


router.get('/', get);
router.get('/vehicle', getV);
router.get('/Allocated', getAllocatedVehicles);
router.get('/Availible', getAvailibleVehicles);
//router.post('/vehicle', addVehicle);
router.post('/state', addState);
router.delete('/vehicle/:id', deleteVehicle);

export default router;
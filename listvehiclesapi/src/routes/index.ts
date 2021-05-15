import { Router } from 'express';
import { get, getV,deleteVehicle,getVehicles } from '../controllers/listVehicles';

const router = Router();


router.get('/', get);
router.get('/vehicle', getV);
//router.post('/vehicle', addVehicle);
router.delete('/vehicle/:id', deleteVehicle);

export default router;

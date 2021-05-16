import { Router } from 'express';
<<<<<<< HEAD
import { get,getVehicles } from '../controllers/listVehicles';
=======
import { get, getV,deleteVehicle,getVehicles } from '../controllers/listVehicles';
>>>>>>> f7eb2d5985bff8962cfaa6d70c18baf48176386f

const router = Router();


router.get('/', get);
router.get('/vehicle', getVehicles);

export default router;

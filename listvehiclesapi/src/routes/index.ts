import { Router } from 'express';
<<<<<<< HEAD
import { get,getVehicles } from '../controllers/listVehicles';
=======
import { get, getV,deleteVehicle,getVehicles } from '../controllers/listVehicles';
>>>>>>> f7eb2d5985bff8962cfaa6d70c18baf48176386f

const router = Router();


router.get('/', get);
<<<<<<< HEAD
router.get('/vehicle', getVehicles);
=======
router.get('/vehicle', getV);
router.delete('/vehicle/:id', deleteVehicle);
>>>>>>> f7eb2d5985bff8962cfaa6d70c18baf48176386f

export default router;

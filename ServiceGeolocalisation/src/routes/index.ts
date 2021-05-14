import { Router } from 'express';
import { get, getVehiclePosition } from '../controllers/vehiclePosition';

const router = Router();

router.get('/', get);
router.get('/vehiclePosition', getVehiclePosition);

export default router;
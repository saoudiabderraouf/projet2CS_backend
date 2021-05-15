import { Router } from 'express';
import { createVehicleState, get, getVehicleState ,updateVehicleState,deleteVehicleState,findVehicleState,findVehicleRental} from '../controllers/suiviVehicule';

const router = Router();

//user
router.get('/', get);
//etat de vehicule 
router.get('/vehicle_State', getVehicleState);
router.post('/vehicle_State', createVehicleState);
router.put('/vehicle_State/:id_state', updateVehicleState);
router.delete('/vehicle_State/:id_state', deleteVehicleState);
router.get('/vehicle_State/:id_state', findVehicleState);
router.get('/suivi_vehicule/:idVehicle', findVehicleRental);








export default router;
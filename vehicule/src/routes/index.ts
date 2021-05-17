import { Router } from 'express';
import { getVehicule, getVehicules, addVehicule, updateVehicule, deleteVehicule } from '../controllers/vehicule'

const router = Router();


router.post('/vehicules', addVehicule)
router.get('/vehicules', getVehicules)
router.get('/vehicules/:idVehicule', getVehicule)
router.put('/vehicules/:idVehicule', updateVehicule)
router.delete('/vehicules/:idVehicule', deleteVehicule)



export default router;
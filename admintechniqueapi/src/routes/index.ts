import { Router } from 'express';
import { getAdminTechnique, getAdminTechniques, addAdminTechnique, updateAdminTechnique, deleteAdminTechnique } from '../controllers/AdminTechnique'

const router = Router();


router.post('/add-adminTechnique', addAdminTechnique)
router.get('/adminTechniques', getAdminTechniques)
router.get('/adminTechniques/:adminTechniqueId', getAdminTechnique)
router.put('/adminTechniques/:adminTechniqueId', updateAdminTechnique)
router.delete('/adminTechniques/:adminTechniqueId', deleteAdminTechnique)

export default router;
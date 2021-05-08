import { Router } from 'express';
import { getAdminAgent, getAdminAgents, addAdminAgent, updateAdminAgent, deleteAdminAgent } from '../controllers/AdminAgent'

const router = Router();


router.post('/add-adminAgent', addAdminAgent)
router.get('/adminAgents', getAdminAgents)
router.get('/adminAgents/:adminAgentId', getAdminAgent)
router.put('/adminAgents/:adminAgentId', updateAdminAgent)
router.delete('/adminAgents/:adminAgentId', deleteAdminAgent)

export default router;
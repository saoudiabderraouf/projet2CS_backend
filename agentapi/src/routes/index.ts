import { Router } from 'express';
import { getAgent, getAgents, addAgent, updateAgent, deleteAgent } from '../controllers/Agent'

const router = Router();


router.post('/add-agent', addAgent)
router.get('/agents', getAgents)
router.get('/agent/:agentId', getAgent)
router.put('/agent/:agentId', updateAgent)
router.delete('/agent/:agentId', deleteAgent)

export default router;
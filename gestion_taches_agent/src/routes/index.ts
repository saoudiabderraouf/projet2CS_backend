import { Router } from 'express';
import { get, addTask, getTasks, getTask, deleteTask, updateTask, getTaskByAgentId } from '../controllers/task';


const router = Router();


router.get('/', get);
router.get('/task', getTasks);
router.post('/task', addTask);
router.put('/task/:id', updateTask); 
router.delete('/task/:id', deleteTask); 
router.get('/task/:id', getTask); 
router.get('/taskAgent', getTaskByAgentId); 


export default router;
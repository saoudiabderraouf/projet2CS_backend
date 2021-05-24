import { Router } from 'express';
import { get, addTask, getTasks, getTask, deleteTask, updateTaskState, getTaskByAgentId } from '../controllers/task';


const router = Router();


router.get('/', get);
router.get('/task', getTasks);
router.post('/task', addTask);
router.put('/task/:id', updateTaskState); 
router.delete('/task/:id', deleteTask); 
router.get('/task/:id', getTask); 
router.get('/taskAgent/:id', getTaskByAgentId); 


export default router;
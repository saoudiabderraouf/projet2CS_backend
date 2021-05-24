import { Router } from 'express';
import { get, addTask, getTasks, getTask, deleteTask, updateTaskState, getTaskByAgentId } from '../controllers/task';
import { addTaskModel, getAllTaskModels, updateTaskModel, deleteTaskModel, getTaskModel} from '../controllers/taskModel'; 


const router = Router();

// Routes for Task
router.get('/', get);
router.get('/task', getTasks);
router.post('/task', addTask);
router.put('/task/:id', updateTaskState); 
router.delete('/task/:id', deleteTask); 
router.get('/task/:id', getTask); 
router.get('/task/agent/:id', getTaskByAgentId); 

// Routes for TaskModel
router.get('/taskModel',  getAllTaskModels);
router.post('/taskModel',  addTaskModel);
router.put('/taskModel/:id', updateTaskModel); 
router.delete('/taskModel/:id', deleteTaskModel); 
router.get('/taskModel/:id', getTaskModel); 

export default router;
import { Router } from 'express';
import { addUser, get, getUsers } from '../controllers/user';
import { getLogs,addApp, addLog } from '../controllers/Log'  

const router = Router();


router.get('/', get);
router.get('/user', getUsers);
router.post('/user', addUser);
router.get('/log',getLogs);
router.post('/app', addApp);
router.post('/log',addLog);


export default router;
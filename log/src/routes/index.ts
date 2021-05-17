import { Router } from 'express';
import { getLogs,addApp, addLog } from '../controllers/Log'  

const router = Router();


router.get('/log',getLogs);
router.post('/app', addApp);
router.post('/log',addLog);


export default router;
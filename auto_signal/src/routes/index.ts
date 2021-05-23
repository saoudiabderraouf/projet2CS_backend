import { Router } from 'express';
import {  get,createSignalRemorque,createSignalTime} from '../controllers/autoSignalController';

const router = Router();

//user
router.get('/', get);
//etat de vehicule 
router.post('/isRemorquer',createSignalRemorque)
router.post('/dateDepasse',createSignalTime)


export default router;
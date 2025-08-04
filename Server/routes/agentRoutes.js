import express from 'express';
import { createAgent, getAgents, deleteAgent } from '../controllers/agentController.js';
import  verifyToken  from '../middlewares/authMiddleware.js';


const router = express.Router();

router.post('/', verifyToken, createAgent);
router.get('/', verifyToken, getAgents);
router.delete('/:id', verifyToken, deleteAgent);

export default router;

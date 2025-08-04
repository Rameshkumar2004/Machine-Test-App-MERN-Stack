import express from 'express';
import { uploadList, getList } from '../controllers/listController.js';
import { protect } from '../middlewares/auth.js';

const router = express.Router();

router.post('/upload', protect, uploadList);  // CSV Upload + Distribute
router.get('/distributed', protect, getList); // View distributed list

export default router;

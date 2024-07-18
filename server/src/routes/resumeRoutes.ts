import { Router } from 'express';
import { createResume, getResume } from '../controllers/resumeController';
import authMiddleware from '../middleware/authMiddleware';

const router = Router();

router.post('/', authMiddleware, createResume);
router.get('/', authMiddleware, getResume);

export default router;

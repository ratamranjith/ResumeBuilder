import { Router } from 'express';
import { createIntro, getIntro } from '../controllers/introController';
import authMiddleware from '../middleware/authMiddleware';

const router = Router();

router.post('/', authMiddleware, createIntro);
router.get('/', authMiddleware, getIntro);

export default router;

import express from 'express';
import { getMessage, replicateMessage } from '../controllers/message';

const router = express.Router();

router.get('/', replicateMessage);

router.get('/:id', getMessage)

export default router;

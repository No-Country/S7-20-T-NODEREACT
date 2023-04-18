import { Router } from 'express';
import { messageController } from '../controllers/message.controllers';
import {verifyToken} from '../utils/auth'

const router = Router();

router.use('/messages',verifyToken)
router.use('/messages/:id',verifyToken)

router.post('/messages', messageController.createMessage);
router.get('/messages', messageController.getMessages);
router.get('/messages/:id', messageController.getMessage);
router.patch('/messages/:id', messageController.updateMessage);
router.delete('/messages/:id', messageController.deleteMessage);

export default router;
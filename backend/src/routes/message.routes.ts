import { Router } from 'express';
import { messageController } from '../controllers/message.controllers';

const router = Router();

router.post('/messages', messageController.createMessage);
router.get('/messages', messageController.getMessages);
router.get('/messages/:id', messageController.getMessage);
router.patch('/messages/:id', messageController.updateMessage);
router.delete('/messages/:id', messageController.deleteMessage);

export default router;
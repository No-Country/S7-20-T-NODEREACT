import { Router } from 'express';
import { messageController } from '../controllers/message.controllers';
import {verifyToken} from '../utils/auth'

const router = Router();

router.use('/messages',verifyToken)
router.use('/messages/:id',verifyToken)

router.post('/:userId/messages', messageController.createMessage);
router.get('/:userId/messages', messageController.getMessages);
router.get('/:userId/messages/:id', messageController.getMessage);
router.patch('/:userId/messages/:id', messageController.updateMessage);
router.delete('/:userId/messages/:id', messageController.deleteMessage);

export default router;
import { Router } from 'express';
import { chatController } from '../controllers/chat.controllers';
import {verifyToken} from '../utils/auth'
const router = Router();

router.post('/chats', chatController.createChat);
router.get('/:userId/chats', verifyToken, chatController.getChats);
router.get('/:userId/chats/:id',verifyToken, chatController.getChat);
router.patch('/:userId/chats/:id',verifyToken, chatController.updateChat);
router.delete('/:userId/chats/:id',verifyToken, chatController.deleteChat);

export default router;

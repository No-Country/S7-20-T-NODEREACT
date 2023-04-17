import { Router } from 'express';
import { chatController } from '../controllers/chat.controllers';
import {verifyToken} from '../utils/auth'
const router = Router();

router.post('/chats', chatController.createChat);
router.get('/chats', verifyToken, chatController.getChats);
router.get('/chats/:id',verifyToken, chatController.getChat);
router.patch('/chats/:id',verifyToken, chatController.updateChat);
router.delete('/chats/:id',verifyToken, chatController.deleteChat);

export default router;

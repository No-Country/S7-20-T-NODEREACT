import { Router } from 'express';
import { chatController } from '../controllers/chat.controllers';

const router = Router();

router.post('/chats', chatController.createChat);
router.get('/chats', chatController.getChats);
router.get('/chats/:id', chatController.getChat);
router.patch('/chats/:id', chatController.updateChat);
router.delete('/chats/:id', chatController.deleteChat);

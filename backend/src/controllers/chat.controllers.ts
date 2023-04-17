import { Request, Response } from 'express'
import { ChatModel } from "../models/chat.model";
async function createChat(req: Request, res: Response) {
    try {
        const newChat = new ChatModel(req.body);
        const savedChat = await newChat.save();
        res.status(201).json(savedChat);
    } catch (error) {
        res.status(400).json({ message: error });
    }
}

async function getChats(req: Request, res: Response) {
    try {
        const chats = await ChatModel.find();
        res.json(chats);
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

async function getChat(req: Request, res: Response) {
    const { id } = req.params;
    try {
        const chat = await ChatModel.findById(id);
        if (!chat) {
            return res.status(404).json({ message: 'Chat not found' });
        }
        res.json(chat);
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

async function updateChat(req: Request, res: Response) {
    const { id } = req.params;
    try {
        const updatedChat = await ChatModel.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedChat) {
            return res.status(404).json({ message: 'Chat not found' });
        }
        res.json(updatedChat);
    } catch (error) {
        res.status(400).json({ message: error });
    }
}

async function deleteChat(req: Request, res: Response) {
    const { id } = req.params;
    try {
        const deletedChat = await ChatModel.findByIdAndDelete(id);
        if (!deletedChat) {
            return res.status(404).json({ message: 'Chat not found' });
        }
        res.json(deletedChat);
    } catch (error) {
        res.status(500).json({ message: error });
    }
}
export const chatController = {
    createChat,
    getChats,
    getChat,
    updateChat,
    deleteChat,
};
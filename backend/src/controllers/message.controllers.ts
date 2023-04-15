import { Request, Response } from 'express'
import { MessageModel } from "../models/message.model";
async function createMessage(req: Request, res: Response) {
    try {
        const newMessage = new MessageModel(req.body);
        const savedMessage = await newMessage.save();
        res.status(201).json(savedMessage);
    } catch (error) {
        res.status(400).json({ message: error });
    }
}

async function getMessages(req: Request, res: Response) {
    try {
        const messages = await MessageModel.find();
        res.json(messages);
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

async function getMessage(req: Request, res: Response) {
    const { id } = req.params;
    try {
        const message = await MessageModel.findById(id);
        if (!message) {
            return res.status(404).json({ message: 'Message not found' });
        }
        res.json(message);
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

async function updateMessage(req: Request, res: Response) {
    const { id } = req.params;
    try {
        const updatedMessage = await MessageModel.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedMessage) {
            return res.status(404).json({ message: 'Message not found' });
        }
        res.json(updatedMessage);
    } catch (error) {
        res.status(400).json({ message: error });
    }
}

async function deleteMessage(req: Request, res: Response) {
    const { id } = req.params;
    try {
        const deletedMessage = await MessageModel.findByIdAndDelete(id);
        if (!deletedMessage) {
            return res.status(404).json({ message: 'Message not found' });
        }
        res.json(deletedMessage);
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

export const messageController = {
    createMessage,
    getMessages,
    getMessage,
    updateMessage,
    deleteMessage,
};
import { prop, getModelForClass, Ref } from "@typegoose/typegoose";
import { User } from "./users.model";
import { Chat } from "./chat.model";
import { Types } from "mongoose";

export class Message {
    @prop({ ref: () => User })
    sender: Ref<User>;

    @prop({ type: () => String, trim: true })
    content: string;

    @prop({ ref: () => Chat })
    chat: Ref<Chat>;

    @prop({ type: () => Types.ObjectId, ref: () => User })
    readBy: Ref<User>[];

    createdAt?: Date;
    updatedAt?: Date;
}

export const MessageModel = getModelForClass(Message);

export default MessageModel;
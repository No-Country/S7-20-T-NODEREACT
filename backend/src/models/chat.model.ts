import { prop, getModelForClass, Ref } from "@typegoose/typegoose";
import { User } from "./users.model";
import { Message } from "./message.model";
import { Types } from "mongoose";

export class Chat {
    @prop({ type: () => String, trim: true })
    chatName: string;

    @prop({ type: () => Boolean, default: false })
    isGroupChat: boolean;

    @prop({ ref: () => User })
    users: Ref<User>[];

    @prop({ ref: () => Message })
    latestMessage: Ref<Message>;

    @prop({ type: () => Types.ObjectId, ref: () => User })
    groupAdmin: Ref<User>;

    createdAt?: Date;
    updatedAt?: Date;
}

export const ChatModel = getModelForClass(Chat);

export default ChatModel;
import { prop, Ref, getModelForClass } from "@typegoose/typegoose";
import  userModel  from './users.model';

class Chat {
    @prop({ trim: true })
    chatName?: string;

    @prop({ default: false })
    isGroupChat?: boolean;

    @prop({ ref: () => User })
    users?: Ref<userModel>[];

    @prop({ ref: () => Message })
    latestMessage?: Ref<Message>;

    @prop({ ref: () => User })
    groupAdmin?: Ref<User>;

    createdAt?: Date;
    updatedAt?: Date;
}
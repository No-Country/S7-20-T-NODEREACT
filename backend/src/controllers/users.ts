import { prop, getModelForClass } from "@typegoose/typegoose";

class User {
    @prop({required: true})
    firstName: string
    @prop({required: true})
    lastName: string
    @prop({ required: true, trim: true, unique: true})
    email: string
    @prop({ required: true, minlength: 6})
    password: string
}

const userModel = getModelForClass(User)
export default userModel
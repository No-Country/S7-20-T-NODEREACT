import { prop, getModelForClass, pre, DocumentType } from "@typegoose/typegoose";
import { Document } from "mongoose";
import bcrypt from 'bcryptjs';


export interface IUser extends Document {
    email: string;
    password: string;
    comparePassword: (password: string) => Promise<Boolean>
};
@pre<User>('save', async function (next) {
    if (this.isModified('password')) {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(this.password, salt);
        this.password = hashedPassword;
    }
    next();
})
    
export class User {
    @prop({ required: true, trim: true })
    firstName!: string;

    @prop({ required: true, trim: true })
    lastName!: string;

    @prop({ required: true, unique: true, lowercase: true, trim: true })
    email!: string;

    @prop({ required: true })
    password!: string;

    @prop()
    public googleId?: string;

    @prop()
    public githubId?: string;

    @prop()
    public facebookId?: string;

    public async comparePassword(this: DocumentType<User>, password: string): Promise<boolean> {
        return await bcrypt.compare(password, this.password);
    }

    // public generateGoogleAuthToken(): string {
    //     const token = jwt.sign({ _id: this._id, provider: 'google' }, process.env.JWT_SECRET!);
    //     return token;
    // }

    // public generateGitHubAuthToken(): string {
    //     const token = jwt.sign({ _id: this._id, provider: 'github' }, process.env.JWT_SECRET!);
    //     return token;
    // }

    // public generateFacebookAuthToken(): string {
    //     const token = jwt.sign({ _id: this._id, provider: 'facebook' }, process.env.JWT_SECRET!);
    //     return token;
    // }
}



const UserModel = getModelForClass(User);

export default UserModel;

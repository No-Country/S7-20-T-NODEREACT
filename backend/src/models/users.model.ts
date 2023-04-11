import { prop, getModelForClass, pre, DocumentType } from "@typegoose/typegoose";
import { Strategy as GoogleStrategy, Profile as ProfileGoogle } from 'passport-google-oauth20';
import { Strategy as GitHubStrategy, Profile as ProfileGithub } from 'passport-github2';
import { Strategy as FacebookStrategy, Profile as ProfileFacebook } from 'passport-facebook';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import passport from 'passport';

@pre<User>('save', async function (next) {
    if (this.isModified('password')) {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(this.password, salt);
        this.password = hashedPassword;
    }
    next();
})
    
export class User {
    @prop()
    public _id?: string

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

    public generateAuthToken(): string {
        const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET!);
        return token;
    }
    public generateGoogleAuthToken(): string {
        const token = jwt.sign({ _id: this._id, provider: 'google' }, process.env.JWT_SECRET!);
        return token;
    }

    public generateGitHubAuthToken(): string {
        const token = jwt.sign({ _id: this._id, provider: 'github' }, process.env.JWT_SECRET!);
        return token;
    }

    public generateFacebookAuthToken(): string {
        const token = jwt.sign({ _id: this._id, provider: 'facebook' }, process.env.JWT_SECRET!);
        return token;
    }
}



const UserModel = getModelForClass(User);

export default UserModel;
// Configuración de la autenticación con Google
passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID ||'620795611497-b0u8chs09vn7gc08rtco9gi7mppfgsjn.apps.googleusercontent.com',
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ||'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',
            callbackURL: 'http://localhost:5000/auth/google/callback',
        },
        async (accessToken: string, refreshToken: string,  profile: ProfileGoogle, done: (error: any, user?: any) => void ) => {
            const email = profile.emails?.[0].value;
            const existingUser = await UserModel.findOne({ googleId: profile.id });
            if (existingUser) {
                return done(null, existingUser);
            } else if (email) {
                const user = await UserModel.findOne({ email });
                if (user) {
                    user.googleId = profile.id;
                    await user.save();
                    return done(null, user);
                }
            }
            const newUser = new UserModel({
                name: profile.displayName,
                email,
                googleId: profile.id,
            });
            await newUser.save();
            return done(null, newUser); 
        }
    )
);

// Configuración de la autenticación con GitHub
passport.use(
    new GitHubStrategy(
        {
            clientID: process.env.GITHUB_CLIENT_ID || '9b6596363f17d0a17e87',
            clientSecret: process.env.GITHUB_CLIENT_SECRET || '40204ac5e7a7cb5667966ab046436775eea07846',
            callbackURL: 'http://localhost:5000/auth/github/callback',
        },
        async (accessToken: string, refreshToken: string,  profile: ProfileGithub, done: (error: any, user?: any) => void ) => {
            const email = profile.emails?.[0].value;
            const existingUser = await UserModel.findOne({ githubId: profile.id });
            if (existingUser) {
                return done(null, existingUser);
            } else if (email) {
                const user = await UserModel.findOne({ email });
                if (user) {
                    user.githubId = profile.id;
                    await user.save();
                    return done(null, user);
                }
            }
            const newUser = new UserModel({
                name: profile.displayName,
                email,
                githubId: profile.id,
            });
            await newUser.save();
            return done(null, newUser);
        }
    )
);
/*
// Configuración de la autenticación con Facebook
passport.use(
    new FacebookStrategy(
        {
            clientID: process.env.FACEBOOK_CLIENT_ID!,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
            callbackURL: 'http://localhost:5000/auth/facebook/callback',
            profileFields: ['id', 'displayName', 'email'],
        },
        async (accessToken: string, refreshToken: string,  profile: ProfileFacebook, done: (error: any, user?: any) => void ) => {
            const email = profile.emails?.[0].value;
            const existingUser = await UserModel.findOne({ facebookId: profile.id });
            if (existingUser) {
                return done(null, existingUser);
            } else if (email) {
                const user = await UserModel.findOne({ email });
                if (user) {
                    user.facebookId = profile.id;
                    await user.save();
                    return done(null, user);
                }
            }
            const newUser = new userModel({
                name: profile.displayName,
                email,
                facebookId: profile.id,
            });
            await newUser.save();
            return done(null, newUser);
        }
    )
);
*/
// @modelOptions({
//     schemaOptions: {
//         timestamps: true,
//         _id: false
//     }
// })

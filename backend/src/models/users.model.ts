import { prop, getModelForClass, modelOptions } from "@typegoose/typegoose";
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Strategy as GitHubStrategy } from 'passport-github2';
import { Strategy as FacebookStrategy } from 'passport-facebook';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import passport from 'passport';



const GOOGLE_CLIENT_ID = 'your-google-client-id';
const GOOGLE_CLIENT_SECRET = 'your-google-client-secret';
const GITHUB_CLIENT_ID = 'your-github-client-id';
const GITHUB_CLIENT_SECRET = 'your-github-client-secret';
const FACEBOOK_APP_ID = 'your-facebook-app-id';
const FACEBOOK_APP_SECRET = 'your-facebook-app-secret';



class User {
    @prop()
    public _id?: string

    @prop({ required: true })
    public name!: string;

    @prop({ required: true, unique: true })
    public email!: string;

    @prop({ required: true })
    public password!: string;

    @prop()
    public googleId?: string;

    @prop()
    public githubId?: string;

    @prop()
    public facebookId?: string;

    public async comparePassword(password: string): Promise<boolean> {
        return bcrypt.compare(password, this.password);
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

const userModel = getModelForClass(User)
export default userModel


// Configuración de la autenticación con Google
passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
            callbackURL: 'http://localhost:3000/auth/google/callback',
        },
        async (accessToken, refreshToken, profile, done) => {
            const email = profile.emails?.[0].value;
            const existingUser = await userModel.findOne({ googleId: profile.id });
            if (existingUser) {
                return done(null, existingUser);
            } else if (email) {
                const user = await userModel.findOne({ email });
                if (user) {
                    user.googleId = profile.id;
                    await user.save();
                    return done(null, user);
                }
            }
            const newUser = new userModel({
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
            clientID: process.env.GITHUB_CLIENT_ID!,
            clientSecret: process.env.GITHUB_CLIENT_SECRET!,
            callbackURL: 'http://localhost:3000/auth/github/callback',
        },
        async (accessToken, refreshToken, profile, done) => {
            const email = profile.emails?.[0].value;
            const existingUser = await userModel.findOne({ githubId: profile.id });
            if (existingUser) {
                return done(null, existingUser);
            } else if (email) {
                const user = await userModel.findOne({ email });
                if (user) {
                    user.githubId = profile.id;
                    await user.save();
                    return done(null, user);
                }
            }
            const newUser = new userModel({
                name: profile.displayName,
                email,
                githubId: profile.id,
            });
            await newUser.save();
            return done(null, newUser);
        }
    )
);

// Configuración de la autenticación con Facebook
passport.use(
    new FacebookStrategy(
        {
            clientID: process.env.FACEBOOK_CLIENT_ID!,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
            callbackURL: 'http://localhost:3000/auth/facebook/callback',
            profileFields: ['id', 'displayName', 'email'],
        },
        async (accessToken, refreshToken, profile, done) => {
            const email = profile.emails?.[0].value;
            const existingUser = await userModel.findOne({ facebookId: profile.id });
            if (existingUser) {
                return done(null, existingUser);
            } else if (email) {
                const user = await userModel.findOne({ email });
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
// @modelOptions({
//     schemaOptions: {
//         timestamps: true,
//         _id: false
//     }
// })

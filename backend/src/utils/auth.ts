import { Request, Response, NextFunction } from 'express';
import { Strategy as GoogleStrategy, Profile as ProfileGoogle } from 'passport-google-oauth20';
import { Strategy as GitHubStrategy, Profile as ProfileGithub } from 'passport-github2';
// import { Strategy as FacebookStrategy, Profile as ProfileFacebook } from 'passport-facebook';
import UserModel, {IUser} from '../models/users.model';
import jwt from 'jsonwebtoken';
import passport from 'passport';
import config from '../config/config';

const JWT_SECRET = config.jwtSecret;


export const verifyToken = (req: Request, res: Response, next: NextFunction): void => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, process.env.JWT_SECRET as string, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }
            req.user = user as string;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};

export const loginCallback = (req: Request & { user?: IUser }, res: Response): void => {
    if (!req.user) {
        res.status(401).send('Unauthorized');
        return;
    }

    const user = req.user as IUser;
    const token = jwt.sign({ id: user._id }, JWT_SECRET);
    res.redirect(`http://localhost:3000/login/success?token=${token}`);
};
// Configuración de la autenticación con Google
export const googleAuth = {
    passport: passport.use(
        new GoogleStrategy(
            {
                clientID: process.env.GOOGLE_CLIENT_ID || '620795611497-b0u8chs09vn7gc08rtco9gi7mppfgsjn.apps.googleusercontent.com',
                clientSecret: process.env.GOOGLE_CLIENT_SECRET || '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',
                callbackURL: 'http://localhost:5000/auth/google/callback',
            },
            async (accessToken: string, refreshToken: string, profile: ProfileGoogle, done: (error: any, user?: any) => void) => {
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
    )
};

// Configuración de la autenticación con GitHub
export const githubAuth = {passport: passport.use(
    new GitHubStrategy(
        {
            clientID: process.env.GITHUB_CLIENT_ID || '9b6596363f17d0a17e87',
            clientSecret: process.env.GITHUB_CLIENT_SECRET || '40204ac5e7a7cb5667966ab046436775eea07846',
            callbackURL: 'http://localhost:5000/auth/github/callback',
        },
        async (accessToken: string, refreshToken: string, profile: ProfileGithub, done: (error: any, user?: any) => void) => {
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
)
};
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
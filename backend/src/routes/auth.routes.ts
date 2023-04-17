import { Router } from 'express'
import { UserController  } from '../controllers/users.controllers'
import { googleAuth, githubAuth } from '../utils/auth'
import { IUser } from '../models/users.model';
import passport from 'passport'
import jwt from 'jsonwebtoken';
import config from '../config/config';

const JWT_SECRET = config.jwtSecret;

const router = Router()


router.post('/signup', UserController.signUp)
router.post('/signin', UserController.signIn)
router.get('/auth/github', githubAuth.passport.authenticate('github'))
router.get('/auth/github/callback', passport.authenticate('github', { failureRedirect: '/login' }), (req, res) => {
    if (!req.user) {
        res.status(401).send('Unauthorized');
        return;
    }

    const user = req.user as IUser;
    const token = jwt.sign({ id: user._id }, JWT_SECRET);
    res.redirect(`http://localhost:3000/login/success?token=${token}`);
});
router.get('/auth/google', googleAuth.passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/auth/google/callback',
    googleAuth.passport.authenticate('google', { failureRedirect: '/signin' }),
    function (req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
    }
);

export default router

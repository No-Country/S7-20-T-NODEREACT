import { Router } from 'express'
import { signIn, signUp } from '../controllers/users.controllers'
import { googleAuth, githubAuth } from '../utils/auth'
import passport from 'passport'

googleAuth.passport.authenticate('google')

const router = Router()


router.post('/signup', signUp)
router.post('/signin', signIn)
router.get('/auth/github', githubAuth.passport.authenticate('github'))
router.get('/auth/github/callback',
    passport.authenticate('github', { failureRedirect: '/signin' }),
    function (req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
    });
router.get('/auth/google', googleAuth.passport.authenticate('google'))
router.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/signin' }),
        function (req, res) {
            // Successful authentication, redirect home.
            res.redirect('/');
        });
export default router

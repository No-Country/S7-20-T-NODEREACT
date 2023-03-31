import { Router, Request, Response } from 'express';
import { getAllUsers, getUserByEmail } from '../controllers/users.controllers'
const router = Router()

router.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    msg: 'todo ok'
  })
})

router.get('/users/me', getUserByEmail)
router.get('/users', getAllUsers)
export {router}
import { Router, Request, Response } from 'express';
import { UserController } from '../controllers/users.controllers';
const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    msg: 'todo ok',
  });
});

router.get('/users/me', UserController.getUser);
router.get('/users', UserController.getUsers);
export { router };

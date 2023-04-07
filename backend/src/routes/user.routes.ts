import { Router, Request, Response } from 'express';

export const router = Router()

router.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    msg: 'todo ok'
  })
})

router.get('/ok', (req: Request, res: Response) => {
  res.status(200).json({
    msg: 'pruebas de nodemon'
  })
})
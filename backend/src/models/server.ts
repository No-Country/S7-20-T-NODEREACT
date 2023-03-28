import express, {Express} from 'express';
import cors from 'cors'
import { router } from '../routes/user.routes'

export class Server {
  app: Express;
  port: number | string;
  usersPath: string;

  constructor() {

    this.app = express();
    
    this.port = process.env.PORT || 8080;

    //* Base Route
    this.usersPath = '/api/v1';

    this.middlewares();

    this.routes();
  }

   middlewares() {
    this.app.use(cors());

    this.app.use(express.json());
  }

  routes() {
    this.app.use(this.usersPath, router);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('Server running in port: ', this.port);
    });
  }
}


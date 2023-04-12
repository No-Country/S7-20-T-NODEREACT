import express, {Express} from 'express';
import cors from 'cors'
import { router } from '../routes/user.routes'
import authRoutes from '../routes/auth.routes'
import { dbConnection } from '../config/mongo';

export class Server {
  app: Express;
  port: number | string;
  usersPath: string;

  constructor() {

    this.app = express();
    this.port = process.env.PORT || 8080;

    
    //* Base Route
    this.usersPath = '/api/v1';

    this.connectDB();

    this.middlewares();

    this.routes();
  }

  //* Database Connection
  async connectDB() {
    await dbConnection();
  }


   middlewares() {
    this.app.use(cors());

    this.app.use(express.json());
  }

  routes() {
    this.app.use(this.usersPath, router);
    this.app.use(this.usersPath, authRoutes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('Server running in port: ', this.port);
    });
  }


}


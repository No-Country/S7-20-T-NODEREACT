import express, { Express } from 'express';
import cors from 'cors';
import { router } from '../routes/user.routes';
import authRoutes from '../routes/auth.routes';
import chatRoutes from '../routes/chat.routes';
import messageRoutes from '../routes/message.routes'
import { dbConnection } from '../config/mongo';

export class Server {
  app: Express;
  port: number | string;
  mainPath: string;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || 8080;

    //* Base Route
    this.mainPath = '/api/v1';

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
    this.app.use(this.mainPath, router);
    this.app.use(this.mainPath, authRoutes);
    this.app.use(this.mainPath, chatRoutes);
    this.app.use(this.mainPath, messageRoutes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('Server running in port: ', this.port);
    });
  }
}

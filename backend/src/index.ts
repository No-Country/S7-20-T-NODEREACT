import dotenv from 'dotenv';
import User from './models/users.model'
import { Server } from './models/server'


dotenv.config()

const server: Server = new Server();

server.listen()


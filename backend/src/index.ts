import dotenv from 'dotenv';
import User from './controllers/users'
import {Server}from './models/server'


dotenv.config()

const server:Server = new Server();

server.listen()


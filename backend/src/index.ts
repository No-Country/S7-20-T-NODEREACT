import dotenv from 'dotenv';
import {Server}from './models/server'
import db from './config/mongo'

dotenv.config()

const server:any = new Server();

db().then(()=> console.log('connected DB mongo'))

server.listen()
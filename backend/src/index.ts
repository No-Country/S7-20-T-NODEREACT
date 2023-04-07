import dotenv from 'dotenv';
import express from 'express';
import {Server}from './models/server'

dotenv.config()

const server:any = new Server();

server.listen()
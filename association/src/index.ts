import * as http from 'http';

import "reflect-metadata";
import * as express from 'express';
import { json } from "express";
import * as cors from 'cors';
import * as morgan from 'morgan';
import { Server } from 'socket.io'
import initSocket from './routes'

const app = express()

// using various middlewares
app.use(json())
app.use(cors())
app.use(morgan("dev"))

// creating an http server to use with socket.io
const server = http.createServer(app);

// initialising socket.io server
initSocket(new Server(server).of('/socket'));

// starting http server
server.listen(process.env.PORT || 8000, () => {
    console.log("server started.")
})
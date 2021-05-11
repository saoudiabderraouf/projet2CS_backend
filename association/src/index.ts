import { createServer } from 'http';

import "reflect-metadata";
import * as express from 'express';
import { json } from "express";
import * as cors from 'cors';
import * as morgan from 'morgan';
import { Server, ServerOptions } from 'socket.io'
import initSocket from './routes'

const app = express()

// using various middlewares
app.use(json())
app.use(cors())
app.use(morgan("dev"))

// creating an http server to use with socket.io
const server = createServer(app);

// initialising socket.io server
const options: Partial<ServerOptions> = {
    path: "/socket",
    serveClient: false
};
initSocket(new Server(server, options));

// starting http server
server.listen(process.env.PORT || 8000, () => {
    console.log("server started.")
})
import { Express } from 'express'
import { RedisClient } from 'redis';
import { Server } from 'socket.io';
import { getConnections, redisErrorHandler } from '../controllers';
import { Auth, Log } from '../middlewares'
import connection from './connection';

export default function (io: Server, app: Express, redis: RedisClient) {
    io.use(Log);
    io.use(Auth);

    io.on('connection', connection);

    redis.on("error", redisErrorHandler);

    app.get("/", function (_req, res) {
        res.send(getConnections(redis));
    })
};
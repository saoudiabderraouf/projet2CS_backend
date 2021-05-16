import { Express } from 'express'
import { RedisClient } from 'redis';
import { Server } from 'socket.io';
import { getConnections, redisErrorHandler } from '../controllers';
import getVehicules from '../controllers/getVehicules';
import { Auth, Log } from '../middlewares'
import connection from './connection';

export default function (io: Server, app: Express, redis: RedisClient) {
    io.use(Log);
    io.use(Auth);

    io.on('connection', connection(redis));

    redis.on("error", redisErrorHandler);

    app.get("/", async function (_req, res) {
        const result = await getConnections(redis)
        res.send(result);
    })

    app.get("/vehicules", async function (_req, res) {
        const result = await getVehicules(redis)
        res.send(result);
    })
};
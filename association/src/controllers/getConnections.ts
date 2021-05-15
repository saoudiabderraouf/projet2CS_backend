import { RedisClient } from "redis";
import { Server } from "socket.io";

export default function (redis: RedisClient | undefined) {
    if (redis === undefined)
        return ["Please check the connection to redis."];

    return redis.smembers("connections")
}
import { RedisClient } from 'redis';
import { Socket } from 'socket.io';
import { connect, openConnection, disconnect } from '../controllers/initialize';

export default function (redis: RedisClient) {
    
    return (socket: Socket) => {
        socket.on("connected vehicule", connect(redis));
    
        socket.on("demande vehicule", openConnection(redis));
    
        socket.on("disconnect", disconnect(redis));
    } 
}
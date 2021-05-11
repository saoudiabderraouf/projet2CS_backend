import { Server } from 'socket.io';
import { Auth, Log } from '../middlewares'
import connection from './connection';


export function getConnections(io: Server) {

}

export default function (io: Server) {
    io.use(Log);
    io.use(Auth);

    io.on('connection', connection);
};
import { Socket } from 'socket.io';
import { connect, openConnection } from '../controllers/initialize';

export default function (socket: Socket) {
    socket.on("connect", connect);

    socket.on("open", openConnection);
}
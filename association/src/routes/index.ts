import { Namespace } from 'socket.io';
import { connect, openConnection } from '../controllers/initialize';


export default function (io: Namespace) {
    io.on('connection', function (socket) {
        socket.on("connect", connect);

        socket.on("open", openConnection);
    })
};
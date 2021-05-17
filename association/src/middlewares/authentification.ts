import { Socket } from "socket.io";
import { ExtendedError } from "socket.io/dist/namespace";

/**
 * this middleware is used to check authentification of users before starting or using a vehicule
 */
export default function (_socket: Socket, next: (err?: ExtendedError | undefined) => void) {
    next();
}
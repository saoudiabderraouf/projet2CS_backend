import { RedisClient } from "redis"
import { Socket } from "socket.io";

interface VehiculeData {
    id: Number,
}

interface AssociationData {
    idLocataire: Number,
    idVehicule: Number
}

export const connect = function (this: Socket, redis: RedisClient) {
    
    return ({id}: VehiculeData) => {
        let payload = {id, socketId: this.id};
        console.log("connected vehicule of id: " + this.id);
        redis.sadd("vehicules", JSON.stringify(payload));
    }
}

export const openConnection = function (this: Socket, redis: RedisClient) {
    
    
    return ({idLocataire, idVehicule}: AssociationData) => {
        redis.smembers("vehicules", (err, vehicules) => {
            if (err) {
                console.log("[association]: open vehicule error, " + err.message);
            }

            let isRegistered = false;
            for (let i in vehicules) {
                let vehicule = JSON.parse(i);
                if (vehicule.id === idVehicule) {
                    isRegistered = true;
                    break;
                }
            }


            if (isRegistered) {
                //if (vehicule.closeTo(locataire))

                redis.sadd("connections", JSON.stringify({idLocataire, idVehicule}));
                this.emit("started link", {idLocataire, idVehicule})
            }
            else {
                // error
            }    
        })
    }
}

export const disconnect = function (this: Socket, redis: RedisClient) {
    
    return async () => {
        redis.smembers("vehicules", (err, members) => {
            if (err) {
                console.log("[association]: vehicule disconnect error, " + err.message);
            } else {
                for (let i of members) {
                    let member = JSON.parse(i);
                    if (member.socketId === this.id) {
                        console.log("disconnected vehicule of id: " + this.id);
                        redis.srem("vehicules", i);
                    }
                }
            }
        });
    }
}

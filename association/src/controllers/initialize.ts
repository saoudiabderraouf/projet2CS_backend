import { RedisClient } from "redis"

interface VehiculeData {
    id: Number,
}

interface AssociationData {
    idLocataire: Number,
    idVehicule: Number
}

export const connect = function (redis: RedisClient) {
    
    
    return ({id}: VehiculeData) => {
        redis.sadd("vehicules", id.toString());
    }
}

export const openConnection = function (redis: RedisClient) {
    
    
    return ({idLocataire, idVehicule}: AssociationData) => {
        let isRegistered = redis.sismember("vehicules", idVehicule.toString());

        /** TODO: check locataire and position of locataire from vehicule */
        if (isRegistered)
            redis.sadd("connections", JSON.stringify({idLocataire, idVehicule}));
        else {
            // error
        }
    }
}

export const disconnect = function (redis: RedisClient) {
    
    
    return () => {
    }
}

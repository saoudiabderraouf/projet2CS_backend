import { Request, Response } from "express";
import { VehiclePosition } from "../entity/VehiclePosition";

export const get =  (_req: Request, res: Response) => {
    res.end("geolocation service is up and running!");
}

/**
 * Retourne le trajet d'un véhicule pour une location donnée (liste de latitudes et longitudes)
 * @param req Requête HTTP contenant l'identifiant de la location
 * @param res Réponse JSON contenant la liste des latitudes et longitudes
 */
export async function getVehiclePosition(req: Request, res: Response) {
    const position = await VehiclePosition.find({  
        where: { idRental: req.body.idRental },
        relations: ["trajet"]
    });
    res.json(position)
}
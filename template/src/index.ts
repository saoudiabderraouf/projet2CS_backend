import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "./entity/User";
import * as express from 'express';
import { Request, Response, json } from "express";
import * as cors from 'cors';
import * as morgan from 'morgan';

const app = express()

app.use(json())
app.use(cors())
app.use(morgan("dev"))

app.get("/", (_req: Request, res: Response) => {
    res.end("Hello there this is my new service.");
});

app.get("/user", async (_req, res) => {
    const users = await User.find();
    res.json(users)
})

app.post("/user", async (req, res) => {
    const user = User.create({
        firstName: req.body.first,
        lastName: req.body.last,
        age: req.body.age
    })

    await user.save()
    res.send(user)
})

createConnection().then(async _connection => {   
    app.listen(8000, () => {
        console.log("server started.")
    })
    

}).catch(error => console.log(error));

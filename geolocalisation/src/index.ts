import "reflect-metadata";
import {createConnection} from "typeorm";

import * as express from 'express';
import { Request, Response, json } from "express";
import * as cors from 'cors';
import * as morgan from 'morgan';
import Router from './routes/'

const app = express()

app.use(json())
app.use(cors())
app.use(morgan("dev"))

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(Router)

createConnection().then(async _connection => {   
    app.listen(8000, () => {
        console.log("geolocation service is up and running on port 8000!")
    })

}).catch(error => console.log(error));

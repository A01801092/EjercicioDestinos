import Server from './provider/Server';
import {PORT, NODE_ENV} from './config';
import express from 'express';
import cors from 'cors';

//Importar controllers
import DestinoController from './controllers/DestinoController';
//Integrar el proyecto

const server: Server = new Server({
    port: PORT,
    env: NODE_ENV,
    middelwares: [
        express.json(),
        express.urlencoded({extended: true}),
        cors()
    ],
    controllers: [
        DestinoController.instance
    ]
})
server.init();
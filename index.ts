import Server from "./classes/server";
import { router } from "./routes/router";
import bodyParser from 'body-parser';
import cors from 'cors';

const server = new Server();

server.app.use(bodyParser.urlencoded({extended: true}));
server.app.use(bodyParser.json());

// Cors
server.app.use(cors({origin: true, credentials: true}));

//Rutas de servicio
server.app.use('/', router);

server.start(() => {
    console.log(`servidor corriendo en el puerto ${server.port}`);
})
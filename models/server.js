const express = require('express')
var cors = require('cors');
const { dbConnection } = require('../database/config');


class Server {

    constructor() {
        this.app = express();
        this.PORT = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        //conectar a BD
        this.conectarDB();

        //Middlewares
        this.middlewares();

        //lectura y parseo del body

        this.app.use(express.json());

        //rutas de la aplicacion 


        this.routes();
    }

    async conectarDB() {
        await dbConnection()

    }

    middlewares() {
        //cors
        this.app.use(cors())

        //directorio publico
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.usuariosPath, require('../routes/usuarios'))
    }

    listen() {

        this.app.listen(this.PORT, () => {
            console.log('servidor corriendo en el puerto', this.PORT);
        });
    }

}


module.exports = Server;
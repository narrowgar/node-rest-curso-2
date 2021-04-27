const express = require('express')
var cors = require('cors')


class Server {

    constructor() {
        this.app = express();
        this.PORT = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        //Middlewares
        this.middlewares();

        //lectura y parseo del body

        this.app.use(express.json());

        //rutas de la aplicacion 


        this.routes();
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
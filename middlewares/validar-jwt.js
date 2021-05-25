const { response } = require('express')
const jwt = require('jsonwebtoken');
const Usuario = require('../models/usuario');



const validarJWT = async(req, res = response, next) => {
    const token = req.header('x-token');

    if (!token) {
        return res.status(401).json({
            msg: 'no hay json en la peticion'
        });
    }

    try {

        const { uid } = jwt.verify(token, process.env.SECRETORPRYVATEKEY);

        // leer el usuario que corresponde al uid
        const usuario = await Usuario.findById(uid);

        //usuario existe en db 
        if (!usuario) {
            return res.status(401).json({
                msg: 'Token no valido - usuario no existe en DB'
            })
        }
        //verificar si el uid tiene estado true
        if (!usuario.estado) {
            return res.status(401).json({
                msg: 'Token no valido - usuario con estado false'
            })
        }

        req.usuario = usuario;

        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({
            msg: 'token no valido'
        })
    }
}

module.exports = {
    validarJWT
}
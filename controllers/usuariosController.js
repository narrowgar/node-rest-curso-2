const { response, request } = require('express');



const usuariosGet = (req = request, res = response) => {

    const { q, nombre = 'no name', apikey, page = 1, limit } = req.query;

    res.status(200).json({
        msj: 'get api',
        q,
        nombre,
        apikey,
        page,
        limit
    });
}

const usuariosPost = (req, res = response) => {

    const body = req.body;

    res.status(200).json({
        msj: 'post api,'
    });
}

const usuariosPut = (req, res = response) => {

    const id = req.params.id;

    res.status(200).json({
        msj: 'put api',
        id
    });
}

const usuariosPatch = (req, res = response) => {

    res.status(200).json({
        msj: 'patch api'
    });
}

const usuariosDelete = (req, res = response) => {

    res.status(200).json({
        msj: 'delete api'
    });
}



module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}
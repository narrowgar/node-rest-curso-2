const Role = require('../models/role')
const Usuario = require('../models/usuario')

const esRolValido = async(rol = '') => {
    const existeRol = await Role.findOne({ rol });
    if (!existeRol) {
        throw new Error(`El rol ${rol} no esta registrado en la BD`);
    }
}

const emailExiste = async(correo = '') => {
    const existeEmail = await Usuario.findOne({ correo }); //busca si el correo se encuentra en la db
    if (existeEmail) {
        throw new Error(`El correo ${correo} ya esta registrado`)
    }
}

const existeUsuarioPorId = async(id = '') => {
    const existeUsuario = await Usuario.findById(id); //busca si el correo se encuentra en la db
    if (!existeUsuario) {
        throw new Error(`no existe el usuario con el id ${id}`)
    }
}

module.exports = {
    esRolValido,
    emailExiste,
    existeUsuarioPorId
}
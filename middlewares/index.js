const validacampos = require('../middlewares/validar-campos')
const ValidarJWT = require('../middlewares/validar-jwt')
const ValidaRoles = require('../middlewares/validar-roles')

module.exports = {
    ...validacampos,
    ...ValidarJWT,
    ...ValidaRoles
}
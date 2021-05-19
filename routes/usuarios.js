const { Router } = require('express');
const { check } = require('express-validator');

const { esRolValido, emailExiste, existeUsuarioPorId } = require('../helpers/db-validators');
const { ValidarCampos } = require('../middlewares/validar-campos');

const {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
} = require('../controllers/usuariosController');

const router = Router();

router.get('/', usuariosGet);

router.post('/', [
        check('correo', 'el correo no es valido').isEmail(),
        check('password', 'el password debe ser mas de 6 letras').isLength({ min: 6 }),
        check('nombre', 'el nombre es obligatorio').not().isEmpty(),
        //check('rol', 'no es un rol valido').isIn(['ADMIN_ROLE', 'USER_ROLE']),
        check('rol').custom(esRolValido),
        check('correo').custom(emailExiste),
        ValidarCampos
    ],
    usuariosPost);
router.put('/:id', [
        check('id', 'no es un ID valido').isMongoId(),
        check('id').custom(existeUsuarioPorId),
        check('rol').custom(esRolValido),
        ValidarCampos
    ],
    usuariosPut);

router.patch('/', usuariosPatch);

router.delete('/:id', [
        check('id', 'no es un ID valido').isMongoId(),
        check('id').custom(existeUsuarioPorId),
        ValidarCampos
    ],
    usuariosDelete);


module.exports = router;
const { Router } = require('express');
const { check } = require('express-validator');

const { login } = require('../controllers/authController');
const { ValidarCampos } = require('../middlewares/validar-campos');


const router = Router();

router.post('/login', [
    check('correo', 'El correo es obligatorio').isEmail(),
    check('password', 'la password es obligatoria').not().isEmpty(),
    ValidarCampos
], login);


module.exports = router;
const { Router } = require('express');
const { check } = require('express-validator');
const { usuariosGet, usuarioPut, usuariosPost, usuariosDelete, usuariosPatch } = require('../controllers/usuarios.controller');
const { validarCampos } = require('../middlewares/validar-campos');
const Role = require('../models/rol');

const router = Router();

// Mandamos la referencia, no la ejecutamos
router.get('/', usuariosGet);

router.put('/:id', usuarioPut);

// Definimos un middleware para la validación que estará acumulando los errores para para response
router.post('/', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'La contraseña debe de ser más de 6 letras').isLength({ min: 6 }),
    check('correo', 'El correo no es válido').isEmail(),
    // check('rol', 'No es un rol válido').isIn(['ADMIN_ROLE', 'USER_ROLE'])
    check('rol').custom(async (rol = '') => {
        const existeRol = await Role.findOne({ rol });
        if (!existeRol) {
            throw new Error(`El rol ${rol} no está registrado en la base de datos`);
        }
    }),
    validarCampos
], usuariosPost);

router.delete('/', usuariosDelete);

router.patch('/', usuariosPatch);

module.exports = router;
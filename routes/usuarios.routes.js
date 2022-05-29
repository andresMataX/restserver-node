const { Router } = require('express');
const { check } = require('express-validator');
const { usuariosGet, usuarioPut, usuariosPost, usuariosDelete, usuariosPatch } = require('../controllers/usuarios.controller');

const router = Router();

// Mandamos la referencia, no la ejecutamos
router.get('/', usuariosGet);

router.put('/:id', usuarioPut);

// Definimos un middleware para la validación que estará acumulando los errores para para response
router.post('/', [
    check('correo', 'El correo no es válido').isEmail(),
], usuariosPost);

router.delete('/', usuariosDelete);

router.patch('/', usuariosPatch);

module.exports = router;
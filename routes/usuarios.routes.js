const { Router } = require('express');
const { usuariosGet, usuarioPut, usuariosPost, usuariosDelete, usuariosPatch } = require('../controllers/usuarios.controller');

const router = Router();

// Mandamos la referencia, no la ejecutamos
router.get('/', usuariosGet);

router.put('/:id', usuarioPut);

router.post('/', usuariosPost);

router.delete('/', usuariosDelete);

router.patch('/', usuariosPatch);

module.exports = router;
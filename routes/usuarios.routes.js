const { Router } = require('express');
const { usuariosGet } = require('../controllers/usuarios.controller');

const router = Router();

// Mandamos la referencia
router.get('/', usuariosGet);

router.put('/', (req, res) => {
    res.json({
        msg: 'put API'
    });
});

router.post('/', (req, res) => {
    res.json({
        msg: 'post API'
    });
});

router.delete('/', (req, res) => {
    res.json({
        msg: 'delete API'
    });
});

router.patch('/', (req, res) => {
    res.json({
        msg: 'patch API'
    });
});


module.exports = router;
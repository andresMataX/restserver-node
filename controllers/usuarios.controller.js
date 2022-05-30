const { response, request } = require("express");
const bcryptjs = require('bcryptjs');

const Usuario = require('../models/usuario');

const usuariosGet = (req = request, res = response) => {

    const { nombre = 'No Name', apellido } = req.query;

    res.json({
        msg: 'get API - controlador',
        nombre,
        apellido
    });
}

const usuarioPut = async (req = request, res = response) => {

    const { id } = req.params;
    const { password, google, correo, ...resto } = req.body;

    // TODO: Validar contra base de datos
    if (password) {
        const salt = bcryptjs.genSaltSync();
        resto.password = bcryptjs.hashSync(password, salt);
    }

    const usuario = await Usuario.findByIdAndUpdate(id, resto);

    res.json({
        usuario
    });
}

const usuariosPost = async (req = request, res = response) => {

    const { nombre, correo, password, rol } = req.body;

    const usuario = new Usuario({ nombre, correo, password, rol });

    // Encriptar la contraseña    
    const salt = bcryptjs.genSaltSync(); // 10 vueltas por defecto
    usuario.password = bcryptjs.hashSync(password, salt);

    // Guardar en la base de datos
    await usuario.save();

    res.json({
        usuario
    });
}

const usuariosPatch = (req = request, res = response) => {
    res.json({
        msg: 'patch API - controlador'
    });
}

const usuariosDelete = (req = request, res = response) => {
    res.json({
        msg: 'delete API - controlador'
    });
}

module.exports = {
    usuariosGet,
    usuarioPut,
    usuariosPost,
    usuariosPatch,
    usuariosDelete
}
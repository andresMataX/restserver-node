const { response, request } = require("express");
const bcryptjs = require('bcryptjs');

const Usuario = require('../models/usuario');
const { validationResult } = require("express-validator");

const usuariosGet = (req = request, res = response) => {

    const { nombre = 'No Name', apellido } = req.query;

    res.json({
        msg: 'get API - controlador',
        nombre,
        apellido
    });
}

const usuarioPut = (req = request, res = response) => {

    const { id } = req.params;

    res.json({
        msg: 'put API - controlador',
        id
    });
}

const usuariosPost = async (req = request, res = response) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors);
    }

    const { nombre, correo, password, rol } = req.body;

    const usuario = new Usuario({ nombre, correo, password, rol });

    // Verificar si el correo existe
    const existeEmail = await Usuario.findOne({ correo });
    if (existeEmail) {
        return res.status(400).json({
            msg: 'Ese correo ya está registrado'
        });
    }

    // Encriptar la contraseña
    // Número de vueltas que será la encriptación (10 por defecto)
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password, salt);

    // Guardar en la base de datos
    await usuario.save();

    res.json({
        msg: 'post API - controlador',
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
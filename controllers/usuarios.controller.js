const { response, request } = require("express");
const Usuario = require('../models/usuario');

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

const usuariosPost = (req = request, res = response) => {

    const body = req.body;

    const usuario = new Usuario(body);
    usuario.save();

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
const { response } = require("express");

const usuariosGet = (req, res = response) => {
    res.json({
        msg: 'get API - controlador'
    });
}

const usuarioPut = (req, res = response) => {
    res.json({
        msg: 'put API - controlador'
    });
}

const usuariosPost = (req, res = response) => {
    res.json({
        msg: 'post API - controlador'
    });
}

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - controlador'
    });
}

const usuariosDelete = (req, res = response) => {
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
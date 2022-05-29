const { validationResult } = require("express-validator");


// Se pasa la respuesta y la petición, así como una función que se ejecutará cuando pase el middleware
const validarCampos = (req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors);
    }

    next();
}

module.exports = {
    validarCampos
}
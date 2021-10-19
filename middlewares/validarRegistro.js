const { body } = require("express-validator");

module.exports = [
    body('nombre').notEmpty().withMessage('Debes completar el campo nombre').isEmail(),
    body('correo').notEmpty().withMessage('Debes completar el campo correo electrónico'),
    body('clave').notEmpty().withMessage('Debes completar el campo contraseña'),
    body('confirmarClave').notEmpty().withMessage('Debes completar el campo confirmar contraseña')
]
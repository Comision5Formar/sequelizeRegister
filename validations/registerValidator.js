const {check, body} = require('express-validator')

module.exports = [
    check('nombre')
    .notEmpty()
    .withMessage('El nombre es requerido'),

    check('email')
    .isEmail()
    .withMessage('Debes escribir un email válido'),

    check('pass')
    .isLength({
        min : 6,
        max : 12
    })
    .withMessage('La contraseña debe tener un min de 6 y max 12 caracteres'),

    body('pass2').custom((value,{req})=> value !== req.body.pass ? false : true)
    .withMessage('Las contraseñas no coinciden'),

    check('bases')
    .isString('on')
    .withMessage('Debes aceptar las bases y condiciones ')

]
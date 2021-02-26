const {validationResult} = require('express-validator')


module.exports = {
    register : (req,res) => {
        res.render('register')
    },
    processRegister : (req,res) => {
        let errores = validationResult(req);

        if(errores.isEmpty()){
            res.send(req.body)
        }else{
            return res.render('register',{
                errores : errores.mapped(),
                old: req.body
            })
        }
    },
    login : (req,res) => {
        res.render('login')
    },
    processLogin : (req,res) => {
        res.send(req.body)
    },
    logout : (req,res) => {

    },
    profile : (req,res) => {
        res.render('profile')
    }
}
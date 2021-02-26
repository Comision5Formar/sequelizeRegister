const {validationResult} = require('express-validator');

const db = require('../database/models');
const bcrypt = require('bcrypt');
const { rawListeners } = require('../app');

module.exports = {
    register : (req,res) => {
        res.render('register')
    },
    processRegister : (req,res) => {
        let errores = validationResult(req);

        if(errores.isEmpty()){
            
            const {nombre, email, pass} = req.body;

            db.Usuarios.create({
                name : nombre.trim(),
                email,
                pass : bcrypt.hashSync(pass,12)
            })
            .then(()=>res.redirect('/users/login'))
            .catch(error => res.send(error))
            
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
        let errores = validationResult(req);

        if(errores.isEmpty()){

            const {email, pass, recordar} = req.body;

            db.Usuarios.findOne({
                where : {
                    email
                }
            })
            .then(user => {
                if(user && bcrypt.compareSync(pass.trim(),user.pass)){
                    req.session.userLogin = {
                        id : user.id,
                        name : user.name,
                        avatar : user.avatar
                    }

                    if(recordar){
                        res.cookie('userComision5',req.session.userLogin, {
                            maxAge : 1000 * 60
                        })
                    }
                    return res.redirect('/')
                }
                return res.render('login',{
                    errores : {
                        invalid : {
                            msg : "Credenciales inválidas"
                        }
                    }
                })
            })

        }else{
            return res.render('login', {
                errores : errores.mapped(),
                old: req.body
            })
        }
    },
    logout : (req,res) => {
        req.session.destroy()
        if(req.cookies.userComision5){
            res.cookie('userComision5','',{maxAge:-1})
        }
        res.redirect('/')
    },
    profile : (req,res) => {
        res.render('profile')
    }
}
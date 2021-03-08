const {validationResult} = require('express-validator');
const db = require('../database/models');
const bcrypt = require('bcrypt');


module.exports = {
    register : (req,res) => {
        res.render('register')
    },
    processRegister : (req,res) => {
        let errores = validationResult(req);

        if(errores.isEmpty()){
            const {nombre, email, pass} = req.body;
            db.User.create({
                name : nombre.trim(),
                email,
                pass : bcrypt.hashSync(pass,12),
                rol : "user"
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

            db.User.findOne({
                where : {
                    email
                }
            })
            .then(user => {
                if(user && bcrypt.compareSync(pass, user.pass)){
                    req.session.userLogin = {
                        id : user.id,
                        name : user.name,
                        rol : user.rol,
                        avatar : user.avatar
                    }
                    if(recordar){
                        res.cookie('userComision4',req.session.userLogin, {
                            maxAge : 1000 * 60
                        })
                    }
                    return res.redirect('/')
                }else {
                    return res.render('login',{
                        errores :{
                            invalid : {
                                msg : "Credenciales inválidas"
                            }
                        }
                    })
                }
            })
        }else{
            return res.render('login',{
                errores : errores.mapped(),
                old : req.body
            })
        }
    },
    logout : (req,res) => {
        req.session.destroy();
        if(req.cookies.userComision4){
            res.cookie('userComision4','', {maxAge : -1})
        }
        return res.redirect('/')
    },
    profile : (req,res) => {
        res.render('profile')
    }
}
var express = require('express');
var router = express.Router();

const {register,processRegister,login,processLogin,logout,profile} = require('../controllers/usersController');

const registerValidator = require('../validations/registerValidator');

router.get('/register',register);
router.post('/register',registerValidator, processRegister);

router.get('/login',login);
router.post('/login',processLogin);
router.get('/logout',logout);

router.get('/profile',profile);

module.exports = router;

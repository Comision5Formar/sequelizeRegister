var express = require('express');
var router = express.Router();

const {list,remove} = require('../controllers/moviesController');

/* GET home page. */
router.get('/list', list);
router.post('/remove/:id',remove)

module.exports = router;

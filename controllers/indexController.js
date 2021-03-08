const db = require('../database/models')
module.exports = {
    home : (req,res) => {
        db.Movie.findAll({
            limit : 12
        })
        .then(peliculas => {
            res.render('index',{
                peliculas,
            })
        })
        .catch(error => res.send(error))
    }
}
const db = require('../database/models')

module.exports = {
    add : (req,res) => {

    },
    list : (req,res) => {
        db.Movie.findAll({
            include : 
            {
                association : "genre"
            }
        })
        .then(peliculas => {
            res.render('list',{
                peliculas,
            })
        })
    },
    remove : (req,res) => {
        db.Movie.destroy({
            where : {
                id : req.params.id
            }
        })
        .then(()=>{
            res.redirect('/movies/list')
        })
        .catch(error => res.send(error))
    }
}
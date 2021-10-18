const db = require("../database/models");

module.exports = {
    detalle: async (req,res) => {
        let pelicula = await db.Movie.findByPk(req.params.id, {include: [{association: "genre"}, {association: "actors"}]});

        return res.render("detalleDePelicula", { pelicula })
    },
    crear: async (req,res) => {
        let generos = await db.Genre.findAll();
        let actores = await db.Actor.findAll();

        return res.render("crearPelicula", { generos, actores })
    },
    guardar: async (req,res) => {
        try{
            let actores = req.body.actores 
            
            await db.Movie.create({
                title: req.body.titulo,
                rating: req.body.rating,
                awards: req.body.premios,
                release_date: req.body.fechaDeEstreno,
                length: req.body.duracion,
                genre_id: req.body.genero
        });

            let peliculas = await db.Movie.findAll();
            let peliculaReciente = peliculas[peliculas.length - 1];
            
            await peliculaReciente.setActors(actores)

            return res.redirect("/pelicula/detalle/" + peliculaReciente.id)
        }
        catch (error) {
            console.log(error)
            res.send(error);
        }
    },
    editar: async (req,res) => {
        let pelicula = await db.Movie.findByPk(req.params.id);
        let generos = await db.Genre.findAll();
        let actores = await db.Actor.findAll();

        return res.render("editarPelicula", { pelicula, generos, actores })
    },
    actualizar: async (req,res) => {
        try{
            let actores = req.body.actores 
            
            let pelicula = await db.Movie.findByPk(req.params.id);

            await db.Movie.update({
                title: req.body.titulo,
                rating: req.body.rating,
                awards: req.body.premios,
                release_date: req.body.fechaDeEstreno,
                length: req.body.duracion,
                genre_id: req.body.genero
        },{ where: { id: req.params.id }});
            
            await pelicula.setActors(actores)
            
            return res.redirect("/pelicula/detalle/" + pelicula.id)
        }
        catch (error) {
            console.log(error)
            res.send(error);
        }
    },
    borrar: async (req,res) => {
        try{

            await db.Actor_Movie.destroy({where: {movie_id: req.params.id}});

            await db.Movie.destroy({where: {id: req.params.id}});
            
            return res.redirect("/")
        }
        catch (error) {
            console.log(error)
            res.send(error);
        }
    }
}
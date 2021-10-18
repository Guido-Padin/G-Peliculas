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
            
            await actores.forEach(actor => {
                db.Actor_Movie.create({
                    actor_id: actor,
                    movie_id: peliculaReciente.id
                });
            });

            return res.redirect("/")
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
            //return res.send(actores)
            let pelicula = await db.Movie.findByPk(req.params.id);

            await db.Movie.update({
                title: req.body.titulo,
                rating: req.body.rating,
                awards: req.body.premios,
                release_date: req.body.fechaDeEstreno,
                length: req.body.duracion,
                genre_id: req.body.genero
        },{ where: { id: req.params.id }});
            
            /*actores.forEach(actor => {
                db.Actor_Movie.update({
                    actor_id: actor
                },{ where: { movie_id: req.params.id }});
            });*/
            await db.Actor_Movie.destroy({where: {movie_id: req.params.id}});

            await actores.forEach(actor => {
                db.Actor_Movie.create({
                    actor_id: actor,
                    movie_id: pelicula.id
                });
            });
            
            return res.redirect("/")
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
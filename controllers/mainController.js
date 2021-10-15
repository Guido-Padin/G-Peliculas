const db = require("../database/models");

module.exports = {
    index: async (req,res) => {
        let peliculas = await db.Movie.findAll({ include: { association: "genre" } });
        return res.send(peliculas);
        return res.render("home")
    }
}
//require de db models

module.exports = {
    detalle: (req,res) => {
        return res.render("detalleDePelicula")
    },
    crear: (req,res) => {
        return res.render("crearPelicula")
    },
    guardar: (req,res) => {
        //create de peliculas   
    },
    editar: (req,res) => {
        return res.render("editarPelicula")
    },
    actualizar: (req,res) => {
        //update de peliculas
    },
    borrar: (req,res) => {
        //destroy de peliculas
    } 
}
//require de db models
const bcrypt = require('bcryptjs');
//require de express validator

module.exports = {
    login: (req,res) => {
        return res.render("login")
    },
    acceso: (req,res) => {
        //logica de acceso
    },
    registrarse: (req,res) => {
        return res.render("registro")
    },
    guardar: (req,res) => {
        //create de usuarios   
    },
    perfil: (req,res) => {
        return res.render("perfil")
    },
    editar: (req,res) => {
        return res.render("editarUsuario")
    },
    actualizar: (req,res) => {
        //update de usuarios
    },
    borrar: (req,res) => {
        //destroy de usuarios
    } 
}
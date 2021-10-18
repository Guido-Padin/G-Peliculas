const db = require("../database/models");
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
    guardar: async (req,res) => {
        try{
            await db.User.create({
                name: req.body.nombre,
                email: req.body.correo,
                password: bcrypt.hashSync(req.body.clave,10),
                admin: 0
            });

            return res.redirect("/")
        }
        catch (error) {
            console.log(error)
            res.send(error);
        }   
    },
    logout: async (req,res) => {
        try{
            let user = await db.User.findByPk(req.session.user.id)
            res.clearCookie("email",user.email,{maxAge:0})
            delete req.session.user
            return res.redirect("/")
        }catch (error) {
            console.log(error);
            res.send(error);
        }
    } 
}